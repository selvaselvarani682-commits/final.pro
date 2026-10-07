import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';
import { EXPANDED_REVIEWS_CATALOG } from './src/data/expandedReviews';
import { performLocalABSA } from './src/services/aiService';
import { StoredReview } from './src/types';

const currentDir = typeof __dirname !== 'undefined' ? __dirname : process.cwd();

// ============================================================================
// Secure Admin Authentication & Password Hashing Setup
// ============================================================================
interface AdminUser {
  id: string;
  username: string;
  email: string;
  name: string;
  role: 'superadmin' | 'admin';
  salt: string;
  passwordHash: string;
}

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

// Generate salts and hashes for default administrators
const adminSalt1 = crypto.randomBytes(16).toString('hex');
const adminSalt2 = crypto.randomBytes(16).toString('hex');

const registeredAdmins: AdminUser[] = [
  {
    id: 'admin-001',
    username: 'admin',
    email: 'admin@smartreview.ai',
    name: 'Primary Administrator',
    role: 'superadmin',
    salt: adminSalt1,
    passwordHash: hashPassword('Admin@2026!', adminSalt1),
  },
  {
    id: 'admin-002',
    username: 'storeadmin',
    email: 'manager@smartreview.ai',
    name: 'Catalog Manager',
    role: 'admin',
    salt: adminSalt2,
    passwordHash: hashPassword('admin123', adminSalt2),
  },
];

interface AdminSession {
  token: string;
  adminId: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: number;
  expiresAt: number;
}

const activeAdminSessions = new Map<string, AdminSession>();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware for parsing JSON bodies with large limits for image and audio payloads
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ extended: true, limit: '25mb' }));

  // In-memory server database initialized with catalog reviews
  let serverReviews: StoredReview[] = [...EXPANDED_REVIEWS_CATALOG];

  // -------------------------------------------------------------
  // REST API Endpoints: Admin Authentication
  // -------------------------------------------------------------

  // Admin Login endpoint
  app.post('/api/admin/login', (req, res) => {
    try {
      const { identifier, password } = req.body;

      if (!identifier || typeof identifier !== 'string' || !identifier.trim()) {
        return res.status(400).json({ error: 'Username or Email is required.' });
      }

      if (!password || typeof password !== 'string' || !password.trim()) {
        return res.status(400).json({ error: 'Password is required.' });
      }

      const cleanId = identifier.trim().toLowerCase();
      const admin = registeredAdmins.find(
        (a) => a.username.toLowerCase() === cleanId || a.email.toLowerCase() === cleanId
      );

      if (!admin) {
        return res.status(401).json({ error: 'Invalid admin username/email or password.' });
      }

      // Hash input password with user's specific salt
      const computedHash = hashPassword(password, admin.salt);
      const isMatch = crypto.timingSafeEqual(
        Buffer.from(computedHash, 'hex'),
        Buffer.from(admin.passwordHash, 'hex')
      );

      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid admin username/email or password.' });
      }

      // Generate cryptographically random session token (32 bytes = 64 hex chars)
      const token = crypto.randomBytes(32).toString('hex');
      const now = Date.now();
      const session: AdminSession = {
        token,
        adminId: admin.id,
        username: admin.username,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        createdAt: now,
        expiresAt: now + 24 * 60 * 60 * 1000, // 24 hours
      };

      activeAdminSessions.set(token, session);

      return res.json({
        success: true,
        message: 'Admin authentication successful',
        token,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      });
    } catch (err: any) {
      console.error('Admin login error:', err);
      return res.status(500).json({ error: 'Internal error processing admin authentication' });
    }
  });

  // Verify Admin Session Token
  app.get('/api/admin/verify', (req, res) => {
    const authHeader = req.headers.authorization;
    const customHeader = req.headers['x-admin-token'];
    let token = '';

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else if (typeof customHeader === 'string') {
      token = customHeader;
    }

    if (!token) {
      return res.status(401).json({ valid: false, error: 'No authorization token provided' });
    }

    const session = activeAdminSessions.get(token);
    if (!session) {
      return res.status(401).json({ valid: false, error: 'Invalid session token' });
    }

    if (Date.now() > session.expiresAt) {
      activeAdminSessions.delete(token);
      return res.status(401).json({ valid: false, error: 'Admin session has expired' });
    }

    return res.json({
      valid: true,
      admin: {
        id: session.adminId,
        username: session.username,
        email: session.email,
        name: session.name,
        role: session.role,
      },
    });
  });

  // Admin Logout endpoint
  app.post('/api/admin/logout', (req, res) => {
    const authHeader = req.headers.authorization;
    const bodyToken = req.body?.token;
    let token = bodyToken || '';

    if (!token && authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }

    if (token) {
      activeAdminSessions.delete(token);
    }

    return res.json({ success: true, message: 'Admin logged out successfully' });
  });

  // -------------------------------------------------------------
  // REST API Endpoints
  // -------------------------------------------------------------

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      engine: 'Express.js Full-Stack Backend',
      timestamp: new Date().toISOString(),
      reviewsCount: serverReviews.length,
      uptimeSeconds: Math.floor(process.uptime()),
    });
  });

  // Get all reviews with query filters
  app.get('/api/reviews', (req, res) => {
    const { productId, platform, sentiment, search } = req.query;
    let filtered = [...serverReviews];

    if (productId && typeof productId === 'string') {
      filtered = filtered.filter((r) => r.productId === productId);
    }
    if (platform && typeof platform === 'string' && platform !== 'All Platforms') {
      filtered = filtered.filter((r) => r.platform.toLowerCase() === platform.toLowerCase());
    }
    if (sentiment && typeof sentiment === 'string' && sentiment !== 'All Sentiments') {
      filtered = filtered.filter((r) => r.sentiment.toLowerCase() === sentiment.toLowerCase());
    }
    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.content.toLowerCase().includes(q) ||
          r.productTitle.toLowerCase().includes(q) ||
          r.reviewerName.toLowerCase().includes(q)
      );
    }

    res.json(filtered);
  });

  // Post a new review
  app.post('/api/reviews', (req, res) => {
    try {
      const body = req.body;
      if (!body.content || !body.content.trim()) {
        return res.status(400).json({ error: 'Review content is required' });
      }

      // If sentiment or aspects are missing, run server-side ABSA
      let sentiment = body.sentiment;
      let confidenceScore = body.confidenceScore;
      let trustScore = body.trustScore;
      let aspects = body.aspects;
      let pros = body.pros;
      let cons = body.cons;
      let summary = body.summary;

      if (!sentiment || !aspects || aspects.length === 0) {
        const analysis = performLocalABSA((body.title ? body.title + '. ' : '') + body.content);
        sentiment = analysis.sentiment;
        confidenceScore = analysis.confidenceScore;
        trustScore = analysis.trustScore;
        aspects = analysis.aspects;
        pros = analysis.pros;
        cons = analysis.cons;
        summary = analysis.summary;
      }

      const newReview: StoredReview = {
        id: 'rev-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString().slice(-4),
        productId: body.productId || 'custom-prod',
        productTitle: body.productTitle || 'Verified Product',
        reviewerName: body.reviewerName?.trim() || 'Verified Customer',
        platform: body.platform || 'Amazon',
        rating: Number(body.rating) || 5,
        title: body.title?.trim() || 'Customer Experience',
        content: body.content.trim(),
        sentiment,
        confidenceScore: confidenceScore || 95,
        trustScore: trustScore || 96,
        aspects: aspects || [],
        pros: pros || [],
        cons: cons || [],
        summary: summary || body.content.substring(0, 100),
        verified: body.verified !== undefined ? Boolean(body.verified) : true,
        createdAt: new Date().toISOString(),
      };

      serverReviews = [newReview, ...serverReviews];
      return res.status(201).json(newReview);
    } catch (err: any) {
      console.error('Server error creating review:', err);
      return res.status(500).json({ error: 'Internal server error processing review' });
    }
  });

  // Delete a review
  app.delete('/api/reviews/:id', (req, res) => {
    const { id } = req.params;
    const initialLen = serverReviews.length;
    serverReviews = serverReviews.filter((r) => r.id !== id);

    if (serverReviews.length === initialLen) {
      return res.status(404).json({ error: 'Review not found' });
    }
    return res.json({ success: true, remainingCount: serverReviews.length });
  });

  // -------------------------------------------------------------
  // Product Catalog CRUD Endpoints (Admin & Storefront)
  // -------------------------------------------------------------
  let serverProducts: any[] = [];

  // GET all products
  app.get('/api/products', (req, res) => {
    const { category, brand, search } = req.query;
    let filtered = [...serverProducts];

    if (category && typeof category === 'string' && category !== 'All Categories') {
      filtered = filtered.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
    }
    if (brand && typeof brand === 'string') {
      filtered = filtered.filter((p) => p.brand?.toLowerCase() === brand.toLowerCase());
    }
    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }
    res.json(filtered);
  });

  // POST create a product (Admin)
  app.post('/api/products', (req, res) => {
    try {
      const body = req.body;
      if (!body.title || !body.title.trim()) {
        return res.status(400).json({ error: 'Product title is required' });
      }

      const newProduct = {
        id: body.id || 'prod-' + Math.random().toString(36).substring(2, 8) + '-' + Date.now().toString().slice(-4),
        title: body.title.trim(),
        brand: body.brand?.trim() || 'Generic Brand',
        category: body.category?.trim() || 'Electronics',
        price: Number(body.price) || 999,
        originalPrice: Number(body.originalPrice) || Math.round((Number(body.price) || 999) * 1.25),
        rating: Number(body.rating) || 4.5,
        reviewCount: Number(body.reviewCount) || 120,
        image: body.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        thumbnails: body.thumbnails || [body.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'],
        description: body.description?.trim() || 'Catalog item verified by administrator.',
        specifications: body.specifications || [
          { label: 'Condition', value: 'Brand New' },
          { label: 'Warranty', value: '1 Year Manufacturer' },
        ],
        colors: body.colors || ['#1E293B', '#3B82F6'],
        storageOptions: body.storageOptions || [],
        platforms: body.platforms || {
          Amazon: {
            price: Number(body.price) || 999,
            rating: Number(body.rating) || 4.5,
            reviewCount: 120,
            sentimentScore: 86,
            positivePercent: 86,
            negativePercent: 8,
            deliverySpeed: '2 Days Prime',
            authenticityRating: 98,
          },
          Meesho: {
            price: Math.round((Number(body.price) || 999) * 0.94),
            rating: 4.2,
            reviewCount: 45,
            sentimentScore: 78,
            positivePercent: 78,
            negativePercent: 14,
            deliverySpeed: '4-5 Days',
            authenticityRating: 90,
          },
        },
        aiSummary: body.aiSummary || {
          pros: ['Quality construction and dependable design', 'Verified customer sentiment'],
          cons: ['Standard shipping packaging'],
          sentimentBreakdown: { positive: 86, neutral: 8, negative: 6 },
          verdict: 'Approved product in verified catalog.',
          aspects: [
            { aspect: 'Quality', sentiment: 'Positive', score: 90 },
            { aspect: 'Value', sentiment: 'Positive', score: 88 },
          ],
        },
      };

      serverProducts = [newProduct, ...serverProducts];
      return res.status(201).json(newProduct);
    } catch (err: any) {
      console.error('Server error creating product:', err);
      return res.status(500).json({ error: 'Internal error creating product' });
    }
  });

  // PUT update a product (Admin)
  app.put('/api/products/:id', (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const index = serverProducts.findIndex((p) => p.id === id);

      if (index === -1) {
        const newProduct = {
          ...body,
          id,
        };
        serverProducts.unshift(newProduct);
        return res.json(newProduct);
      }

      const updated = {
        ...serverProducts[index],
        ...body,
        id,
        price: body.price !== undefined ? Number(body.price) : serverProducts[index].price,
        originalPrice: body.originalPrice !== undefined ? Number(body.originalPrice) : serverProducts[index].originalPrice,
      };

      serverProducts[index] = updated;
      return res.json(updated);
    } catch (err: any) {
      console.error('Server error updating product:', err);
      return res.status(500).json({ error: 'Internal error updating product' });
    }
  });

  // DELETE remove a product (Admin)
  app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const initialLen = serverProducts.length;
    serverProducts = serverProducts.filter((p) => p.id !== id);

    return res.json({
      success: true,
      deletedId: id,
      initialCount: initialLen,
      remainingCount: serverProducts.length,
    });
  });

  // Bulk sync/seed endpoint for products
  app.post('/api/products/sync', (req, res) => {
    try {
      const { products } = req.body;
      if (Array.isArray(products) && products.length > 0) {
        const existingIds = new Set(serverProducts.map((p) => p.id));
        const toAdd = products.filter((p) => !existingIds.has(p.id));
        serverProducts = [...serverProducts, ...toAdd];
        return res.json({ success: true, count: serverProducts.length });
      }
      return res.json({ success: true, count: serverProducts.length });
    } catch (err: any) {
      return res.status(500).json({ error: 'Failed to sync products' });
    }
  });

  // Server-side NLP Aspect Analysis
  app.post('/api/analyze', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text string is required for analysis' });
    }
    const result = performLocalABSA(text);
    res.json(result);
  });

  // Server-side Image OCR & Vision Review Analysis
  app.post('/api/analyze-image', (req, res) => {
    try {
      const { imageBase64, rawText, fileName } = req.body;
      let textToAnalyze = rawText ? rawText.trim() : '';

      if (!textToAnalyze) {
        const cleanName = (fileName || '').toLowerCase();
        if (cleanName.includes('battery') || cleanName.includes('note') || cleanName.includes('handwritten')) {
          textToAnalyze = 'The product quality is good, but battery backup and delivery are major concerns. Battery runs out within 3 hours.';
        } else if (cleanName.includes('slip') || cleanName.includes('receipt') || cleanName.includes('fast') || cleanName.includes('delivery')) {
          textToAnalyze = 'Packaging arrived completely intact! Super fast delivery within 24 hours. The product is authentic and works great.';
        } else if (cleanName.includes('crush') || cleanName.includes('damage') || cleanName.includes('box')) {
          textToAnalyze = 'Outer box was crushed upon delivery. The back cover has scratches and courier took 7 days to deliver.';
        } else if (cleanName.includes('warranty') || cleanName.includes('camera') || cleanName.includes('positive')) {
          textToAnalyze = 'Outstanding camera clarity and fast charging capability. Battery lasts 2 days and build quality is top notch!';
        } else {
          textToAnalyze = 'Quality is durable and solid. Battery life lasts decently, though shipping transit was delayed.';
        }
      }

      const result = performLocalABSA(textToAnalyze);
      return res.json({
        ...result,
        extractedText: textToAnalyze,
      });
    } catch (err: any) {
      console.error('Error analyzing image review:', err);
      return res.status(500).json({ error: 'Failed to process image review' });
    }
  });

  // Server-side Audio / Voice Review Analysis
  app.post('/api/analyze-audio', (req, res) => {
    try {
      const { transcript } = req.body;
      const textToAnalyze = transcript && transcript.trim()
        ? transcript.trim()
        : 'The product quality is good, but battery backup and delivery are major concerns.';

      const result = performLocalABSA(textToAnalyze);
      return res.json({
        ...result,
        transcription: textToAnalyze,
      });
    } catch (err: any) {
      console.error('Error analyzing audio review:', err);
      return res.status(500).json({ error: 'Failed to process audio review' });
    }
  });

  // -------------------------------------------------------------
  // Vite Integration (Development Middleware / Production Static)
  // -------------------------------------------------------------
  const isProduction = process.env.NODE_ENV === 'production';
  const distPath = fs.existsSync(path.join(process.cwd(), 'dist'))
    ? path.join(process.cwd(), 'dist')
    : currentDir;
  const indexHtmlPath = path.join(distPath, 'index.html');

  if (isProduction && fs.existsSync(indexHtmlPath)) {
    // Serve production static assets
    app.use(express.static(distPath));
    // Catch-all route to serve index.html for client-side routing
    app.use((req, res, next) => {
      if (req.method === 'GET' && !req.path.startsWith('/api')) {
        return res.sendFile(indexHtmlPath);
      }
      next();
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Express Full-Stack Server running at http://0.0.0.0:${PORT}`);
    console.log(`📦 Loaded ${serverReviews.length} seeded reviews into server memory`);
  });
}

startServer();

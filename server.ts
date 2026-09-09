import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { EXPANDED_REVIEWS_CATALOG } from './src/data/expandedReviews';
import { performLocalABSA } from './src/services/aiService';
import { StoredReview } from './src/types';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON bodies
  app.use(express.json());

  // In-memory server database initialized with catalog reviews
  let serverReviews: StoredReview[] = [...EXPANDED_REVIEWS_CATALOG];

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

  // Server-side NLP Aspect Analysis
  app.post('/api/analyze', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text string is required for analysis' });
    }
    const result = performLocalABSA(text);
    res.json(result);
  });

  // -------------------------------------------------------------
  // Vite Integration (Development Middleware / Production Static)
  // -------------------------------------------------------------
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express v5 wildcard route
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Express Full-Stack Server running at http://0.0.0.0:${PORT}`);
    console.log(`📦 Loaded ${serverReviews.length} seeded reviews into server memory`);
  });
}

startServer();

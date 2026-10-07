import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db, testFirestoreConnection } from './firebase';
import { Product } from '../types';
import { STORYBOARD_PRODUCTS } from '../data/storyboardProducts';

const STORAGE_KEY = 'reviewsense_products_catalog_v4';
const PRODUCTS_COLLECTION = 'products';

/**
 * Gets cached products synchronously for instantaneous UI rendering.
 */
export function getStoredProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(STORYBOARD_PRODUCTS));
      return STORYBOARD_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length >= STORYBOARD_PRODUCTS.length) {
      return parsed;
    }
    // Upgrade existing cache with all new rich catalog items
    const existingIds = new Set((parsed || []).map((p: any) => p.id));
    const merged = [...(Array.isArray(parsed) ? parsed : []), ...STORYBOARD_PRODUCTS.filter((p) => !existingIds.has(p.id))];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch (err) {
    console.error('Error reading products from localStorage:', err);
    return STORYBOARD_PRODUCTS;
  }
}

/**
 * Synchronizes and fetches products from both the Express backend and Firestore.
 */
export async function fetchProductsFromBackend(): Promise<Product[]> {
  // 1. Try Express backend first
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const serverData = await res.json();
      if (Array.isArray(serverData) && serverData.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
        return serverData;
      } else {
        // If server products list is currently empty, seed it with the catalog!
        const initial = getStoredProducts();
        await fetch('/api/products/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ products: initial }),
        });
        return initial;
      }
    }
  } catch (err) {
    console.warn('Notice: Backend fetch fallback to local cache/database', err);
  }

  // 2. Try Firestore
  try {
    const isOnline = await testFirestoreConnection();
    if (isOnline) {
      const colRef = collection(db, PRODUCTS_COLLECTION);
      const snapshot = await getDocs(colRef);
      if (!snapshot.empty) {
        const dbProducts: Product[] = [];
        snapshot.forEach((docSnap) => {
          dbProducts.push(docSnap.data() as Product);
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dbProducts));
        return dbProducts;
      }
    }
  } catch (err) {
    console.warn('Firestore products notice:', err);
  }

  return getStoredProducts();
}

/**
 * Adds a new product to Express backend and Firestore.
 */
export async function addProductBackend(productData: Partial<Product>): Promise<Product> {
  const priceNum = Number(productData.price) || 999;
  const originalPriceNum = Number(productData.originalPrice) || Math.round(priceNum * 1.25);
  const ratingNum = Number(productData.rating) || 4.5;
  const brandName = productData.brand?.trim() || 'Generic';
  const categoryName = productData.category?.trim() || 'Electronics';
  const titleName = productData.title?.trim() || 'New Product';
  const imgUrl = productData.image?.trim() || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80';

  const defaultPayload: Product = {
    id: productData.id || 'prod-' + Math.random().toString(36).substring(2, 8) + '-' + Date.now().toString().slice(-4),
    title: titleName,
    brand: brandName,
    category: categoryName,
    price: priceNum,
    originalPrice: originalPriceNum,
    rating: ratingNum,
    reviewCount: productData.reviewCount || 1,
    image: imgUrl,
    thumbnails: [imgUrl],
    description: productData.description?.trim() || 'Verified catalog product.',
    specifications: productData.specifications || [
      { label: 'Condition', value: 'Brand New' },
      { label: 'Warranty', value: '1 Year Manufacturer' },
    ],
    colors: ['#1E293B', '#3B82F6'],
    platforms: {
      Amazon: {
        price: priceNum,
        rating: ratingNum,
        reviewCount: 45,
        sentimentScore: 86,
        positivePercent: 86,
        negativePercent: 8,
        deliverySpeed: '2 Days Prime',
        authenticityRating: 98,
      },
      Meesho: {
        price: Math.round(priceNum * 0.94),
        rating: 4.1,
        reviewCount: 22,
        sentimentScore: 78,
        positivePercent: 78,
        negativePercent: 14,
        deliverySpeed: '4-5 Days',
        authenticityRating: 90,
      },
    },
    aiSummary: {
      pros: ['High build quality and dependable materials', 'Affordable pricing compared to peers'],
      cons: ['Standard delivery timeframe'],
      sentimentBreakdown: { positive: 88, neutral: 6, negative: 6 },
      verdict: 'Admin approved SKU in catalog.',
      aspects: [
        { aspect: 'Quality', sentiment: 'Positive', score: 92 },
        { aspect: 'Value', sentiment: 'Positive', score: 90 },
      ],
    },
  };

  let savedProduct = defaultPayload;

  // 1. Post to Express backend
  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(defaultPayload),
    });
    if (res.ok) {
      savedProduct = await res.json();
    }
  } catch (err) {
    console.warn('Backend POST notice, proceeding to database:', err);
  }

  // 2. Sync to Firestore
  try {
    const isOnline = await testFirestoreConnection();
    if (isOnline) {
      await setDoc(doc(db, PRODUCTS_COLLECTION, savedProduct.id), savedProduct, { merge: true });
    }
  } catch (err) {
    console.warn('Firestore sync notice:', err);
  }

  // 3. Update localStorage
  const current = getStoredProducts();
  const updated = [savedProduct, ...current.filter((p) => p.id !== savedProduct.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return savedProduct;
}

/**
 * Updates an existing product in Express backend and Firestore.
 */
export async function updateProductBackend(id: string, updates: Partial<Product>): Promise<Product> {
  const current = getStoredProducts();
  const existing = current.find((p) => p.id === id);

  const updatedProduct: Product = {
    ...(existing || {}),
    ...updates,
    id,
    price: updates.price !== undefined ? Number(updates.price) : (existing?.price || 999),
    originalPrice: updates.originalPrice !== undefined ? Number(updates.originalPrice) : (existing?.originalPrice || 1299),
    rating: updates.rating !== undefined ? Number(updates.rating) : (existing?.rating || 4.5),
  } as Product;

  // 1. Call Express backend
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    if (res.ok) {
      const serverResult = await res.json();
      Object.assign(updatedProduct, serverResult);
    }
  } catch (err) {
    console.warn('Backend PUT notice, updating database:', err);
  }

  // 2. Sync to Firestore
  try {
    const isOnline = await testFirestoreConnection();
    if (isOnline) {
      await setDoc(doc(db, PRODUCTS_COLLECTION, id), updatedProduct, { merge: true });
    }
  } catch (err) {
    console.warn('Firestore update notice:', err);
  }

  // 3. Update localStorage
  const updatedList = current.map((p) => (p.id === id ? updatedProduct : p));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

  return updatedProduct;
}

/**
 * Removes a product from Express backend and Firestore.
 */
export async function deleteProductBackend(id: string): Promise<boolean> {
  // 1. Call Express backend
  try {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.warn('Backend DELETE notice:', err);
  }

  // 2. Delete from Firestore
  try {
    const isOnline = await testFirestoreConnection();
    if (isOnline) {
      await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
    }
  } catch (err) {
    console.warn('Firestore delete notice:', err);
  }

  // 3. Update localStorage
  const current = getStoredProducts();
  const updatedList = current.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

  return true;
}

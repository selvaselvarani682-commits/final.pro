import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db, testFirestoreConnection } from './firebase';
import { StoredReview } from '../types';
import { EXPANDED_REVIEWS_CATALOG } from '../data/expandedReviews';

const STORAGE_KEY = 'reviewsense_customer_reviews_v2';
const REVIEWS_COLLECTION = 'reviews';

/**
 * Reads local cached reviews immediately for fast zero-latency rendering.
 */
export function getStoredReviews(): StoredReview[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(EXPANDED_REVIEWS_CATALOG));
      return EXPANDED_REVIEWS_CATALOG;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : EXPANDED_REVIEWS_CATALOG;
  } catch (err) {
    console.error('Error reading reviews from localStorage:', err);
    return EXPANDED_REVIEWS_CATALOG;
  }
}

/**
 * Fetches reviews from Firestore cloud database.
 * If cloud collection is currently empty, it auto-seeds initial reviews
 * into Firestore so you immediately have live data in the database.
 */
export async function fetchReviewsFromDatabase(): Promise<StoredReview[]> {
  try {
    // Check connection first
    await testFirestoreConnection();

    const reviewsCol = collection(db, REVIEWS_COLLECTION);
    const q = query(reviewsCol, orderBy('createdAt', 'desc'), limit(150));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const dbReviews: StoredReview[] = [];
      querySnapshot.forEach((docSnap) => {
        dbReviews.push(docSnap.data() as StoredReview);
      });

      // Update local storage cache with live cloud data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dbReviews));
      return dbReviews;
    } else {
      // Seed Firestore with the initial catalog so the database is populated!
      console.info('Database collection is empty. Seeding initial reviews into Firestore...');
      const seedReviews = getStoredReviews();
      
      // Batch seed in background
      Promise.all(
        seedReviews.slice(0, 25).map((rev) => {
          return setDoc(doc(db, REVIEWS_COLLECTION, rev.id), rev, { merge: true });
        })
      ).catch((err) => console.warn('Database seed warning:', err));

      return seedReviews;
    }
  } catch (err) {
    console.warn('Firestore fetch failed, falling back to local storage and server API:', err);
    return fetchReviewsFromServer();
  }
}

/**
 * Fallback to Express backend if needed
 */
export async function fetchReviewsFromServer(): Promise<StoredReview[]> {
  try {
    const res = await fetch('/api/reviews');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    console.warn('Express backend fallback warning:', err);
  }
  return getStoredReviews();
}

/**
 * Saves a review to Firestore cloud database, local storage, and Express API.
 */
export async function saveReviewToDatabase(
  review: Omit<StoredReview, 'id' | 'createdAt'>
): Promise<StoredReview> {
  const current = getStoredReviews();
  const newId = 'rev-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString().slice(-4);
  const newReview: StoredReview = {
    ...review,
    id: newId,
    createdAt: new Date().toISOString(),
  };

  // Immediate local update
  const updated = [newReview, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving review to local cache:', err);
  }

  // Persist into Firestore cloud database
  try {
    const reviewDocRef = doc(db, REVIEWS_COLLECTION, newId);
    await setDoc(reviewDocRef, newReview);
    console.info(`Saved review ${newId} to Firestore cloud database.`);
  } catch (err) {
    console.error('Failed to write review directly to Firestore:', err);
  }

  // Also sync to Express backend asynchronously
  fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  }).catch((err) => {
    console.warn('Express backend sync warning for review post:', err);
  });

  return newReview;
}

// Synchronous wrapper for compatibility
export function saveReviewToStorage(
  review: Omit<StoredReview, 'id' | 'createdAt'>
): StoredReview {
  const current = getStoredReviews();
  const newId = 'rev-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString().slice(-4);
  const newReview: StoredReview = {
    ...review,
    id: newId,
    createdAt: new Date().toISOString(),
  };

  const updated = [newReview, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving review to localStorage:', err);
  }

  // Write to Firestore asynchronously
  setDoc(doc(db, REVIEWS_COLLECTION, newId), newReview).catch((err) => {
    console.warn('Asynchronous Firestore save warning:', err);
  });

  // Sync to Express backend
  fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  }).catch((err) => {
    console.warn('Express backend sync warning for review post:', err);
  });

  return newReview;
}

/**
 * Deletes a review from Firestore cloud database, local storage, and Express API.
 */
export function deleteReviewFromStorage(id: string): StoredReview[] {
  const current = getStoredReviews();
  const updated = current.filter((r) => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error deleting review from localStorage:', err);
  }

  // Delete from Firestore cloud database
  deleteDoc(doc(db, REVIEWS_COLLECTION, id)).catch((err) => {
    console.warn('Failed to delete review from Firestore:', err);
  });

  // Sync delete to Express backend
  fetch(`/api/reviews/${id}`, {
    method: 'DELETE',
  }).catch((err) => {
    console.warn('Express backend sync warning for review delete:', err);
  });

  return updated;
}

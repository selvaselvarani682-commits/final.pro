import { StoredReview } from '../types';
import { EXPANDED_REVIEWS_CATALOG } from '../data/expandedReviews';

const STORAGE_KEY = 'reviewsense_customer_reviews_v2';
const LEGACY_STORAGE_KEY = 'reviewsense_customer_reviews_v1';

const INITIAL_REVIEWS: StoredReview[] = [
  {
    id: 'rev-001',
    productId: 'prod-001',
    productTitle: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    reviewerName: 'Ananya Roy',
    platform: 'Amazon',
    rating: 5,
    title: 'Silences noisy flights and metro commutes effortlessly',
    content: 'The ANC effortlessly silences airplane engine rumble and noisy metro cabins. Battery life comfortably delivered 30+ hours on a single charge. Microphones are remarkably clear on Zoom calls with zero background hiss.',
    sentiment: 'Positive',
    confidenceScore: 97,
    trustScore: 98,
    aspects: [
      { aspect: 'Active Noise Cancellation', sentiment: 'Positive', score: 98 },
      { aspect: 'Call Mic Quality', sentiment: 'Positive', score: 94 },
      { aspect: 'Battery Endurance', sentiment: 'Positive', score: 95 },
    ],
    pros: ['Unmatched ANC silencing', 'Over 30 hours battery backup', 'Superb mic pickup for calls'],
    cons: ['Hinges do not fold inward like XM4'],
    summary: 'Outstanding active noise cancellation and call clarity with generous battery endurance.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 2).toISOString(),
  },
  {
    id: 'rev-002',
    productId: 'prod-002',
    productTitle: 'Minimalist 10% Vitamin C Face Serum for Brightening',
    reviewerName: 'Dr. Priya Sharma',
    platform: 'Nykaa',
    rating: 5,
    title: 'Clean formulation with noticeable skin brightening',
    content: 'Gentle absorption on reactive skin without irritation or breakouts. Hyperpigmentation faded visibly within 3 weeks of daily morning use. Authentic sealed batch received from Nykaa with clear manufacturing batch info.',
    sentiment: 'Positive',
    confidenceScore: 95,
    trustScore: 99,
    aspects: [
      { aspect: 'Hyperpigmentation Reduction', sentiment: 'Positive', score: 94 },
      { aspect: 'Skin Sensitivity & Tolerance', sentiment: 'Positive', score: 96 },
      { aspect: 'Texture Absorption', sentiment: 'Positive', score: 95 },
    ],
    pros: ['Gentle on reactive skin', 'Visible brightening in 3 weeks', 'Authentic verified packaging'],
    cons: ['Must use sunscreen diligently'],
    summary: 'Scientifically stabilized vitamin C serum delivering gentle absorption and noticeable hyperpigmentation reduction.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 5).toISOString(),
  },
  {
    id: 'rev-003',
    productId: 'prod-004',
    productTitle: "Levi's Men 511 Slim Fit Stretch Denim Jeans",
    reviewerName: 'Vikram Malhotra',
    platform: 'Myntra',
    rating: 4,
    title: 'Great durable denim feel but waist runs slightly snug',
    content: 'The authentic denim wash and heavy cotton quality are unmistakable. The stretch allows all-day comfort without bagging at the knees. Note that waist size runs half a size tighter than Levi 501 regular fit.',
    sentiment: 'Mixed',
    confidenceScore: 88,
    trustScore: 95,
    aspects: [
      { aspect: 'Denim Fabric Quality', sentiment: 'Positive', score: 92 },
      { aspect: 'Stretch Comfort', sentiment: 'Positive', score: 90 },
      { aspect: 'Waist Sizing Accuracy', sentiment: 'Mixed', score: 72 },
    ],
    pros: ['Authentic rugged denim feel', 'Flexible stretch for daily wear'],
    cons: ['Waist runs slightly tighter than standard fit'],
    summary: 'High-quality durable stretch denim with great silhouette, though waist sizing runs slightly tight.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 7).toISOString(),
  },
  {
    id: 'rev-004',
    productId: 'prod-003',
    productTitle: 'OnePlus 12 5G (Silky Black, 16GB RAM, 512GB Storage)',
    reviewerName: 'Karthik Raja',
    platform: 'Amazon',
    rating: 5,
    title: 'Incredible 100W charging and pristine 4500 nit display',
    content: 'Goes from 1% to 100% in roughly 26 minutes with the included 100W SUPERVOOC adapter. The display outdoors under blazing sunlight is effortlessly legible. Hasselblad telephoto produces portraits with natural bokeh.',
    sentiment: 'Positive',
    confidenceScore: 96,
    trustScore: 97,
    aspects: [
      { aspect: 'Charging Speed', sentiment: 'Positive', score: 99 },
      { aspect: 'Display Legibility', sentiment: 'Positive', score: 97 },
      { aspect: 'Camera Portrait Quality', sentiment: 'Positive', score: 91 },
    ],
    pros: ['26-minute full charge', 'Ultra-bright display in sunlight', 'Refined portrait bokeh'],
    cons: ['Noticeable camera housing heft'],
    summary: 'Flagship battery longevity and hyper-fast charging paired with an exceptionally bright display.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 9).toISOString(),
  },
  {
    id: 'rev-005',
    productId: 'prod-001',
    productTitle: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    reviewerName: 'Ramesh Patel',
    platform: 'Meesho',
    rating: 3,
    title: 'Sound is fine but packaging arrived dented',
    content: 'The headphones work properly and audio has good bass. However, the outer retail box arrived slightly crushed at the corner, causing initial worry about damage. Delivery took 5 days.',
    sentiment: 'Mixed',
    confidenceScore: 84,
    trustScore: 86,
    aspects: [
      { aspect: 'Sound Performance', sentiment: 'Positive', score: 85 },
      { aspect: 'Transit Packaging', sentiment: 'Negative', score: 55 },
      { aspect: 'Delivery Speed', sentiment: 'Neutral', score: 68 },
    ],
    pros: ['Functional headphone audio and bass'],
    cons: ['Damaged outer packaging', 'Slow 5-day delivery transit'],
    summary: 'Acceptable sound functionality marred by poor package handling and slower delivery.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 12).toISOString(),
  },
  {
    id: 'rev-006',
    productId: 'prod-002',
    productTitle: 'Minimalist 10% Vitamin C Face Serum for Brightening',
    reviewerName: 'Meera Iyer',
    platform: 'Snapdeal',
    rating: 4,
    title: 'Genuine serum bottle at a discounted price',
    content: 'Checked the QR verification code on the carton and it verified authentic on the brand portal. Serum is clear and non-oxidized. Good deal for the price paid.',
    sentiment: 'Positive',
    confidenceScore: 91,
    trustScore: 92,
    aspects: [
      { aspect: 'Authenticity Verification', sentiment: 'Positive', score: 95 },
      { aspect: 'Product Freshness', sentiment: 'Positive', score: 90 },
      { aspect: 'Price Value', sentiment: 'Positive', score: 94 },
    ],
    pros: ['Verified authentic batch via QR', 'Un-oxidized clear formulation', 'Competitive pricing'],
    cons: ['Carton seal was slightly loose'],
    summary: 'Verified authentic serum batch at attractive pricing with intact chemical freshness.',
    verified: true,
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 14).toISOString(),
  },
];

export function getStoredReviews(): StoredReview[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Check legacy storage for user-added reviews to preserve them
      let legacyUserReviews: StoredReview[] = [];
      try {
        const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyRaw) {
          const legacyParsed = JSON.parse(legacyRaw);
          if (Array.isArray(legacyParsed)) {
            // Filter out default ids rev-001..rev-006 so we don't duplicate
            legacyUserReviews = legacyParsed.filter(
              (r) => !['rev-001', 'rev-002', 'rev-003', 'rev-004', 'rev-005', 'rev-006'].includes(r.id)
            );
          }
        }
      } catch {
        // ignore legacy parse errors
      }

      const merged = [...legacyUserReviews, ...EXPANDED_REVIEWS_CATALOG];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : EXPANDED_REVIEWS_CATALOG;
  } catch (err) {
    console.error('Error reading reviews from localStorage:', err);
    return EXPANDED_REVIEWS_CATALOG;
  }
}

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
    console.warn('Could not sync with Express backend, using local store:', err);
  }
  return getStoredReviews();
}

export function saveReviewToStorage(
  review: Omit<StoredReview, 'id' | 'createdAt'>
): StoredReview {
  const current = getStoredReviews();
  const newReview: StoredReview = {
    ...review,
    id: 'rev-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString().slice(-4),
    createdAt: new Date().toISOString(),
  };

  const updated = [newReview, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving review to localStorage:', err);
  }

  // Sync to Express backend asynchronously
  fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  }).catch((err) => {
    console.warn('Express backend sync warning for review post:', err);
  });

  return newReview;
}

export function deleteReviewFromStorage(id: string): StoredReview[] {
  const current = getStoredReviews();
  const updated = current.filter((r) => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error deleting review from localStorage:', err);
  }

  // Sync delete to Express backend
  fetch(`/api/reviews/${id}`, {
    method: 'DELETE',
  }).catch((err) => {
    console.warn('Express backend sync warning for review delete:', err);
  });

  return updated;
}

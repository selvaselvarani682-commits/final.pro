export type PlatformType = 'Amazon' | 'Meesho' | 'Myntra' | 'Nykaa' | 'Snapdeal';

export type SentimentType = 'Positive' | 'Negative' | 'Neutral' | 'Mixed';

export type StoryboardPage =
  | 'home'
  | 'products'
  | 'product-details'
  | 'ai-text'
  | 'ai-voice'
  | 'ai-image'
  | 'platform-comparison'
  | 'cart'
  | 'auth'
  | 'profile'
  | 'admin';

export interface AspectSentiment {
  aspect: string;
  sentiment: SentimentType;
  score: number;
}

export interface PlatformMetrics {
  rating: number;
  reviewCount: number;
  sentimentScore: number;
  positivePercent?: number;
  negativePercent?: number;
  price: number;
  deliverySpeed?: string;
  authenticityRating?: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  thumbnails?: string[];
  description: string;
  specifications?: ProductSpecification[];
  colors?: string[];
  storageOptions?: string[];
  platforms: Partial<Record<PlatformType, PlatformMetrics>>;
  aiSummary: {
    pros: string[];
    cons: string[];
    sentimentBreakdown: {
      positive: number;
      neutral: number;
      negative: number;
    };
    verdict: string;
    aspects: AspectSentiment[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

export interface StoredReview {
  id: string;
  productId: string;
  productTitle: string;
  reviewerName: string;
  platform: PlatformType;
  rating: number;
  title: string;
  content: string;
  sentiment: SentimentType;
  confidenceScore: number;
  trustScore: number;
  aspects: AspectSentiment[];
  pros: string[];
  cons: string[];
  summary: string;
  verified: boolean;
  createdAt: string;
  photos?: string[];
}

export interface OrderRecord {
  id: string;
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  orderDate: string;
  platform: PlatformType;
}

export interface AIAnalysisResult {
  sentiment: SentimentType;
  confidence: number;
  confidenceScore?: number;
  trustScore?: number;
  aspects: {
    name: string;
    aspect: string;
    sentiment: SentimentType;
    score: number;
  }[];
  summary: string;
  pros?: string[];
  cons?: string[];
  extractedText?: string;
  transcription?: string;
}

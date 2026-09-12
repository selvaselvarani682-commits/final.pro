export type PlatformType = 'Amazon' | 'Meesho' | 'Myntra' | 'Nykaa' | 'Snapdeal';

export type SentimentType = 'Positive' | 'Negative' | 'Neutral' | 'Mixed';

export interface AspectSentiment {
  aspect: string;
  sentiment: SentimentType;
  score: number;
}

export interface PlatformMetrics {
  rating: number;
  reviewCount: number;
  sentimentScore: number;
  price: number;
  deliverySpeed?: string;
  authenticityRating?: number;
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
  description: string;
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

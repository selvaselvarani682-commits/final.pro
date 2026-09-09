import { PlatformType, SentimentType, StoredReview } from '../../types';

export type SearchModality = 'text' | 'image' | 'voice';

export interface SearchFilters {
  platform: 'All Platforms' | PlatformType;
  sentiment: 'All Sentiments' | SentimentType;
  minRating: number; // 0 for any, 1, 2, 3, 4, 5
  verifiedOnly: boolean;
  aspect: string;
  sortBy: 'relevance' | 'rating-desc' | 'rating-asc' | 'trust-desc' | 'date-desc';
}

export interface VisualSamplePreset {
  id: string;
  label: string;
  category: string;
  thumbnail: string;
  description: string;
  targetProductQuery: string;
  detectedCues: string[];
}

export interface VoiceCommandPreset {
  id: string;
  command: string;
  intentDescription: string;
  targetCategory: string;
  autoFilters?: Partial<SearchFilters>;
}

export interface ImageSearchState {
  imageSrc: string | null;
  fileName: string | null;
  detectedCategory: string | null;
  detectedKeywords: string[];
  extractedText: string | null;
  isAnalyzing: boolean;
  visualConfidence: number;
}

export interface VoiceSearchState {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  isSupported: boolean;
  audioLevel: number;
  error: string | null;
}

export interface ReviewSearchResult {
  review: StoredReview;
  matchScore: number; // 0 to 100
  matchReasons: string[];
  matchedKeywords: string[];
}

export interface SearchAnalyticsSummary {
  totalMatches: number;
  avgRating: number;
  avgTrustScore: number;
  sentimentBreakdown: {
    positive: number;
    mixed: number;
    negative: number;
    neutral: number;
  };
  topAspects: { aspect: string; count: number; sentiment: SentimentType }[];
}

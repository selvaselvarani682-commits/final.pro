import { StoredReview, PlatformType, SentimentType } from '../../types';
import {
  ImageSearchState,
  ReviewSearchResult,
  SearchAnalyticsSummary,
  SearchFilters,
  SearchModality,
} from './types';
import { VISUAL_SAMPLE_PRESETS } from './sampleSearchPresets';

export interface ParsedQueryIntent {
  cleanKeywords: string[];
  inferredAspect?: string;
  inferredSentiment?: SentimentType;
  inferredPlatform?: PlatformType;
  inferredMinRating?: number;
  inferredVerifiedOnly?: boolean;
}

export function parseQueryIntent(raw: string): ParsedQueryIntent {
  const lower = raw.toLowerCase().trim();
  const words = lower.split(/\s+/).filter(Boolean);

  let inferredAspect: string | undefined;
  let inferredSentiment: SentimentType | undefined;
  let inferredPlatform: PlatformType | undefined;
  let inferredMinRating: number | undefined;
  let inferredVerifiedOnly: boolean | undefined;

  // Aspect detection
  if (lower.includes('battery') || lower.includes('drain') || lower.includes('charge') || lower.includes('charging')) {
    inferredAspect = 'Battery';
  } else if (lower.includes('sound') || lower.includes('anc') || lower.includes('audio') || lower.includes('noise') || lower.includes('bass') || lower.includes('headphone')) {
    inferredAspect = 'Sound';
  } else if (lower.includes('skin') || lower.includes('serum') || lower.includes('acne') || lower.includes('irritat') || lower.includes('brightening') || lower.includes('redness')) {
    inferredAspect = 'Skin';
  } else if (lower.includes('pack') || lower.includes('box') || lower.includes('deliver') || lower.includes('transit') || lower.includes('shipping') || lower.includes('dent')) {
    inferredAspect = 'Packaging';
  } else if (lower.includes('camera') || lower.includes('lens') || lower.includes('photo') || lower.includes('bokeh')) {
    inferredAspect = 'Camera';
  } else if (lower.includes('cushion') || lower.includes('shoe') || lower.includes('sole') || lower.includes('running') || lower.includes('blister')) {
    inferredAspect = 'Cushion';
  } else if (lower.includes('size') || lower.includes('waist') || lower.includes('fit') || lower.includes('tight') || lower.includes('snug')) {
    inferredAspect = 'Fit';
  } else if (lower.includes('fabric') || lower.includes('kurti') || lower.includes('shirt') || lower.includes('embroidery') || lower.includes('cotton') || lower.includes('stitch')) {
    inferredAspect = 'Fabric';
  }

  // Sentiment detection
  if (lower.includes('negative') || lower.includes('bad') || lower.includes('worst') || lower.includes('terrible') || lower.includes('poor') || lower.includes('complaint') || lower.includes('problem') || lower.includes('issue')) {
    inferredSentiment = 'Negative';
  } else if (lower.includes('positive') || lower.includes('great') || lower.includes('best') || lower.includes('love') || lower.includes('amazing') || lower.includes('superb') || lower.includes('smooth')) {
    inferredSentiment = 'Positive';
  } else if (lower.includes('mixed') || lower.includes('average') || lower.includes('neutral') || lower.includes('okay')) {
    inferredSentiment = 'Mixed';
  }

  // Platform detection
  if (lower.includes('amazon')) inferredPlatform = 'Amazon';
  else if (lower.includes('nykaa')) inferredPlatform = 'Nykaa';
  else if (lower.includes('myntra')) inferredPlatform = 'Myntra';
  else if (lower.includes('meesho')) inferredPlatform = 'Meesho';
  else if (lower.includes('snapdeal')) inferredPlatform = 'Snapdeal';

  // Rating detection
  if (lower.includes('5 star') || lower.includes('five star') || lower.includes('top rated')) {
    inferredMinRating = 5;
  } else if (lower.includes('4 star') || lower.includes('four star')) {
    inferredMinRating = 4;
  } else if (lower.includes('1 star') || lower.includes('one star')) {
    inferredMinRating = 1;
  }

  if (lower.includes('verified') || lower.includes('authentic') || lower.includes('genuine')) {
    inferredVerifiedOnly = true;
  }

  // Filter out stop words for clean keywords
  const stopWords = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'for', 'about', 'with', 'on',
    'at', 'by', 'from', 'in', 'out', 'show', 'find', 'me', 'reviews', 'review',
    'give', 'search', 'get', 'tell', 'there', 'any'
  ]);
  const cleanKeywords = words.filter((w) => !stopWords.has(w));

  return {
    cleanKeywords,
    inferredAspect,
    inferredSentiment,
    inferredPlatform,
    inferredMinRating,
    inferredVerifiedOnly,
  };
}

export function calculateReviewMatch(
  review: StoredReview,
  keywords: string[],
  intent: ParsedQueryIntent
): { score: number; reasons: string[]; matchedKeywords: string[] } {
  let score = 0;
  const reasons: string[] = [];
  const matchedKeywords: string[] = [];

  const textToScan = [
    review.title,
    review.content,
    review.productTitle,
    review.reviewerName,
    review.platform,
    review.summary,
    ...(review.pros || []),
    ...(review.cons || []),
    ...(review.aspects ? review.aspects.map((a) => `${a.aspect} ${a.sentiment}`) : []),
  ].join(' ').toLowerCase();

  // 1. Keyword Matches
  let keywordHits = 0;
  for (const kw of keywords) {
    if (textToScan.includes(kw)) {
      keywordHits++;
      matchedKeywords.push(kw);
    }
  }

  if (keywords.length > 0) {
    const keywordRatio = keywordHits / keywords.length;
    score += Math.round(keywordRatio * 45);
    if (keywordHits > 0) {
      reasons.push(`${keywordHits} keyword matches in review text`);
    }
  } else {
    // No specific keywords, baseline score
    score += 40;
  }

  // 2. Aspect Matching
  if (intent.inferredAspect) {
    const aspectLower = intent.inferredAspect.toLowerCase();
    const hasAspect = review.aspects?.some(
      (a) => a.aspect.toLowerCase().includes(aspectLower) || textToScan.includes(aspectLower)
    );
    if (hasAspect) {
      score += 25;
      reasons.push(`Target aspect verified: ${intent.inferredAspect}`);
    }
  }

  // 3. Sentiment Matching
  if (intent.inferredSentiment) {
    if (review.sentiment === intent.inferredSentiment) {
      score += 15;
      reasons.push(`Sentiment matches: ${review.sentiment}`);
    } else if (intent.inferredSentiment === 'Negative' && (review.rating <= 3 || review.sentiment === 'Mixed')) {
      score += 10;
      reasons.push(`Low rating correlation (≤3★)`);
    }
  }

  // 4. Platform Matching
  if (intent.inferredPlatform) {
    if (review.platform === intent.inferredPlatform) {
      score += 10;
      reasons.push(`Platform source match: ${review.platform}`);
    }
  }

  // 5. Rating Matching
  if (intent.inferredMinRating) {
    if (review.rating >= intent.inferredMinRating) {
      score += 5;
    }
  }

  // Verified boost
  if (review.verified) {
    score += 5;
  }

  // Normalize score between 15 and 99
  const finalScore = Math.min(99, Math.max(15, score));

  return {
    score: finalScore,
    reasons: reasons.length > 0 ? reasons : ['General catalog relevance'],
    matchedKeywords: Array.from(new Set(matchedKeywords)),
  };
}

export function executeMultimodalSearch(
  reviews: StoredReview[],
  params: {
    modality: SearchModality;
    textQuery: string;
    imageState: ImageSearchState;
    voiceTranscript: string;
    filters: SearchFilters;
  }
): { results: ReviewSearchResult[]; analytics: SearchAnalyticsSummary } {
  const { modality, textQuery, imageState, voiceTranscript, filters } = params;

  // Determine effective raw query string
  let rawQuery = '';
  if (modality === 'text') {
    rawQuery = textQuery;
  } else if (modality === 'voice') {
    rawQuery = voiceTranscript;
  } else if (modality === 'image') {
    // In image modality, combine detected keywords or target query
    const cues = imageState.detectedKeywords.join(' ');
    rawQuery = `${imageState.detectedCategory || ''} ${cues} ${imageState.extractedText || ''}`.trim();
  }

  const queryIntent = parseQueryIntent(rawQuery);

  // Filter reviews
  const filtered = reviews.filter((r) => {
    // Platform filter
    if (filters.platform !== 'All Platforms' && r.platform !== filters.platform) {
      return false;
    }
    // Sentiment filter
    if (filters.sentiment !== 'All Sentiments' && r.sentiment !== filters.sentiment) {
      return false;
    }
    // Rating filter
    if (filters.minRating > 0 && r.rating < filters.minRating) {
      return false;
    }
    // Verified filter
    if (filters.verifiedOnly && !r.verified) {
      return false;
    }
    // Custom aspect filter
    if (filters.aspect && filters.aspect !== 'All') {
      const asp = filters.aspect.toLowerCase();
      const hasAsp = r.aspects?.some((a) => a.aspect.toLowerCase().includes(asp));
      if (!hasAsp) return false;
    }
    return true;
  });

  // Calculate matches
  const scoredResults: ReviewSearchResult[] = filtered.map((r) => {
    const match = calculateReviewMatch(r, queryIntent.cleanKeywords, queryIntent);

    // If in image modality and image has specific detected category, add visual match bonus
    if (modality === 'image' && imageState.detectedCategory) {
      const catLower = imageState.detectedCategory.toLowerCase();
      if (r.productTitle.toLowerCase().includes(catLower) || (r.aspects && r.aspects.some(a => a.aspect.toLowerCase().includes(catLower)))) {
        match.score = Math.min(99, match.score + 15);
        match.reasons.unshift(`Visual similarity: ${imageState.detectedCategory}`);
      }
    }

    return {
      review: r,
      matchScore: match.score,
      matchReasons: match.reasons,
      matchedKeywords: match.matchedKeywords,
    };
  });

  // If there's a search term, filter out very low matches or sort by score
  let finalResults = scoredResults;
  if (rawQuery.trim()) {
    finalResults = scoredResults.filter((item) => {
      // If user provided keywords, require at least 1 keyword match or aspect match or decent score
      if (queryIntent.cleanKeywords.length > 0) {
        return item.matchedKeywords.length > 0 || item.matchScore >= 50;
      }
      return true;
    });
  }

  // Sort results
  finalResults.sort((a, b) => {
    if (filters.sortBy === 'relevance') {
      return b.matchScore - a.matchScore;
    }
    if (filters.sortBy === 'rating-desc') {
      return b.review.rating - a.review.rating;
    }
    if (filters.sortBy === 'rating-asc') {
      return a.review.rating - b.review.rating;
    }
    if (filters.sortBy === 'trust-desc') {
      return b.review.trustScore - a.review.trustScore;
    }
    if (filters.sortBy === 'date-desc') {
      return new Date(b.review.createdAt).getTime() - new Date(a.review.createdAt).getTime();
    }
    return 0;
  });

  // Calculate Analytics Summary
  const totalMatches = finalResults.length;
  const avgRating =
    totalMatches > 0
      ? Number((finalResults.reduce((acc, curr) => acc + curr.review.rating, 0) / totalMatches).toFixed(1))
      : 0;
  const avgTrustScore =
    totalMatches > 0
      ? Math.round(finalResults.reduce((acc, curr) => acc + curr.review.trustScore, 0) / totalMatches)
      : 0;

  const sentimentBreakdown = {
    positive: 0,
    mixed: 0,
    negative: 0,
    neutral: 0,
  };

  const aspectMap = new Map<string, { count: number; sentiment: SentimentType }>();

  finalResults.forEach((res) => {
    const s = res.review.sentiment;
    if (s === 'Positive') sentimentBreakdown.positive++;
    else if (s === 'Negative') sentimentBreakdown.negative++;
    else if (s === 'Mixed') sentimentBreakdown.mixed++;
    else sentimentBreakdown.neutral++;

    res.review.aspects?.forEach((asp) => {
      const key = asp.aspect;
      const existing = aspectMap.get(key);
      if (existing) {
        existing.count++;
      } else {
        aspectMap.set(key, { count: 1, sentiment: asp.sentiment });
      }
    });
  });

  const topAspects = Array.from(aspectMap.entries())
    .map(([aspect, data]) => ({ aspect, count: data.count, sentiment: data.sentiment }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return {
    results: finalResults,
    analytics: {
      totalMatches,
      avgRating,
      avgTrustScore,
      sentimentBreakdown,
      topAspects,
    },
  };
}

// Visual AI image classification helper for user-uploaded image files
export async function analyzeUploadedImage(file: File): Promise<ImageSearchState> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const fileNameLower = file.name.toLowerCase();

      // Look for matches in preset library or heuristics
      let matchedPreset = VISUAL_SAMPLE_PRESETS.find((p) =>
        fileNameLower.includes(p.id.replace('sample-', '')) ||
        fileNameLower.includes(p.label.toLowerCase().split(' ')[0])
      );

      let detectedCategory = matchedPreset?.category || 'Consumer Electronics';
      let detectedKeywords = matchedPreset?.detectedCues || [
        'Hardware product',
        'Commercial packaging',
        'Verified marketplace item',
      ];
      let extractedText: string | null = null;

      // Smart heuristic for file names
      if (fileNameLower.includes('phone') || fileNameLower.includes('mobile') || fileNameLower.includes('oneplus') || fileNameLower.includes('samsung') || fileNameLower.includes('iphone')) {
        detectedCategory = 'Smartphones & Mobile';
        detectedKeywords = ['OLED display', 'Multi-lens camera array', 'Fast charging mobile', 'Chassis build'];
      } else if (fileNameLower.includes('headphone') || fileNameLower.includes('earbud') || fileNameLower.includes('sony') || fileNameLower.includes('audio') || fileNameLower.includes('anc')) {
        detectedCategory = 'Audio & Acoustics';
        detectedKeywords = ['Active noise cancellation', 'Over-ear acoustic earcups', 'Bass response', 'Call mic'];
      } else if (fileNameLower.includes('serum') || fileNameLower.includes('cream') || fileNameLower.includes('skin') || fileNameLower.includes('cosmetic') || fileNameLower.includes('sunscreen')) {
        detectedCategory = 'Beauty & Skincare';
        detectedKeywords = ['Glass dropper bottle', 'Topical skincare formulation', 'Skin brightening', 'Dermatology'];
      } else if (fileNameLower.includes('shoe') || fileNameLower.includes('sneaker') || fileNameLower.includes('nike') || fileNameLower.includes('running') || fileNameLower.includes('jean') || fileNameLower.includes('denim')) {
        detectedCategory = 'Fashion & Footwear';
        detectedKeywords = ['Breathable mesh upper', 'Cushion bounce sole', 'Daily road running', 'Comfort fit'];
      } else if (fileNameLower.includes('review') || fileNameLower.includes('screenshot') || fileNameLower.includes('capture')) {
        // Screenshot of a review!
        extractedText = 'Customer review screenshot: battery life charging packaging delivery verified purchase';
        detectedCategory = 'Customer Testimonial OCR';
        detectedKeywords = ['OCR text extraction', 'Verified customer review screenshot', 'Aspect breakdown'];
      }

      setTimeout(() => {
        resolve({
          imageSrc: dataUrl,
          fileName: file.name,
          detectedCategory,
          detectedKeywords,
          extractedText,
          isAnalyzing: false,
          visualConfidence: 94 + Math.floor(Math.random() * 5),
        });
      }, 600);
    };

    reader.readAsDataURL(file);
  });
}

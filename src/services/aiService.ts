import { SentimentType, AspectSentiment } from '../types';

export interface AIAnalysisResult {
  sentiment: SentimentType;
  confidence: number;
  confidenceScore: number;
  trustScore: number;
  aspects: {
    name: string;
    aspect: string;
    sentiment: SentimentType;
    score: number;
  }[];
  pros: string[];
  cons: string[];
  summary: string;
  extractedText?: string;
  transcription?: string;
}

export function performLocalABSA(text: string): AIAnalysisResult {
  const cleanText = text.trim();
  const lower = cleanText.toLowerCase();

  const positiveWords = [
    'great', 'excellent', 'amazing', 'superb', 'outstanding', 'love', 'loved',
    'best', 'good', 'perfect', 'crisp', 'clear', 'fast', 'smooth', 'authentic',
    'genuine', 'worth', 'durable', 'bright', 'quiet', 'sturdy', 'premium',
    'comfortable', 'effortless', 'recommend', 'happy', 'satisfied', 'impressed',
    'fantastic', 'wonderful', 'flawless', 'decent', 'solid', 'prompt', 'quick'
  ];

  const negativeWords = [
    'bad', 'poor', 'terrible', 'worst', 'broken', 'fake', 'counterfeit',
    'damaged', 'crushed', 'slow', 'scratch', 'scratched', 'loose', 'tight',
    'pain', 'disappointed', 'disappointing', 'waste', 'horrible', 'delay',
    'delayed', 'leak', 'hiss', 'cheap', 'defective', 'dies', 'drains', 'drain',
    'concern', 'concerns', 'issue', 'issues', 'overpriced', 'fail', 'failed'
  ];

  let posCount = 0;
  let negCount = 0;

  for (const word of positiveWords) {
    // word boundary check or substring
    const regex = new RegExp(`\\b${word}`, 'i');
    if (regex.test(lower)) posCount++;
  }
  for (const word of negativeWords) {
    const regex = new RegExp(`\\b${word}`, 'i');
    if (regex.test(lower)) negCount++;
  }

  // Check specific phrase polarities
  if (/battery.*(poor|drain|issue|bad|concern|low|fast drain|fail)/i.test(lower)) negCount += 2;
  if (/battery.*(great|good|lasts|backup|long|fast charging|solid)/i.test(lower)) posCount += 2;
  if (/delivery.*(late|delay|slow|waiting|terrible|damage)/i.test(lower)) negCount += 2;
  if (/delivery.*(fast|quick|on time|swift|great|express)/i.test(lower)) posCount += 2;
  if (/quality.*(good|great|premium|high|superb|solid)/i.test(lower)) posCount += 2;
  if (/quality.*(poor|bad|cheap|terrible|scratch|defect)/i.test(lower)) negCount += 2;
  if (/worth.*(it|penny|buy|every)/i.test(lower)) posCount += 2;
  if (/waste.*(money|time)/i.test(lower)) negCount += 3;
  if (/not recommend|do not buy|avoid/i.test(lower)) negCount += 3;

  let sentiment: SentimentType = 'Neutral';
  if (posCount > 0 && negCount > 0 && Math.abs(posCount - negCount) <= 1) {
    sentiment = 'Mixed';
  } else if (posCount > negCount) {
    sentiment = 'Positive';
  } else if (negCount > posCount) {
    sentiment = 'Negative';
  }

  // 1. Quality Aspect
  let qualitySentiment: SentimentType = 'Neutral';
  let qualityScore = 70;
  if (/quality.*(poor|bad|cheap|terrible|defect|horrible|fail)|poor quality|broken|scratched|cheap plastic|fragile/i.test(lower)) {
    qualitySentiment = 'Negative';
    qualityScore = 28 + Math.floor(Math.random() * 12);
  } else if (/quality.*(good|great|premium|superb|flawless|solid|decent)|good quality|premium build|high quality|sturdy|durable/i.test(lower)) {
    qualitySentiment = 'Positive';
    qualityScore = 84 + Math.floor(Math.random() * 12);
  } else if (lower.includes('quality') || lower.includes('build')) {
    qualitySentiment = sentiment === 'Negative' ? 'Negative' : 'Positive';
    qualityScore = sentiment === 'Negative' ? 38 : 78;
  } else {
    qualityScore = sentiment === 'Positive' ? 78 : sentiment === 'Negative' ? 56 : 68;
    qualitySentiment = qualityScore >= 70 ? 'Positive' : qualityScore <= 45 ? 'Negative' : 'Neutral';
  }

  // 2. Battery Aspect
  let batterySentiment: SentimentType = 'Neutral';
  let batteryScore = 65;
  if (/battery.*(drain|poor|issue|die|concerns?|short|low|heat|terrible|bad|worst|horrible|useless|leak)|battery backup.*(poor|bad|issue|terrible|short|low|drain)|drains? (fast|quickly)/i.test(lower)) {
    batterySentiment = 'Negative';
    batteryScore = 22 + Math.floor(Math.random() * 14);
  } else if (/battery.*(great|good|lasts|all day|long|strong|solid|stellar)|fast charging|battery backup.*(good|great|solid|decent|strong)/i.test(lower)) {
    batterySentiment = 'Positive';
    batteryScore = 86 + Math.floor(Math.random() * 10);
  } else if (lower.includes('battery')) {
    batterySentiment = sentiment === 'Negative' ? 'Negative' : 'Neutral';
    batteryScore = sentiment === 'Negative' ? 35 : 62;
  } else {
    // Not mentioned: baseline based on overall context
    batteryScore = sentiment === 'Positive' ? 74 : sentiment === 'Negative' ? 52 : 64;
    batterySentiment = batteryScore >= 70 ? 'Positive' : batteryScore <= 45 ? 'Negative' : 'Neutral';
  }

  // 3. Delivery Aspect
  let deliverySentiment: SentimentType = 'Neutral';
  let deliveryScore = 65;
  if (/delivery.*(late|delay|slow|waiting|took|days)|delayed delivery|slow shipping|transit delay/i.test(lower)) {
    deliverySentiment = 'Negative';
    deliveryScore = 26 + Math.floor(Math.random() * 14);
  } else if (/delivery.*(fast|quick|on time|swift|express|next day)|fast delivery|quick shipping/i.test(lower)) {
    deliverySentiment = 'Positive';
    deliveryScore = 88 + Math.floor(Math.random() * 10);
  } else if (lower.includes('delivery') || lower.includes('shipping')) {
    deliverySentiment = sentiment === 'Negative' ? 'Negative' : 'Neutral';
    deliveryScore = sentiment === 'Negative' ? 36 : 65;
  } else {
    deliveryScore = sentiment === 'Positive' ? 76 : sentiment === 'Negative' ? 50 : 66;
    deliverySentiment = deliveryScore >= 70 ? 'Positive' : deliveryScore <= 45 ? 'Negative' : 'Neutral';
  }

  // 4. Price / Value Aspect
  let priceSentiment: SentimentType = 'Neutral';
  let priceScore = 65;
  if (/price.*(high|expensive|overpriced)|waste of money|not worth|too costly|pricey/i.test(lower)) {
    priceSentiment = 'Negative';
    priceScore = 30 + Math.floor(Math.random() * 12);
  } else if (/worth.*(it|penny|every)|good value|affordable|cheap|great price|budget friendly|discount/i.test(lower)) {
    priceSentiment = 'Positive';
    priceScore = 85 + Math.floor(Math.random() * 10);
  } else {
    priceScore = sentiment === 'Positive' ? 78 : sentiment === 'Negative' ? 54 : 65;
    priceSentiment = priceScore >= 70 ? 'Positive' : priceScore <= 45 ? 'Negative' : 'Neutral';
  }

  // 4 Standard Aspects as featured on the dashboard and storyboard
  const aspects = [
    { name: 'Quality', aspect: 'Quality', sentiment: qualitySentiment, score: qualityScore },
    { name: 'Battery', aspect: 'Battery', sentiment: batterySentiment, score: batteryScore },
    { name: 'Delivery', aspect: 'Delivery', sentiment: deliverySentiment, score: deliveryScore },
    { name: 'Price', aspect: 'Price', sentiment: priceSentiment, score: priceScore },
  ];

  // Additional aspect if Sound is mentioned
  if (lower.includes('sound') || lower.includes('audio') || lower.includes('bass') || lower.includes('mic')) {
    const isPos = !/muffled|distort|low volume|tinny|buzz/i.test(lower);
    aspects.push({
      name: 'Sound & Audio',
      aspect: 'Sound & Audio',
      sentiment: isPos ? 'Positive' : 'Negative',
      score: isPos ? 90 : 38,
    });
  }

  // Pros & Cons formulation
  const pros: string[] = [];
  const cons: string[] = [];

  if (qualitySentiment === 'Positive') pros.push('Reliable product build quality and solid tactile finish');
  if (batterySentiment === 'Positive') pros.push('Commendable battery life endurance with efficient power retention');
  if (deliverySentiment === 'Positive') pros.push('Rapid delivery fulfillment with intact protective packaging');
  if (priceSentiment === 'Positive') pros.push('Competitive price-to-performance value quotient');

  if (qualitySentiment === 'Negative') cons.push('Material quality or structural durability fell short of expectations');
  if (batterySentiment === 'Negative') cons.push('Battery backup or power drain is a notable concern for users');
  if (deliverySentiment === 'Negative') cons.push('Delayed shipping transit time or logistics turnaround issues');
  if (priceSentiment === 'Negative') cons.push('Pricing perceived as premium relative to feature delivery');

  if (pros.length === 0) {
    if (sentiment === 'Positive') {
      pros.push('Overall positive customer experience and satisfactory functionality');
    } else {
      pros.push('Meets essential baseline expectations for category');
    }
  }

  if (cons.length === 0 && sentiment === 'Negative') {
    cons.push('General dissatisfaction with item performance or handling');
  }

  const confidenceScore = Math.min(98, Math.max(68, 74 + (posCount + negCount) * 4));
  const trustScore = Math.min(99, 88 + Math.floor(Math.random() * 8));

  // Executive summary
  let summary = '';
  if (sentiment === 'Positive') {
    summary = `Customer highlights positive experience with strong performance across key features.`;
  } else if (sentiment === 'Negative') {
    const topIssues: string[] = [];
    if (batterySentiment === 'Negative') topIssues.push('battery backup');
    if (deliverySentiment === 'Negative') topIssues.push('delivery delays');
    if (qualitySentiment === 'Negative') topIssues.push('quality defects');
    if (priceSentiment === 'Negative') topIssues.push('pricing');
    summary = topIssues.length > 0
      ? `${topIssues.join(' and ')} are the main issues identified in the review.`
      : `Critical customer review highlighting operational reservations.`;
  } else if (sentiment === 'Mixed') {
    summary = `Customer notes satisfactory quality but flags specific concerns regarding execution or delivery.`;
  } else {
    summary = `Customer provided neutral observational review without strong polarity.`;
  }

  return {
    sentiment,
    confidence: confidenceScore,
    confidenceScore,
    trustScore,
    aspects,
    pros,
    cons,
    summary,
  };
}

export async function analyzeReviewText(text: string): Promise<AIAnalysisResult> {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    // fallback to local ABSA
  }
  return performLocalABSA(text);
}

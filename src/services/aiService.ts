import { SentimentType, AspectSentiment } from '../types';

export interface AIAnalysisResult {
  sentiment: SentimentType;
  confidenceScore: number;
  trustScore: number;
  aspects: AspectSentiment[];
  pros: string[];
  cons: string[];
  summary: string;
}

export function performLocalABSA(text: string): AIAnalysisResult {
  const lower = text.toLowerCase();

  const positiveWords = [
    'great', 'excellent', 'amazing', 'superb', 'outstanding', 'love', 'best',
    'good', 'perfect', 'crisp', 'clear', 'fast', 'smooth', 'authentic',
    'genuine', 'worth', 'durable', 'bright', 'quiet', 'sturdy', 'premium',
    'comfortable', 'faded', 'radiance', 'effortless', 'recommend'
  ];

  const negativeWords = [
    'bad', 'poor', 'terrible', 'worst', 'broken', 'fake', 'counterfeit',
    'damaged', 'crushed', 'slow', 'scratch', 'loose', 'tight', 'pain',
    'disappointed', 'waste', 'horrible', 'delay', 'leak', 'hiss', 'cheap'
  ];

  let posCount = 0;
  let negCount = 0;

  for (const word of positiveWords) {
    if (lower.includes(word)) posCount++;
  }
  for (const word of negativeWords) {
    if (lower.includes(word)) negCount++;
  }

  let sentiment: SentimentType = 'Neutral';
  if (posCount > 0 && negCount > 0 && Math.abs(posCount - negCount) <= 1) {
    sentiment = 'Mixed';
  } else if (posCount > negCount) {
    sentiment = 'Positive';
  } else if (negCount > posCount) {
    sentiment = 'Negative';
  }

  // Aspect detection
  const detectedAspects: AspectSentiment[] = [];

  if (lower.includes('sound') || lower.includes('audio') || lower.includes('anc') || lower.includes('bass') || lower.includes('noise')) {
    const isPos = !lower.includes('distort') && !lower.includes('muffled');
    detectedAspects.push({
      aspect: 'Sound & Audio Fidelity',
      sentiment: isPos ? 'Positive' : 'Negative',
      score: isPos ? 92 : 48,
    });
  }

  if (lower.includes('battery') || lower.includes('charge') || lower.includes('charging') || lower.includes('hour') || lower.includes('drain')) {
    const isPos = lower.includes('fast') || lower.includes('30+') || lower.includes('long') || !lower.includes('drain');
    detectedAspects.push({
      aspect: 'Battery & Power',
      sentiment: isPos ? 'Positive' : 'Negative',
      score: isPos ? 94 : 52,
    });
  }

  if (lower.includes('skin') || lower.includes('serum') || lower.includes('face') || lower.includes('acne') || lower.includes('brightening')) {
    const isPos = !lower.includes('irritat') && !lower.includes('breakout');
    detectedAspects.push({
      aspect: 'Skin Efficacy & Tolerance',
      sentiment: isPos ? 'Positive' : 'Negative',
      score: isPos ? 95 : 45,
    });
  }

  if (lower.includes('fit') || lower.includes('size') || lower.includes('fabric') || lower.includes('jean') || lower.includes('stretch')) {
    const isPos = lower.includes('comfortable') || lower.includes('durable');
    detectedAspects.push({
      aspect: 'Fit, Fabric & Comfort',
      sentiment: isPos ? 'Positive' : 'Mixed',
      score: isPos ? 88 : 68,
    });
  }

  if (lower.includes('delivery') || lower.includes('box') || lower.includes('pack') || lower.includes('packaging')) {
    const isPos = !lower.includes('damaged') && !lower.includes('crush') && !lower.includes('delay');
    detectedAspects.push({
      aspect: 'Packaging & Delivery Speed',
      sentiment: isPos ? 'Positive' : 'Negative',
      score: isPos ? 89 : 50,
    });
  }

  if (detectedAspects.length === 0) {
    detectedAspects.push({
      aspect: 'Overall Performance & Value',
      sentiment,
      score: sentiment === 'Positive' ? 90 : sentiment === 'Negative' ? 45 : 75,
    });
  }

  // Pros & Cons
  const pros: string[] = [];
  const cons: string[] = [];

  if (posCount >= 1) {
    pros.push('Satisfactory core product performance and user satisfaction');
    if (lower.includes('battery') || lower.includes('charge')) pros.push('Reliable battery endurance or charging efficiency');
    if (lower.includes('sound') || lower.includes('mic')) pros.push('Clear acoustic rendering and communication clarity');
    if (lower.includes('skin') || lower.includes('glow')) pros.push('Gentle skin absorption with visible improvement');
  }

  if (negCount >= 1) {
    if (lower.includes('pack') || lower.includes('box')) cons.push('Outer retail packaging or shipment transit handling issues');
    if (lower.includes('tight') || lower.includes('size')) cons.push('Sizing variation compared to standard expectation');
    if (lower.includes('slow') || lower.includes('delay')) cons.push('Delayed shipment turnaround time');
    if (cons.length === 0) cons.push('Minor usability or handling reservations noted');
  }

  if (pros.length === 0) {
    pros.push('Meets standard baseline consumer expectations');
  }

  const confidenceScore = Math.min(98, 80 + (posCount + negCount) * 4);
  const trustScore = Math.min(99, 88 + Math.floor(Math.random() * 8));

  const summary = text.length > 120
    ? text.slice(0, 120) + '...'
    : text;

  return {
    sentiment,
    confidenceScore,
    trustScore,
    aspects: detectedAspects,
    pros,
    cons,
    summary,
  };
}

export async function analyzeReviewText(text: string): Promise<AIAnalysisResult> {
  // Return analyzed result with fast ABSA logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performLocalABSA(text));
    }, 300);
  });
}

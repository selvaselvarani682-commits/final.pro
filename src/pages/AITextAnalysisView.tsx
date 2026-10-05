import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { StoryboardPage, AIAnalysisResult } from '../types';
import { analyzeReviewText } from '../services/aiService';

interface AITextAnalysisViewProps {
  onNavigate: (page: StoryboardPage) => void;
  onSaveReview?: (review: any) => Promise<void>;
  userEmail?: string;
  userName?: string;
}

export const AITextAnalysisView: React.FC<AITextAnalysisViewProps> = ({
  onNavigate,
  onSaveReview,
  userEmail = '24bit015@stc.ac.in',
  userName = 'Selvarani K',
}) => {
  const [reviewText, setReviewText] = useState(
    'The product quality is good and price is reasonable, but the delivery was late.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>({
    sentiment: 'Positive',
    confidence: 87,
    aspects: [
      { name: 'Quality', aspect: 'Quality', sentiment: 'Positive', score: 92 },
      { name: 'Price', aspect: 'Price', sentiment: 'Positive', score: 88 },
      { name: 'Delivery', aspect: 'Delivery', sentiment: 'Negative', score: 32 },
      { name: 'Size', aspect: 'Size', sentiment: 'Neutral', score: 65 },
    ],
    summary: 'Most customers like the product quality, but delivery complaints are common.',
  });

  const handleAnalyze = async () => {
    if (!reviewText.trim()) return;
    setIsAnalyzing(true);
    try {
      const res = await analyzeReviewText(reviewText);
      setAnalysisResult(res);
    } catch (err) {
      // fallback
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Title & Sub-tabs (Panel 4 from Storyboard) */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            AI Review Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Instant sentiment breakdown and aspect-based review intelligence
          </p>
        </div>

        {/* 3 Modality Sub-tabs */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start w-fit">
          <button
            onClick={() => onNavigate('ai-text')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Text Review</span>
          </button>
          <button
            onClick={() => onNavigate('ai-image')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-white/80 font-bold text-xs transition-colors cursor-pointer"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Review</span>
          </button>
          <button
            onClick={() => onNavigate('ai-voice')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-white/80 font-bold text-xs transition-colors cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice Review</span>
          </button>
        </div>
      </div>

      {/* Text Review Input Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Enter Review Text
          </label>
          <p className="text-xs text-slate-500">
            Type or paste any customer review to analyze aspect sentiment in real time.
          </p>
        </div>

        <div className="relative">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={4}
            maxLength={1000}
            placeholder="Enter your review here... (e.g., 'The product is good but delivery was late')"
            className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 leading-relaxed font-medium"
          />
          <span className="absolute bottom-3 right-4 text-[11px] font-mono text-slate-400">
            {reviewText.length}/1000
          </span>
        </div>

        {/* Quick Sample Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-bold text-slate-400">Sample Reviews:</span>
          {[
            'The product is good but delivery was late',
            'Display quality is crystal clear, battery life lasts all day!',
            'Fabric shrank after first wash, very disappointing sizing',
          ].map((sample) => (
            <button
              key={sample}
              type="button"
              onClick={() => {
                setReviewText(sample);
              }}
              className="text-[11px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              "{sample.slice(0, 32)}..."
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isAnalyzing ? 'Analyzing Review...' : 'Analyze Review'}</span>
        </button>
      </div>

      {/* Analysis Result Card (Panel 4) */}
      {analysisResult && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Analysis Result</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Model: Sentiment ABSA Core v2.4
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Donut Gauge for Sentiment */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={analysisResult.sentiment === 'Positive' ? 'text-emerald-500' : 'text-rose-500'}
                    strokeDasharray={`${analysisResult.confidence}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-base font-black ${analysisResult.sentiment === 'Positive' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {analysisResult.sentiment}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {analysisResult.confidence}%
                  </span>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-700">
                Confidence: {analysisResult.confidence}%
              </div>
            </div>

            {/* Aspect-Based Sentiment Cards (Panel 4) */}
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Aspect-based Sentiment
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {analysisResult.aspects.map((asp) => {
                  const isPos = asp.sentiment === 'Positive';
                  const isNeg = asp.sentiment === 'Negative';
                  return (
                    <div
                      key={asp.name}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1"
                    >
                      <div className="text-xs font-bold text-slate-800">{asp.name}</div>
                      <div
                        className={`text-xs font-black flex items-center justify-center gap-1 ${
                          isPos
                            ? 'text-emerald-600'
                            : isNeg
                            ? 'text-rose-600'
                            : 'text-slate-600'
                        }`}
                      >
                        {isPos && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {isNeg && <AlertCircle className="w-3.5 h-3.5" />}
                        <span>{asp.sentiment}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI Summary Box (Panel 4) */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1 mt-3">
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider font-mono">
                  AI Summary
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {analysisResult.summary}
                </p>
              </div>

              {/* Save to Firestore Database Button */}
              {onSaveReview && (
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Submit as verified review by <span className="font-bold text-slate-800">{userName}</span>
                  </div>

                  <button
                    onClick={async () => {
                      setIsSaving(true);
                      try {
                        await onSaveReview({
                          productTitle: 'iPhone 15 (128GB)',
                          productId: 'prod-iphone-15',
                          reviewerName: userName,
                          platform: 'Amazon',
                          rating: analysisResult.sentiment === 'Positive' ? 5 : 3,
                          title: 'Verified Customer Experience',
                          content: reviewText,
                          sentiment: analysisResult.sentiment,
                          confidenceScore: analysisResult.confidence,
                          trustScore: 98,
                          aspects: analysisResult.aspects,
                          pros: ['Build Quality', 'Performance'],
                          cons: ['Delivery Speed'],
                          summary: analysisResult.summary,
                          verified: true,
                        });
                        setSaveSuccess(true);
                        setTimeout(() => setSaveSuccess(false), 3500);
                      } catch (err) {
                        console.error('Error saving review:', err);
                      } finally {
                        setIsSaving(false);
                      }
                    }}
                    disabled={isSaving}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/25 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isSaving ? 'Saving to Firestore...' : saveSuccess ? 'Saved to Database!' : 'Save & Post to Cloud Firestore'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

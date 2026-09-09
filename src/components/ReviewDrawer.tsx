import React from 'react';
import { StoredReview } from '../types';
import { PlatformPill } from './PlatformPill';
import { SentimentBadge } from './SentimentBadge';
import {
  X,
  Star,
  ShieldCheck,
  CheckCircle2,
  Check,
  X as XIcon,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface ReviewDrawerProps {
  review: StoredReview | null;
  onClose: () => void;
}

export const ReviewDrawer: React.FC<ReviewDrawerProps> = ({
  review,
  onClose,
}) => {
  if (!review) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-3xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product & Platform Banner */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <PlatformPill platform={review.platform} size="md" />
            <SentimentBadge sentiment={review.sentiment} size="md" />
            {review.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded font-mono font-semibold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Buyer
              </span>
            )}
          </div>

          <h2 className="text-xl font-extrabold text-slate-950 font-heading">
            {review.productTitle}
          </h2>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(review.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>By {review.reviewerName}</span>
          </div>
        </div>

        {/* Rating & Trust Score strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono block">
              Star Rating
            </span>
            <div className="flex items-center gap-1 text-amber-500 mt-0.5 font-bold font-mono text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <span>{review.rating}.0 / 5</span>
            </div>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono block">
              Trust Score
            </span>
            <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-sm mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{review.trustScore}% Verified</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono block">
              AI Confidence
            </span>
            <div className="flex items-center gap-1 text-indigo-700 font-mono font-bold text-sm mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{review.confidenceScore}% Accurate</span>
            </div>
          </div>
        </div>

        {/* Review Title & Full Body */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-900">
            "{review.title}"
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-slate-100">
            {review.content}
          </p>
        </div>

        {/* AI Aspect-Based Sentiment Analysis (ABSA) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Aspect-Based Sentiment Breakdown
            </h4>
            <span className="text-[10px] text-slate-400 font-mono">
              NLP Extracted
            </span>
          </div>

          <div className="space-y-2">
            {review.aspects.map((asp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    {asp.aspect}
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {asp.score}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-slate-950 h-full rounded-full transition-all"
                    style={{ width: `${asp.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        {(review.pros.length > 0 || review.cons.length > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs">
            {review.pros.length > 0 && (
              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Key Pros
                </div>
                <ul className="space-y-1 text-slate-700">
                  {review.pros.map((p, i) => (
                    <li key={i} className="leading-snug">• {p}</li>
                  ))}
                </ul>
              </div>
            )}

            {review.cons.length > 0 && (
              <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                <div className="font-bold text-rose-900 flex items-center gap-1.5 mb-2">
                  <XIcon className="w-4 h-4 text-rose-600" />
                  Cons & Caveats
                </div>
                <ul className="space-y-1 text-slate-700">
                  {review.cons.map((c, i) => (
                    <li key={i} className="leading-snug">• {c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-950 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

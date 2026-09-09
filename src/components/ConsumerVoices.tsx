import React from 'react';
import { StoredReview } from '../types';
import { PlatformPill } from './PlatformPill';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ConsumerVoicesProps {
  reviews: StoredReview[];
  onSelectReview: (rev: StoredReview) => void;
}

export const ConsumerVoices: React.FC<ConsumerVoicesProps> = ({
  reviews,
  onSelectReview,
}) => {
  const spotlightReviews = reviews.slice(0, 3);

  return (
    <section id="consumer-voices-section" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B7FE9] bg-blue-50 px-2.5 py-0.5 rounded uppercase tracking-wider mb-2 font-mono border border-blue-200">
              Verified Testimonial Spotlight
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
              Voices of Consumers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Authentic consumer experiences evaluated for sincerity and aspect sentiment across top marketplaces.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero Compensated Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {spotlightReviews.map((rev) => (
            <div
              key={rev.id}
              onClick={() => onSelectReview(rev)}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <PlatformPill platform={rev.platform} size="sm" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-2 transform -rotate-12 -z-0 pointer-events-none" />
                  <p className="text-xs text-slate-700 leading-relaxed font-medium relative z-10 italic">
                    "{rev.content}"
                  </p>
                </div>

                {/* Aspect highlights */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {rev.aspects.slice(0, 2).map((asp, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                    >
                      {asp.aspect}: <strong className="text-indigo-600">{asp.score}%</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviewer Footnote */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                    {rev.reviewerName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {rev.reviewerName}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {rev.productTitle.split(' ')[0]} {rev.productTitle.split(' ')[1]}
                    </div>
                  </div>
                </div>

                {rev.verified && (
                  <span className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { StoredReview, PlatformType } from '../types';
import { PlatformPill } from './PlatformPill';
import { SentimentBadge } from './SentimentBadge';
import {
  Star,
  Trash2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  PlusCircle,
  Inbox,
  ChevronDown,
  ChevronUp,
  Camera,
  Zap,
} from 'lucide-react';

interface OpenReviewsCatalogProps {
  reviews: StoredReview[];
  onSelectReview: (review: StoredReview) => void;
  onDeleteReview: (id: string, title: string) => void;
  onOpenSubmitModal: () => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedPlatform: string;
  onPlatformChange: (plat: string) => void;
  selectedSentiment: string;
  onSentimentChange: (sent: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const OpenReviewsCatalog: React.FC<OpenReviewsCatalogProps> = ({
  reviews,
  onSelectReview,
  onDeleteReview,
  onOpenSubmitModal,
  selectedCategory,
  onCategoryChange,
  selectedPlatform,
  onPlatformChange,
  selectedSentiment,
  onSentimentChange,
  searchQuery,
  onSearchChange,
}) => {
  const [sortBy, setSortBy] = useState<'newest' | 'rating' | 'trust'>('newest');
  const [expandedReviewIds, setExpandedReviewIds] = useState<Set<string>>(new Set());
  const [displayLimit, setDisplayLimit] = useState<number>(6);

  const toggleExpandReview = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedReviewIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const categories = [
    { label: 'All Reviews', value: 'All Categories' },
    { label: 'Audio & Acoustics', value: 'Audio' },
    { label: 'Beauty & Skincare', value: 'Beauty & Skincare' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Apparel', value: 'Apparel' },
  ];

  const filteredReviews = useMemo(() => {
    return reviews
      .filter((r) => {
        // Platform filter
        if (selectedPlatform !== 'All Platforms' && r.platform !== selectedPlatform) {
          return false;
        }
        // Sentiment filter
        if (selectedSentiment !== 'All Sentiments' && r.sentiment !== selectedSentiment) {
          return false;
        }
        // Category filter
        if (selectedCategory !== 'All Categories') {
          const lowerCat = selectedCategory.toLowerCase();
          const title = r.productTitle.toLowerCase();
          if (!title.includes(lowerCat) && !r.content.toLowerCase().includes(lowerCat)) {
            if (selectedCategory === 'Audio' && !title.includes('sony') && !title.includes('headphone') && !title.includes('earbud')) {
              return false;
            }
            if (selectedCategory === 'Beauty & Skincare' && !title.includes('minimalist') && !title.includes('serum') && !title.includes('face')) {
              return false;
            }
            if (selectedCategory === 'Electronics' && !title.includes('oneplus') && !title.includes('phone')) {
              return false;
            }
            if (selectedCategory === 'Apparel' && !title.includes('levi') && !title.includes('jean')) {
              return false;
            }
          }
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          return (
            r.productTitle.toLowerCase().includes(q) ||
            r.reviewerName.toLowerCase().includes(q) ||
            r.content.toLowerCase().includes(q) ||
            r.title.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'trust') return b.trustScore - a.trustScore;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [
    reviews,
    selectedCategory,
    selectedPlatform,
    selectedSentiment,
    searchQuery,
    sortBy,
  ]);

  return (
    <section id="open-reviews-section" className="py-14 bg-white/40 backdrop-blur-[2px] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-white/90 border border-slate-300 px-3 py-1 rounded-full uppercase tracking-wider mb-2 font-mono shadow-2xs">
              <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
              Flash Review Stream
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
              Open Customer Reviews & Aspect Breakdowns
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Inspect verified reviews ingested across 5 marketplaces, normalized with AI aspect scoring.
            </p>
          </div>

          <button
            id="open-reviews-write-btn"
            onClick={onOpenSubmitModal}
            className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
          >
            <Zap className="w-4 h-4 fill-[#E2F952] text-[#E2F952]" />
            <span>Write Verified Review (+50 ⚡)</span>
          </button>
        </div>

        {/* Filter Navigation Bar */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/90 p-4 space-y-3 shadow-sm">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => onCategoryChange(c.value)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === c.value
                    ? 'bg-slate-900 text-[#E2F952] shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Platforms, Sentiment, Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-200 text-xs">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Marketplace Platform
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => onPlatformChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-slate-800 cursor-pointer"
              >
                {['All Platforms', 'Amazon', 'Nykaa', 'Myntra', 'Meesho', 'Snapdeal'].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Sentiment Filter
              </label>
              <select
                value={selectedSentiment}
                onChange={(e) => onSentimentChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-slate-800 cursor-pointer"
              >
                {['All Sentiments', 'Positive', 'Mixed', 'Negative'].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Sort Order
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-slate-800 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="rating">Highest Star Rating ★</option>
                <option value="trust">Highest Authenticity %</option>
              </select>
            </div>
          </div>
        </div>

        {/* Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-slate-600">
          <div>
            Showing{' '}
            <span className="font-bold text-slate-900">
              {Math.min(displayLimit, filteredReviews.length)}
            </span>{' '}
            of <span className="font-bold text-slate-900">{filteredReviews.length}</span> reviews
          </div>

          {(selectedPlatform !== 'All Platforms' ||
            selectedSentiment !== 'All Sentiments' ||
            selectedCategory !== 'All Categories' ||
            searchQuery.trim()) && (
            <button
              onClick={() => {
                onCategoryChange('All Categories');
                onPlatformChange('All Platforms');
                onSentimentChange('All Sentiments');
                onSearchChange('');
              }}
              className="text-[11px] font-bold text-indigo-600 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Review Cards List */}
        {filteredReviews.length > 0 ? (
          <div className="space-y-3">
            {filteredReviews.slice(0, displayLimit).map((rev) => {
              const isExpanded = expandedReviewIds.has(rev.id);
              return (
                <div
                  key={rev.id}
                  onClick={() => onSelectReview(rev)}
                  className="group relative bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer shadow-xs"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    {/* Left Column: Product & Tags */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <PlatformPill platform={rev.platform} size="sm" />
                        <span className="text-xs font-bold text-slate-900">
                          {rev.productTitle}
                        </span>
                        {rev.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-slate-900 bg-[#E2F952] px-2 py-0.5 rounded-full font-mono font-bold border border-black/10">
                            <Zap className="w-2.5 h-2.5 fill-black text-black" />
                            Flash Verified Buyer
                          </span>
                        )}
                      </div>

                      {/* Review Title & Snippet */}
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          "{rev.title}"
                        </h3>
                        <p className={`text-xs text-slate-600 mt-1 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {rev.content}
                        </p>
                        {rev.content.length > 90 && (
                          <button
                            type="button"
                            onClick={(e) => toggleExpandReview(rev.id, e)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:underline mt-1 cursor-pointer"
                          >
                            {isExpanded ? (
                              <>
                                <span>Show less</span>
                                <ChevronUp className="w-3 h-3" />
                              </>
                            ) : (
                              <>
                                <span>Show more</span>
                                <ChevronDown className="w-3 h-3" />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Customer Photos */}
                      {rev.photos && rev.photos.length > 0 && (
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                            <Camera className="w-3 h-3 text-indigo-600" />
                            <span>Buyer Photos ({rev.photos.length}):</span>
                          </span>
                          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                            {rev.photos.map((photo, pIdx) => (
                              <img
                                key={pIdx}
                                src={photo}
                                alt="Customer review photo"
                                className="w-10 h-10 rounded-lg object-cover border border-slate-200 hover:scale-105 transition-transform"
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Aspect Badges (ABSA) */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {rev.aspects.slice(0, 3).map((asp, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            <span className="font-semibold">{asp.aspect}:</span>
                            <span className="font-bold text-emerald-600">{asp.score}%</span>
                          </span>
                        ))}
                        {rev.aspects.length > 3 && (
                          <span className="text-[10px] text-slate-500 font-mono">
                            +{rev.aspects.length - 3} more facets
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Rating, Trust & Delete */}
                    <div className="flex items-center lg:flex-col lg:items-end justify-between lg:justify-center gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                      <div className="flex items-center gap-2">
                        {/* Star Rating */}
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>

                        <SentimentBadge sentiment={rev.sentiment} size="sm" />

                        {/* Trust Score */}
                        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-xs font-mono font-bold">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{rev.trustScore}%</span>
                        </div>
                      </div>

                      {/* Author & Timestamp */}
                      <div className="flex items-center gap-3">
                        <div className="text-[11px] text-slate-500 font-mono text-right hidden sm:block">
                          <span>By {rev.reviewerName}</span>
                        </div>

                        {/* Delete action */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteReview(rev.id, rev.title);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete review"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Load More Button */}
            {displayLimit < filteredReviews.length && (
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => setDisplayLimit((prev) => prev + 6)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Load More Reviews ({filteredReviews.length - displayLimit} remaining)
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-[#12151E] rounded-2xl border border-white/10 p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 mx-auto flex items-center justify-center text-slate-500">
              <Inbox className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white">No Reviews Match Filters</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your category, platform, or sentiment filters to view more customer reviews.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

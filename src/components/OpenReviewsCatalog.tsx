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
            // Check specific known mappings
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
    <section id="open-reviews-section" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
              Open Customer Reviews & Aspect Breakdowns
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Inspect verified reviews ingested across 5 marketplaces, normalized with AI aspect scoring.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              id="submit-review-catalog-btn"
              onClick={onOpenSubmitModal}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#FCA92B]" />
              <span>Add Review</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              id="reviews-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 cursor-pointer font-medium focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              <option value="newest">Newest First</option>
              <option value="rating">Highest Star Rating</option>
              <option value="trust">Highest Trust Score</option>
            </select>
          </div>
        </div>

        {/* Active Filters Summary Strip */}
        <div className="flex items-center justify-between text-xs text-slate-500 py-1 font-medium">
          <div>
            Showing{' '}
            <span className="font-bold text-slate-900">
              {filteredReviews.length}
            </span>{' '}
            of {reviews.length} reviews
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
              className="text-[11px] font-bold text-[#ED7B2F] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Review Cards Grid */}
        {filteredReviews.length > 0 ? (
          <div className="space-y-3">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                onClick={() => onSelectReview(rev)}
                className="group relative bg-white rounded-2xl border border-slate-200 p-5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Column: Product & Tags */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <PlatformPill platform={rev.platform} size="sm" />
                      <span className="text-xs font-bold text-slate-900">
                        {rev.productTitle}
                      </span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono font-semibold border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          Verified Buyer
                        </span>
                      )}
                    </div>

                    {/* Review Title & Snippet */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-950 group-hover:text-indigo-900 transition-colors">
                        "{rev.title}"
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                        {rev.content}
                      </p>
                    </div>

                    {/* Aspect Pills (ABSA) */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {rev.aspects.slice(0, 3).map((asp, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          <span className="font-semibold">{asp.aspect}:</span>
                          <span className="font-bold text-indigo-700">{asp.score}%</span>
                        </span>
                      ))}
                      {rev.aspects.length > 3 && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          +{rev.aspects.length - 3} more facets
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Trust, Rating & Inspect Action */}
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
                                : 'text-slate-200'
                            }`}
                          />
                        ))}
                      </div>

                      <SentimentBadge sentiment={rev.sentiment} size="sm" />

                      {/* Trust Score */}
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-xs font-mono font-bold">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>{rev.trustScore}%</span>
                      </div>
                    </div>

                    {/* Author & Timestamp + Button */}
                    <div className="flex items-center gap-3">
                      <div className="text-[11px] text-slate-400 font-mono text-right hidden sm:block">
                        <span>By {rev.reviewerName}</span>
                      </div>

                      {/* Delete action */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteReview(rev.id, rev.productTitle);
                        }}
                        className="p-1.5 text-slate-300 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50 cursor-pointer"
                        title="Delete Review"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Inspect CTA Button */}
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-[#ED7B2F] transition-colors">
                        <span>Inspect Review</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 py-16 text-center space-y-3">
            <Inbox className="w-10 h-10 mx-auto text-slate-300" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">
                No matching customer reviews found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try adjusting your search criteria or submit a new review to run instant aspect sentiment analysis.
              </p>
            </div>
            <button
              onClick={onOpenSubmitModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-950 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#FCA92B]" />
              <span>Submit a Review Now</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

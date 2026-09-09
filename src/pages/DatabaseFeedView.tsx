import React, { useState, useMemo } from 'react';
import { StoredReview } from '../types';
import { deleteReviewFromStorage } from '../services/reviewStorage';
import { PlatformPill } from '../components/PlatformPill';
import { SentimentBadge } from '../components/SentimentBadge';
import {
  Star,
  Trash2,
  RefreshCw,
  Search,
  MessageSquareText,
} from 'lucide-react';

interface DatabaseFeedViewProps {
  reviews: StoredReview[];
  isLoading: boolean;
  onNavigateToStudio: () => void;
  onReviewsUpdated: () => void;
}

export const DatabaseFeedView: React.FC<DatabaseFeedViewProps> = ({
  reviews,
  isLoading,
  onNavigateToStudio,
  onReviewsUpdated,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterPlatform, setFilterPlatform] = useState<string>('All');
  const [filterSentiment, setFilterSentiment] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'rating' | 'trust'>('newest');

  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = (id: string, productTitle: string) => {
    if (!window.confirm(`Delete review for "${productTitle}"?`)) {
      return;
    }
    setDeletingId(id);
    try {
      deleteReviewFromStorage(id);
      setActionSuccess('Review deleted.');
      onReviewsUpdated();
      setTimeout(() => setActionSuccess(null), 3000);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredReviews = useMemo(() => {
    return reviews
      .filter((r) => {
        if (filterPlatform !== 'All' && r.platform !== filterPlatform) return false;
        if (filterSentiment !== 'All' && r.sentiment !== filterSentiment) return false;
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
  }, [reviews, filterPlatform, filterSentiment, searchQuery, sortBy]);

  return (
    <div className="space-y-6 pb-12">
      {/* Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">
            Customer Reviews
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {filteredReviews.length} of {reviews.length} verified reviews
          </p>
        </div>
      </div>

      {/* Feedback Alerts */}
      {actionSuccess && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
          <span>{actionSuccess}</span>
          <button
            onClick={() => setActionSuccess(null)}
            className="font-bold px-1 cursor-pointer"
          >
            ×
          </button>
        </div>
      )}

      {/* Controls Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-reviews-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, keyword, reviewer..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Sort */}
          <select
            id="sort-reviews-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 cursor-pointer shrink-0"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Star Rating</option>
            <option value="trust">Highest Trust Score</option>
          </select>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[11px] text-slate-400 mr-1">Platform:</span>
            {['All', 'Amazon', 'Nykaa', 'Myntra', 'Meesho', 'Snapdeal'].map((p) => (
              <button
                key={p}
                onClick={() => setFilterPlatform(p)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  filterPlatform === p
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-400 mr-1">Sentiment:</span>
            {['All', 'Positive', 'Mixed', 'Negative'].map((s) => (
              <button
                key={s}
                onClick={() => setFilterSentiment(s)}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  filterSentiment === s
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      {isLoading ? (
        <div className="py-16 text-center text-slate-500">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-600" />
          <p className="text-xs">Loading reviews...</p>
        </div>
      ) : filteredReviews.length > 0 ? (
        <div className="space-y-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all space-y-3"
            >
              {/* Review Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <PlatformPill platform={rev.platform} size="sm" />
                  <span className="font-bold text-slate-900 text-xs">
                    {rev.productTitle}
                  </span>
                  {rev.verified && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono font-semibold">
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
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

                  <SentimentBadge sentiment={rev.sentiment} size="sm" />

                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {rev.trustScore}%
                  </span>

                  <button
                    onClick={() => handleDelete(rev.id, rev.productTitle)}
                    disabled={deletingId === rev.id}
                    className="p-1 text-slate-300 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Delete"
                  >
                    {deletingId === rev.id ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-rose-500" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Body */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-1">
                  "{rev.title}"
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rev.content}
                </p>
              </div>

              {/* Reviewer & Date */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 font-mono">
                <span>By {rev.reviewerName}</span>
                <span>
                  {new Date(rev.createdAt).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 py-12 text-center text-slate-500 space-y-2">
          <MessageSquareText className="w-8 h-8 mx-auto text-slate-300" />
          <p className="text-xs font-medium text-slate-700">No reviews found</p>
          <button
            onClick={onNavigateToStudio}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            Submit a review
          </button>
        </div>
      )}
    </div>
  );
};

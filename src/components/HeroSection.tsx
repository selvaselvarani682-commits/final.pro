import React from 'react';
import {
  Search,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  TrendingDown,
  ShoppingBag,
} from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedPlatform: string;
  onPlatformChange: (plat: string) => void;
  selectedSentiment: string;
  onSentimentChange: (sent: string) => void;
  onExecuteSearch: () => void;
  onOpenSubmitModal: () => void;
  totalReviewsCount?: number;
  avgTrustScore?: number;
  onNavigateToReviewSearch?: () => void;
  onOpenPerks?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPlatform,
  onPlatformChange,
  selectedSentiment,
  onSentimentChange,
  onExecuteSearch,
  totalReviewsCount = 148,
  avgTrustScore = 96,
  onNavigateToReviewSearch,
  onOpenPerks,
}) => {
  const categories = [
    'All Categories',
    'Audio',
    'Beauty & Skincare',
    'Electronics',
    'Apparel',
  ];

  const platforms = [
    'All Platforms',
    'Amazon',
    'Nykaa',
    'Myntra',
    'Meesho',
    'Snapdeal',
  ];

  const sentiments = ['All Sentiments', 'Positive', 'Mixed', 'Negative'];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onExecuteSearch();
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200/80 bg-white/40 backdrop-blur-[2px]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Flash.co Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-300 text-slate-800 text-xs font-semibold shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8fb300] animate-pulse" />
            <span className="text-slate-900 font-mono font-black">FLASH.INTELLIGENCE</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium">Zero Spam. Verified Reviews.</span>
          </div>

          {onOpenPerks && (
            <button
              onClick={onOpenPerks}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2F952] border border-black/15 text-slate-950 text-xs font-extrabold hover:bg-[#d6f03d] shadow-2xs transition-all cursor-pointer"
            >
              <Zap className="w-3 h-3 fill-black text-black" />
              <span>Earn 50 Coins per Review</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl space-y-3 mb-7">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-heading tracking-tight leading-[1.1]">
            Every Order. Every Review.{' '}
            <span className="text-slate-900 underline decoration-[#8fb300] decoration-wavy decoration-2">
              One Flash Inbox.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
            Tired of fake reviews and scattered orders? Unify your purchases across{' '}
            <span className="text-slate-950 font-bold">Amazon, Nykaa, Myntra, Meesho,</span> and{' '}
            <span className="text-slate-950 font-bold">Snapdeal</span>. Track deliveries, compare price parity, and inspect authentic aspect-level sentiment.
          </p>
        </div>

        {/* Search & Filter Console styled in clean high-contrast glass */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/90 p-3.5 sm:p-5 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search products, fabrics, aspects (e.g. kurti, battery)..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all font-medium"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <select
                id="hero-category-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 cursor-pointer font-medium"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Dropdown */}
            <div>
              <select
                id="hero-platform-select"
                value={selectedPlatform}
                onChange={(e) => onPlatformChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 cursor-pointer font-medium"
              >
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Sentiment Filter */}
            <div>
              <select
                id="hero-sentiment-select"
                value={selectedSentiment}
                onChange={(e) => onSentimentChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 cursor-pointer font-medium"
              >
                {sentiments.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 mt-3 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                Trending on Flash:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {['boAt ANC', 'Snitch Resort', 'Minimalist Niacinamide', 'Noise ColorFit'].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      onSearchChange(chip);
                      onExecuteSearch();
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[11px] text-slate-700 hover:text-slate-900 font-medium transition-all cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onNavigateToReviewSearch && (
                <button
                  type="button"
                  onClick={onNavigateToReviewSearch}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Audio/Image Search</span>
                </button>
              )}

              <button
                type="button"
                id="hero-execute-search-btn"
                onClick={onExecuteSearch}
                className="px-4 py-2 rounded-xl text-xs font-black bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-[#E2F952]" />
                <span>Explore Reviews</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Strip (Flash Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          <div className="p-3.5 rounded-2xl bg-white/85 border border-slate-200/90 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-black font-mono text-slate-900 tabular-nums">
                {avgTrustScore}%
              </div>
              <div className="text-[11px] text-slate-600 font-medium">Authenticity Score</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/85 border border-slate-200/90 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-black font-mono text-slate-900 tabular-nums">
                {totalReviewsCount}+
              </div>
              <div className="text-[11px] text-slate-600 font-medium">Deconstructed Reviews</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/85 border border-slate-200/90 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-700 shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-black font-mono text-slate-900 tabular-nums">
                5 Marketplaces
              </div>
              <div className="text-[11px] text-slate-600 font-medium">Real-time Parity</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/85 border border-slate-200/90 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-black font-mono text-slate-900 tabular-nums">
                Up to 42%
              </div>
              <div className="text-[11px] text-slate-600 font-medium">Price Savings Detected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

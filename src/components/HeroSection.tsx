import React from 'react';
import ecommerceHeroImg from '../assets/images/ecommerce_hero_wide_1788775852330.jpg';
import {
  Search,
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
  onOpenSubmitModal,
  onNavigateToReviewSearch,
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
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200">
      {/* Full-width e-commerce backdrop image at 0.5 (50%) opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ecommerceHeroImg}
          alt="E-commerce Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Soft overlay gradient to ensure pristine text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-50/95" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Main Headline */}
        <div className="max-w-3xl space-y-3.5 mb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-[1.15]">
            Consumer Trust with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 underline decoration-[#FCA92B] decoration-4 underline-offset-4">
              Comprehensive Review Analysis
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
            Unify and deconstruct verified consumer reviews across Amazon, Nykaa, Myntra, Meesho, and Snapdeal. Discover aspect-level sentiment, detect review authenticity, and track price parity in real time.
          </p>
        </div>

        {/* Job-Search Style Filter & Search Widget */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-sm">
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
                placeholder="Search product, aspect, or keyword..."
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all font-medium"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <select
                id="hero-category-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer font-medium"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer font-medium"
              >
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Action Button */}
            <div className="flex gap-2">
              <select
                id="hero-sentiment-select"
                value={selectedSentiment}
                onChange={(e) => onSentimentChange(e.target.value)}
                className="w-1/2 sm:w-auto flex-1 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer font-medium"
              >
                {sentiments.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <button
                id="hero-search-action-btn"
                type="button"
                onClick={onExecuteSearch}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
              >
                <Search className="w-3.5 h-3.5 text-[#FCA92B]" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

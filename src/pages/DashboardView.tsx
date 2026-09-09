import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data/products';
import { Product, PlatformType } from '../types';
import { StoredReview } from '../types';
import { PlatformPill } from '../components/PlatformPill';
import { Star, Sparkles } from 'lucide-react';

interface DashboardViewProps {
  onNavigate: (tab: 'dashboard' | 'studio' | 'database' | 'comparator') => void;
  onSelectProduct: (product: Product) => void;
  reviews: StoredReview[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  onSelectProduct,
  reviews,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const platformStats: { name: PlatformType; rating: number; trust: number; reviews: string }[] = [
    { name: 'Amazon', rating: 4.6, trust: 94, reviews: '12.4k' },
    { name: 'Nykaa', rating: 4.7, trust: 96, reviews: '4.8k' },
    { name: 'Myntra', rating: 4.5, trust: 91, reviews: '6.2k' },
    { name: 'Meesho', rating: 4.2, trust: 84, reviews: '8.1k' },
    { name: 'Snapdeal', rating: 4.1, trust: 86, reviews: '3.4k' },
  ];

  const aspectBenchmarks = [
    { aspect: 'Sound Clarity & ANC', score: 94, category: 'Audio' },
    { aspect: 'Battery & Fast Charging', score: 91, category: 'Electronics' },
    { aspect: 'Fabric Durability', score: 87, category: 'Apparel' },
    { aspect: 'Skin Efficacy & Safety', score: 96, category: 'Beauty' },
  ];

  const categories = ['All', 'Audio', 'Electronics', 'Apparel', 'Beauty'];

  const filteredProducts = (
    selectedCategory === 'All'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        )
  ).slice(0, 6);

  const avgTrust = reviews.length > 0
    ? Math.round(reviews.reduce((acc, r) => acc + r.trustScore, 0) / reviews.length)
    : 94;

  const positiveCount = reviews.filter((r) => r.sentiment === 'Positive').length;
  const positiveRatio = reviews.length > 0
    ? Math.round((positiveCount / reviews.length) * 100)
    : 89;

  return (
    <div className="space-y-6 pb-12">
      {/* Clean Minimal Hero & Metrics */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Customer Sentiment Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Consolidated consumer feedback and authentic trust scores across Amazon, Nykaa, Myntra, Meesho, and Snapdeal.
            </p>
          </div>

          <div className="shrink-0">
            <button
              id="submit-review-hero-btn"
              onClick={() => onNavigate('studio')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Submit Review</span>
            </button>
          </div>
        </div>

        {/* Minimal Stats Strip */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Total Reviews
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 mt-0.5">
              {reviews.length}
            </div>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Avg Trust
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-700 mt-0.5">
              {avgTrust}%
            </div>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Positive Ratio
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-600 mt-0.5">
              {positiveRatio}%
            </div>
          </div>
        </div>
      </div>

      {/* Platform Overview & Key Aspects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marketplace Ratings */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 font-heading">
              Marketplace Ratings
            </h2>
            <span className="text-[11px] font-mono text-slate-400">5 Platforms</span>
          </div>

          <div className="divide-y divide-slate-100">
            {platformStats.map((plat) => (
              <div
                key={plat.name}
                className="py-2.5 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <PlatformPill platform={plat.name} size="sm" />
                  <span className="font-semibold text-slate-800">{plat.name}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="flex items-center gap-1 text-amber-600 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {plat.rating}
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    {plat.trust}% Trust
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aspect Benchmarks */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 font-heading">
              Key Aspect Scores
            </h2>
            <span className="text-[11px] font-mono text-slate-400">AI Analyzed</span>
          </div>

          <div className="divide-y divide-slate-100">
            {aspectBenchmarks.map((asp, idx) => (
              <div
                key={idx}
                className="py-2.5 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-slate-800 block">
                    {asp.aspect}
                  </span>
                  <span className="text-[10px] text-slate-400">{asp.category}</span>
                </div>
                <span className="font-mono font-bold text-emerald-700">
                  {asp.score}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-900 font-heading">
            Featured Products
          </h2>

          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video rounded-lg bg-slate-100 overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform"
                  />
                </div>
                <span className="text-[11px] font-mono text-indigo-600 font-bold">
                  {product.brand}
                </span>
                <h3 className="font-bold text-slate-900 text-xs line-clamp-1 mt-0.5">
                  {product.title}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold font-mono text-slate-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold font-mono text-[11px]">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

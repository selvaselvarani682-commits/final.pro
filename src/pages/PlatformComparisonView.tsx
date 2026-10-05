import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  TrendingUp,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { Product, PlatformType, StoryboardPage } from '../types';

interface PlatformComparisonViewProps {
  products: Product[];
  selectedProduct?: Product;
  onNavigate: (page: StoryboardPage) => void;
  onAddToCart: (product: Product) => void;
}

export const PlatformComparisonView: React.FC<PlatformComparisonViewProps> = ({
  products,
  selectedProduct: initialProduct,
  onNavigate,
  onAddToCart,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || 'prod-iphone-15'
  );

  const product =
    products.find((p) => p.id === selectedProductId) || products[0];

  const platformsData: {
    platform: PlatformType;
    logoColor: string;
    reviews: number;
    positive: number;
    negative: number;
    rating: number;
  }[] = [
    {
      platform: 'Amazon',
      logoColor: 'text-amber-500 bg-amber-50 border-amber-200',
      reviews: product.platforms.Amazon?.reviewCount || 1240,
      positive: product.platforms.Amazon?.positivePercent || 82,
      negative: product.platforms.Amazon?.negativePercent || 12,
      rating: product.platforms.Amazon?.rating || 4.3,
    },
    {
      platform: 'Meesho',
      logoColor: 'text-pink-600 bg-pink-50 border-pink-200',
      reviews: product.platforms.Meesho?.reviewCount || 850,
      positive: product.platforms.Meesho?.positivePercent || 76,
      negative: product.platforms.Meesho?.negativePercent || 18,
      rating: product.platforms.Meesho?.rating || 4.0,
    },
    {
      platform: 'Myntra',
      logoColor: 'text-rose-600 bg-rose-50 border-rose-200',
      reviews: product.platforms.Myntra?.reviewCount || 620,
      positive: product.platforms.Myntra?.positivePercent || 85,
      negative: product.platforms.Myntra?.negativePercent || 9,
      rating: product.platforms.Myntra?.rating || 4.4,
    },
    {
      platform: 'Nykaa',
      logoColor: 'text-pink-500 bg-pink-50 border-pink-200',
      reviews: product.platforms.Nykaa?.reviewCount || 410,
      positive: product.platforms.Nykaa?.positivePercent || 78,
      negative: product.platforms.Nykaa?.negativePercent || 15,
      rating: product.platforms.Nykaa?.rating || 4.2,
    },
    {
      platform: 'Snapdeal',
      logoColor: 'text-red-600 bg-red-50 border-red-200',
      reviews: product.platforms.Snapdeal?.reviewCount || 380,
      positive: product.platforms.Snapdeal?.positivePercent || 72,
      negative: product.platforms.Snapdeal?.negativePercent || 20,
      rating: product.platforms.Snapdeal?.rating || 3.9,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Title & Product Selector (Panel 7 from Storyboard) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Platform Review Comparison
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Cross-marketplace sentiment parity analysis across 5 Indian e-commerce platforms
          </p>
        </div>

        {/* Product Dropdown Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Select Product:</span>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-600 cursor-pointer shadow-2xs"
          >
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Product Hero Card (Panel 7) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {product.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-600 mt-0.5">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 font-bold text-slate-900">{product.rating}</span>
              </div>
              <span>•</span>
              <span className="text-slate-500 font-mono">
                {product.reviewCount.toLocaleString()} total reviews
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Add to Cart</span>
        </button>
      </div>

      {/* Comparison Table (Panel 7) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-6">Platform</th>
                <th className="py-3.5 px-6">Reviews</th>
                <th className="py-3.5 px-6">Positive</th>
                <th className="py-3.5 px-6">Negative</th>
                <th className="py-3.5 px-6">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {platformsData.map((row) => (
                <tr key={row.platform} className="hover:bg-slate-50/80 transition-colors">
                  {/* Platform */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2.5 py-1 rounded-lg border font-bold text-xs ${row.logoColor}`}>
                        {row.platform}
                      </span>
                    </div>
                  </td>

                  {/* Reviews Count */}
                  <td className="py-4 px-6 font-mono font-bold text-slate-800">
                    {row.reviews.toLocaleString()}
                  </td>

                  {/* Positive % */}
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-600 font-mono">
                      {row.positive}%
                    </span>
                  </td>

                  {/* Negative % */}
                  <td className="py-4 px-6">
                    <span className="font-bold text-rose-600 font-mono">
                      {row.negative}%
                    </span>
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 font-bold text-slate-900 font-mono">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{row.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Summary Card (Panel 7) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase font-mono tracking-wider">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>AI Summary</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          Amazon and Myntra have the highest positive sentiment. Meesho has more negative reviews compared to others.
        </p>
      </div>
    </div>
  );
};

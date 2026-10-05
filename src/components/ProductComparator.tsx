import React, { useState, useEffect, useMemo } from 'react';
import { Product, PlatformType } from '../types';
import { ALL_PRODUCTS } from '../data/products';
import { PlatformPill } from './PlatformPill';
import { Star, Scale, ShoppingBag, Zap, Award, CheckCircle2 } from 'lucide-react';

interface ProductComparatorProps {
  products?: Product[];
  selectedProductAId?: string;
  selectedProductBId?: string;
  onBuyProduct?: (product: Product, platform?: PlatformType) => void;
}

export const ProductComparator: React.FC<ProductComparatorProps> = ({
  products = ALL_PRODUCTS,
  selectedProductAId,
  selectedProductBId,
  onBuyProduct,
}) => {
  const [prodAId, setProdAId] = useState<string>(selectedProductAId || products[0]?.id || 'prod-001');
  const [prodBId, setProdBId] = useState<string>(selectedProductBId || products[1]?.id || 'prod-002');

  useEffect(() => {
    if (selectedProductAId) {
      setProdAId(selectedProductAId);
    }
  }, [selectedProductAId]);

  useEffect(() => {
    if (selectedProductBId) {
      setProdBId(selectedProductBId);
    }
  }, [selectedProductBId]);

  const prodA = products.find((p) => p.id === prodAId) || products[0];
  const prodB = products.find((p) => p.id === prodBId) || products[1];

  // Group products by category
  const groupedProducts = useMemo(() => {
    const map = new Map<string, Product[]>();
    products.forEach((p) => {
      const cat = p.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    });
    return Array.from(map.entries());
  }, [products]);

  const platformsList: PlatformType[] = [
    'Amazon',
    'Nykaa',
    'Myntra',
    'Meesho',
    'Snapdeal',
  ];

  const winner = prodA && prodB ? (prodA.price <= prodB.price ? 'A' : 'B') : 'A';

  return (
    <section id="comparator-section" className="py-14 bg-white/40 backdrop-blur-[2px] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-white/90 border border-slate-300 px-3 py-1 rounded-full uppercase tracking-wider mb-2 font-mono shadow-2xs">
              <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
              Flash Price & Aspect Match
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
              Cross-Marketplace Comparator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Benchmark sentiment, aspect breakdown, and price parity across 5 retail platforms side-by-side.
            </p>
          </div>
        </div>

        {/* Product Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Selector A */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/90 p-3.5 shadow-sm">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono flex items-center justify-between">
              <span>Product A</span>
              {winner === 'A' && (
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" /> Best Price Pick
                </span>
              )}
            </label>
            <select
              id="comparator-select-a"
              value={prodAId}
              onChange={(e) => setProdAId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-slate-800 cursor-pointer"
            >
              {groupedProducts.map(([cat, prods]) => (
                <optgroup key={cat} label={`── ${cat} (${prods.length}) ──`}>
                  {prods.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.brand} - {p.title} (₹{p.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Selector B */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/90 p-3.5 shadow-sm">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono flex items-center justify-between">
              <span>Product B</span>
              {winner === 'B' && (
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" /> Best Price Pick
                </span>
              )}
            </label>
            <select
              id="comparator-select-b"
              value={prodBId}
              onChange={(e) => setProdBId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-slate-800 cursor-pointer"
            >
              {groupedProducts.map(([cat, prods]) => (
                <optgroup key={cat} label={`── ${cat} (${prods.length}) ──`}>
                  {prods.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.brand} - {p.title} (₹{p.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          {prodA && (
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm hover:border-slate-300 transition-all">
              <div className="flex items-start gap-4">
                <img
                  src={prodA.image}
                  alt={prodA.title}
                  className="w-20 h-20 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    {prodA.category} • {prodA.brand}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {prodA.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-base font-black font-mono text-slate-900">
                      ₹{prodA.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{prodA.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono border border-amber-200">
                      ★ {prodA.rating} ({prodA.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              {/* Price across platforms */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Marketplace Price & Stock
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {platformsList.map((plat) => {
                    const metrics = prodA.platforms[plat];
                    if (!metrics) return null;
                    return (
                      <div
                        key={plat}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                      >
                        <PlatformPill platform={plat} size="sm" />
                        <span className="font-mono font-bold text-slate-900">
                          ₹{metrics.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Aspect Scores */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Aspect Sentiment Breakdown (ABSA)
                </div>
                <div className="space-y-2">
                  {prodA.aiSummary.aspects.map((asp, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">
                          {asp.aspect}
                        </span>
                        <span className="font-mono font-bold text-emerald-600">
                          {asp.score}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${asp.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Product A Action */}
              {onBuyProduct && (
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onBuyProduct(prodA)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#E2F952] hover:bg-[#d6f03d] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 border border-black/10 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buy via Flash (₹{prodA.price.toLocaleString('en-IN')})</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Card B */}
          {prodB && (
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm hover:border-slate-300 transition-all">
              <div className="flex items-start gap-4">
                <img
                  src={prodB.image}
                  alt={prodB.title}
                  className="w-20 h-20 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    {prodB.category} • {prodB.brand}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {prodB.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-base font-black font-mono text-slate-900">
                      ₹{prodB.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{prodB.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono border border-amber-200">
                      ★ {prodB.rating} ({prodB.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              {/* Price across platforms */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Marketplace Price & Stock
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {platformsList.map((plat) => {
                    const metrics = prodB.platforms[plat];
                    if (!metrics) return null;
                    return (
                      <div
                        key={plat}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                      >
                        <PlatformPill platform={plat} size="sm" />
                        <span className="font-mono font-bold text-slate-900">
                          ₹{metrics.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Aspect Scores */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Aspect Sentiment Breakdown (ABSA)
                </div>
                <div className="space-y-2">
                  {prodB.aiSummary.aspects.map((asp, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">
                          {asp.aspect}
                        </span>
                        <span className="font-mono font-bold text-emerald-600">
                          {asp.score}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${asp.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Product B Action */}
              {onBuyProduct && (
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onBuyProduct(prodB)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#E2F952] hover:bg-[#d6f03d] text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 border border-black/10 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buy via Flash (₹{prodB.price.toLocaleString('en-IN')})</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

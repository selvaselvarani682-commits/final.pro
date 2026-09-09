import React, { useState, useEffect, useMemo } from 'react';
import { Product, PlatformType } from '../types';
import { ALL_PRODUCTS } from '../data/products';
import { PlatformPill } from './PlatformPill';
import { Star, Check, X, Scale } from 'lucide-react';

interface ProductComparatorProps {
  products?: Product[];
  selectedProductAId?: string;
  selectedProductBId?: string;
}

export const ProductComparator: React.FC<ProductComparatorProps> = ({
  products = ALL_PRODUCTS,
  selectedProductAId,
  selectedProductBId,
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

  // Group products by category for clean dropdown navigation
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

  return (
    <section id="comparator-section" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FCA92B] bg-slate-900 px-2.5 py-0.5 rounded uppercase tracking-wider mb-2 font-mono">
              <Scale className="w-3 h-3 text-[#FCA92B]" />
              Enterprise Evaluation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
              Cross-Marketplace Product Comparator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Benchmark sentiment, aspect scores, and pricing across 5 marketplaces side-by-side.
            </p>
          </div>
        </div>

        {/* Product Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Selector A */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-2xs">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono">
              Product A
            </label>
            <select
              id="comparator-select-a"
              value={prodAId}
              onChange={(e) => setProdAId(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer"
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
          <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-2xs">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 font-mono">
              Product B
            </label>
            <select
              id="comparator-select-b"
              value={prodBId}
              onChange={(e) => setProdBId(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer"
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
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={prodA.image}
                  alt={prodA.title}
                  className="w-20 h-20 rounded-xl object-cover border border-slate-100 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    {prodA.category} • {prodA.brand}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {prodA.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-base font-extrabold font-mono text-slate-900">
                      ₹{prodA.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{prodA.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono border border-amber-200">
                      ★ {prodA.rating} ({prodA.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              {/* Price across platforms */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
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
                        className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                      >
                        <PlatformPill platform={plat} size="sm" />
                        <span className="font-mono font-bold text-slate-900">
                          ₹{metrics.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Aspect Scores */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Aspect Sentiment Breakdown (ABSA)
                </div>
                <div className="space-y-1.5">
                  {prodA.aiSummary.aspects.map((asp, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">
                          {asp.aspect}
                        </span>
                        <span className="font-mono font-bold text-slate-900">
                          {asp.score}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-slate-900 h-full rounded-full"
                          style={{ width: `${asp.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div>
                  <div className="font-bold text-emerald-800 flex items-center gap-1 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    Key Pros
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {prodA.aiSummary.pros.slice(0, 2).map((p, i) => (
                      <li key={i} className="leading-snug">• {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-rose-800 flex items-center gap-1 mb-1">
                    <X className="w-3.5 h-3.5" />
                    Key Cons
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {prodA.aiSummary.cons.slice(0, 2).map((c, i) => (
                      <li key={i} className="leading-snug">• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Card B */}
          {prodB && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={prodB.image}
                  alt={prodB.title}
                  className="w-20 h-20 rounded-xl object-cover border border-slate-100 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    {prodB.category} • {prodB.brand}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {prodB.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-base font-extrabold font-mono text-slate-900">
                      ₹{prodB.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{prodB.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono border border-amber-200">
                      ★ {prodB.rating} ({prodB.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              {/* Price across platforms */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
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
                        className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                      >
                        <PlatformPill platform={plat} size="sm" />
                        <span className="font-mono font-bold text-slate-900">
                          ₹{metrics.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Aspect Scores */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">
                  Aspect Sentiment Breakdown (ABSA)
                </div>
                <div className="space-y-1.5">
                  {prodB.aiSummary.aspects.map((asp, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-600 font-medium">
                          {asp.aspect}
                        </span>
                        <span className="font-mono font-bold text-slate-900">
                          {asp.score}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-slate-900 h-full rounded-full"
                          style={{ width: `${asp.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div>
                  <div className="font-bold text-emerald-800 flex items-center gap-1 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    Key Pros
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {prodB.aiSummary.pros.slice(0, 2).map((p, i) => (
                      <li key={i} className="leading-snug">• {p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-rose-800 flex items-center gap-1 mb-1">
                    <X className="w-3.5 h-3.5" />
                    Key Cons
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {prodB.aiSummary.cons.slice(0, 2).map((c, i) => (
                      <li key={i} className="leading-snug">• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS } from '../data/products';
import { Product, PlatformType } from '../types';
import { PlatformPill } from '../components/PlatformPill';
import {
  Star,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface ComparatorViewProps {
  onSelectProduct: (product: Product) => void;
}

export const ComparatorView: React.FC<ComparatorViewProps> = ({
  onSelectProduct,
}) => {
  const [product1Id, setProduct1Id] = useState<string>('prod-001');
  const [product2Id, setProduct2Id] = useState<string>('prod-003');

  const prod1 = useMemo(
    () => ALL_PRODUCTS.find((p) => p.id === product1Id) || ALL_PRODUCTS[0],
    [product1Id]
  );
  const prod2 = useMemo(
    () => ALL_PRODUCTS.find((p) => p.id === product2Id) || ALL_PRODUCTS[1],
    [product2Id]
  );

  const getLowestPlatform = (p: Product) => {
    const entries = Object.entries(p.platforms) as [PlatformType, any][];
    let lowest = entries[0];
    for (const entry of entries) {
      if (entry[1].price < lowest[1].price) {
        lowest = entry;
      }
    }
    return { platform: lowest[0], data: lowest[1] };
  };

  const lowest1 = getLowestPlatform(prod1);
  const lowest2 = getLowestPlatform(prod2);

  const platforms: PlatformType[] = [
    'Amazon',
    'Nykaa',
    'Myntra',
    'Meesho',
    'Snapdeal',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header & Selectors */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Product Comparator
            </h1>
            <p className="text-xs text-slate-500">
              Side-by-side pricing, rating, and verified sentiment across marketplaces.
            </p>
          </div>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase font-mono mb-1">
              Product A
            </label>
            <select
              id="select-product-a"
              value={product1Id}
              onChange={(e) => setProduct1Id(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-medium cursor-pointer"
            >
              {ALL_PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.brand} - {p.title.slice(0, 32)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase font-mono mb-1">
              Product B
            </label>
            <select
              id="select-product-b"
              value={product2Id}
              onChange={(e) => setProduct2Id(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-medium cursor-pointer"
            >
              {ALL_PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.brand} - {p.title.slice(0, 32)}...
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Product A Card */}
        <div
          id="product-a-card"
          onClick={() => onSelectProduct(prod1)}
          className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 cursor-pointer hover:border-indigo-300 transition-colors"
        >
          <div className="aspect-video rounded-xl bg-slate-100 overflow-hidden">
            <img
              src={prod1.image}
              alt={prod1.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-[11px] font-mono text-indigo-600 font-bold">
              {prod1.brand}
            </span>
            <h3 className="font-bold text-slate-900 text-xs line-clamp-1 mt-0.5">
              {prod1.title}
            </h3>
          </div>

          <div className="flex items-center justify-between py-2 border-y border-slate-100 text-xs">
            <div className="flex items-center gap-1 text-amber-500 font-bold font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{prod1.rating}</span>
              <span className="text-slate-400 font-normal">
                ({prod1.reviewCount})
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>94% Trust</span>
            </div>
          </div>

          {/* Best Price */}
          <div className="bg-emerald-50 rounded-xl p-3 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-emerald-800 font-semibold block">
                Lowest Price ({lowest1.platform})
              </span>
              <span className="font-bold font-mono text-emerald-900 text-sm">
                ₹{lowest1.data.price.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">
              MSRP ₹{prod1.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Product B Card */}
        <div
          id="product-b-card"
          onClick={() => onSelectProduct(prod2)}
          className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 cursor-pointer hover:border-indigo-300 transition-colors"
        >
          <div className="aspect-video rounded-xl bg-slate-100 overflow-hidden">
            <img
              src={prod2.image}
              alt={prod2.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-[11px] font-mono text-indigo-600 font-bold">
              {prod2.brand}
            </span>
            <h3 className="font-bold text-slate-900 text-xs line-clamp-1 mt-0.5">
              {prod2.title}
            </h3>
          </div>

          <div className="flex items-center justify-between py-2 border-y border-slate-100 text-xs">
            <div className="flex items-center gap-1 text-amber-500 font-bold font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{prod2.rating}</span>
              <span className="text-slate-400 font-normal">
                ({prod2.reviewCount})
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-mono font-bold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>94% Trust</span>
            </div>
          </div>

          {/* Best Price */}
          <div className="bg-emerald-50 rounded-xl p-3 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-emerald-800 font-semibold block">
                Lowest Price ({lowest2.platform})
              </span>
              <span className="font-bold font-mono text-emerald-900 text-sm">
                ₹{lowest2.data.price.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">
              MSRP ₹{prod2.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Platform Price Breakdown Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
        <h2 className="text-xs font-bold text-slate-900 font-heading">
          Marketplace Price Comparison
        </h2>

        <div className="divide-y divide-slate-100 text-xs">
          {platforms.map((plat) => {
            const p1 = prod1.platforms[plat];
            const p2 = prod2.platforms[plat];
            return (
              <div
                key={plat}
                className="py-2.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <PlatformPill platform={plat} size="sm" />
                  <span className="font-semibold text-slate-700">{plat}</span>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs">
                  <span className={p1 ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    {p1 ? `₹${p1.price.toLocaleString('en-IN')}` : '—'}
                  </span>
                  <span className="text-slate-300 font-sans">vs</span>
                  <span className={p2 ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    {p2 ? `₹${p2.price.toLocaleString('en-IN')}` : '—'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

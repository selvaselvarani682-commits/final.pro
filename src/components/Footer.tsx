import React from 'react';
import { BrandLogo } from './BrandLogo';
import {
  ArrowUpRight,
  ShoppingBag,
  Sparkles,
  Mic,
  FileText,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info & Mission */}
          <div className="space-y-4">
            <BrandLogo size="lg" theme="dark" />
            <p className="text-white text-xs leading-relaxed">
              Review Analysis is an enterprise e-commerce review intelligence platform. We aggregate customer feedback across top retail platforms, calculate AI Trust Scores, and extract deep Aspect-Based Sentiment breakdowns so shoppers make confident buying choices.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-white">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300 font-semibold">
                5 Marketplaces
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
                Verified Catalog
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-400 font-semibold">
                Express Backend
              </span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Platform Modules</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#overview-section" className="text-white hover:text-amber-300 transition-colors flex items-center justify-between group">
                  <span>Product Catalog</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#search-section" className="text-white hover:text-amber-300 transition-colors flex items-center justify-between group">
                  <span>Multimodal Review Search</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#open-reviews-section" className="text-white hover:text-amber-300 transition-colors flex items-center justify-between group">
                  <span>Open Customer Reviews</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#comparator-section" className="text-white hover:text-amber-300 transition-colors flex items-center justify-between group">
                  <span>Cross-Marketplace Comparator</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#consumer-voices-section" className="text-white hover:text-amber-300 transition-colors flex items-center justify-between group">
                  <span>Verified Consumer Voices</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Marketplaces */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Supported Marketplaces</span>
            </div>
            <ul className="space-y-2.5 text-xs text-white">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Amazon India</strong>
                  <p className="text-white text-[11px]">Verified purchases, tech & audio reviews</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Myntra & Nykaa</strong>
                  <p className="text-white text-[11px]">Fashion fabrics, cosmetics & skincare tolerance</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Meesho & Snapdeal</strong>
                  <p className="text-white text-[11px]">Value commerce, pricing & regional feedback</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Intelligence Capabilities */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Review Intelligence</span>
            </div>
            <ul className="space-y-2.5 text-xs text-white">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">Aspect-Based Sentiment (ABSA)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-white font-medium">Hands-free Voice Dictation Search</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-white font-medium">Receipt & Packaging OCR Ingestion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">AI Buyer Trust & Authenticity Score</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-white font-medium">Automated Pros & Cons Breakdown</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-[11px] font-mono">
          <div className="text-white">
            © {new Date().getFullYear()} Review Analysis Inc. All rights reserved. Built with precision and intelligence.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="text-white hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

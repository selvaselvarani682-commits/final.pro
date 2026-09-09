import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Mic,
  TrendingDown,
  FileCheck,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface WhyReviewSenseProps {
  onOpenSubmitModal: () => void;
}

export const WhyReviewSense: React.FC<WhyReviewSenseProps> = ({ onOpenSubmitModal }) => {
  const pillars = [
    {
      icon: Layers,
      title: 'Cross-Marketplace Normalization',
      tag: '5 Platforms',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description:
        'Unified customer sentiment aggregated across Amazon, Nykaa, Myntra, Meesho, and Snapdeal into a single normalized data stream.',
    },
    {
      icon: Sparkles,
      title: 'AI Aspect-Based Sentiment (ABSA)',
      tag: 'Facet Granularity',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description:
        'Breaks down generic star ratings into tangible product attributes: battery endurance, acoustic fidelity, skin irritation, and sizing accuracy.',
    },
    {
      icon: ShieldCheck,
      title: 'Authenticity & Bot Shield',
      tag: '94.8% Precision',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Proprietary trust index scoring verifies authentic buyer claims and filters out promotional spam, compensated feedback, and review fraud.',
    },
    {
      icon: Mic,
      title: 'Multi-Modal Review Ingestion',
      tag: 'Text • OCR • Voice',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description:
        'Ingest consumer reviews effortlessly through direct text, receipt and packaging photo OCR scanning, or voice dictation.',
    },
    {
      icon: TrendingDown,
      title: 'Price Parity & Best Deal Detection',
      tag: 'Real-Time Pricing',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'Continuously tracks marketplace pricing against brand MSRP to identify genuine deals versus artificial price markups.',
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Executive Reports',
      tag: 'JSON & CSV Export',
      tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
      description:
        'One-click JSON export and actionable AI summaries for brand managers, e-commerce sellers, and product engineering teams.',
    },
  ];

  return (
    <section id="why-us-section" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FCA92B] bg-slate-950 px-3 py-1 rounded-full uppercase tracking-wider font-mono shadow-xs">
            <Zap className="w-3 h-3 text-[#FCA92B]" />
            Enterprise Craftsmanship
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight">
            Why Review Analysis?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Built with enterprise craftsmanship, diligence, and precision analytics for global e-commerce.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:border-slate-400 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#FCA92B]" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-[#FCA92B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCA92B] font-mono">
                Verified Consumer Community
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Have verified customer feedback to share?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ingest your own review with our multi-modal analyzer. Run instant aspect extraction and verify cross-marketplace trust ratings.
              </p>
            </div>

            <button
              onClick={onOpenSubmitModal}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-[#FCA92B] hover:bg-[#e0921e] text-slate-950 transition-colors cursor-pointer flex items-center gap-2 self-start md:self-auto shrink-0 shadow-xs"
            >
              <span>Submit & Analyze Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

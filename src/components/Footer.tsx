import React, { useState } from 'react';
import {
  Sparkles,
  Shield,
  FileText,
  Mail,
  X,
  CheckCircle2,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { StoryboardPage } from '../types';

interface FooterProps {
  onNavigate?: (page: StoryboardPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: StoryboardPage) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#030712] text-slate-400 text-xs border-t border-slate-800/80 pt-12 pb-10 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Grid matching reference image exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand Logo, Tagline, Description & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Logo + SmartReview AI Header */}
            <div
              onClick={() => handleNav('home')}
              className="inline-flex items-center gap-2.5 cursor-pointer group select-none"
            >
              {/* Rounded icon box with subtle glow */}
              <div className="w-9 h-9 rounded-xl bg-[#0B1120] border border-indigo-500/40 text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-950/50 group-hover:border-indigo-400 transition-colors">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:scale-105 transition-transform" />
              </div>

              {/* Title & AI pill */}
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  SmartReview
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-indigo-600 text-white tracking-wider shadow-2xs">
                  AI
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Transform raw customer reviews across text, audio voice, and unboxing images into actionable business intelligence with deep sentiment analysis and feature extraction.
            </p>

            {/* 4 Social Icon Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-[#0B1120] border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-[#0B1120] border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0B1120] border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email / Mail */}
              <a
                href="mailto:contact@smartreview.ai"
                aria-label="Contact Email"
                className="w-8 h-8 rounded-lg bg-[#0B1120] border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: NAVIGATION (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Explore Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-text')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analyze Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('platform-comparison')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analytics Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CAPABILITIES (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              CAPABILITIES
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('ai-text')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Text Sentiment Scoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-voice')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Speech-to-Text Voice Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-image')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Image & OCR Extraction
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-text')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Feature Aspect Mining
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('platform-comparison')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Side-by-Side Product Comparison
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: COMPLIANCE (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              COMPLIANCE
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="group-hover:text-white">Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="group-hover:text-white">Terms of Service</span>
                </button>
              </li>
              <li>
                <span className="text-slate-400 block">
                  MongoDB Atlas Ready
                </span>
              </li>
              <li>
                <span className="text-slate-400 block">
                  TextBlob & NLTK Specs
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="border-t border-slate-900/90 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SmartReview AI Platform. All rights reserved.
          </div>
          <div>
            Powered by Gemini 3.8 Flash & Advanced Sentiment Engine
          </div>
        </div>
      </div>

      {/* Interactive Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold font-heading">Privacy Policy</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Data Encryption & Security:</strong> All user customer reviews, transcribed voice audio streams, and OCR images are processed securely using HTTPS and encrypted in transit and at rest with cloud storage safeguards.
              </p>
              <p>
                <strong>2. Real Microphone & Camera Audio:</strong> Voice dictation and uploaded unboxing photos are utilized solely for generating Aspect-Based Sentiment Analysis and customer intelligence. No raw voice biometric identification is stored.
              </p>
              <p>
                <strong>3. Cross-Marketplace Anonymization:</strong> Product review comparison across Amazon, Meesho, Myntra, Nykaa, and Snapdeal aggregates public verified sentiment without exposing personal customer identifiers.
              </p>
              <p>
                <strong>4. Cloud Database Compliance:</strong> Persistent records are synced through authenticated cloud endpoints with strict Firestore security rules.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Terms of Service Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold font-heading">Terms of Service</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Platform Purpose:</strong> SmartReview AI provides automated Aspect-Based Sentiment Analysis, OCR vision extraction, and cross-platform price comparison to assist buyers and administrators.
              </p>
              <p>
                <strong>2. Accuracy & Evaluation:</strong> AI models (including Gemini 3.8 Flash and NLP ABSA classifiers) generate probabilistic sentiment and aspect scores. While achieving high fidelity, buyers are advised to exercise personal judgment.
              </p>
              <p>
                <strong>3. Fair Use & Verified Feedback:</strong> Users submitting reviews via text, voice, or image certify that the feedback represents authentic product usage and does not contain unlawful or abusive content.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;

import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import {
  Search,
  MessageSquarePlus,
  Menu,
  X,
} from 'lucide-react';

export type EnterpriseNavSection =
  | 'overview'
  | 'products'
  | 'review-search'
  | 'open-reviews'
  | 'why-us'
  | 'consumer-voices'
  | 'comparator';

interface EnterpriseNavbarProps {
  activeSection: EnterpriseNavSection;
  onSelectSection: (section: EnterpriseNavSection) => void;
  reviewCount: number;
  onOpenSubmitModal: () => void;
  onFocusSearch: () => void;
}

export const EnterpriseNavbar: React.FC<EnterpriseNavbarProps> = ({
  activeSection,
  onSelectSection,
  reviewCount,
  onOpenSubmitModal,
  onFocusSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: EnterpriseNavSection; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'review-search', label: 'Multimodal Search' },
    { id: 'open-reviews', label: 'Open Reviews' },
    { id: 'why-us', label: 'Why Review Analysis' },
    { id: 'consumer-voices', label: 'Consumer Voices' },
    { id: 'comparator', label: 'Compare Products' },
  ];

  const handleNavClick = (section: EnterpriseNavSection) => {
    onSelectSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 shadow-md">
      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          id="app-brand-logo"
          onClick={() => handleNavClick('overview')}
          className="cursor-pointer"
        >
          <BrandLogo size="md" theme="dark" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs text-white">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-slate-800 font-bold ring-1 ring-slate-700 shadow-xs'
                    : 'text-white hover:text-white hover:bg-slate-800/70 font-semibold'
                }`}
              >
                <span className="font-semibold text-white tracking-normal">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search Button */}
          <button
            id="nav-quick-search-btn"
            onClick={onFocusSearch}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Search reviews"
            aria-label="Search reviews"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Submit Review CTA */}
          <button
            id="nav-submit-review-btn"
            onClick={onOpenSubmitModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FCA92B] text-slate-950 hover:bg-amber-400 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-slate-950" />
            <span className="hidden sm:inline">Submit Review</span>
            <span className="sm:hidden">Submit</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-white font-bold ring-1 ring-slate-700'
                    : 'text-white hover:bg-slate-900 font-semibold'
                }`}
              >
                <span className="text-white font-semibold">{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmitModal();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#FCA92B] text-slate-950 hover:bg-amber-400 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-slate-950" />
              <span>Submit New Customer Review</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

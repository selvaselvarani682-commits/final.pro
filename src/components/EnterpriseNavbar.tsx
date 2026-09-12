import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import {
  Search,
  MessageSquarePlus,
  Menu,
  X,
  Package,
  ShoppingBag,
} from 'lucide-react';

export type EnterpriseNavSection =
  | 'overview'
  | 'products'
  | 'review-search'
  | 'open-reviews'
  | 'comparator';

interface EnterpriseNavbarProps {
  activeSection: EnterpriseNavSection;
  onSelectSection: (section: EnterpriseNavSection) => void;
  reviewCount: number;
  onOpenSubmitModal: () => void;
  onFocusSearch: () => void;
  orderCount?: number;
  onOpenOrders?: () => void;
}

export const EnterpriseNavbar: React.FC<EnterpriseNavbarProps> = ({
  activeSection,
  onSelectSection,
  reviewCount,
  onOpenSubmitModal,
  onFocusSearch,
  orderCount = 0,
  onOpenOrders,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: EnterpriseNavSection; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'review-search', label: 'Multimodal Search' },
    { id: 'open-reviews', label: 'Open Reviews' },
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
        <div className="flex items-center gap-2">
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

          {/* Unique My Orders / Purchases Button */}
          {onOpenOrders && (
            <button
              id="nav-orders-btn"
              onClick={onOpenOrders}
              className="group relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 border border-emerald-400/40 shadow-sm hover:shadow-emerald-900/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              title="Track Orders, Deliveries & Receipts"
            >
              <span className="relative flex items-center justify-center w-5 h-5 rounded-lg bg-emerald-950/30 border border-emerald-300/30 group-hover:bg-emerald-950/40 transition-colors">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-100 group-hover:rotate-6 transition-transform duration-200" />
              </span>
              <span className="tracking-wide">My Orders</span>
              {orderCount > 0 ? (
                <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[10px] font-black font-mono text-emerald-950 bg-amber-300 rounded-full shadow-xs ring-1 ring-amber-400/50 animate-pulse">
                  {orderCount}
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
              )}
            </button>
          )}

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
          {onOpenOrders && (
            <div className="pb-2 mb-2 border-b border-slate-800">
              <button
                id="mobile-nav-orders-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrders();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 border border-emerald-400/30 cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-emerald-200" />
                  <span>My Orders & Shipments</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-300 text-slate-950 text-[10px] font-black font-mono">
                  {orderCount} {orderCount === 1 ? 'order' : 'orders'}
                </span>
              </button>
            </div>
          )}
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

import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import {
  Search,
  MessageSquarePlus,
  Menu,
  X,
  Zap,
  Flame,
  Package,
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
  coins?: number;
  onOpenPerks?: () => void;
  viewMode?: 'all' | 'single';
  onToggleViewMode?: () => void;
}

export const EnterpriseNavbar: React.FC<EnterpriseNavbarProps> = ({
  activeSection,
  onSelectSection,
  reviewCount,
  onOpenSubmitModal,
  onFocusSearch,
  orderCount = 0,
  onOpenOrders,
  coins = 350,
  onOpenPerks,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: EnterpriseNavSection; label: string; moduleNum: string }[] = [
    { id: 'overview', label: 'Home', moduleNum: 'P1' },
    { id: 'products', label: 'Products', moduleNum: 'P2' },
    { id: 'review-search', label: 'Search AI', moduleNum: 'P3' },
    { id: 'open-reviews', label: 'Reviews', moduleNum: 'P4' },
    { id: 'comparator', label: 'Price Match', moduleNum: 'P5' },
  ];

  const handleNavClick = (section: EnterpriseNavSection) => {
    onSelectSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <div
          id="app-brand-logo"
          onClick={() => handleNavClick('overview')}
          className="cursor-pointer shrink-0"
        >
          <BrandLogo size="md" theme="light" />
        </div>

        {/* Desktop 5 Pages Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold whitespace-nowrap min-h-[36px] ${
                  isActive
                    ? 'text-slate-900 bg-slate-100 ring-1 ring-slate-300 shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Quick Search Button */}
          <button
            id="nav-quick-search-btn"
            onClick={onFocusSearch}
            className="p-2 sm:p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Search reviews & products"
            aria-label="Search reviews & products"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Flash Perks Trigger (Coins & Streak) */}
          {onOpenPerks && (
            <button
              onClick={onOpenPerks}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer min-h-[38px] shadow-2xs"
              title="View Flash Perks & Rewards"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-mono font-black text-slate-900">{coins}</span>
              <span className="text-[10px] text-slate-500 uppercase font-sans">Coins</span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] text-amber-600 font-bold flex items-center gap-0.5">
                <Flame className="w-3 h-3 fill-amber-500 text-amber-500" /> 4d
              </span>
            </button>
          )}

          {/* Orders Button (Changed from Flash Box into Order Button as requested) */}
          {onOpenOrders && (
            <button
              id="nav-orders-btn"
              onClick={onOpenOrders}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[44px]"
              title="Track Orders, Deliveries & Packages"
            >
              <Package className="w-4 h-4 text-[#E2F952]" />
              <span className="font-extrabold tracking-wide">Orders</span>
              {orderCount > 0 ? (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-black font-mono text-black bg-[#E2F952] rounded-full shadow-2xs">
                  {orderCount}
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F952]" />
              )}
            </button>
          )}

          {/* Submit Review CTA */}
          <button
            id="nav-submit-review-btn"
            onClick={onOpenSubmitModal}
            className="px-3 sm:px-3.5 py-2 rounded-xl text-xs font-extrabold bg-[#E2F952] text-slate-950 hover:bg-[#d6f03d] border border-black/10 shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5 min-h-[44px]"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">Write Review</span>
            <span className="sm:hidden">+ Review</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 md:hidden cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="md:hidden border-t border-slate-200 bg-white/95 px-4 py-3 space-y-2 shadow-xl backdrop-blur-md">
          {/* Mobile Flash Perks */}
          {onOpenPerks && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPerks();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold cursor-pointer min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Flash Perks & Coins</span>
              </div>
              <span className="font-mono text-slate-900 font-extrabold">{coins} Coins ⚡</span>
            </button>
          )}

          {/* Mobile Orders Button */}
          {onOpenOrders && (
            <button
              id="mobile-nav-orders-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrders();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer min-h-[44px] shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#E2F952]" />
                <span>Orders & Deliveries</span>
              </div>
              <span className="font-mono bg-[#E2F952] text-black font-extrabold px-2 py-0.5 rounded-full text-[10px]">
                {orderCount} Orders
              </span>
            </button>
          )}

          {/* Navigation Links for Mobile */}
          <div className="pt-2 space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-500 px-3 py-1 font-bold">
              Navigate Pages (5 Pages Live)
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold cursor-pointer min-h-[42px] transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-[#E2F952]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono opacity-70">{item.moduleNum}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import {
  Search,
  Bookmark,
  Store,
  X,
  User,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  LogOut,
  Zap,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { StoryboardPage } from '../types';

interface ReviewAINavbarProps {
  currentPage: StoryboardPage;
  onNavigate: (page: StoryboardPage) => void;
  cartCount: number;
  onSearch: (query: string) => void;
  searchQuery: string;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isAdmin?: boolean;
}

export const ReviewAINavbar: React.FC<ReviewAINavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onSearch,
  searchQuery,
  selectedCategory,
  onSelectCategory,
  isAdmin = false,
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Storyboard switcher
  const [screenSwitcherOpen, setScreenSwitcherOpen] = useState(false);

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty',
    'Sports',
    'Books',
    'More',
  ];

  const screenList: { id: StoryboardPage; label: string; number: string }[] = [
    { id: 'home', label: '1. Home Page', number: '1' },
    { id: 'products', label: '2. Product Listing', number: '2' },
    { id: 'product-details', label: '3. Product Details', number: '3' },
    { id: 'ai-text', label: '4. AI Review - Text', number: '4' },
    { id: 'ai-voice', label: '5. AI Review - Voice', number: '5' },
    { id: 'ai-image', label: '6. AI Review - Image', number: '6' },
    { id: 'platform-comparison', label: '7. Platform Comparison', number: '7' },
    { id: 'cart', label: '8. Cart Page', number: '8' },
    { id: 'profile', label: '10. User Profile', number: '10' },
    { id: 'admin', label: '11. Admin Panel', number: '11' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearch);
    if (currentPage !== 'products' && currentPage !== 'home') {
      onNavigate('products');
    }
  };

  const currentScreenObj = screenList.find((s) => s.id === currentPage) || screenList[0];

  return (
    <div className="relative z-40 bg-white">
      {/* Top Storyboard Pill Badge (matching image: "1. Home Page") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-1 flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setScreenSwitcherOpen(!screenSwitcherOpen)}
            className="inline-flex items-center gap-1.5 bg-[#0F172A] text-white px-3.5 py-1.5 rounded-xl text-xs font-black font-heading shadow-md hover:bg-slate-800 transition-colors cursor-pointer select-none"
            title="Click to switch between storyboard screens"
          >
            <span>{currentScreenObj.label}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* Screen Switcher Dropdown */}
          {screenSwitcherOpen && (
            <div className="absolute left-0 top-full mt-1.5 w-60 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                Switch Storyboard Screen:
              </div>
              {screenList.map((scr) => (
                <button
                  key={scr.id}
                  onClick={() => {
                    if (scr.id === 'admin' && !isAdmin) {
                      onNavigate('admin-login');
                    } else {
                      onNavigate(scr.id);
                    }
                    setScreenSwitcherOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                    currentPage === scr.id ? 'text-[#4F46E5] font-black bg-indigo-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>{scr.label}</span>
                  {currentPage === scr.id && <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main ReviewAI Navbar (Exactly matching the uploaded image) */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo: Gradient rounded square + ReviewAI */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 select-none cursor-pointer group shrink-0"
          >
            {/* Gradient Logo Icon (Pink-Purple to Cyan/Blue Gradient) */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9333EA] via-[#6366F1] to-[#38BDF8] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform p-1.5">
              <div className="w-full h-full rounded-lg border-2 border-white/90" />
            </div>

            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] font-heading">
              ReviewAI
            </span>
          </div>

          {/* Center Search Bar: Rounded input with search icon on the left */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xl mx-4 relative"
          >
            <div className="relative w-full flex items-center bg-white rounded-xl border border-slate-300 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20 transition-all">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search for products, brands, or categories..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
              />
            </div>
          </form>

          {/* Right Actions: Wishlist and Direct Cart Button */}
          <div className="relative flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Wishlist Ribbon/Bookmark Icon */}
            <button
              onClick={() => onNavigate('profile')}
              className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-semibold hidden md:inline text-slate-700">Wishlist</span>
            </button>

            {/* Direct Cart Button */}
            <button
              onClick={() => onNavigate('cart')}
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer select-none flex items-center gap-2"
            >
              <span>Cart</span>
              <span className="w-5 h-5 rounded-full bg-indigo-800 text-white text-[11px] font-mono flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>

            {/* Admin Active Shortcut if logged in */}
            {isAdmin && (
              <button
                onClick={() => onNavigate('admin')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer border border-slate-700"
              >
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Admin</span>
              </button>
            )}
          </div>
        </div>

        {/* Sub-Category Navigation Bar (matching image: All Categories with Store icon + categories) */}
        <div className="border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-700 overflow-x-auto no-scrollbar py-2.5">
            {/* All Categories with Store/Layers Icon */}
            <button
              onClick={() => {
                onSelectCategory('All Categories');
                onNavigate('products');
              }}
              className="flex items-center gap-2 font-bold text-slate-900 hover:text-[#4F46E5] transition-colors cursor-pointer shrink-0"
            >
              <Store className="w-4 h-4 text-slate-700" />
              <span>All Categories</span>
            </button>

            {/* Category Links matching screenshot: Electronics, Fashion, Home & Living, Beauty, Sports, Books, More */}
            <div className="flex items-center gap-6 sm:gap-7">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat);
                      onNavigate('products');
                    }}
                    className={`whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? 'text-[#4F46E5] font-extrabold'
                        : 'hover:text-[#4F46E5]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

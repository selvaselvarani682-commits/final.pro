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
}

export const ReviewAINavbar: React.FC<ReviewAINavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onSearch,
  searchQuery,
  selectedCategory,
  onSelectCategory,
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Auth & Wishlist Dropdown Box states
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'wishlist'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('24bit015@stc.ac.in');
  const [userName, setUserName] = useState('Selvarani K');
  const [password, setPassword] = useState('password123');
  const [authToast, setAuthToast] = useState<string | null>(null);

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

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthToast(`Signed in as ${userName} (${userEmail})`);
    setTimeout(() => {
      setAuthToast(null);
      setIsAuthOpen(false);
    }, 1800);
  };

  const handleQuickDemo = (email: string, name: string) => {
    setUserEmail(email);
    setUserName(name);
    setIsLoggedIn(true);
    setAuthToast(`Logged in as ${name}`);
    setTimeout(() => {
      setAuthToast(null);
      setIsAuthOpen(false);
    }, 1500);
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
                    onNavigate(scr.id);
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

          {/* Right Actions: Wishlist Icon, Login Text, and Sign Up Pill Button */}
          <div className="relative flex items-center gap-4 sm:gap-5 shrink-0">
            {/* Wishlist Ribbon/Bookmark Icon */}
            <button
              onClick={() => {
                setAuthMode('wishlist');
                setIsAuthOpen(!isAuthOpen || authMode !== 'wishlist');
              }}
              className="p-1.5 text-slate-700 hover:text-[#4F46E5] transition-colors cursor-pointer"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Bookmark className="w-5 h-5" />
            </button>

            {/* Login Link */}
            <button
              onClick={() => {
                setAuthMode('login');
                setIsAuthOpen(!isAuthOpen || authMode !== 'login');
              }}
              className="text-xs sm:text-sm font-bold text-[#4F46E5] hover:text-indigo-800 transition-colors cursor-pointer px-1 py-1"
            >
              {isLoggedIn ? 'Account' : 'Login'}
            </button>

            {/* Sign Up Pill Button */}
            <button
              onClick={() => {
                if (isLoggedIn) {
                  onNavigate('cart');
                } else {
                  setAuthMode('signup');
                  setIsAuthOpen(!isAuthOpen || authMode !== 'signup');
                }
              }}
              className="px-4 sm:px-5 py-2 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer select-none"
            >
              {isLoggedIn ? `Cart (${cartCount > 0 ? cartCount : 2})` : 'Sign Up'}
            </button>

            {/* ============================================================== */}
            {/* DROPDOWN BOX POSITIONED EXACTLY UNDER THE WISHLIST / LOGIN BOX */}
            {/* ============================================================== */}
            {isAuthOpen && (
              <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-white rounded-3xl border border-slate-200 shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Header with Mode Toggle & Close Button */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAuthMode('login')}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                        authMode === 'login'
                          ? 'bg-indigo-50 text-[#4F46E5]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setAuthMode('signup')}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                        authMode === 'signup'
                          ? 'bg-indigo-50 text-[#4F46E5]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => setAuthMode('wishlist')}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                        authMode === 'wishlist'
                          ? 'bg-indigo-50 text-[#4F46E5]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Wishlist (3)
                    </button>
                  </div>

                  <button
                    onClick={() => setIsAuthOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* If Logged In: User Profile Summary inside Dropdown */}
                {isLoggedIn ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        SK
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <span>{userName}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">{userEmail}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Flash Coins
                      </span>
                      <span className="font-bold text-indigo-700">350 Coins</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setAuthToast('Logged out');
                          setTimeout(() => setAuthToast(null), 2000);
                        }}
                        className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>

                      <button
                        onClick={() => {
                          onNavigate('profile');
                          setIsAuthOpen(false);
                        }}
                        className="px-4 py-2 rounded-xl bg-[#4F46E5] text-white text-xs font-bold shadow-xs hover:bg-indigo-700 cursor-pointer"
                      >
                        View Full Profile
                      </button>
                    </div>
                  </div>
                ) : authMode === 'wishlist' ? (
                  /* Wishlist Quick View inside Dropdown */
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                      Saved Wishlist Items:
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div>
                          <div className="font-bold text-slate-900">iPhone 15 (128GB)</div>
                          <div className="text-indigo-600 font-bold">₹69,900</div>
                        </div>
                        <button
                          onClick={() => {
                            onNavigate('product-details');
                            setIsAuthOpen(false);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px] cursor-pointer"
                        >
                          View
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div>
                          <div className="font-bold text-slate-900">Nike Running Shoes</div>
                          <div className="text-indigo-600 font-bold">₹4,499</div>
                        </div>
                        <button
                          onClick={() => {
                            onNavigate('product-details');
                            setIsAuthOpen(false);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px] cursor-pointer"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Login / Sign Up Form inside Dropdown under Wishlist Box */
                  <form onSubmit={handleAuthSubmit} className="space-y-3">
                    <div className="text-xs text-slate-500">
                      {authMode === 'login'
                        ? 'Sign in to access your saved reviews & orders.'
                        : 'Create a free account to compare reviews across platforms.'}
                    </div>

                    {authMode === 'signup' && (
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Selvarani K"
                            className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="24bit015@stc.ac.in"
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600 font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                    >
                      <span>{authMode === 'login' ? 'Sign In' : 'Create Account'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* 1-Click Demo Login */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Quick Test:</span>
                      <button
                        type="button"
                        onClick={() => handleQuickDemo('24bit015@stc.ac.in', 'Selvarani K')}
                        className="text-[#4F46E5] font-bold hover:underline cursor-pointer"
                      >
                        1-Click Student Login
                      </button>
                    </div>
                  </form>
                )}

                {/* Toast Notification inside box */}
                {authToast && (
                  <div className="mt-3 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{authToast}</span>
                  </div>
                )}
              </div>
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

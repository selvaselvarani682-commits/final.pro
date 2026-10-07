import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Star,
  Smartphone,
  Shirt,
  Sparkles,
  Home,
  Dumbbell,
  BookOpen,
  Gamepad2,
  Apple,
  ShoppingBag,
  ShoppingCart,
  Scale,
  FileText,
  Image as ImageIcon,
  Mic,
  Smile,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  ExternalLink,
} from 'lucide-react';
import { Product, StoryboardPage } from '../types';

import heroPhonesImg from '../assets/images/hero_smartphones_duo_1790849345911.jpg';
import promoBeautyImg from '../assets/images/promo_beauty_skincare_1790849313505.jpg';
import promoHomeImg from '../assets/images/promo_home_sofa_1790849330783.jpg';

interface HomePageViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: StoryboardPage) => void;
  onAddToCart: (product: Product) => void;
  onSelectCategory?: (category: string) => void;
}

export const HomePageView: React.FC<HomePageViewProps> = ({
  products,
  onSelectProduct,
  onNavigate,
  onAddToCart,
  onSelectCategory,
}) => {
  const [heroSearch, setHeroSearch] = useState('');

  // All supported categories with styling
  const allCategoryPills = [
    { name: 'Electronics', icon: Smartphone, bg: 'bg-blue-100', text: 'text-blue-600' },
    { name: 'Fashion', icon: Shirt, bg: 'bg-rose-100', text: 'text-rose-500' },
    { name: 'Home & Living', icon: Home, bg: 'bg-sky-100', text: 'text-sky-600' },
    { name: 'Beauty', icon: Sparkles, bg: 'bg-pink-100', text: 'text-pink-600' },
    { name: 'Sports', icon: Dumbbell, bg: 'bg-amber-100', text: 'text-amber-700' },
    { name: 'Books', icon: BookOpen, bg: 'bg-blue-100', text: 'text-blue-600' },
    { name: 'Toys', icon: Gamepad2, bg: 'bg-amber-100', text: 'text-amber-800' },
    { name: 'Groceries', icon: Apple, bg: 'bg-emerald-100', text: 'text-emerald-600' },
  ];

  // Dynamically remove any category that has 0 products
  const categoryPills = useMemo(() => {
    const existingCategorySet = new Set(products.map((p) => p.category));
    return allCategoryPills.filter((cat) => existingCategorySet.has(cat.name));
  }, [products]);

  // 6 Featured Products matching the screenshot
  const featuredProductIds = [
    'prod-iphone-15',
    'prod-nike-shoes',
    'prod-samsung-tv',
    'prod-nykaa-lipstick',
    'prod-backpack',
    'prod-air-fryer',
  ];

  const featuredList = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('products');
  };

  const getDiscountPercent = (p: Product) => {
    if (p.id === 'prod-iphone-15') return '-12%';
    if (p.id === 'prod-nike-shoes') return '-20%';
    if (p.id === 'prod-samsung-tv') return '-15%';
    if (p.id === 'prod-nykaa-lipstick') return '-18%';
    if (p.id === 'prod-backpack') return '-25%';
    if (p.id === 'prod-air-fryer') return '-10%';
    return `-${Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%`;
  };

  const formatReviewCount = (p: Product) => {
    if (p.id === 'prod-iphone-15') return '12.4k';
    if (p.id === 'prod-nike-shoes') return '8.6k';
    if (p.id === 'prod-samsung-tv') return '5.2k';
    if (p.id === 'prod-nykaa-lipstick') return '3.1k';
    if (p.id === 'prod-backpack') return '2.8k';
    if (p.id === 'prod-air-fryer') return '2.9k';
    return `${(p.reviewCount / 1000).toFixed(1)}k`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
      {/* ============================================================== */}
      {/* 1. HERO BANNER: SHOP SMARTER WITH AI REVIEW ANALYSIS          */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-[#EEF2FF] to-[#FAF5FF] border border-indigo-100/90 p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle, Search & Modality Badges */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>AI Powered Review Analysis</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-heading">
                Shop Smarter with <br className="hidden sm:inline" />
                <span className="text-[#4338CA]">AI Review Analysis</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Compare reviews from multiple platforms and make better buying decisions.
              </p>
            </div>

            {/* Hero Search Box */}
            <form onSubmit={handleHeroSearchSubmit} className="flex items-center max-w-md pt-1">
              <div className="relative flex-1 flex items-center bg-white rounded-2xl border border-slate-300 shadow-xs pl-4 pr-1 py-1 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20">
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search for products, brands and categories..."
                  className="w-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-3 bg-[#4338CA] hover:bg-indigo-700 text-white rounded-xl transition-all cursor-pointer shrink-0 shadow-sm"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* 4 Quick Filter / Action Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <button
                onClick={() => onNavigate('ai-text')}
                className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                <span>Text Search</span>
              </button>

              <button
                onClick={() => onNavigate('ai-image')}
                className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ImageIcon className="w-3.5 h-3.5 text-indigo-500" />
                <span>Image Search</span>
              </button>

              <button
                onClick={() => onNavigate('ai-voice')}
                className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Mic className="w-3.5 h-3.5 text-indigo-500" />
                <span>Voice Search</span>
              </button>

              <button
                onClick={() => onNavigate('platform-comparison')}
                className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-indigo-500" />
                <span>Platform Comparison</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composite matching the screenshot */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px]">
            {/* Hand-drawn style note: "Compare Reviews Across Platforms" */}
            <div className="hidden xl:flex absolute -left-12 top-24 z-20 flex-col items-center">
              <span className="text-xs font-bold text-[#4338CA] -rotate-12 whitespace-nowrap drop-shadow-xs">
                Compare <br /> Reviews Across <br /> Platforms
              </span>
              <svg className="w-8 h-8 text-[#4338CA] mt-1 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            {/* Center: Dual Smartphone Mockup */}
            <div className="relative z-10 w-44 sm:w-52 md:w-56 drop-shadow-xl group">
              <img
                src={heroPhonesImg}
                alt="Smartphone with ReviewAI comparison"
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Floating Speech Bubble: "Great quality, but delivery was late." */}
            <div className="absolute top-2 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 px-3 py-2 shadow-md flex items-center gap-2 max-w-[210px] animate-in fade-in duration-300">
              <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] text-slate-800 font-medium leading-tight">
                "Great quality, but delivery was late."
              </span>
            </div>

            {/* Floating Platforms Cluster Card */}
            <div className="absolute -bottom-3 left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-2.5 shadow-lg flex flex-col gap-1.5 w-28 sm:w-32">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-black text-[#FF9900] tracking-tighter">amazon</span>
                <span className="text-[10px] font-bold text-pink-600 px-1 py-0.2 rounded bg-pink-50">meesho</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-black text-rose-500">Myntra</span>
                <span className="text-[10px] font-black text-pink-500 tracking-wider">NYKAA</span>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-red-500">snapdeal</span>
              </div>
            </div>

            {/* Floating Review AI Box (Changed to Black & Minimized Box Size) */}
            <div className="absolute bottom-4 -right-1 sm:right-0 z-20 bg-slate-950/95 text-white rounded-2xl border border-slate-800/90 shadow-2xl p-2.5 w-38 sm:w-42 space-y-1.5 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-1">
                <span className="text-[11px] font-black text-white font-heading tracking-tight flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Review AI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Overall Sentiment */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Smile className="w-3.5 h-3.5" />
                </div>
                <div className="leading-none">
                  <div className="text-[8px] text-slate-400 font-medium">Sentiment</div>
                  <div className="text-[10px] font-black text-emerald-400 mt-0.5">Positive (78%)</div>
                </div>
              </div>

              {/* Key Aspects Bars (Compact & Minimized) */}
              <div className="space-y-1 pt-0.5">
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider font-mono">Aspects</div>

                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-slate-300 flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> Quality
                  </span>
                  <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-[8px] font-bold text-emerald-400">85%</span>
                </div>

                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-slate-300 flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> Price
                  </span>
                  <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-[8px] font-bold text-emerald-400">80%</span>
                </div>

                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-slate-300 flex items-center gap-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[6px]">!</span> Delivery
                  </span>
                  <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-rose-500 rounded-full" />
                  </div>
                  <span className="text-[8px] font-bold text-rose-400">45%</span>
                </div>

                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-slate-300 flex items-center gap-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Battery
                  </span>
                  <div className="w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[50%] h-full bg-amber-500 rounded-full" />
                  </div>
                  <span className="text-[8px] font-bold text-amber-400">50%</span>
                </div>
              </div>

              {/* View Full Analysis Link */}
              <button
                onClick={() => onNavigate('ai-text')}
                className="text-[9px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-between pt-0.5 cursor-pointer w-full"
              >
                <span>Full Analysis</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CIRCULAR CATEGORY ICONS (8 CATEGORIES)                       */}
      {/* ============================================================== */}
      <section className="py-2">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-6 text-center">
          {categoryPills.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(cat.name);
                  }
                  onNavigate('products');
                }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${cat.bg} ${cat.text} flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-md shadow-2xs`}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FEATURED PRODUCTS (6 CARDS WITH RATINGS, PRICES, ADD TO CART)*/}
      {/* ============================================================== */}
      <section className="space-y-4">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🔥</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              Featured Products
            </h2>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="text-xs sm:text-sm font-bold text-[#4338CA] hover:text-indigo-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Products Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredList.map((product) => {
            const discount = getDiscountPercent(product);
            const reviewStr = formatReviewCount(product);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 p-3.5 flex flex-col justify-between relative group"
              >
                {/* Red Discount Badge */}
                <div className="absolute top-3 right-3 z-10 px-1.5 py-0.5 rounded-md bg-rose-600 text-white font-black text-[10px]">
                  {discount}
                </div>

                {/* Product Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="w-full h-36 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-2 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="pt-3 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors cursor-pointer"
                      title={product.title}
                    >
                      {product.title}
                    </h3>

                    {/* Star Rating & Review Count */}
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 pt-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-700">{product.rating}</span>
                      <span>({reviewStr})</span>
                    </div>

                    {/* Price and Original Price */}
                    <div className="flex items-baseline gap-1.5 pt-1">
                      <span className="text-sm font-black text-slate-900 font-heading">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-2 bg-[#4338CA] hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THREE PROMO BANNERS ROW                                      */}
      {/* ============================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Banner 1: Top Brands Best Deals (Blue) */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white p-6 relative overflow-hidden flex flex-col justify-between min-h-[170px] shadow-sm">
          <div className="relative z-10 space-y-1">
            <span className="text-xs font-bold text-blue-200 block uppercase tracking-wider font-mono">
              Top Brands
            </span>
            <h3 className="text-2xl font-black font-heading leading-tight">
              Best Deals
            </h3>
            <p className="text-xs text-blue-100">
              Up to 50% off on Electronics
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="px-4 py-2 rounded-xl bg-white text-indigo-700 hover:bg-blue-50 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Image Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-36 overflow-hidden opacity-90">
            <img
              src={heroPhonesImg}
              alt="Electronics deals"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        {/* Banner 2: Beauty & Personal Care (Pink) */}
        <div className="rounded-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 border border-pink-200/80 p-6 relative overflow-hidden flex flex-col justify-between min-h-[170px] shadow-sm">
          <div className="relative z-10 space-y-1">
            <span className="text-xs font-bold text-pink-600 block uppercase tracking-wider font-mono">
              Beauty & Personal Care
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-heading leading-tight">
              Flat 20% Off
            </h3>
          </div>

          <div className="relative z-10 pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="px-4 py-2 rounded-xl bg-[#6366F1] hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Image Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-44 overflow-hidden">
            <img
              src={promoBeautyImg}
              alt="Beauty collection"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Banner 3: Home Essentials (Mint / Green) */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border border-emerald-200/80 p-6 relative overflow-hidden flex flex-col justify-between min-h-[170px] shadow-sm">
          <div className="relative z-10 space-y-1">
            <span className="text-xs font-bold text-emerald-800 block uppercase tracking-wider font-mono">
              Home Essentials
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-heading leading-tight">
              Starting ₹99
            </h3>
          </div>

          <div className="relative z-10 pt-4">
            <button
              onClick={() => onNavigate('products')}
              className="px-4 py-2 rounded-xl bg-[#065F46] hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Image Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-44 overflow-hidden">
            <img
              src={promoHomeImg}
              alt="Home decor"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. VALUE PROPOSITIONS & TRUST BAR                              */}
      {/* ============================================================== */}
      <section className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Trust Item 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Secure Payments</div>
              <div className="text-[11px] text-slate-500">100% safe & encrypted</div>
            </div>
          </div>

          {/* Trust Item 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Fast Delivery</div>
              <div className="text-[11px] text-slate-500">Quick & reliable shipping</div>
            </div>
          </div>

          {/* Trust Item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Easy Returns</div>
              <div className="text-[11px] text-slate-500">Hassle free returns</div>
            </div>
          </div>

          {/* Trust Item 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">24/7 Support</div>
              <div className="text-[11px] text-slate-500">We're here to help</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

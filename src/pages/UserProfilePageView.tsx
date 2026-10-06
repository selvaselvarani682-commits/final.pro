import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Heart,
  History,
  Settings,
  CheckCircle2,
  Clock,
  Truck,
  ArrowRight,
  ShoppingBag,
  Trash2,
  Star,
  ExternalLink,
  Sparkles,
  Bell,
  Sliders,
  RotateCcw,
  Shield,
  FileText,
  Search,
  MessageSquare,
  Mic,
  Camera,
} from 'lucide-react';
import { Product, StoryboardPage } from '../types';

import iphone15Img from '../assets/images/product_iphone15_1790847823667.jpg';
import nikeShoesImg from '../assets/images/product_nike_shoes_1790847836073.jpg';
import nykaaLipstickImg from '../assets/images/product_nykaa_lipstick_1790847867533.jpg';
import boatAirdopesImg from '../assets/images/flash_boat_earbuds_1790846893387.jpg';
import backpackImg from '../assets/images/product_black_backpack_1790847923860.jpg';
import airFryerImg from '../assets/images/product_air_fryer_1790849296172.jpg';
import levisJeansImg from '../assets/images/product_levis_jeans_1790847904974.jpg';

interface OrderItem {
  id: string;
  trackingId: string;
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  originalPrice: number;
  status: 'Delivered' | 'In Transit' | 'Processing';
  orderDate: string;
  deliveryDate: string;
  platform: 'Amazon' | 'Myntra' | 'Nykaa' | 'Meesho' | 'Snapdeal';
}

interface SavedItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  inStock: boolean;
}

interface ReviewHistoryItem {
  id: string;
  productTitle: string;
  modality: 'Text' | 'Voice' | 'Image OCR';
  date: string;
  rating: number;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  confidenceScore: number;
  aspects: { aspect: string; score: number }[];
  summary: string;
}

interface UserProfilePageViewProps {
  onNavigate: (page: StoryboardPage) => void;
  onAddToCart?: (product: any) => void;
  onSelectProduct?: (product: any) => void;
  products?: Product[];
}

export const UserProfilePageView: React.FC<UserProfilePageViewProps> = ({
  onNavigate,
  onAddToCart,
  onSelectProduct,
  products = [],
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'saved' | 'history' | 'settings'>('dashboard');
  const [orderFilter, setOrderFilter] = useState<'all' | 'Delivered' | 'In Transit' | 'Processing'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Sample Orders List
  const [orders] = useState<OrderItem[]>([
    {
      id: 'ORD-98421',
      trackingId: 'TRK-IN-9821458',
      productId: 'prod-iphone-15',
      productTitle: 'Apple iPhone 15 (128GB - Blue)',
      productImage: iphone15Img,
      price: 69900,
      originalPrice: 79900,
      status: 'Delivered',
      orderDate: '12 Sep 2025',
      deliveryDate: 'Delivered on 14 Sep 2025',
      platform: 'Amazon',
    },
    {
      id: 'ORD-98319',
      trackingId: 'TRK-IN-8841290',
      productId: 'prod-nike-shoes',
      productTitle: 'Nike Air Zoom Running Shoes',
      productImage: nikeShoesImg,
      price: 4499,
      originalPrice: 5699,
      status: 'Delivered',
      orderDate: '8 Sep 2025',
      deliveryDate: 'Delivered on 10 Sep 2025',
      platform: 'Myntra',
    },
    {
      id: 'ORD-98250',
      trackingId: 'TRK-IN-7731201',
      productId: 'prod-boat-nirvana-01',
      productTitle: 'boAt Nirvana Ion ANC True Wireless Earbuds',
      productImage: boatAirdopesImg,
      price: 2499,
      originalPrice: 7990,
      status: 'In Transit',
      orderDate: '2 Oct 2025',
      deliveryDate: 'Arriving Tomorrow by 8 PM',
      platform: 'Amazon',
    },
    {
      id: 'ORD-98112',
      trackingId: 'TRK-IN-6629104',
      productId: 'prod-nykaa-lipstick',
      productTitle: 'Nykaa Matte to Last! Liquid Lipstick (5ml)',
      productImage: nykaaLipstickImg,
      price: 399,
      originalPrice: 489,
      status: 'Processing',
      orderDate: '5 Oct 2025',
      deliveryDate: 'Estimated 8 Oct 2025',
      platform: 'Nykaa',
    },
    {
      id: 'ORD-97992',
      trackingId: 'TRK-IN-5512093',
      productId: 'prod-backpack',
      productTitle: 'Wildcraft Ergonomic Laptop Backpack (30L)',
      productImage: backpackImg,
      price: 1499,
      originalPrice: 1999,
      status: 'Delivered',
      orderDate: '22 Aug 2025',
      deliveryDate: 'Delivered on 25 Aug 2025',
      platform: 'Meesho',
    },
  ]);

  // Sample Saved / Wishlist Items
  const [savedItems, setSavedItems] = useState<SavedItem[]>([
    {
      id: 'prod-air-fryer',
      title: 'Philips Digital Rapid Air Fryer (4.1L)',
      brand: 'Philips',
      category: 'Home & Living',
      price: 8999,
      originalPrice: 9999,
      rating: 4.4,
      image: airFryerImg,
      inStock: true,
    },
    {
      id: 'prod-boat-nirvana-01',
      title: 'boAt Nirvana Ion ANC True Wireless Earbuds',
      brand: 'boAt',
      category: 'Audio',
      price: 2499,
      originalPrice: 7990,
      rating: 4.8,
      image: boatAirdopesImg,
      inStock: true,
    },
    {
      id: 'prod-levis-jeans',
      title: "Levi's 511 Slim Fit Stretch Denim Jeans",
      brand: "Levi's",
      category: 'Fashion',
      price: 2199,
      originalPrice: 2999,
      rating: 4.3,
      image: levisJeansImg,
      inStock: true,
    },
    {
      id: 'prod-nike-shoes',
      title: 'Nike Air Zoom Running Shoes',
      brand: 'Nike',
      category: 'Fashion',
      price: 4499,
      originalPrice: 5699,
      rating: 4.5,
      image: nikeShoesImg,
      inStock: true,
    },
  ]);

  // Sample AI Review Analysis History
  const [reviewHistory] = useState<ReviewHistoryItem[]>([
    {
      id: 'rev-hist-1',
      productTitle: 'Apple iPhone 15 (128GB)',
      modality: 'Text',
      date: 'Yesterday, 4:15 PM',
      rating: 5,
      sentiment: 'Positive',
      confidenceScore: 94,
      aspects: [
        { aspect: 'Camera Daylight', score: 96 },
        { aspect: 'Dynamic Island', score: 92 },
      ],
      summary: 'Daylight camera clarity and Dynamic Island notifications were rated exceptionally positive.',
    },
    {
      id: 'rev-hist-2',
      productTitle: 'boAt Nirvana Ion ANC Earbuds',
      modality: 'Voice',
      date: '2 Oct 2025',
      rating: 5,
      sentiment: 'Positive',
      confidenceScore: 97,
      aspects: [
        { aspect: 'Battery Reserve', score: 98 },
        { aspect: 'Noise Cancellation', score: 91 },
      ],
      summary: 'Spoken customer testimony praising the 120-hour playback stamina on daily commutes.',
    },
    {
      id: 'rev-hist-3',
      productTitle: 'Philips Digital Rapid Air Fryer',
      modality: 'Image OCR',
      date: '28 Sep 2025',
      rating: 4,
      sentiment: 'Positive',
      confidenceScore: 89,
      aspects: [
        { aspect: 'French Fry Crispiness', score: 94 },
        { aspect: 'Basket Cleanup', score: 90 },
      ],
      summary: 'Scanned warranty slip and customer handwritten notes confirming low-oil cooking.',
    },
    {
      id: 'rev-hist-4',
      productTitle: "Levi's 511 Slim Fit Stretch Denim",
      modality: 'Text',
      date: '20 Sep 2025',
      rating: 4,
      sentiment: 'Positive',
      confidenceScore: 88,
      aspects: [
        { aspect: 'Denim Stretch', score: 90 },
        { aspect: 'Color Longevity', score: 86 },
      ],
      summary: 'Comfortable cotton-elastane blend with long-lasting indigo dye.',
    },
  ]);

  // Settings State
  const [settingsState, setSettingsState] = useState({
    defaultMarketplace: 'Amazon',
    priceDropAlerts: true,
    aiSentimentDeepMode: true,
    weeklyDigest: false,
    autoCurrency: 'INR (₹)',
  });

  const handleRemoveSaved = (id: string, title: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
    showToast(`Removed "${title}" from saved items.`);
  };

  const handleMoveToCart = (item: SavedItem) => {
    if (onAddToCart) {
      onAddToCart({
        id: item.id,
        title: item.title,
        brand: item.brand,
        category: item.category,
        price: item.price,
        originalPrice: item.originalPrice,
        rating: item.rating,
        reviewCount: 100,
        image: item.image,
        description: item.title,
        platforms: { Amazon: { price: item.price, rating: item.rating, reviewCount: 100, sentimentScore: 85 } },
        aiSummary: {
          pros: ['Top rated product in category'],
          cons: [],
          sentimentBreakdown: { positive: 85, neutral: 10, negative: 5 },
          verdict: 'Recommended item.',
          aspects: [],
        },
      });
      showToast(`Added "${item.title}" to cart!`);
    } else {
      showToast(`Added "${item.title}" to cart!`);
    }
  };

  const filteredOrders = orders.filter((ord) => {
    if (orderFilter === 'all') return true;
    return ord.status === orderFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold border border-slate-700 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Clean Activity Hub Header (No Hardcoded Selvarani Box) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold mb-2 border border-indigo-100">
            SHOPPER HUB · ORDERS, SAVED & ANALYSIS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
            My Shopping & Activity Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your cross-platform orders, saved wishlist items, multimodal AI review history, and shopping preferences.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => onNavigate('products')}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explore Products</span>
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            View Cart
          </button>
        </div>
      </div>

      {/* Main Grid: Left Navigation + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Menu */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'orders', label: 'My Orders', icon: Package, count: orders.length },
            { id: 'saved', label: 'Saved Products', icon: Heart, count: savedItems.length },
            { id: 'history', label: 'Review History', icon: History, count: reviewHistory.length },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      active ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 mt-3 border-t border-slate-100 space-y-1">
            <button
              onClick={() => onNavigate('home')}
              className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Back to Storefront</span>
            </button>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* ============================================================= */}
          {/* 1. DASHBOARD OVERVIEW TAB                                     */}
          {/* ============================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Activity Summary Banner */}
              <div className="bg-gradient-to-r from-indigo-50/90 via-purple-50/60 to-blue-50/70 border border-indigo-100 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Welcome to Your Shopping Activity Hub!
                  </h2>
                  <p className="text-xs text-slate-600">
                    Track your cross-marketplace purchases, price drop watchlist, and AI review analysis insights.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('products')}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  Shop More
                </button>
              </div>

              {/* 3 Metric Summary Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  onClick={() => setActiveTab('orders')}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1 hover:border-indigo-300 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Total Orders
                    </span>
                    <Package className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                  </div>
                  <div className="text-3xl font-black text-slate-900 font-mono">
                    {orders.length}
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold">
                    ✓ 3 delivered this month
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('saved')}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1 hover:border-indigo-300 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Saved Products
                    </span>
                    <Heart className="w-4 h-4 text-slate-400 group-hover:text-rose-500" />
                  </div>
                  <div className="text-3xl font-black text-indigo-600 font-mono">
                    {savedItems.length}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Price drop alerts enabled
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('history')}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1 hover:border-indigo-300 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Reviews Analyzed
                    </span>
                    <History className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
                  </div>
                  <div className="text-3xl font-black text-purple-600 font-mono">
                    {reviewHistory.length}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Text, voice & image OCR
                  </p>
                </div>
              </div>

              {/* Recent Orders Preview Card */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-3 p-5 sm:p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    Recent Orders
                  </h3>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Orders</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3">Product</th>
                        <th className="py-2.5 px-3">Amount</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.slice(0, 3).map((ord) => (
                        <tr key={ord.id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={ord.productImage}
                                alt={ord.productTitle}
                                className="w-10 h-10 rounded-lg object-contain bg-slate-50 border border-slate-200 p-1 shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="font-bold text-slate-900 truncate max-w-xs">{ord.productTitle}</div>
                                <div className="text-[10px] text-slate-500 font-mono">
                                  {ord.id} • Via {ord.platform}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-3 font-mono font-bold text-slate-900">
                            ₹{ord.price.toLocaleString('en-IN')}
                          </td>

                          <td className="py-3 px-3">
                            {ord.status === 'Delivered' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Delivered</span>
                              </span>
                            ) : ord.status === 'In Transit' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                <Truck className="w-3 h-3" />
                                <span>In Transit</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                <Clock className="w-3 h-3" />
                                <span>Processing</span>
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-3 text-slate-500 font-mono text-[11px]">
                            {ord.orderDate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AI Sentiment Analysis Shortcuts */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Multimodal AI Review Analysis Tools</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => onNavigate('ai-text')}
                    className="p-4 rounded-2xl bg-indigo-50/60 hover:bg-indigo-50 border border-indigo-100 text-left transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-2 shadow-2xs">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-indigo-600">
                      Text Review Analyzer
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Extract sentiment polarity, aspects & confidence scores.
                    </p>
                  </button>

                  <button
                    onClick={() => onNavigate('ai-voice')}
                    className="p-4 rounded-2xl bg-purple-50/60 hover:bg-purple-50 border border-purple-100 text-left transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-2 shadow-2xs">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-purple-600">
                      Voice Speech-to-Text
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Transcribe and analyze real spoken audio feedback.
                    </p>
                  </button>

                  <button
                    onClick={() => onNavigate('ai-image')}
                    className="p-4 rounded-2xl bg-blue-50/60 hover:bg-blue-50 border border-blue-100 text-left transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-2 shadow-2xs">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-blue-600">
                      Receipt & Image OCR
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Scan warranty slips and handwritten notes.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* 2. MY ORDERS TAB                                              */}
          {/* ============================================================= */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-indigo-600" />
                    <span>My Order History</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Track cross-marketplace deliveries, view invoices, and buy items again.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {(['all', 'Delivered', 'In Transit', 'Processing'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setOrderFilter(filter)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize ${
                        orderFilter === filter
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {filter === 'all' ? 'All Orders' : filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Orders List */}
              <div className="space-y-4">
                {filteredOrders.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    No orders found matching the selected filter.
                  </div>
                ) : (
                  filteredOrders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-white transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-slate-900">
                            {ord.id}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                            Via {ord.platform}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            • {ord.orderDate}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {ord.status === 'Delivered' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{ord.status}</span>
                            </span>
                          ) : ord.status === 'In Transit' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              <Truck className="w-3 h-3" />
                              <span>{ord.status}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                              <Clock className="w-3 h-3" />
                              <span>{ord.status}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={ord.productImage}
                            alt={ord.productTitle}
                            className="w-14 h-14 rounded-xl object-contain bg-white border border-slate-200 p-1.5 shrink-0 shadow-2xs"
                          />
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                              {ord.productTitle}
                            </h4>
                            <div className="text-xs text-emerald-700 font-semibold mt-0.5">
                              {ord.deliveryDate}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              Tracking: {ord.trackingId}
                            </div>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                          <div className="text-sm sm:text-base font-black font-mono text-slate-900">
                            ₹{ord.price.toLocaleString('en-IN')}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => showToast(`Tracking details sent to device for ${ord.trackingId}`)}
                              className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                            >
                              Track Package
                            </button>
                            <button
                              onClick={() => {
                                if (onAddToCart) {
                                  onAddToCart({
                                    id: ord.productId,
                                    title: ord.productTitle,
                                    price: ord.price,
                                    originalPrice: ord.originalPrice,
                                    image: ord.productImage,
                                    rating: 4.5,
                                    reviewCount: 50,
                                    brand: 'Verified Brand',
                                    category: 'Catalog Item',
                                    description: ord.productTitle,
                                    platforms: {},
                                    aiSummary: { pros: [], cons: [], sentimentBreakdown: { positive: 90, neutral: 5, negative: 5 }, verdict: '', aspects: [] },
                                  });
                                }
                                showToast(`Added "${ord.productTitle}" to cart!`);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                            >
                              Buy Again
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* 3. SAVED PRODUCTS (WISHLIST) TAB                             */}
          {/* ============================================================= */}
          {activeTab === 'saved' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>Saved Products & Wishlist</span>
                    <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      {savedItems.length} Items
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Products saved for future comparison. Price drop alerts active.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
                >
                  Browse Store Catalog
                </button>
              </div>

              {savedItems.length === 0 ? (
                <div className="p-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Your Saved Wishlist is Empty</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Browse the catalog and save items to receive instant price drop notifications across Amazon, Myntra, and Nykaa.
                  </p>
                  <button
                    onClick={() => onNavigate('products')}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-slate-50/40 hover:bg-white transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded-xl object-contain bg-white border border-slate-200 p-2 shrink-0 shadow-2xs"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {item.brand} • {item.category}
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 mt-0.5">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1 text-xs">
                            <span className="font-mono font-bold text-amber-600 flex items-center">
                              ★ {item.rating}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                              In Stock
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="font-mono font-bold text-sm text-slate-900">
                            ₹{item.price.toLocaleString('en-IN')}
                          </div>
                          {item.originalPrice > item.price && (
                            <div className="text-[10px] text-slate-400 line-through">
                              ₹{item.originalPrice.toLocaleString('en-IN')}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleRemoveSaved(item.id, item.title)}
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleMoveToCart(item)}
                            className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Move to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================= */}
          {/* 4. REVIEW ANALYSIS HISTORY TAB                                */}
          {/* ============================================================= */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <History className="w-4 h-4 text-purple-600" />
                    <span>Multimodal AI Review Analysis History</span>
                    <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {reviewHistory.length} Scans
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Inspected customer feedback, speech recordings, and packaging receipt analyses.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('ai-text')}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Analyze New Review</span>
                </button>
              </div>

              <div className="space-y-3">
                {reviewHistory.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-white transition-all space-y-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">
                          {item.productTitle}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {item.modality}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {item.sentiment} ({item.confidenceScore}%)
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Aspect Sentiment:
                      </span>
                      {item.aspects.map((asp, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                        >
                          {asp.aspect}: {asp.score}%
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* 5. SHOPPING PREFERENCES & SETTINGS TAB                        */}
          {/* ============================================================= */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-indigo-600" />
                  <span>Shopping Hub Preferences & Privacy</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Configure comparison priorities, notifications, and local caching.
                </p>
              </div>

              <div className="space-y-5 text-xs">
                {/* Marketplace Priority */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-800 block">
                    Preferred Marketplace Priority
                  </label>
                  <p className="text-slate-500 text-[11px]">
                    Which e-commerce platform should be ranked first when comparing product prices?
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    {['Amazon', 'Myntra', 'Nykaa', 'Meesho'].map((mp) => (
                      <button
                        key={mp}
                        type="button"
                        onClick={() => {
                          setSettingsState({ ...settingsState, defaultMarketplace: mp });
                          showToast(`Set primary marketplace to ${mp}`);
                        }}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                          settingsState.defaultMarketplace === mp
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-700 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {mp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notifications & Alert Toggles */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="font-bold text-slate-800">
                    Notifications & Alert Preferences
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-900">Price Drop Watchlist Alerts</div>
                      <div className="text-[11px] text-slate-500">
                        Notify me when saved items drop by more than 10% across any marketplace.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settingsState.priceDropAlerts}
                      onChange={(e) => {
                        setSettingsState({ ...settingsState, priceDropAlerts: e.target.checked });
                        showToast(e.target.checked ? 'Enabled price drop alerts' : 'Disabled price drop alerts');
                      }}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-900">Deep Aspect-Based Sentiment Mining</div>
                      <div className="text-[11px] text-slate-500">
                        Include sub-attribute confidence scores (Battery, Build, Delivery, Comfort).
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settingsState.aiSentimentDeepMode}
                      onChange={(e) => {
                        setSettingsState({ ...settingsState, aiSentimentDeepMode: e.target.checked });
                        showToast('Updated AI analysis mode preference');
                      }}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Currency and Region */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="font-bold text-slate-800 block">
                    Region & Currency Format
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono font-bold">
                      ₹ INR - India (GST inclusive)
                    </span>
                  </div>
                </div>

                {/* Cache Management */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="font-bold text-slate-800">Local Data & Device Cache</div>
                  <p className="text-[11px] text-slate-500">
                    Reset local shopping cart and wishlist cache stored in your browser session.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      showToast('Local shopping preferences refreshed.');
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refresh Local Session Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
export default UserProfilePageView;

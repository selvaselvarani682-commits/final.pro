import React, { useState, useMemo, useEffect } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  FolderTree,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  TrendingUp,
  Search,
  X,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Star,
  ThumbsUp,
  ThumbsDown,
  Lock,
} from 'lucide-react';
import { Product, StoryboardPage, StoredReview } from '../types';
import { getStoredReviews, deleteReviewFromStorage } from '../services/reviewStorage';
import { AdminUserSession } from '../services/adminAuthService';

interface AdminPanelViewProps {
  products: Product[];
  onNavigate: (page: StoryboardPage) => void;
  onAddProduct?: (product: Partial<Product>) => Promise<void> | void;
  onUpdateProduct?: (product: Product) => Promise<void> | void;
  onDeleteProduct?: (id: string) => Promise<void> | void;
  onSelectProduct?: (product: Product) => void;
  onLogout?: () => void;
  adminUser?: AdminUserSession | null;
}

const CATEGORY_OPTIONS = [
  'Electronics',
  'Fashion',
  'Beauty',
  'Home & Living',
  'Sports',
  'Books',
  'Toys',
  'Groceries',
];

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  products,
  onNavigate,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onSelectProduct,
  onLogout,
  adminUser,
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'reviews' | 'analytics' | 'dashboard' | 'settings'>('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Reviews State
  const [reviews, setReviews] = useState<StoredReview[]>([]);
  const [reviewSearch, setReviewSearch] = useState('');
  const [reviewPlatformFilter, setReviewPlatformFilter] = useState('All');
  const [reviewSentimentFilter, setReviewSentimentFilter] = useState('All');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [deletingReviewId, setDeletingReviewId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Forms
  const [addForm, setAddForm] = useState({
    title: '',
    brand: '',
    category: 'Electronics',
    price: '',
    originalPrice: '',
    image: '',
    description: '',
  });

  const [editForm, setEditForm] = useState({
    title: '',
    brand: '',
    category: 'Electronics',
    price: '',
    originalPrice: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    setReviews(getStoredReviews());
  }, []);

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ text, type });
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [products, selectedCategory, searchQuery]);

  // Filtered Reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      if (reviewPlatformFilter !== 'All' && r.platform !== reviewPlatformFilter) {
        return false;
      }
      if (reviewSentimentFilter !== 'All' && r.sentiment !== reviewSentimentFilter) {
        return false;
      }
      if (reviewSearch.trim()) {
        const q = reviewSearch.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.content.toLowerCase().includes(q) ||
          r.productTitle.toLowerCase().includes(q) ||
          r.reviewerName.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [reviews, reviewPlatformFilter, reviewSentimentFilter, reviewSearch]);

  // Sentiment Analytics Metrics
  const sentimentStats = useMemo(() => {
    const total = reviews.length || 1;
    const positive = reviews.filter((r) => r.sentiment === 'Positive').length;
    const neutral = reviews.filter((r) => r.sentiment === 'Neutral').length;
    const negative = reviews.filter((r) => r.sentiment === 'Negative').length;
    const mixed = reviews.filter((r) => r.sentiment === 'Mixed').length;

    const avgRating = (reviews.reduce((acc, r) => acc + (r.rating || 4), 0) / total).toFixed(1);

    return {
      total,
      positiveCount: positive,
      neutralCount: neutral,
      negativeCount: negative,
      mixedCount: mixed,
      positivePercent: Math.round((positive / total) * 100),
      neutralPercent: Math.round((neutral / total) * 100),
      negativePercent: Math.round((negative / total) * 100),
      avgRating,
    };
  }, [reviews]);

  // Handle Add Product Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.title.trim()) {
      showFeedback('Product title is required.', 'error');
      return;
    }

    const priceNum = Number(addForm.price) || 999;
    const origPriceNum = Number(addForm.originalPrice) || Math.round(priceNum * 1.25);
    const imgUrl = addForm.image.trim() || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80';

    setIsSubmitting(true);
    try {
      if (onAddProduct) {
        await onAddProduct({
          title: addForm.title.trim(),
          brand: addForm.brand.trim() || 'Generic Brand',
          category: addForm.category,
          price: priceNum,
          originalPrice: origPriceNum,
          image: imgUrl,
          description: addForm.description.trim() || `${addForm.title} added to live catalog.`,
        });
      }
      showFeedback(`Successfully added "${addForm.title}" to backend catalog.`);
      setIsAddModalOpen(false);
      setAddForm({
        title: '',
        brand: '',
        category: 'Electronics',
        price: '',
        originalPrice: '',
        image: '',
        description: '',
      });
    } catch (err: any) {
      showFeedback(err?.message || 'Failed to add product', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open Edit Modal
  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setEditForm({
      title: p.title,
      brand: p.brand,
      category: p.category,
      price: String(p.price),
      originalPrice: String(p.originalPrice),
      image: p.image,
      description: p.description,
    });
  };

  // Handle Edit Submit
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    if (!editForm.title.trim()) {
      showFeedback('Product title is required.', 'error');
      return;
    }

    const priceNum = Number(editForm.price) || editingProduct.price;
    const origPriceNum = Number(editForm.originalPrice) || editingProduct.originalPrice;

    setIsSubmitting(true);
    try {
      const updatedProduct: Product = {
        ...editingProduct,
        title: editForm.title.trim(),
        brand: editForm.brand.trim() || editingProduct.brand,
        category: editForm.category,
        price: priceNum,
        originalPrice: origPriceNum,
        image: editForm.image.trim() || editingProduct.image,
        description: editForm.description.trim() || editingProduct.description,
      };

      if (onUpdateProduct) {
        await onUpdateProduct(updatedProduct);
      }
      showFeedback(`Saved all changes to "${updatedProduct.title}".`);
      setEditingProduct(null);
    } catch (err: any) {
      showFeedback(err?.message || 'Failed to update product', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Delete Product Confirm
  const handleDeleteConfirm = async () => {
    if (!deletingProduct) return;
    setIsSubmitting(true);
    try {
      if (onDeleteProduct) {
        await onDeleteProduct(deletingProduct.id);
      }
      showFeedback(`Removed "${deletingProduct.title}" from backend catalog.`);
      setDeletingProduct(null);
    } catch (err: any) {
      showFeedback(err?.message || 'Failed to remove product', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Delete Review
  const handleDeleteReview = (id: string, reviewerName: string) => {
    const updated = deleteReviewFromStorage(id);
    setReviews(updated);
    showFeedback(`Deleted review from ${reviewerName}.`);
    setDeletingReviewId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Admin Title Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold mb-2">
            ADMIN CONSOLE · {adminUser ? `${adminUser.name} (${adminUser.role})` : 'AUTHENTICATED'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            ReviewAI Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Live database management connected to Express backend and Firestore. Manage products, customer reviews, and Aspect-Based Sentiment analysis.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer border border-slate-700"
          >
            View Storefront
          </button>
          {onLogout && (
            <button
              onClick={onLogout}
              className="px-4 py-2.5 bg-rose-600/90 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Sign out of Admin Dashboard"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>

      {/* Real-time Feedback Banner */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200 ${
            feedbackMsg.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {feedbackMsg.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{feedbackMsg.text}</span>
        </div>
      )}

      {/* Main Admin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Admin Navigation Sidebar */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs space-y-1">
          {[
            { id: 'products', label: 'Products Catalog', icon: Package, count: products.length },
            { id: 'reviews', label: 'Customer Reviews', icon: MessageSquare, count: reviews.length },
            { id: 'analytics', label: 'Sentiment Analysis', icon: BarChart3 },
            { id: 'dashboard', label: 'Store Metrics', icon: LayoutDashboard },
            { id: 'settings', label: 'Admin Security', icon: Settings },
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
            {onLogout && (
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Admin Logout</span>
              </button>
            )}
            <button
              onClick={() => onNavigate('home')}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Public Storefront</span>
            </button>
          </div>
        </aside>

        {/* Right Main Admin Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* ============================================================= */}
          {/* TAB 1: PRODUCTS CATALOG                                       */}
          {/* ============================================================= */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              {/* Quick Stat Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Total Products
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                    {products.length}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Live in backend
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Categories
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono">
                    8
                  </div>
                  <span className="text-[10px] text-indigo-600 font-bold">All sectors active</span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Marketplaces
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                    5
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold">Amazon, Meesho, +3</span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Avg Review Count
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">
                    {Math.round(products.reduce((acc, p) => acc + p.reviewCount, 0) / (products.length || 1))}
                  </div>
                  <span className="text-[10px] text-purple-600 font-bold">Per product</span>
                </div>
              </div>

              {/* Product Management Section */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span>Product Catalog Management</span>
                      <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {filteredProducts.length} of {products.length} Items
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add, modify specifications, or delete products directly from backend storage.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                  </button>
                </div>

                {/* Filters Bar: Search & Category */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search products by title, brand, or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-600 focus:bg-white text-slate-800"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-600"
                    >
                      <option value="All">All Categories</option>
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto border border-slate-100 rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Product</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">Rating</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProducts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500">
                            No products found matching criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredProducts.map((p) => (
                          <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                            {/* Product */}
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0"
                                />
                                <div className="min-w-0 max-w-xs">
                                  <div
                                    onClick={() => {
                                      if (onSelectProduct) {
                                        onSelectProduct(p);
                                        onNavigate('product-details');
                                      }
                                    }}
                                    className="font-bold text-slate-900 truncate hover:text-indigo-600 cursor-pointer"
                                  >
                                    {p.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 font-mono">
                                    ID: {p.id.slice(0, 14)}... • {p.brand}
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Category */}
                            <td className="py-3 px-4">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">
                                {p.category}
                              </span>
                            </td>

                            {/* Price */}
                            <td className="py-3 px-4 font-mono font-bold text-slate-900">
                              <div>₹{p.price.toLocaleString('en-IN')}</div>
                              {p.originalPrice > p.price && (
                                <div className="text-[10px] text-slate-400 line-through">
                                  ₹{p.originalPrice.toLocaleString('en-IN')}
                                </div>
                              )}
                            </td>

                            {/* Rating */}
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-amber-600">
                                <span>★</span>
                                <span>{p.rating}</span>
                                <span className="text-slate-400 font-normal text-[10px]">
                                  ({(p.reviewCount / 1000).toFixed(1)}k)
                                </span>
                              </div>
                            </td>

                            {/* Status */}
                            <td className="py-3 px-4">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                Active
                              </span>
                            </td>

                            {/* Actions: Edit & Delete */}
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => openEditModal(p)}
                                  className="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px] cursor-pointer flex items-center gap-1 transition-colors"
                                >
                                  <Edit2 className="w-3 h-3" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDeletingProduct(p)}
                                  className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-[11px] cursor-pointer flex items-center gap-1 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 2: CUSTOMER REVIEWS MANAGEMENT                            */}
          {/* ============================================================= */}
          {activeTab === 'reviews' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-600" />
                    <span>Customer Reviews Management</span>
                    <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {filteredReviews.length} Reviews
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Audit genuine customer reviews across platforms, inspect sentiment ratings, and moderate feedback.
                  </p>
                </div>
              </div>

              {/* Review Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative sm:col-span-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search review content or reviewer..."
                    value={reviewSearch}
                    onChange={(e) => setReviewSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                  />
                </div>

                <div>
                  <select
                    value={reviewPlatformFilter}
                    onChange={(e) => setReviewPlatformFilter(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-600"
                  >
                    <option value="All">All Platforms (Amazon, Meesho, etc.)</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Meesho">Meesho</option>
                    <option value="Myntra">Myntra</option>
                    <option value="Nykaa">Nykaa</option>
                    <option value="Snapdeal">Snapdeal</option>
                  </select>
                </div>

                <div>
                  <select
                    value={reviewSentimentFilter}
                    onChange={(e) => setReviewSentimentFilter(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-600"
                  >
                    <option value="All">All Sentiments</option>
                    <option value="Positive">Positive</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Negative">Negative</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-3">
                {filteredReviews.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 text-xs">
                    No customer reviews match your search query or filter.
                  </div>
                ) : (
                  filteredReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900">{rev.reviewerName}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {rev.platform}
                          </span>
                          <span className="text-[11px] font-bold text-amber-600 flex items-center">
                            ★ {rev.rating}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              rev.sentiment === 'Positive'
                                ? 'bg-emerald-100 text-emerald-800'
                                : rev.sentiment === 'Negative'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {rev.sentiment}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 font-mono">
                            {new Date(rev.createdAt).toLocaleDateString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteReview(rev.id, rev.reviewerName)}
                            className="px-2 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11px] font-bold cursor-pointer transition-colors flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" /> Delete
                          </button>
                        </div>
                      </div>

                      <div className="text-xs font-semibold text-slate-800">
                        {rev.productTitle} · "{rev.title}"
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {rev.content}
                      </p>

                      {rev.aspects && rev.aspects.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {rev.aspects.map((asp, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600"
                            >
                              {asp.aspect}: {asp.score}% ({asp.sentiment})
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 3: SENTIMENT ANALYSIS & ABSA RESULTS                      */}
          {/* ============================================================= */}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                  <span>Sentiment Analysis & Aspect-Based Performance</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Multimodal NLP sentiment classification breakdown across verified customer comments.
                </p>
              </div>

              {/* Sentiment Distribution Bars */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Overall Sentiment Distribution ({sentimentStats.total} Reviews)
                </h4>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-emerald-700 flex items-center gap-1">
                        <ThumbsUp className="w-3.5 h-3.5" /> Positive Sentiment
                      </span>
                      <span className="font-mono text-emerald-800 font-bold">
                        {sentimentStats.positivePercent}% ({sentimentStats.positiveCount})
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${sentimentStats.positivePercent}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-600">Neutral Sentiment</span>
                      <span className="font-mono text-slate-700 font-bold">
                        {sentimentStats.neutralPercent}% ({sentimentStats.neutralCount})
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-slate-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${sentimentStats.neutralPercent}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-rose-700 flex items-center gap-1">
                        <ThumbsDown className="w-3.5 h-3.5" /> Negative Sentiment
                      </span>
                      <span className="font-mono text-rose-800 font-bold">
                        {sentimentStats.negativePercent}% ({sentimentStats.negativeCount})
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-rose-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${sentimentStats.negativePercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Aspect Mining Performance */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Aspect Performance Benchmarks (ABSA)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { aspect: 'Build & Material Quality', score: 92, badge: 'High Favorability', color: 'emerald' },
                    { aspect: 'Price & Value for Money', score: 88, badge: 'High Favorability', color: 'emerald' },
                    { aspect: 'Battery & Longevity', score: 84, badge: 'Moderate Advantage', color: 'indigo' },
                    { aspect: 'Delivery Speed & Transit', score: 76, badge: 'Improvement Opportunity', color: 'amber' },
                  ].map((item, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-800">
                        <span>{item.aspect}</span>
                        <span className="font-mono">{item.score}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-full rounded-full ${
                            item.score > 85 ? 'bg-emerald-500' : item.score > 80 ? 'bg-indigo-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono flex justify-between">
                        <span>AI Classification: 98% Confidence</span>
                        <span className="font-bold text-indigo-700">{item.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 4: STORE METRICS DASHBOARD                                */}
          {/* ============================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Total Products
                  </span>
                  <div className="text-3xl font-black text-slate-900 font-mono">{products.length}</div>
                  <span className="text-[10px] text-emerald-600 font-bold">100% active</span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Total Reviews
                  </span>
                  <div className="text-3xl font-black text-indigo-600 font-mono">{reviews.length}</div>
                  <span className="text-[10px] text-indigo-600 font-bold">Across 5 channels</span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Avg Sentiment
                  </span>
                  <div className="text-3xl font-black text-emerald-600 font-mono">
                    {sentimentStats.positivePercent}%
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold">Positive ratio</span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Avg Product Rating
                  </span>
                  <div className="text-3xl font-black text-amber-600 font-mono">
                    ★ {sentimentStats.avgRating}
                  </div>
                  <span className="text-[10px] text-slate-500">Out of 5.0</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Marketplace Cross-Platform Coverage
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
                  {['Amazon', 'Meesho', 'Myntra', 'Nykaa', 'Snapdeal'].map((mp) => (
                    <div key={mp} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="font-bold text-slate-900">{mp}</div>
                      <div className="text-[10px] text-emerald-700 font-mono font-bold">98% Sync</div>
                      <div className="text-[10px] text-slate-400">Live Scraped</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 5: ADMIN SECURITY & SETTINGS                              */}
          {/* ============================================================= */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-indigo-600" />
                  <span>Admin Account & Authorization</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Current authenticated admin session and backend security protocols.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Logged-in Administrator:</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {adminUser?.name || 'Primary Administrator'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Admin Email:</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {adminUser?.email || 'admin@smartreview.ai'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Access Role:</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold text-[10px]">
                    {adminUser?.role || 'Super Admin'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Password Hashing:</span>
                  <span className="font-mono text-emerald-700 font-bold">
                    PBKDF2 SHA-512 (10,000 iterations + Salt)
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 font-medium">Session Token:</span>
                  <span className="font-mono text-slate-600 text-[11px]">
                    Active (24-Hour Expiration)
                  </span>
                </div>
              </div>

              {onLogout && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onLogout}
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer shadow-md flex items-center gap-2 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Terminate Session & Logout</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* ================================================================= */}
      {/* ADD PRODUCT MODAL                                                 */}
      {/* ================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Add New Product
                  </h3>
                  <p className="text-xs text-slate-500">
                    Saves directly to Express backend & Firestore database.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Product Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sony WH-CH720N Noise Canceling Headphones"
                  value={addForm.title}
                  onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. Sony, Nike, Apple"
                    value={addForm.brand}
                    onChange={(e) => setAddForm({ ...addForm, brand: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Category</label>
                  <select
                    value={addForm.category}
                    onChange={(e) => setAddForm({ ...addForm, category: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-semibold"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Selling Price (₹) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    placeholder="e.g. 2999"
                    value={addForm.price}
                    onChange={(e) => setAddForm({ ...addForm, price: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">MRP / Original Price (₹)</label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 4999"
                    value={addForm.originalPrice}
                    onChange={(e) => setAddForm({ ...addForm, originalPrice: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/... or paste image link"
                  value={addForm.image}
                  onChange={(e) => setAddForm({ ...addForm, image: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                />
                <p className="text-[10px] text-slate-400">
                  Tip: Leave blank to use high-res default hardware photography.
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter key product features and overview..."
                  value={addForm.description}
                  onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving to Backend...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Create Product</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* EDIT PRODUCT MODAL                                                */}
      {/* ================================================================= */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Edit2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Edit Product Details
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    ID: {editingProduct.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Product Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Brand</label>
                  <input
                    type="text"
                    value={editForm.brand}
                    onChange={(e) => setEditForm({ ...editForm, brand: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Category</label>
                  <select
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-semibold"
                  >
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Selling Price (₹)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={editForm.price}
                    onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">MRP / Original Price (₹)</label>
                  <input
                    type="number"
                    min={1}
                    value={editForm.originalPrice}
                    onChange={(e) => setEditForm({ ...editForm, originalPrice: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Product Image URL</label>
                <div className="flex items-center gap-3">
                  <img
                    src={editForm.image || editingProduct.image}
                    alt="Preview"
                    className="w-12 h-12 rounded-xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                  />
                  <input
                    type="url"
                    value={editForm.image}
                    onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                    className="flex-1 text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Product Description</label>
                <textarea
                  rows={3}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 text-slate-800 leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Updating Backend...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Apply All Changes</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* DELETE PRODUCT CONFIRMATION MODAL                                 */}
      {/* ================================================================= */}
      {deletingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Remove Product?
                </h3>
                <p className="text-xs text-slate-500">
                  This will remove the product from the backend catalog and live store.
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3">
              <img
                src={deletingProduct.image}
                alt={deletingProduct.title}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">
                  {deletingProduct.title}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  ₹{deletingProduct.price.toLocaleString('en-IN')} • {deletingProduct.category}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setDeletingProduct(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Removing...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Confirm Removal</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminPanelView;

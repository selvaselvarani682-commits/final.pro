import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  Table as TableIcon,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Tag,
  ArrowUpDown,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  X,
  Plus,
  ShoppingBag
} from 'lucide-react';
import { Product, PlatformType } from '../../types';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from './productsData';
import productsTrackedImg from '../../assets/images/products_tracked_img_1788776402378.jpg';
import marketplacesSyncImg from '../../assets/images/marketplaces_sync_img_1788776421882.jpg';

interface ProductCatalogViewProps {
  onSelectForCompare?: (product: Product) => void;
  onSelectForReview?: (product: Product) => void;
  onBuyProduct?: (product: Product, platform?: PlatformType) => void;
}

export const ProductCatalogView: React.FC<ProductCatalogViewProps> = ({
  onSelectForCompare,
  onSelectForReview,
  onBuyProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [pricePreset, setPricePreset] = useState<'all' | 'under2k' | '2k-10k' | '10k-50k' | 'above50k'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'price-asc' | 'price-desc' | 'discount'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Quick inspect modal state
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.title.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Category
      if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
        return false;
      }

      // Price Presets
      if (pricePreset === 'under2k' && product.price > 2000) return false;
      if (pricePreset === '2k-10k' && (product.price <= 2000 || product.price > 10000)) return false;
      if (pricePreset === '10k-50k' && (product.price <= 10000 || product.price > 50000)) return false;
      if (pricePreset === 'above50k' && product.price <= 50000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'discount') {
        const discA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
        const discB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
        return discB - discA;
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, pricePreset, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / pageSize) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="products" className="py-12 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Metrics Buttons with Unique Images */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All Categories');
              setPricePreset('all');
              setSearchQuery('');
            }}
            className="flex items-center gap-3 p-2 sm:p-2.5 pr-4 sm:pr-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-sm hover:border-emerald-400 transition-all text-left group cursor-pointer"
          >
            <img
              src={productsTrackedImg}
              alt="Catalog Inventory"
              referrerPolicy="no-referrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover border border-slate-100 group-hover:scale-105 transition-transform shrink-0"
            />
            <div>
              <div className="text-emerald-600 font-extrabold text-sm sm:text-base leading-tight">
                Verified
              </div>
              <div className="text-xs font-semibold text-slate-800 leading-tight mt-0.5">
                Product Catalog
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                Multi-category inventory
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setSortBy('rating');
            }}
            className="flex items-center gap-3 p-2 sm:p-2.5 pr-4 sm:pr-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-sm hover:border-blue-400 transition-all text-left group cursor-pointer"
          >
            <img
              src={marketplacesSyncImg}
              alt="Synced Marketplaces"
              referrerPolicy="no-referrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover border border-slate-100 group-hover:scale-105 transition-transform shrink-0"
            />
            <div>
              <div className="text-blue-600 font-extrabold text-sm sm:text-base leading-tight">
                5 Platforms
              </div>
              <div className="text-xs font-semibold text-slate-800 leading-tight mt-0.5">
                Synced Marketplaces
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                Amazon, Nykaa, Myntra & more
              </div>
            </div>
          </button>
        </div>

        {/* Filter & Controls Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-5 mb-8 space-y-4">
          {/* Top Bar: Search, Sort & View Mode */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search across products or brands..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & View Mode */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-md text-xs py-1.5 px-2.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="rating">Highest Rated ★</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="discount">Highest Discount %</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Grid View"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                    viewMode === 'table'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Table View"
                >
                  <TableIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Price Range Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
            <span className="font-semibold text-slate-700 flex items-center gap-1">
              <Tag className="w-3 h-3 text-slate-400" /> Price Tier:
            </span>
            {[
              { id: 'all', label: 'All Budgets' },
              { id: 'under2k', label: 'Under ₹2,000' },
              { id: '2k-10k', label: '₹2,000 - ₹10,000' },
              { id: '10k-50k', label: '₹10,000 - ₹50,000' },
              { id: 'above50k', label: '₹50,000+' },
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => {
                  setPricePreset(tier.id as any);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  pricePreset === tier.id
                    ? 'bg-slate-800 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tier.label}
              </button>
            ))}

            <span className="ml-auto text-slate-500 font-mono text-[11px]">
              Showing {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Product Cards Grid or Table */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No products matched your criteria</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search query, price tier, or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setPricePreset('all');
              }}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              );
              const topAspect = product.aiSummary?.aspects?.[0];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Image Container */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold rounded-md">
                        {product.brand}
                      </span>
                      {discountPercent > 10 && (
                        <span className="px-1.5 py-0.5 bg-rose-600 text-white text-[10px] font-bold rounded-md">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 backdrop-blur-xs text-slate-700 text-[10px] font-medium rounded-md shadow-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5 text-xs">
                      <div className="flex items-center text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="ml-1 text-slate-800">{product.rating}</span>
                      </div>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 text-[11px] font-mono">
                        {product.reviewCount.toLocaleString()} reviews
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                      {product.title}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-slate-900 font-mono">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-slate-400 line-through font-mono">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Top Aspect Tag */}
                    {topAspect && (
                      <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 truncate">{topAspect.aspect}:</span>
                        <span className="font-semibold text-emerald-600 font-mono">
                          {topAspect.score}% Pos
                        </span>
                      </div>
                    )}

                    {/* Platforms availability strip */}
                    <div className="flex items-center gap-1 pt-2 mt-2 border-t border-slate-100 text-[10px] text-slate-500">
                      <span className="text-slate-400">Available:</span>
                      {Object.keys(product.platforms).slice(0, 4).map((plat) => (
                        <span
                          key={plat}
                          className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="px-4 pb-4 pt-1 flex items-center gap-2">
                    <button
                      onClick={() => setInspectingProduct(product)}
                      className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors text-center"
                    >
                      Insights
                    </button>
                    {onBuyProduct && (
                      <button
                        onClick={() => onBuyProduct(product)}
                        title="Buy This Product"
                        className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Buy Now</span>
                      </button>
                    )}
                    {onSelectForCompare && (
                      <button
                        onClick={() => onSelectForCompare(product)}
                        title="Compare in Matrix"
                        className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg transition-colors border border-emerald-200/60 cursor-pointer"
                      >
                        Compare
                      </button>
                    )}
                    {onSelectForReview && (
                      <button
                        onClick={() => onSelectForReview(product)}
                        title="Review this product"
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View */
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Product Details</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Rating & Reviews</th>
                    <th className="py-3 px-4">Price Parity</th>
                    <th className="py-3 px-4">Top ABSA Aspect</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedProducts.map((p) => {
                    const topAspect = p.aiSummary?.aspects?.[0];
                    return (
                      <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.title}
                              referrerPolicy="no-referrer"
                              className="w-10 h-10 object-cover rounded-md bg-slate-100 shrink-0"
                            />
                            <div>
                              <div className="font-semibold text-slate-900 line-clamp-1">{p.title}</div>
                              <div className="text-[11px] text-slate-500">{p.brand} • SKU: {p.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{p.category}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 font-semibold text-slate-800">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                            <span>{p.rating}</span>
                            <span className="text-slate-400 font-normal font-mono text-[11px]">
                              ({p.reviewCount.toLocaleString()})
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="font-bold text-slate-900 font-mono">
                            ₹{p.price.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Across {Object.keys(p.platforms).length} platforms
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {topAspect ? (
                            <div className="text-[11px]">
                              <span className="text-slate-700 font-medium">{topAspect.aspect}</span>
                              <span className="ml-1.5 text-emerald-600 font-bold font-mono">
                                {topAspect.score}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            {onBuyProduct && (
                              <button
                                onClick={() => onBuyProduct(p)}
                                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-xs"
                              >
                                <ShoppingBag className="w-3 h-3" />
                                <span>Buy</span>
                              </button>
                            )}
                            <button
                              onClick={() => setInspectingProduct(p)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded text-xs cursor-pointer"
                            >
                              Inspect
                            </button>
                            {onSelectForCompare && (
                              <button
                                onClick={() => onSelectForCompare(p)}
                                className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-xs font-semibold cursor-pointer"
                              >
                                Compare
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination Bar */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-600 font-mono">
              Showing <span className="font-semibold text-slate-900">{(currentPage - 1) * pageSize + 1}</span> to{' '}
              <span className="font-semibold text-slate-900">
                {Math.min(currentPage * pageSize, filteredProducts.length)}
              </span>{' '}
              of <span className="font-semibold text-slate-900">{filteredProducts.length}</span> products
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-md text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous
              </button>

              {/* Page Number Chips */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5 && currentPage > 3) {
                    pageNum = currentPage - 2 + i;
                    if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-7 h-7 text-xs font-semibold rounded-md transition-colors ${
                        currentPage === pageNum
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-md text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {inspectingProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
            {/* Header */}
            <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded">
                    {inspectingProduct.brand}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    ID: {inspectingProduct.id} • {inspectingProduct.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {inspectingProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectingProduct(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <img
                  src={inspectingProduct.image}
                  alt={inspectingProduct.title}
                  referrerPolicy="no-referrer"
                  className="w-40 h-40 object-cover rounded-xl border border-slate-200 shrink-0"
                />
                <div className="space-y-2 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      ₹{inspectingProduct.price.toLocaleString('en-IN')}
                    </span>
                    {inspectingProduct.originalPrice > inspectingProduct.price && (
                      <span className="text-sm text-slate-400 line-through font-mono">
                        ₹{inspectingProduct.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {inspectingProduct.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-xs">
                    <div className="flex items-center text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {inspectingProduct.rating} / 5.0
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-mono">
                      {inspectingProduct.reviewCount.toLocaleString()} Total Reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Cross-Platform Marketplace Parity Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Synced Marketplace Prices & Authenticity
                </h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-slate-700 font-semibold">
                      <tr>
                        <th className="py-2 px-3">Platform</th>
                        <th className="py-2 px-3">Price</th>
                        <th className="py-2 px-3">Rating</th>
                        <th className="py-2 px-3">Delivery</th>
                        <th className="py-2 px-3">Authenticity</th>
                        <th className="py-2 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(inspectingProduct.platforms).map(([platName, meta]) => (
                        <tr key={platName} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-semibold text-slate-800">{platName}</td>
                          <td className="py-2 px-3 font-mono font-bold text-slate-900">
                            ₹{meta?.price.toLocaleString('en-IN')}
                          </td>
                          <td className="py-2 px-3 text-slate-700 font-mono">★ {meta?.rating}</td>
                          <td className="py-2 px-3 text-slate-600">{meta?.deliverySpeed || '2 Days'}</td>
                          <td className="py-2 px-3 text-emerald-600 font-mono font-semibold">
                            {meta?.authenticityRating || 95}%
                          </td>
                          <td className="py-2 px-3 text-right">
                            {onBuyProduct && (
                              <button
                                onClick={() => {
                                  const p = inspectingProduct;
                                  setInspectingProduct(null);
                                  onBuyProduct(p, platName as PlatformType);
                                }}
                                className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer"
                              >
                                <ShoppingBag className="w-3 h-3" />
                                Buy
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Aspect Sentiments */}
              {inspectingProduct.aiSummary?.aspects && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-500" /> Aspect-Based Sentiment Scores (ABSA)
                  </h4>
                  <div className="space-y-2">
                    {inspectingProduct.aiSummary.aspects.map((asp) => (
                      <div key={asp.aspect}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-slate-700">{asp.aspect}</span>
                          <span className="font-mono font-bold text-slate-900">{asp.score}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              asp.score >= 85
                                ? 'bg-emerald-500'
                                : asp.score >= 70
                                ? 'bg-blue-500'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${asp.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={() => setInspectingProduct(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              {onSelectForCompare && (
                <button
                  onClick={() => {
                    const p = inspectingProduct;
                    setInspectingProduct(null);
                    onSelectForCompare(p);
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Compare This Product
                </button>
              )}
              {onSelectForReview && (
                <button
                  onClick={() => {
                    const p = inspectingProduct;
                    setInspectingProduct(null);
                    onSelectForReview(p);
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Write Review
                </button>
              )}
              {onBuyProduct && (
                <button
                  onClick={() => {
                    const p = inspectingProduct;
                    setInspectingProduct(null);
                    onBuyProduct(p);
                  }}
                  className="px-4 py-2 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Buy This Product (₹{inspectingProduct.price.toLocaleString('en-IN')})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

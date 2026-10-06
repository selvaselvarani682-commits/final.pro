import React, { useState, useMemo } from 'react';
import {
  Star,
  SlidersHorizontal,
  ChevronDown,
  ShoppingBag,
  Filter,
  Check,
} from 'lucide-react';
import { Product, StoryboardPage } from '../types';

interface ProductListingPageViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: StoryboardPage) => void;
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
}

export const ProductListingPageView: React.FC<ProductListingPageViewProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  selectedCategory,
  onSelectCategory,
  searchQuery,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceTier, setPriceTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const categories = [
    'All Categories',
    'Electronics',
    'Fashion',
    'Beauty',
    'Home & Living',
    'Sports',
    'Books',
    'Toys',
    'Groceries',
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under500', label: 'Under ₹500' },
    { id: '500-1000', label: '₹500 - ₹1,000' },
    { id: '1000-5000', label: '₹1,000 - ₹5,000' },
    { id: '5000-10000', label: '₹5,000 - ₹10,000' },
    { id: 'above10000', label: 'Above ₹10,000' },
  ];

  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.brand))).filter(Boolean);
    return list.sort();
  }, [products]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All Categories' && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }
      // Price range
      if (priceTier === 'under500' && p.price >= 500) return false;
      if (priceTier === '500-1000' && (p.price < 500 || p.price > 1000)) return false;
      if (priceTier === '1000-5000' && (p.price < 1000 || p.price > 5000)) return false;
      if (priceTier === '5000-10000' && (p.price < 5000 || p.price > 10000)) return false;
      if (priceTier === 'above10000' && p.price < 10000) return false;

      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.reviewCount - a.reviewCount; // popularity
    });
  }, [products, selectedCategory, selectedBrands, priceTier, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar (Panel 2 from Storyboard) */}
        <aside className="lg:col-span-3 space-y-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-indigo-600" /> Filters
            </span>
            {(selectedCategory !== 'All Categories' || selectedBrands.length > 0 || priceTier !== 'all') && (
              <button
                onClick={() => {
                  onSelectCategory('All Categories');
                  setSelectedBrands([]);
                  setPriceTier('all');
                }}
                className="text-xs text-indigo-600 hover:underline font-semibold cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Categories
            </h4>
            <div className="space-y-1.5 text-xs">
              {categories.map((cat) => {
                const checked = selectedCategory === cat;
                return (
                  <label
                    key={cat}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-indigo-600 cursor-pointer select-none py-0.5"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onSelectCategory(cat)}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    <span className={checked ? 'font-bold text-indigo-600' : ''}>
                      {cat}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Price Range
            </h4>
            <div className="space-y-1.5 text-xs">
              {priceRanges.map((range) => {
                const checked = priceTier === range.id;
                return (
                  <label
                    key={range.id}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-indigo-600 cursor-pointer select-none py-0.5"
                  >
                    <input
                      type="radio"
                      name="price-tier"
                      checked={checked}
                      onChange={() => setPriceTier(range.id)}
                      className="border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    <span className={checked ? 'font-bold text-indigo-600' : ''}>
                      {range.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Brand
            </h4>
            <div className="space-y-1.5 text-xs">
              {brands.map((brand) => {
                const checked = selectedBrands.includes(brand);
                return (
                  <label
                    key={brand}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-indigo-600 cursor-pointer select-none py-0.5"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    <span className={checked ? 'font-bold text-indigo-600' : ''}>
                      {brand}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Product Listing Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Top Bar: "All Products (1000+ Items)" & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                All Products{' '}
                <span className="text-xs text-slate-500 font-normal">
                  ({filteredProducts.length} Items shown of 1000+)
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 font-semibold focus:bg-white focus:outline-none focus:border-indigo-600 cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid (9 Items matching Storyboard Panel 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((prod) => {
              const discountPercent = Math.round(
                ((prod.originalPrice - prod.price) / prod.originalPrice) * 100
              );

              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between group cursor-pointer relative"
                >
                  {/* Discount Badge */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-rose-500 text-white font-black text-[10px] shadow-xs z-10">
                    -{discountPercent}%
                  </span>

                  {/* Product Image */}
                  <div className="h-48 w-full rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-3 mb-3">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {prod.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-600 pt-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-900">{prod.rating}</span>
                        <span className="text-slate-400">
                          ({prod.reviewCount > 1000 ? `${(prod.reviewCount / 1000).toFixed(1)}k` : prod.reviewCount})
                        </span>
                      </div>
                    </div>

                    {/* Price and Add button */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                      <div>
                        <span className="text-base font-black text-slate-900 font-mono">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                        {prod.originalPrice > prod.price && (
                          <span className="text-xs text-slate-400 line-through font-mono ml-1.5">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(prod);
                        }}
                        className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

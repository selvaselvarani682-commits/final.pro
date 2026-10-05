import React, { useState } from 'react';
import {
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  Check,
  BarChart2,
} from 'lucide-react';
import { Product, StoryboardPage } from '../types';

interface ProductDetailsPageViewProps {
  product: Product;
  onAddToCart: (product: Product, selectedColor?: string, selectedStorage?: string) => void;
  onBuyNow: (product: Product) => void;
  onNavigate: (page: StoryboardPage) => void;
  onSelectProductForCompare?: (product: Product) => void;
}

export const ProductDetailsPageView: React.FC<ProductDetailsPageViewProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onNavigate,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0] || '#60A5FA'
  );
  const [selectedStorage, setSelectedStorage] = useState<string>(
    product.storageOptions?.[0] || '128GB'
  );
  const [addedAlert, setAddedAlert] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const thumbnails = product.thumbnails && product.thumbnails.length > 0
    ? product.thumbnails
    : [product.image];

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedStorage);
    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Breadcrumb Navigation (Panel 3 from Storyboard) */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-indigo-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => onNavigate('products')}
          className="hover:text-indigo-600 transition-colors cursor-pointer"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-semibold truncate max-w-xs">
          {product.title}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        {/* Left Side: Product Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="h-80 sm:h-96 w-full rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(thumb)}
                className={`w-18 h-18 sm:w-20 sm:h-20 rounded-xl p-2 bg-slate-50 border-2 transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  selectedImage === thumb
                    ? 'border-indigo-600 shadow-xs'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="max-h-full max-w-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details & Specifications */}
        <div className="lg:col-span-6 space-y-6">
          {/* Title & Ratings */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-slate-900">{product.rating}</span>
              <span className="text-slate-400">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>
          </div>

          {/* Price & Discount */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-slate-900 font-mono">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-slate-400 line-through font-mono">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
              {discountPercent}% OFF
            </span>
          </div>

          {/* Storage / Variants Options */}
          {product.storageOptions && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Available in: <span className="text-slate-900">{selectedStorage}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.storageOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedStorage(opt)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedStorage === opt
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selectors */}
          {product.colors && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Color Variant:</label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                      selectedColor === color
                        ? 'ring-2 ring-indigo-600 ring-offset-2 border-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {selectedColor === color && (
                      <Check className="w-3.5 h-3.5 text-white drop-shadow-xs" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons (Panel 3: Add to Cart & Buy Now) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                type="button"
                onClick={() => onBuyNow(product)}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-600/30"
              >
                <span>Buy Now</span>
              </button>
            </div>

            {addedAlert && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl text-center">
                ✓ Added {product.title} to your cart!
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] font-semibold text-slate-600 border-t border-slate-100">
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Truck className="w-4 h-4 text-indigo-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <RotateCcw className="w-4 h-4 text-indigo-600" />
              <span>7 Days Return</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Secure Payment</span>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product Description
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications Table (Panel 3) */}
          {product.specifications && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-slate-900 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Intelligence Shortcuts */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={() => onNavigate('ai-text')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Analyze Reviews with AI</span>
            </button>
            <button
              onClick={() => onNavigate('platform-comparison')}
              className="text-xs font-bold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5 cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Compare 5 Marketplaces</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ReviewAINavbar } from './components/ReviewAINavbar';
import { Footer } from './components/Footer';

import { HomePageView } from './pages/HomePageView';
import { ProductListingPageView } from './pages/ProductListingPageView';
import { ProductDetailsPageView } from './pages/ProductDetailsPageView';
import { AITextAnalysisView } from './pages/AITextAnalysisView';
import { AIVoiceAnalysisView } from './pages/AIVoiceAnalysisView';
import { AIImageAnalysisView } from './pages/AIImageAnalysisView';
import { PlatformComparisonView } from './pages/PlatformComparisonView';
import { CartPageView } from './pages/CartPageView';
import { UserProfilePageView } from './pages/UserProfilePageView';
import { AdminPanelView } from './pages/AdminPanelView';

import { STORYBOARD_PRODUCTS } from './data/storyboardProducts';
import { Product, CartItem, StoryboardPage } from './types';
import { saveReviewToDatabase } from './services/reviewStorage';
import ecommerceBg from './assets/images/ecommerce_page_bg_1790847190923.jpg';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<StoryboardPage>('home');
  const [products, setProducts] = useState<Product[]>(STORYBOARD_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product>(STORYBOARD_PRODUCTS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart state initialized with 2 sample items (matching red badge "2" in screenshot)
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: STORYBOARD_PRODUCTS[0], // iPhone 15
      quantity: 1,
      selectedColor: '#60A5FA',
      selectedStorage: '128GB',
    },
    {
      product: STORYBOARD_PRODUCTS[1], // Nike Shoes
      quantity: 1,
      selectedColor: '#1E293B',
      selectedStorage: 'UK 9',
    },
  ]);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to Cart handler
  const handleAddToCart = (
    product: Product,
    selectedColor?: string,
    selectedStorage?: string
  ) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedColor: selectedColor || product.colors?.[0],
          selectedStorage: selectedStorage || product.storageOptions?.[0],
        },
      ];
    });
    showToast(`Added "${product.title}" to Cart!`);
  };

  // Cart quantity update
  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from Cart');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Select Product and view details
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation helper
  const handleNavigate = (page: StoryboardPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin delete product
  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product deleted from catalog');
  };

  // Admin add product
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Product "${newProduct.title}" added to catalog`);
  };

  // Save Review to Firestore Cloud Database
  const handleSaveReviewToFirestore = async (reviewData: any) => {
    try {
      await saveReviewToDatabase(reviewData);
      showToast('Review successfully published to Cloud Firestore!');
    } catch (err) {
      console.error('Error saving review to Firestore:', err);
      showToast('Review saved locally and sent to queue.');
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans relative selection:bg-indigo-600 selection:text-white">
      {/* 
        Background Layer:
        White base with e-commerce background image at 0.7 opacity
      */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={ecommerceBg}
          alt="E-commerce background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.7 }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Clean Header & Navigation matching uploaded screenshot (No top black box, No login) */}
        <ReviewAINavbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          cartCount={totalCartCount}
          onSearch={(query) => {
            setSearchQuery(query);
            setCurrentPage('products');
          }}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            if (currentPage !== 'products' && currentPage !== 'home') {
              setCurrentPage('products');
            }
          }}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* 
          All Modules:
          - First Page (Home): Exactly matching the uploaded screenshot with:
            1. Hero Banner ("Shop Smarter with AI Review Analysis" + 4 modality pills + phones + AI Analysis card)
            2. 8 Circular Category Icons
            3. 6 Featured Products Grid
            4. 3 Promotional Banners (Top Brands Deals, Beauty & Personal Care, Home Essentials)
            5. Value Propositions & Trust Bar (Secure Payments, Fast Delivery, Easy Returns, 24/7 Support)
          - Product Listing, Product Details, AI Review (Text, Voice, Image), Platform Comparison, Cart, Profile, Admin
        */}
        <main className="flex-1 pb-12">
          {/* First Page: Home Page (Matching Uploaded Image) */}
          {currentPage === 'home' && (
            <HomePageView
              products={products}
              onSelectProduct={handleSelectProduct}
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
            />
          )}

          {/* Product Listing Module */}
          {currentPage === 'products' && (
            <ProductListingPageView
              products={products}
              onSelectProduct={handleSelectProduct}
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
            />
          )}

          {/* Product Details Module */}
          {currentPage === 'product-details' && (
            <ProductDetailsPageView
              product={selectedProduct}
              onAddToCart={handleAddToCart}
              onBuyNow={(prod) => {
                handleAddToCart(prod);
                setCurrentPage('cart');
              }}
              onNavigate={handleNavigate}
              onSelectProductForCompare={(prod) => {
                setSelectedProduct(prod);
                setCurrentPage('platform-comparison');
              }}
            />
          )}

          {/* AI Review Module - Text ABSA */}
          {currentPage === 'ai-text' && (
            <AITextAnalysisView
              onNavigate={handleNavigate}
              onSaveReview={handleSaveReviewToFirestore}
              userEmail="24bit015@stc.ac.in"
              userName="Selvarani K"
            />
          )}

          {/* AI Review Module - Voice Recording & Waveform */}
          {currentPage === 'ai-voice' && (
            <AIVoiceAnalysisView
              onNavigate={handleNavigate}
              onSaveReview={handleSaveReviewToFirestore}
              userName="Selvarani K"
              userEmail="24bit015@stc.ac.in"
            />
          )}

          {/* AI Review Module - Image OCR & Receipt Scanner */}
          {currentPage === 'ai-image' && (
            <AIImageAnalysisView
              onNavigate={handleNavigate}
              onSaveReview={handleSaveReviewToFirestore}
              userName="Selvarani K"
              userEmail="24bit015@stc.ac.in"
            />
          )}

          {/* Cross-Platform Comparison Module */}
          {currentPage === 'platform-comparison' && (
            <PlatformComparisonView
              products={products}
              selectedProduct={selectedProduct}
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
            />
          )}

          {/* Cart Module */}
          {currentPage === 'cart' && (
            <CartPageView
              items={cart}
              onUpdateQuantity={handleUpdateCartQuantity}
              onRemoveItem={handleRemoveCartItem}
              onNavigate={handleNavigate}
              onClearCart={handleClearCart}
            />
          )}

          {/* User Profile / Wishlist Module */}
          {currentPage === 'profile' && (
            <UserProfilePageView
              onNavigate={handleNavigate}
              onLogout={() => {
                showToast('Logged out');
                setCurrentPage('home');
              }}
            />
          )}

          {/* Store Admin Console Module */}
          {currentPage === 'admin' && (
            <AdminPanelView
              products={products}
              onNavigate={handleNavigate}
              onAddProduct={handleAddProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
export default App;

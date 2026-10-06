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
import { AdminLoginPage } from './pages/AdminLoginPage';
import {
  getAdminToken,
  getAdminUser,
  verifyAdminSessionApi,
  logoutAdminApi,
  AdminUserSession,
} from './services/adminAuthService';

import { STORYBOARD_PRODUCTS } from './data/storyboardProducts';
import { Product, CartItem, StoryboardPage } from './types';
import { saveReviewToDatabase } from './services/reviewStorage';
import {
  getStoredProducts,
  fetchProductsFromBackend,
  addProductBackend,
  updateProductBackend,
  deleteProductBackend,
} from './services/productStorage';
import ecommerceBg from './assets/images/ecommerce_page_bg_1790847190923.jpg';
import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export function App() {
  const [currentPage, setCurrentPage] = useState<StoryboardPage>('home');
  const [products, setProducts] = useState<Product[]>(getStoredProducts());
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0] || STORYBOARD_PRODUCTS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Admin Authentication State
  const [adminUser, setAdminUser] = useState<AdminUserSession | null>(getAdminUser());
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(Boolean(getAdminToken()));

  // Verify Admin Session on mount
  useEffect(() => {
    if (getAdminToken()) {
      verifyAdminSessionApi().then((valid) => {
        setIsAdminAuthenticated(valid);
        if (valid) {
          setAdminUser(getAdminUser());
        }
      });
    }
  }, []);

  // Sync products from backend on mount
  useEffect(() => {
    fetchProductsFromBackend()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch((err) => console.warn('Product backend sync notice:', err));
  }, []);

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

  // Navigation helper with route protection for administrators
  const handleNavigate = (page: StoryboardPage) => {
    if (page === 'admin' && !isAdminAuthenticated) {
      setCurrentPage('admin-login');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (page === 'admin-login' && isAdminAuthenticated) {
      setCurrentPage('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin login success handler
  const handleAdminLoginSuccess = (user: AdminUserSession) => {
    setIsAdminAuthenticated(true);
    setAdminUser(user);
    setCurrentPage('admin');
    showToast(`Welcome back, ${user.name}!`);
  };

  // Admin logout handler
  const handleAdminLogout = async () => {
    await logoutAdminApi();
    setIsAdminAuthenticated(false);
    setAdminUser(null);
    setCurrentPage('home');
    showToast('Administrator logged out successfully.');
  };

  // Admin delete product from backend
  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProductBackend(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setCart((prev) => prev.filter((item) => item.product.id !== id));
      showToast('Product removed from catalog.');
    } catch (err) {
      console.error('Error deleting product:', err);
      showToast('Error removing product');
    }
  };

  // Admin add product to backend
  const handleAddProduct = async (productData: Partial<Product>) => {
    try {
      const created = await addProductBackend(productData);
      setProducts((prev) => [created, ...prev.filter((p) => p.id !== created.id)]);
      showToast(`Product "${created.title}" added to catalog!`);
    } catch (err) {
      console.error('Error adding product:', err);
      showToast('Error adding product');
    }
  };

  // Admin update product in backend (make all changes)
  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      const saved = await updateProductBackend(updatedProduct.id, updatedProduct);
      setProducts((prev) => prev.map((p) => (p.id === saved.id ? saved : p)));
      if (selectedProduct.id === saved.id) {
        setSelectedProduct(saved);
      }
      showToast(`Updated "${saved.title}" successfully!`);
    } catch (err) {
      console.error('Error updating product:', err);
      showToast('Error updating product');
    }
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
          isAdmin={isAdminAuthenticated}
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
              onSelectCategory={setSelectedCategory}
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

          {/* User Activity & Shopping Hub */}
          {currentPage === 'profile' && (
            <UserProfilePageView
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
              onSelectProduct={handleSelectProduct}
              products={products}
            />
          )}

          {/* Admin Login Module */}
          {currentPage === 'admin-login' && (
            <AdminLoginPage
              onLoginSuccess={handleAdminLoginSuccess}
              onNavigate={handleNavigate}
            />
          )}

          {/* Store Admin Console Module (Strictly Protected by Backend Authentication) */}
          {currentPage === 'admin' && (
            isAdminAuthenticated ? (
              <AdminPanelView
                products={products}
                onNavigate={handleNavigate}
                onAddProduct={handleAddProduct}
                onUpdateProduct={handleUpdateProduct}
                onDeleteProduct={handleDeleteProduct}
                onSelectProduct={handleSelectProduct}
                onLogout={handleAdminLogout}
                adminUser={adminUser}
              />
            ) : (
              <AdminLoginPage
                onLoginSuccess={handleAdminLoginSuccess}
                onNavigate={handleNavigate}
              />
            )
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
export default App;

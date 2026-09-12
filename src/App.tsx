import React, { useState, useEffect } from 'react';
import { EnterpriseNavbar, EnterpriseNavSection } from './components/EnterpriseNavbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalogView } from './modules/products';
import { MultimodalReviewSearch } from './modules/review-search';
import { OpenReviewsCatalog } from './components/OpenReviewsCatalog';
import { ProductComparator } from './components/ProductComparator';
import {
  BuyProductModal,
  MyOrdersModal,
  getStoredOrders,
  saveStoredOrder,
  ProductOrder,
} from './modules/buying';
import { ALL_PRODUCTS } from './modules/products/productsData';
import { SubmitReviewModal } from './components/SubmitReviewModal';
import { ReviewDrawer } from './components/ReviewDrawer';
import { Footer } from './components/Footer';
import { Product, StoredReview, PlatformType } from './types';
import {
  getStoredReviews,
  fetchReviewsFromDatabase,
  saveReviewToDatabase,
  deleteReviewFromStorage,
} from './services/reviewStorage';

export function App() {
  const [activeSection, setActiveSection] = useState<EnterpriseNavSection>('overview');
  const [reviews, setReviews] = useState<StoredReview[]>([]);
  const [selectedReview, setSelectedReview] = useState<StoredReview | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [modalInitialProductId, setModalInitialProductId] = useState<string | undefined>(undefined);
  const [compareProductAId, setCompareProductAId] = useState<string | undefined>(undefined);

  // Orders and Buying product flow state
  const [orders, setOrders] = useState<ProductOrder[]>(() => getStoredOrders());
  const [buyingProduct, setBuyingProduct] = useState<Product | null>(null);
  const [buyingPlatform, setBuyingPlatform] = useState<PlatformType | undefined>(undefined);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState<boolean>(false);

  // Filter and Search states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All Platforms');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('All Sentiments');

  const loadReviews = async () => {
    try {
      // 1. Instantly load local reviews for zero lag UI
      const localData = getStoredReviews();
      setReviews(localData);

      // 2. Fetch live data from Firestore cloud database
      const dbData = await fetchReviewsFromDatabase();
      if (dbData && dbData.length > 0) {
        setReviews(dbData);
      }
    } catch (err) {
      console.error('Failed to load reviews from database:', err);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleReviewSubmitted = async (
    newReviewData: Omit<StoredReview, 'id' | 'createdAt'>
  ) => {
    const created = await saveReviewToDatabase(newReviewData);
    setReviews((prev) => [created, ...prev]);
    // Smooth scroll down to open reviews so user sees their new review
    const el = document.getElementById('open-reviews-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeleteReview = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to remove the review for "${title}"?`)) {
      const updated = deleteReviewFromStorage(id);
      setReviews(updated);
      if (selectedReview?.id === id) {
        setSelectedReview(null);
      }
    }
  };

  const handleSelectSection = (section: EnterpriseNavSection) => {
    setActiveSection(section);
    if (section === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'products') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'review-search') {
      document.getElementById('review-search-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'open-reviews') {
      document.getElementById('open-reviews-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'comparator') {
      document.getElementById('comparator-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForCompare = (product: Product) => {
    setCompareProductAId(product.id);
    setActiveSection('comparator');
    document.getElementById('comparator-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProductForReview = (product: Product) => {
    setModalInitialProductId(product.id);
    setIsSubmitModalOpen(true);
  };

  const handleBuyProduct = (product: Product, platform?: PlatformType) => {
    setBuyingProduct(product);
    setBuyingPlatform(platform);
  };

  const handleBuyFromReview = (productTitle: string, productId?: string) => {
    const found =
      ALL_PRODUCTS.find(
        (p) =>
          (productId && p.id === productId) ||
          p.title.toLowerCase().includes(productTitle.toLowerCase()) ||
          productTitle.toLowerCase().includes(p.title.toLowerCase())
      ) || ALL_PRODUCTS[0];
    setBuyingProduct(found);
    setBuyingPlatform(undefined);
  };

  const handleOrderPlaced = (order: ProductOrder) => {
    const updated = saveStoredOrder(order);
    setOrders(updated);
  };

  const handleBuyAgain = (order: ProductOrder) => {
    const p = ALL_PRODUCTS.find((item) => item.id === order.productId) || ALL_PRODUCTS[0];
    setBuyingProduct(p);
    setBuyingPlatform(order.platform);
  };

  const handleExecuteSearch = () => {
    document.getElementById('open-reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFocusSearch = () => {
    const input = document.getElementById('hero-search-input');
    if (input) {
      input.focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Average Trust Score
  const avgTrustScore =
    reviews.length > 0
      ? Math.round(
          reviews.reduce((acc, r) => acc + r.trustScore, 0) / reviews.length
        )
      : 95;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#FCA92B] selection:text-slate-950">
      {/* Enterprise Navigation */}
      <EnterpriseNavbar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        reviewCount={reviews.length}
        onOpenSubmitModal={() => {
          setModalInitialProductId(undefined);
          setIsSubmitModalOpen(true);
        }}
        onFocusSearch={handleFocusSearch}
        orderCount={orders.length}
        onOpenOrders={() => setIsOrdersModalOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
          selectedSentiment={selectedSentiment}
          onSentimentChange={setSelectedSentiment}
          onExecuteSearch={handleExecuteSearch}
          onOpenSubmitModal={() => {
            setModalInitialProductId(undefined);
            setIsSubmitModalOpen(true);
          }}
          totalReviewsCount={reviews.length}
          avgTrustScore={avgTrustScore}
          onNavigateToReviewSearch={() => handleSelectSection('review-search')}
        />

        {/* Dedicated Products Module */}
        <ProductCatalogView
          onSelectForCompare={handleSelectProductForCompare}
          onSelectForReview={handleSelectProductForReview}
          onBuyProduct={handleBuyProduct}
        />

        {/* Multimodal Review Search Module (Text, Image, Voice) */}
        <MultimodalReviewSearch
          reviews={reviews}
          onSelectReview={setSelectedReview}
          onSelectProductForCompare={handleSelectProductForCompare}
        />

        {/* Open Reviews Catalog */}
        <OpenReviewsCatalog
          reviews={reviews}
          onSelectReview={setSelectedReview}
          onDeleteReview={handleDeleteReview}
          onOpenSubmitModal={() => {
            setModalInitialProductId(undefined);
            setIsSubmitModalOpen(true);
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
          selectedSentiment={selectedSentiment}
          onSentimentChange={setSelectedSentiment}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Cross-Marketplace Comparator */}
        <ProductComparator
          selectedProductAId={compareProductAId}
          onBuyProduct={handleBuyProduct}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Slide-over / Modal for Review Inspection */}
      <ReviewDrawer
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
        onBuyProduct={handleBuyFromReview}
      />

      {/* Modal for Submitting New Reviews */}
      <SubmitReviewModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
        initialProductId={modalInitialProductId}
      />

      {/* Product Buying & Checkout Flow Modal */}
      <BuyProductModal
        isOpen={!!buyingProduct}
        onClose={() => {
          setBuyingProduct(null);
          setBuyingPlatform(undefined);
        }}
        product={buyingProduct}
        initialPlatform={buyingPlatform}
        onOrderPlaced={handleOrderPlaced}
        onOpenReviewModal={(prodId) => {
          setModalInitialProductId(prodId);
          setIsSubmitModalOpen(true);
        }}
        onViewOrders={() => setIsOrdersModalOpen(true)}
      />

      {/* My Orders & Tracking Drawer Modal */}
      <MyOrdersModal
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        orders={orders}
        onOpenReviewModal={(prodId) => {
          setModalInitialProductId(prodId);
          setIsSubmitModalOpen(true);
        }}
        onBuyAgain={handleBuyAgain}
      />
    </div>
  );
}

export default App;

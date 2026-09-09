import React, { useState, useEffect } from 'react';
import { EnterpriseNavbar, EnterpriseNavSection } from './components/EnterpriseNavbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalogView } from './modules/products';
import { MultimodalReviewSearch } from './modules/review-search';
import { OpenReviewsCatalog } from './components/OpenReviewsCatalog';
import { WhyReviewSense } from './components/WhyReviewSense';
import { ConsumerVoices } from './components/ConsumerVoices';
import { ProductComparator } from './components/ProductComparator';
import { SubmitReviewModal } from './components/SubmitReviewModal';
import { ReviewDrawer } from './components/ReviewDrawer';
import { Footer } from './components/Footer';
import { Product, StoredReview } from './types';
import {
  getStoredReviews,
  fetchReviewsFromServer,
  saveReviewToStorage,
  deleteReviewFromStorage,
} from './services/reviewStorage';

export function App() {
  const [activeSection, setActiveSection] = useState<EnterpriseNavSection>('overview');
  const [reviews, setReviews] = useState<StoredReview[]>([]);
  const [selectedReview, setSelectedReview] = useState<StoredReview | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [modalInitialProductId, setModalInitialProductId] = useState<string | undefined>(undefined);
  const [compareProductAId, setCompareProductAId] = useState<string | undefined>(undefined);

  // Filter and Search states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All Platforms');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('All Sentiments');

  const loadReviews = async () => {
    try {
      const data = getStoredReviews();
      setReviews(data);
      const serverData = await fetchReviewsFromServer();
      if (serverData && serverData.length > 0) {
        setReviews(serverData);
      }
    } catch (err) {
      console.error('Failed to load reviews:', err);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleReviewSubmitted = (
    newReviewData: Omit<StoredReview, 'id' | 'createdAt'>
  ) => {
    const created = saveReviewToStorage(newReviewData);
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
    } else if (section === 'why-us') {
      document.getElementById('why-us-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'consumer-voices') {
      document.getElementById('consumer-voices-section')?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Why ReviewSense */}
        <WhyReviewSense
          onOpenSubmitModal={() => {
            setModalInitialProductId(undefined);
            setIsSubmitModalOpen(true);
          }}
        />

        {/* Consumer Voices */}
        <ConsumerVoices
          reviews={reviews}
          onSelectReview={setSelectedReview}
        />

        {/* Cross-Marketplace Comparator */}
        <ProductComparator
          selectedProductAId={compareProductAId}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Slide-over / Modal for Review Inspection */}
      <ReviewDrawer
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />

      {/* Modal for Submitting New Reviews */}
      <SubmitReviewModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
        initialProductId={modalInitialProductId}
      />
    </div>
  );
}

export default App;

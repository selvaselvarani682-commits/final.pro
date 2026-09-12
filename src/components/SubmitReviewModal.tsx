import React, { useState, useRef, useEffect, useMemo } from 'react';
import { PlatformType, StoredReview } from '../types';
import { ALL_PRODUCTS } from '../data/products';
import { analyzeReviewText } from '../services/aiService';
import {
  X,
  Star,
  CheckCircle2,
  Send,
  Loader2,
  Mic,
  MicOff,
  Sparkles,
  ShoppingBag,
  RotateCcw,
  Tag,
  ThumbsUp,
  ImagePlus,
  UploadCloud,
  Trash2,
  Camera,
} from 'lucide-react';

interface SubmitReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (review: Omit<StoredReview, 'id' | 'createdAt'>) => void;
  initialProductId?: string;
}

const RATING_EMOTIONS = [
  { stars: 5, label: 'Loved it! (5.0)', color: 'text-amber-500' },
  { stars: 4, label: 'Liked it (4.0)', color: 'text-amber-500' },
  { stars: 3, label: 'It was okay (3.0)', color: 'text-amber-500' },
  { stars: 2, label: 'Not great (2.0)', color: 'text-amber-500' },
  { stars: 1, label: 'Disappointed (1.0)', color: 'text-rose-500' },
];

const QUICK_TAG_SUGGESTIONS = [
  'Superb quality',
  'Long battery life',
  'True to size & fit',
  'Value for money',
  'Fast delivery',
  'Slightly warm earcups',
];

const SAMPLE_PHOTO_PRESETS = [
  {
    label: 'Unboxing & Box',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
  },
  {
    label: 'Product Detail',
    url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80',
  },
  {
    label: 'In-Hand / Usage',
    url: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500&auto=format&fit=crop&q=80',
  },
];

const PLATFORMS: PlatformType[] = [
  'Amazon',
  'Myntra',
  'Nykaa',
  'Meesho',
  'Snapdeal',
];

export const SubmitReviewModal: React.FC<SubmitReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted,
  initialProductId,
}) => {
  if (!isOpen) return null;

  // Form states
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProductId || (ALL_PRODUCTS[0]?.id || '')
  );
  const [isCustomProduct, setIsCustomProduct] = useState<boolean>(false);
  const [customProductName, setCustomProductName] = useState<string>('');

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const [reviewTitle, setReviewTitle] = useState<string>('');
  const [reviewContent, setReviewContent] = useState<string>('');
  const [reviewerName, setReviewerName] = useState<string>('');
  const [platform, setPlatform] = useState<PlatformType>('Amazon');
  const [isVerified, setIsVerified] = useState<boolean>(true);

  // Photo upload states
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isPhotoDragOver, setIsPhotoDragOver] = useState<boolean>(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const remainingSlots = 4 - uploadedPhotos.length;
    if (remainingSlots <= 0) {
      alert('You can attach up to 4 photos per review.');
      return;
    }

    const filesToRead = Array.from(files).slice(0, remainingSlots);
    filesToRead.forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setUploadedPhotos((prev) => [...prev, result].slice(0, 4));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemovePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddPresetPhoto = (url: string) => {
    if (uploadedPhotos.length >= 4) {
      alert('Maximum 4 photos reached.');
      return;
    }
    setUploadedPhotos((prev) => [...prev, url].slice(0, 4));
  };

  // Status states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);

  // Group catalog products by category for simple browsing
  const groupedProducts = useMemo(() => {
    const map = new Map<string, typeof ALL_PRODUCTS>();
    ALL_PRODUCTS.forEach((p) => {
      const cat = p.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    });
    return Array.from(map.entries());
  }, []);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
      setIsCustomProduct(false);
    }
  }, [initialProductId]);

  // Voice speech-to-text toggle
  const handleVoiceToggle = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your review.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setReviewContent((prev) => (prev ? prev + ' ' + transcript : transcript));
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error('Speech recognition error:', e);
      setIsRecording(false);
    }
  };

  // Quick autofill sample review
  const handleFillSample = () => {
    setIsCustomProduct(false);
    setSelectedProductId(ALL_PRODUCTS[0]?.id || '');
    setRating(5);
    setReviewTitle('Superb Sound & 30-Hour Battery');
    setReviewContent(
      'The active noise cancellation easily blocks out airplane and office chatter. Battery comfortably delivers 30+ hours on a single charge. Soundstage is wide with punchy bass and crystal clear vocals.'
    );
    setReviewerName('Alex Chen');
    setPlatform('Amazon');
    setIsVerified(true);
    setUploadedPhotos([SAMPLE_PHOTO_PRESETS[0].url]);
  };

  // Quick reset
  const handleReset = () => {
    setReviewTitle('');
    setReviewContent('');
    setReviewerName('');
    setRating(5);
    setCustomProductName('');
    setUploadedPhotos([]);
  };

  // Submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewContent.trim()) return;

    setIsSubmitting(true);

    try {
      // Analyze the submitted review with AI
      const analysis = await analyzeReviewText(
        (reviewTitle ? reviewTitle + '. ' : '') + reviewContent
      );

      const matchedProduct = ALL_PRODUCTS.find((p) => p.id === selectedProductId);
      const finalProductTitle = isCustomProduct
        ? customProductName.trim() || 'Custom Product'
        : matchedProduct?.title || 'Verified Product';

      onReviewSubmitted({
        productId: isCustomProduct ? 'custom-prod' : selectedProductId || 'prod',
        productTitle: finalProductTitle,
        reviewerName: reviewerName.trim() || 'Verified Customer',
        platform,
        rating,
        title: reviewTitle.trim() || 'Customer Experience',
        content: reviewContent.trim(),
        sentiment: analysis.sentiment,
        confidenceScore: analysis.confidenceScore,
        trustScore: analysis.trustScore,
        aspects: analysis.aspects,
        pros: analysis.pros,
        cons: analysis.cons,
        summary: analysis.summary,
        verified: isVerified,
        photos: uploadedPhotos.length > 0 ? uploadedPhotos : undefined,
      });

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    } catch (err) {
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeRatingEmotion =
    RATING_EMOTIONS.find((e) => e.stars === (hoverRating || rating)) ||
    RATING_EMOTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 w-full max-w-xl shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Write a Review</span>
              <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Analyzed
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Share your genuine feedback to help other buyers make confident choices.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleFillSample}
              className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 border border-indigo-100"
              title="Fill with sample review"
            >
              <ThumbsUp className="w-3 h-3" />
              <span className="hidden sm:inline">Try Sample</span>
            </button>
            <button
              id="close-submit-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Splash Overlay */}
        {isSuccess ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Review Published Successfully!
            </h3>
            <p className="text-xs text-slate-500 max-w-xs">
              AI aspect sentiment scores and trust metrics have been updated and added to the live catalog.
            </p>
          </div>
        ) : (
          /* Main Simple Form */
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto"
          >
            {/* 1. Overall Star Rating */}
            <div className="bg-amber-50/50 border border-amber-200/70 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">
                  Overall Rating
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                      aria-label={`${star} star`}
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400 drop-shadow-xs'
                            : 'text-slate-300 hover:text-amber-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-bold text-amber-900 block">
                  {activeRatingEmotion.label}
                </span>
                <span className="text-[11px] text-amber-800/70">
                  Click stars to change
                </span>
              </div>
            </div>

            {/* 2. Product Selector */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-indigo-600" />
                  Product Name
                </label>
                <button
                  type="button"
                  onClick={() => setIsCustomProduct(!isCustomProduct)}
                  className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                >
                  {isCustomProduct ? '← Choose from Catalog' : '+ Enter Other Product'}
                </button>
              </div>

              {isCustomProduct ? (
                <input
                  id="submit-custom-product-input"
                  type="text"
                  value={customProductName}
                  onChange={(e) => setCustomProductName(e.target.value)}
                  placeholder="Type product name (e.g., Apple Watch Ultra, Zara Linen Shirt)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                  autoFocus
                />
              ) : (
                <select
                  id="submit-product-select"
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs cursor-pointer"
                >
                  {groupedProducts.map(([cat, prods]) => (
                    <optgroup key={cat} label={`── ${cat} ──`}>
                      {prods.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.brand} - {p.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              )}
            </div>

            {/* 3. Review Headline */}
            <div>
              <label
                htmlFor="submit-review-headline-input"
                className="text-xs font-bold text-slate-800 block mb-1.5"
              >
                Headline
              </label>
              <input
                id="submit-review-headline-input"
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                placeholder="What's the most important takeaway? (e.g. Great sound quality & long battery)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs placeholder-slate-400"
              />
            </div>

            {/* 4. Review Content with Integrated Voice Mic */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="submit-review-content-textarea"
                  className="text-xs font-bold text-slate-800"
                >
                  Your Review <span className="text-rose-500">*</span>
                </label>

                <div className="flex items-center gap-2">
                  {/* Voice dictation button */}
                  <button
                    type="button"
                    onClick={handleVoiceToggle}
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                      isRecording
                        ? 'bg-rose-100 text-rose-700 animate-pulse border border-rose-300'
                        : 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50'
                    }`}
                    title="Speak to dictate review"
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="w-3 h-3 text-rose-600" />
                        <span>Recording... (Click to stop)</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-3 h-3 text-indigo-600" />
                        <span>Voice Dictation</span>
                      </>
                    )}
                  </button>

                  {reviewContent && (
                    <button
                      type="button"
                      onClick={() => setReviewContent('')}
                      className="text-[11px] text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="submit-review-content-textarea"
                  rows={4}
                  required
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  placeholder="Share details of your experience: What worked well? How was the build quality, size/fit, battery life, packaging, or durability?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs placeholder-slate-400 leading-relaxed resize-none"
                />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5 text-indigo-500" />
                  Quick add:
                </span>
                {QUICK_TAG_SUGGESTIONS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setReviewContent((prev) =>
                        prev ? `${prev.trim()} ${tag}.` : `${tag}.`
                      );
                    }}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 border border-slate-200/80 transition-colors cursor-pointer"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* 4.5 Customer Review Photos Upload */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ImagePlus className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Upload Photos of the Product</span>
                  <span className="text-[10px] font-normal text-slate-500">(Optional • max 4)</span>
                </label>
                {uploadedPhotos.length > 0 && (
                  <span className="text-[11px] font-mono text-indigo-600 font-semibold">
                    {uploadedPhotos.length}/4 attached
                  </span>
                )}
              </div>

              {/* Drag and drop upload box */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsPhotoDragOver(true);
                }}
                onDragLeave={() => setIsPhotoDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsPhotoDragOver(false);
                  handlePhotoFiles(e.dataTransfer.files);
                }}
                onClick={() => photoInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-3 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                  isPhotoDragOver
                    ? 'border-indigo-500 bg-indigo-50/50'
                    : 'border-slate-200 hover:border-indigo-300 bg-slate-50/60 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handlePhotoFiles(e.target.files)}
                  className="hidden"
                />
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <UploadCloud className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-indigo-600 hover:underline">Click to upload</span> or drag and drop photos
                </div>
                <p className="text-[10px] text-slate-400">
                  PNG, JPG, or WEBP showing real product packaging, fit, or condition
                </p>
              </div>

              {/* Uploaded Photo Thumbnails */}
              {uploadedPhotos.length > 0 && (
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {uploadedPhotos.map((photo, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-lg overflow-hidden border border-slate-200 aspect-square group bg-slate-100"
                    >
                      <img
                        src={photo}
                        alt={`Review photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePhoto(idx);
                        }}
                        className="absolute top-1 right-1 w-5 h-5 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-xs"
                        title="Remove photo"
                      >
                        <X className="w-3 h-3" />
                      </button>
                      <span className="absolute bottom-1 left-1 px-1 rounded bg-slate-900/70 text-white text-[9px] font-mono">
                        #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick sample photo presets */}
              {uploadedPhotos.length < 4 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5 text-indigo-500" />
                    Or add sample proof:
                  </span>
                  {SAMPLE_PHOTO_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handleAddPresetPhoto(preset.url)}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 border border-slate-200 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>+ {preset.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Reviewer & Platform Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label
                  htmlFor="submit-reviewer-name-input"
                  className="text-xs font-bold text-slate-800 block mb-1.5"
                >
                  Your Name / Alias
                </label>
                <input
                  id="submit-reviewer-name-input"
                  type="text"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="e.g., Alex Chen or Anonymous"
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs placeholder-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="submit-platform-select"
                  className="text-xs font-bold text-slate-800 block mb-1.5"
                >
                  Purchased On
                </label>
                <select
                  id="submit-platform-select"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value as PlatformType)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs cursor-pointer"
                >
                  {PLATFORMS.map((plat) => (
                    <option key={plat} value={plat}>
                      {plat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 6. Verified Buyer Checkbox */}
            <div className="pt-1">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/60 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={isVerified}
                  onChange={(e) => setIsVerified(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-0 cursor-pointer"
                />
                <div className="flex items-center gap-1.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>I am a verified buyer of this product</span>
                </div>
              </label>
            </div>

            {/* Footer Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              {(reviewTitle || reviewContent || reviewerName) ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Takes less than 1 minute
                </span>
              )}

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  id="submit-publish-and-analyze-btn"
                  type="submit"
                  disabled={!reviewContent.trim() || isSubmitting}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-indigo-600/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Analyzing & Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Review</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

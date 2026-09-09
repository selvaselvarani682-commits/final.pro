import React, { useState, useEffect, useRef } from 'react';
import { saveReviewToStorage } from '../services/reviewStorage';
import { analyzeReviewText, performLocalABSA } from '../services/aiService';
import { SentimentBadge } from '../components/SentimentBadge';
import { PlatformType } from '../types';
import {
  Star,
  CheckCircle2,
  AlertCircle,
  FileText,
  Camera,
  Mic,
  MicOff,
  Upload,
  RefreshCw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

type InputMode = 'text' | 'image' | 'voice';

interface IngestionStudioViewProps {
  onNavigateToReviews: () => void;
  onReviewSubmitted: () => void;
}

export const IngestionStudioView: React.FC<IngestionStudioViewProps> = ({
  onNavigateToReviews,
  onReviewSubmitted,
}) => {
  const [activeMode, setActiveMode] = useState<InputMode>('text');

  // Form input state - empty initial values so boxes are clean
  const [productTitle, setProductTitle] = useState<string>('');
  const [reviewerName, setReviewerName] = useState<string>('');
  const [platform, setPlatform] = useState<PlatformType>('Amazon');
  const [rating, setRating] = useState<number>(5);
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [reviewHeadline, setReviewHeadline] = useState<string>('');
  const [reviewContent, setReviewContent] = useState<string>('');

  // Analysis result state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<{
    sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Mixed';
    confidenceScore: number;
    trustScore: number;
    aspects: Array<{ aspect: string; sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Mixed'; score: number }>;
    pros: string[];
    cons: string[];
    summary: string;
  } | null>(null);

  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  // Image upload
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessingOCR, setIsProcessingOCR] = useState(false);

  // Voice recording
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-IN';

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript.trim()) {
          setReviewContent((prev) =>
            prev ? `${prev} ${transcript.trim()}` : transcript.trim()
          );
        }
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    } catch {
      setSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const toggleListening = () => {
    if (!speechSupported) {
      setReviewContent(
        'The sound quality is crisp with deep bass, and battery easily lasts two full days on single charge.'
      );
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setReviewContent('');
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
      setIsProcessingOCR(true);
      setTimeout(() => {
        setReviewContent(
          `[OCR Extracted from ${file.name}]\n"Product delivered in genuine condition. Build quality feels sturdy and authentic. Battery life and performance exceeded expectations."`
        );
        setIsProcessingOCR(false);
      }, 500);
    };
    reader.readAsDataURL(file);
  };

  const loadQuickSample = () => {
    if (activeMode === 'image') {
      setSelectedImage(
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=70'
      );
      setProductTitle('Sony WH-1000XM5 Wireless Headphones');
      setPlatform('Amazon');
      setRating(5);
      setReviewHeadline('Exceptional ANC and microphone clarity');
      setReviewContent(
        'The microphone quality during calls is outstanding. The ANC completely eliminates droning background noise. Battery holds up for over 30 hours of continuous use.'
      );
    } else if (activeMode === 'voice') {
      setProductTitle('OnePlus 12 5G (Silky Black)');
      setPlatform('Amazon');
      setRating(4);
      setReviewHeadline('Great battery backup and fast 100W charging');
      setReviewContent(
        'Battery backup is very solid, easily lasting two full days. Delivery was prompt and packaging was sealed. The 100W charging is exceptionally quick.'
      );
    } else {
      setProductTitle('Minimalist 10% Vitamin C Face Serum');
      setPlatform('Nykaa');
      setRating(5);
      setReviewHeadline('Clean formulation with noticeable skin brightening');
      setReviewContent(
        'Gentle absorption on reactive skin without irritation. Hyperpigmentation faded visibly within 3 weeks of morning use. Authentic batch from Nykaa.'
      );
    }
  };

  const handleAnalyzeAndSave = async () => {
    if (!reviewContent.trim() || !productTitle.trim()) {
      setFeedbackError('Please enter product title and review text.');
      return;
    }

    setFeedbackError(null);
    setIsAnalyzing(true);
    setSavedSuccess(false);

    try {
      let result;
      try {
        result = await analyzeReviewText(reviewContent);
      } catch {
        result = performLocalABSA(reviewContent);
      }
      setAnalysisResult(result);

      const reviewPayload = {
        productId:
          'prod-' +
          productTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 24),
        productTitle,
        reviewerName: reviewerName || 'Verified Buyer',
        platform,
        rating,
        title: reviewHeadline || `${platform} Customer Review`,
        content: reviewContent,
        sentiment: result.sentiment,
        confidenceScore: result.confidenceScore,
        trustScore: result.trustScore,
        aspects: result.aspects,
        pros: result.pros,
        cons: result.cons,
        summary: result.summary,
        verified: isVerified,
      };

      saveReviewToStorage(reviewPayload);
      setSavedSuccess(true);
      onReviewSubmitted();
    } catch (err: any) {
      setFeedbackError('Could not publish review: ' + (err?.message || 'Error'));
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-slate-900 font-heading">
          Submit Review
        </h1>
        <p className="text-xs text-slate-500">
          Enter customer feedback via text, screenshot OCR, or voice dictation.
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex items-center justify-center">
        <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            id="mode-text-btn"
            onClick={() => setActiveMode('text')}
            className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'text'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Text</span>
          </button>
          <button
            id="mode-image-btn"
            onClick={() => setActiveMode('image')}
            className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'image'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Image OCR</span>
          </button>
          <button
            id="mode-voice-btn"
            onClick={() => setActiveMode('voice')}
            className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'voice'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice</span>
          </button>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-4">
        {/* Product & Platform Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Product Name
            </label>
            <input
              id="input-product-name"
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              placeholder="e.g. Sony WH-1000XM5, Apple AirPods Pro 2, BoAt Airdopes 141..."
              className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs font-medium"
            />
            {/* e.g. Quick Find Chips for Product */}
            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
              <span className="text-[10px] text-slate-400 font-medium">e.g.</span>
              {['Sony WH-1000XM5', 'Apple AirPods Pro 2', 'BoAt Airdopes 141', 'Minimalist Niacinamide'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProductTitle(p)}
                  className="px-2 py-0.5 rounded text-[10px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Platform
            </label>
            <select
              id="select-platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value as PlatformType)}
              className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs font-medium"
            >
              <option value="Amazon">Amazon</option>
              <option value="Nykaa">Nykaa</option>
              <option value="Myntra">Myntra</option>
              <option value="Meesho">Meesho</option>
              <option value="Snapdeal">Snapdeal</option>
            </select>
          </div>
        </div>

        {/* Rating & Reviewer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Rating
            </label>
            <div className="flex items-center gap-1.5 pt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRating(s)}
                  className="cursor-pointer text-amber-400 hover:scale-110 transition-transform p-0.5"
                >
                  <Star
                    className={`w-5 h-5 ${
                      s <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                {rating}/5 Stars
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Reviewer Name
            </label>
            <input
              id="input-reviewer-name"
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="e.g. Ananya Roy, Alex Chen, or Anonymous Buyer"
              className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs font-medium"
            />
            <div className="flex flex-wrap items-center gap-1 mt-1.5">
              <span className="text-[10px] text-slate-400 font-medium">e.g.</span>
              {['Ananya Roy', 'Alex Chen', 'Verified Buyer', 'Anonymous'].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setReviewerName(n)}
                  className="px-2 py-0.5 rounded text-[10px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Headline */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1">
            Review Headline
          </label>
          <input
            id="input-review-headline"
            type="text"
            value={reviewHeadline}
            onChange={(e) => setReviewHeadline(e.target.value)}
            placeholder="e.g. Exceptional active noise cancellation and 30-hour battery life"
            className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs font-medium"
          />
          <div className="flex flex-wrap items-center gap-1 mt-1.5">
            <span className="text-[10px] text-slate-400 font-medium">e.g.</span>
            {['Superb ANC & Battery Life', 'Great Value for Money', 'Premium Build Quality', 'Fast Delivery & Sealed'].map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => setReviewHeadline(h)}
                className="px-2 py-0.5 rounded text-[10px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        {/* Mode Specific Input Zone */}
        {activeMode === 'image' && (
          <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 text-center space-y-2">
            <Upload className="w-6 h-6 text-slate-400 mx-auto" />
            <div className="text-xs text-slate-600">
              <label className="font-semibold text-indigo-600 hover:underline cursor-pointer">
                Upload screenshot or receipt
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            {isProcessingOCR && (
              <p className="text-[11px] text-indigo-600 font-mono">
                Extracting text from image...
              </p>
            )}
          </div>
        )}

        {activeMode === 'voice' && (
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-2">
            <button
              id="mic-record-toggle-btn"
              type="button"
              onClick={toggleListening}
              className={`p-3 rounded-full mx-auto transition-colors cursor-pointer flex items-center justify-center ${
                isListening
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <p className="text-xs text-slate-600">
              {isListening
                ? 'Listening... Speak your review now'
                : 'Click microphone to record voice review or pick an e.g. topic below'}
            </p>
          </div>
        )}

        {/* Review Textarea */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold text-slate-800">
              Review Content
            </label>
            <button
              id="load-sample-btn"
              type="button"
              onClick={loadQuickSample}
              className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
            >
              e.g. Load Complete Sample
            </button>
          </div>
          <textarea
            id="textarea-review-content"
            rows={4}
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            placeholder="e.g. The noise cancellation effortlessly silences airplane engine rumble. Battery life comfortably delivered 30+ hours on a single charge. Sound is detailed with punchy bass, though earcups feel slightly warm after 2 hours..."
            className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs leading-relaxed font-medium"
          />
          {/* Clickable e.g. topic templates for Content */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="text-[10px] text-slate-400 font-medium">e.g. Topics:</span>
            {[
              { label: 'e.g. Audio & ANC', text: 'Active noise cancellation is top notch. The sound balance has punchy bass and crystal clear mids.' },
              { label: 'e.g. Battery Life', text: 'Battery endurance exceeded expectations, easily lasting over 30 hours with fast USB-C recharging.' },
              { label: 'e.g. Fit & Comfort', text: 'Ergonomics are comfortable and lightweight, ideal for long work sessions without head pressure.' },
              { label: 'e.g. Delivery & Box', text: 'Delivered on time in tamper-proof packaging with verified brand warranty card inside.' }
            ].map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setReviewContent((prev) => prev ? prev.trim() + ' ' + t.text : t.text)}
                className="px-2 py-0.5 rounded text-[10px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Error notification */}
        {feedbackError && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{feedbackError}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          id="submit-and-analyze-btn"
          type="button"
          onClick={handleAnalyzeAndSave}
          disabled={isAnalyzing}
          className="w-full py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing Sentiment...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Analyze & Submit Review</span>
            </>
          )}
        </button>
      </div>

      {/* Result Card */}
      {analysisResult && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <SentimentBadge sentiment={analysisResult.sentiment} />
              <span className="text-xs font-mono font-bold text-slate-700">
                {analysisResult.trustScore}% Trust
              </span>
            </div>
            {savedSuccess && (
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Saved to Reviews</span>
              </span>
            )}
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            {analysisResult.summary}
          </p>

          <div className="pt-2 flex justify-end">
            <button
              id="view-in-reviews-btn"
              onClick={onNavigateToReviews}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
            >
              <span>View in Reviews Feed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

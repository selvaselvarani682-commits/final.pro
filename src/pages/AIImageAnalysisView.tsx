import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  UploadCloud,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  Database,
  Check,
  Scan,
  RefreshCw,
  Edit3,
} from 'lucide-react';
import { StoryboardPage, AIAnalysisResult } from '../types';
import sampleReviewNoteImg from '../assets/images/sample_review_note_1790847959769.jpg';
import { analyzeReviewText } from '../services/aiService';

interface AIImageAnalysisViewProps {
  onNavigate: (page: StoryboardPage) => void;
  onSaveReview?: (review: any) => Promise<void>;
  userName?: string;
  userEmail?: string;
}

export const AIImageAnalysisView: React.FC<AIImageAnalysisViewProps> = ({
  onNavigate,
  onSaveReview,
  userName = 'Selvarani K',
  userEmail = '24bit015@stc.ac.in',
}) => {
  const [imagePreview, setImagePreview] = useState<string>(sampleReviewNoteImg);
  const [fileName, setFileName] = useState<string>('review_handwritten_note.jpg');
  const [isScanning, setIsScanning] = useState(false);
  const [ocrText, setOcrText] = useState<string>(
    'The product quality is good, but battery backup and delivery are major concerns. Battery runs out within 3 hours.'
  );
  const [savedToDb, setSavedToDb] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>({
    sentiment: 'Negative',
    confidence: 82,
    confidenceScore: 82,
    trustScore: 91,
    aspects: [
      { name: 'Quality', aspect: 'Quality', sentiment: 'Positive', score: 82 },
      { name: 'Battery', aspect: 'Battery', sentiment: 'Negative', score: 26 },
      { name: 'Delivery', aspect: 'Delivery', sentiment: 'Negative', score: 34 },
      { name: 'Price', aspect: 'Price', sentiment: 'Neutral', score: 65 },
    ],
    pros: [
      'Acceptable base material quality and decent ergonomic feel',
    ],
    cons: [
      'Battery backup fails to last standard working shifts',
      'Delivery timeline exceeded promise',
    ],
    summary: 'Battery backup is the main issue mentioned in the review.',
  });

  // 4 Realistic OCR Presets for 1-click testing
  const imagePresets = [
    {
      title: 'Handwritten Customer Note (Paper)',
      fileName: 'handwritten_complaint_note.jpg',
      image: sampleReviewNoteImg,
      text: 'The product quality is good, but battery backup and delivery are major concerns. Battery runs out within 3 hours.',
    },
    {
      title: 'Packaging & Delivery Slip (Verified)',
      fileName: 'delivery_invoice_slip.png',
      image: sampleReviewNoteImg,
      text: 'Packaging arrived completely intact! Super fast delivery within 24 hours. The product is authentic and works great.',
    },
    {
      title: 'Customer Feedback Form (Camera & Display)',
      fileName: 'feedback_warranty_card.jpg',
      image: sampleReviewNoteImg,
      text: 'Outstanding camera clarity and fast processor. Battery lasts 2 full days and screen is gorgeous. Highly recommended!',
    },
    {
      title: 'Damaged Transit Box Note',
      fileName: 'transit_damage_report.jpg',
      image: sampleReviewNoteImg,
      text: 'Outer box was crushed upon delivery. The back bezel has scratches and courier took 7 days to arrive.',
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSavedToDb(false);
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target?.result as string;
        setImagePreview(dataUrl);

        // Perform real scan on uploaded image
        await processImageOcrAndAnalysis(dataUrl, file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImageOcrAndAnalysis = async (dataUrl: string, name: string) => {
    setIsScanning(true);
    setSavedToDb(false);

    try {
      // Send base64 payload to server endpoint
      const res = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: dataUrl.split(',')[1] || dataUrl,
          fileName: name,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.extractedText) {
          setOcrText(data.extractedText);
        }
        setAnalysisResult(data);
      } else {
        // Fallback to local ABSA
        const fallback = await analyzeReviewText(ocrText);
        setAnalysisResult(fallback);
      }
    } catch (err) {
      const fallback = await analyzeReviewText(ocrText);
      setAnalysisResult(fallback);
    } finally {
      setIsScanning(false);
    }
  };

  const handleSelectPreset = async (preset: typeof imagePresets[0]) => {
    setImagePreview(preset.image);
    setFileName(preset.fileName);
    setOcrText(preset.text);
    setSavedToDb(false);
    setIsScanning(true);

    try {
      const res = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawText: preset.text,
          fileName: preset.fileName,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAnalysisResult(data);
      } else {
        const fallback = await analyzeReviewText(preset.text);
        setAnalysisResult(fallback);
      }
    } catch (e) {
      const fallback = await analyzeReviewText(preset.text);
      setAnalysisResult(fallback);
    } finally {
      setIsScanning(false);
    }
  };

  const handleReAnalyzeText = async () => {
    if (!ocrText.trim()) return;
    setIsScanning(true);
    try {
      const res = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawText: ocrText,
          fileName,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setAnalysisResult(data);
      } else {
        const fallback = await analyzeReviewText(ocrText);
        setAnalysisResult(fallback);
      }
    } catch (e) {
      const fallback = await analyzeReviewText(ocrText);
      setAnalysisResult(fallback);
    } finally {
      setIsScanning(false);
    }
  };

  const handleSaveToFirestore = async () => {
    if (!analysisResult) return;
    setIsSaving(true);
    try {
      const reviewPayload = {
        productId: 'prod-iphone-15',
        productTitle: 'Apple iPhone 15 (128GB - Blue)',
        reviewerName: userName,
        rating: analysisResult.sentiment === 'Positive' ? 5 : analysisResult.sentiment === 'Negative' ? 2 : 3,
        platform: 'Amazon',
        title: 'OCR Scanned Review Document',
        content: ocrText,
        sentiment: analysisResult.sentiment,
        confidenceScore: analysisResult.confidence || 82,
        trustScore: 92,
        aspects: analysisResult.aspects,
        pros: analysisResult.pros || [],
        cons: analysisResult.cons || [],
        summary: analysisResult.summary,
        verified: true,
      };

      if (onSaveReview) {
        await onSaveReview(reviewPayload);
      } else {
        await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reviewPayload),
        });
      }
      setSavedToDb(true);
    } catch (err) {
      console.error('Error saving image review:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const isPos = analysisResult?.sentiment === 'Positive';
  const isNeg = analysisResult?.sentiment === 'Negative';
  const sentimentColor = isPos ? 'text-emerald-600' : isNeg ? 'text-rose-600' : 'text-amber-600';
  const gaugeStrokeColor = isPos ? 'text-emerald-500' : isNeg ? 'text-rose-500' : 'text-amber-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Title & Sub-tabs (Panel 6 from Storyboard) */}
      <div className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
            <Scan className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>Real Image Vision OCR & ABSA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Image Review Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            OCR vision models inspect handwritten customer feedback, delivery receipts, and packaging photos
          </p>
        </div>

        {/* 3 Modality Sub-tabs */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start w-fit">
          <button
            onClick={() => onNavigate('ai-text')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-white/80 font-bold text-xs transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Text Review</span>
          </button>
          <button
            onClick={() => onNavigate('ai-image')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Review</span>
          </button>
          <button
            onClick={() => onNavigate('ai-voice')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-white/80 font-bold text-xs transition-colors cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice Review</span>
          </button>
        </div>
      </div>

      {/* Image Upload Zone (Panel 6) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <label className="border-2 border-dashed border-indigo-200 hover:border-indigo-500 bg-indigo-50/40 hover:bg-indigo-50/70 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all block group">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="w-12 h-12 rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-600 flex items-center justify-center mb-3 transition-colors">
            <UploadCloud className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-slate-900">
            Upload an image of a review
          </span>
          <span className="text-xs text-slate-500 mt-1">
            Drag & drop or click to upload any real image (JPG, PNG, WEBP, or camera photo)
          </span>
        </label>

        {/* Quick Review Document Presets */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700">
            Or choose a sample review document:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {imagePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(preset)}
                className="p-3 text-left rounded-xl bg-slate-50 hover:bg-indigo-50/80 border border-slate-200 hover:border-indigo-200 transition-all cursor-pointer flex items-start gap-2.5 group"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                  <img
                    src={preset.image}
                    alt={preset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                    {preset.title}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    "{preset.text}"
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview of Uploaded Document with Laser Scanner & Editable OCR Box */}
        {imagePreview && (
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-indigo-600" />
                <span>Uploaded Review Document ({fileName})</span>
              </span>
              {isScanning && (
                <span className="text-xs text-indigo-600 font-mono animate-pulse flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>OCR Scanning in progress...</span>
                </span>
              )}
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center gap-4">
              {/* Image Preview with High-Tech Laser Beam Overlay */}
              <div className="relative w-48 sm:w-56 h-36 rounded-xl overflow-hidden border border-slate-300 shadow-2xs shrink-0 bg-slate-900 flex items-center justify-center">
                <img
                  src={imagePreview}
                  alt="Review Preview"
                  className="w-full h-full object-cover"
                />
                {isScanning && (
                  <div className="absolute inset-0 bg-indigo-900/30 flex items-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] animate-bounce" />
                  </div>
                )}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[9px] font-mono">
                  OCR Lens
                </div>
              </div>

              {/* Editable Extracted Text Field */}
              <div className="space-y-1.5 flex-1 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-500 flex items-center gap-1">
                    <Edit3 className="w-3 h-3 text-indigo-600" />
                    <span>OCR Extracted Text (Editable):</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {ocrText.length} chars
                  </span>
                </div>

                <textarea
                  value={ocrText}
                  onChange={(e) => setOcrText(e.target.value)}
                  rows={3}
                  className="w-full text-xs sm:text-sm text-slate-800 font-serif italic bg-white p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 leading-relaxed shadow-2xs"
                  placeholder="Extracted text from image will appear here..."
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-400">
                    Modify extracted text above to re-calculate aspect scores.
                  </span>
                  <button
                    onClick={handleReAnalyzeText}
                    disabled={isScanning || !ocrText.trim()}
                    className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-2xs flex items-center gap-1 disabled:opacity-50"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{isScanning ? 'Processing...' : 'Re-Analyze OCR'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Prominent Analyze Review Button */}
        <button
          type="button"
          onClick={handleReAnalyzeText}
          disabled={isScanning || !ocrText.trim()}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 select-none"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isScanning ? 'Analyzing Review...' : 'Analyze Review'}</span>
        </button>
      </div>

      {/* Analysis Result Card (Panel 6) */}
      {analysisResult && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Image Review Analysis Result</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Vision Confidence: {analysisResult.confidence}%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Donut Gauge: Negative / Positive / Neutral */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={gaugeStrokeColor}
                    strokeDasharray={`${analysisResult.confidence}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-slate-400 font-medium">Overall Sentiment</span>
                  <span className={`text-base font-black ${sentimentColor}`}>
                    {analysisResult.sentiment}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {analysisResult.confidence}%
                  </span>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-700">
                Confidence: {analysisResult.confidence}%
              </div>
            </div>

            {/* Aspect-based Sentiment Cards (Quality, Battery, Delivery, Price) */}
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Aspect-based Sentiment Breakdown
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {analysisResult.aspects.map((asp) => {
                  const aspPos = asp.sentiment === 'Positive';
                  const aspNeg = asp.sentiment === 'Negative';
                  return (
                    <div
                      key={asp.name}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1"
                    >
                      <div className="text-xs font-bold text-slate-800">{asp.name}</div>
                      <div
                        className={`text-xs font-black flex items-center justify-center gap-1 ${
                          aspPos
                            ? 'text-emerald-600'
                            : aspNeg
                            ? 'text-rose-600'
                            : 'text-amber-600'
                        }`}
                      >
                        {aspPos && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {aspNeg && <AlertCircle className="w-3.5 h-3.5" />}
                        <span>{asp.sentiment}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Score: {asp.score}%
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI Summary Box */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1 mt-3">
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider font-mono">
                  AI Summary
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {analysisResult.summary}
                </p>
              </div>

              {/* Save & Publish to Firestore Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Publish this OCR-verified review document under <span className="font-semibold text-slate-700">{userName}</span>.
                </div>
                <button
                  type="button"
                  onClick={handleSaveToFirestore}
                  disabled={isSaving || savedToDb}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    savedToDb
                      ? 'bg-emerald-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25'
                  }`}
                >
                  {savedToDb ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Published to Firestore!</span>
                    </>
                  ) : (
                    <>
                      <Database className="w-3.5 h-3.5" />
                      <span>{isSaving ? 'Publishing...' : 'Save to Firestore'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AIImageAnalysisView;

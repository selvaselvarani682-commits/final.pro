import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StoredReview, PlatformType, SentimentType, Product } from '../../types';
import { PlatformPill } from '../../components/PlatformPill';
import { SentimentBadge } from '../../components/SentimentBadge';
import {
  SearchModality,
  SearchFilters,
  ImageSearchState,
  VoiceSearchState,
  VisualSamplePreset,
  VoiceCommandPreset,
} from './types';
import {
  TEXT_SEARCH_QUICK_CHIPS,
  VISUAL_SAMPLE_PRESETS,
  VOICE_COMMAND_PRESETS,
} from './sampleSearchPresets';
import {
  executeMultimodalSearch,
  analyzeUploadedImage,
  parseQueryIntent,
} from './searchEngine';
import {
  Search,
  Mic,
  MicOff,
  Image as ImageIcon,
  Upload,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Star,
  ArrowRight,
  RefreshCw,
  X,
  SlidersHorizontal,
  Camera,
  Layers,
  Tag,
  Volume2,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  FileText,
  Scan,
  Radio,
  Wand2,
  Activity,
  Eye,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface MultimodalReviewSearchProps {
  reviews: StoredReview[];
  onSelectReview: (review: StoredReview) => void;
  onSelectProductForCompare?: (product: Product) => void;
}

export const MultimodalReviewSearch: React.FC<MultimodalReviewSearchProps> = ({
  reviews,
  onSelectReview,
  onSelectProductForCompare,
}) => {
  // Text Query State
  const [textQuery, setTextQuery] = useState<string>('');

  // Expandable UI Panels State
  const [showImageSearch, setShowImageSearch] = useState<boolean>(false);
  const [showAudioHelper, setShowAudioHelper] = useState<boolean>(false);

  // Image Query State
  const [imageState, setImageState] = useState<ImageSearchState>({
    imageSrc: null,
    fileName: null,
    detectedCategory: null,
    detectedKeywords: [],
    extractedText: null,
    isAnalyzing: false,
    visualConfidence: 0,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Voice Query State
  const [voiceState, setVoiceState] = useState<VoiceSearchState>({
    isListening: false,
    transcript: '',
    interimTranscript: '',
    isSupported: false,
    audioLevel: 0,
    error: null,
  });
  const recognitionRef = useRef<any>(null);
  const audioAnimationRef = useRef<number | null>(null);

  // Filters State
  const [filters, setFilters] = useState<SearchFilters>({
    platform: 'All Platforms',
    sentiment: 'All Sentiments',
    minRating: 0,
    verifiedOnly: false,
    aspect: 'All',
    sortBy: 'relevance',
  });

  // Active Search Modality State (controlled by the 3 buttons: Keyword, Vision, Audio)
  const [modality, setModality] = useState<SearchModality>('text');

  // Show less / expand controls for search results
  const [expandedResultIds, setExpandedResultIds] = useState<Set<string>>(new Set());
  const [resultsDisplayLimit, setResultsDisplayLimit] = useState<number>(6);

  const toggleExpandResult = (id: string) => {
    setExpandedResultIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Check Web Speech API Support on Mount
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setVoiceState((prev) => ({ ...prev, isSupported: true }));
    }
  }, []);

  // Cleanup speech recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
      if (audioAnimationRef.current) {
        cancelAnimationFrame(audioAnimationRef.current);
      }
    };
  }, []);

  // Execute Multimodal Search
  const { results, analytics } = useMemo(() => {
    return executeMultimodalSearch(reviews, {
      modality,
      textQuery,
      imageState,
      voiceTranscript: voiceState.transcript,
      filters,
    });
  }, [reviews, modality, textQuery, imageState, voiceState.transcript, filters]);

  // Real-time parsed intent for Text Query Box
  const parsedTextIntent = useMemo(() => {
    if (!textQuery.trim()) return null;
    return parseQueryIntent(textQuery);
  }, [textQuery]);

  // Handle Image File Upload
  const handleFileUpload = async (file: File) => {
    setImageState((prev) => ({ ...prev, isAnalyzing: true }));
    try {
      const analyzed = await analyzeUploadedImage(file);
      setImageState(analyzed);
    } catch (err) {
      console.error('Error analyzing image:', err);
      setImageState((prev) => ({ ...prev, isAnalyzing: false }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSelectVisualPreset = (preset: VisualSamplePreset) => {
    setImageState({
      imageSrc: preset.thumbnail,
      fileName: preset.label,
      detectedCategory: preset.category,
      detectedKeywords: preset.detectedCues,
      extractedText: null,
      isAnalyzing: false,
      visualConfidence: 97,
    });
  };

  const handleClearImage = () => {
    setImageState({
      imageSrc: null,
      fileName: null,
      detectedCategory: null,
      detectedKeywords: [],
      extractedText: null,
      isAnalyzing: false,
      visualConfidence: 0,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Voice Speech Recognition Handlers
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceState((prev) => ({
        ...prev,
        error: 'Web Speech API is not supported in this browser. You can click any voice preset below to test instant speech dictation!',
      }));
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setVoiceState((prev) => ({
          ...prev,
          isListening: true,
          error: null,
          interimTranscript: '',
        }));
        simulateAudioWave();
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (final) {
          const spokenText = final.trim();
          setVoiceState((prev) => ({
            ...prev,
            transcript: spokenText,
            interimTranscript: '',
          }));
          setTextQuery(spokenText);
        } else {
          setVoiceState((prev) => ({
            ...prev,
            interimTranscript: interim,
          }));
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition notice:', event.error);
        const errMsg =
          event.error === 'not-allowed'
            ? 'Microphone permission was blocked. Click the lock/settings icon in your browser address bar to allow microphone access, or test with sample voice queries.'
            : `Voice notice: ${event.error}. You can also use sample voice query presets.`;
        setVoiceState((prev) => ({
          ...prev,
          isListening: false,
          error: errMsg,
        }));
        if (audioAnimationRef.current) cancelAnimationFrame(audioAnimationRef.current);
      };

      recognition.onend = () => {
        setVoiceState((prev) => ({
          ...prev,
          isListening: false,
        }));
        if (audioAnimationRef.current) cancelAnimationFrame(audioAnimationRef.current);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setVoiceState((prev) => ({
        ...prev,
        isListening: false,
        error: 'Unable to start speech recognition. Use the one-tap voice command presets below.',
      }));
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
    setVoiceState((prev) => ({ ...prev, isListening: false }));
    if (audioAnimationRef.current) cancelAnimationFrame(audioAnimationRef.current);
  };

  const simulateAudioWave = () => {
    const updateWave = () => {
      setVoiceState((prev) => ({
        ...prev,
        audioLevel: Math.random() * 0.8 + 0.2,
      }));
      audioAnimationRef.current = requestAnimationFrame(updateWave);
    };
    audioAnimationRef.current = requestAnimationFrame(updateWave);
  };

  const handleSelectVoicePreset = (preset: VoiceCommandPreset) => {
    setVoiceState((prev) => ({
      ...prev,
      transcript: preset.command,
      interimTranscript: '',
      error: null,
      isListening: false,
    }));
    setTextQuery(preset.command);

    // Auto apply filter suggestions if specified
    if (preset.autoFilters) {
      setFilters((prev) => ({
        ...prev,
        ...preset.autoFilters,
      }));
    }
  };

  const handleClearVoice = () => {
    setVoiceState((prev) => ({
      ...prev,
      transcript: '',
      interimTranscript: '',
      error: null,
    }));
  };

  // Helper to highlight search keywords in text
  const renderHighlightedSnippet = (text: string, keywords: string[]) => {
    if (!keywords || keywords.length === 0) return text;

    const regex = new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-amber-100 text-amber-950 font-semibold px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const activeQueryLabel = useMemo(() => {
    if (modality === 'image' && imageState.detectedCategory) {
      return `Vision Query: ${imageState.detectedCategory} (${imageState.fileName || 'Uploaded'})`;
    }
    if (modality === 'voice' && voiceState.transcript) {
      return `Voice Intelligence: "${voiceState.transcript}"`;
    }
    if (modality === 'text' && textQuery) {
      return `Keyword Query: "${textQuery}"`;
    }
    return null;
  }, [modality, textQuery, voiceState.transcript, imageState]);

  const handleResetActiveQuery = () => {
    setTextQuery('');
    handleClearVoice();
    handleClearImage();
  };

  return (
    <section id="review-search-section" className="py-14 bg-slate-50/70 text-slate-800 relative overflow-hidden border-t border-b border-slate-200">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Module Header */}
        <div className="flex flex-col gap-5 mb-8 pb-6 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Multimodal Review Search
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Query customer sentiment, aspect sentiment (ABSA), and verified experiences via text keywords, uploaded product photos, or spoken voice commands.
              </p>
            </div>

            {/* Audio Enablement Helper Button */}
            <button
              type="button"
              onClick={() => setShowAudioHelper((prev) => !prev)}
              className="self-start sm:self-center text-xs text-slate-700 hover:text-indigo-600 font-medium flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 shadow-2xs transition-all cursor-pointer shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>{showAudioHelper ? 'Hide Audio Guide' : 'How to Enable Audio?'}</span>
            </button>
          </div>

          {/* THE 3 MODALITY BUTTONS: Text Query, Image & Visual, Voice Intelligence */}
          <div className="flex items-center p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 shadow-xs self-start gap-1.5 flex-wrap">
            {/* Button 1: Text Query */}
            <button
              id="search-mode-text"
              type="button"
              onClick={() => setModality('text')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                modality === 'text'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-500'
                  : 'text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/70'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Text Query</span>
            </button>

            {/* Button 2: Image & Visual */}
            <button
              id="search-mode-image"
              type="button"
              onClick={() => setModality('image')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                modality === 'image'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 ring-1 ring-violet-500'
                  : 'text-slate-600 hover:text-violet-700 hover:bg-violet-50/70'
              }`}
            >
              <Scan className="w-4 h-4" />
              <span>Image & Visual</span>
            </button>

            {/* Button 3: Voice Intelligence */}
            <button
              id="search-mode-voice"
              type="button"
              onClick={() => setModality('voice')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                modality === 'voice'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 ring-1 ring-rose-500'
                  : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50/70'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Voice Intelligence</span>
            </button>
          </div>
        </div>

        {/* Dynamic Modality Area with Themed Box Containers */}
        <div
          className={`rounded-2xl p-5 sm:p-6 mb-6 shadow-sm transition-all border-2 ${
            modality === 'text'
              ? 'border-indigo-200/90 bg-linear-to-b from-indigo-50/30 via-white to-white'
              : modality === 'image'
              ? 'border-violet-200/90 bg-linear-to-b from-violet-50/40 via-white to-white'
              : 'border-rose-200/90 bg-linear-to-b from-rose-50/40 via-white to-white'
          }`}
        >
          {/* Audio Instruction & Permission Guide Helper Banner */}
          {showAudioHelper && (
            <div className="mb-5 p-4 rounded-xl bg-indigo-50/90 border border-indigo-200 text-xs text-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-950 flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-indigo-600" />
                  How to Enable & Use Audio Voice Search:
                </span>
                <button
                  type="button"
                  onClick={() => setShowAudioHelper(false)}
                  className="text-slate-500 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Click the <strong>"Voice Intelligence" (Audio)</strong> button above.</li>
                <li>When prompted by your browser, select <strong>"Allow"</strong> to grant microphone access.</li>
                <li>Speak your review query (e.g., <em>"Show reviews with good fabric quality"</em> or <em>"Any complaints about sizing?"</em>).</li>
                <li>Your speech is converted to text in real time, querying the dataset and filtering matching reviews dynamically!</li>
              </ol>
              <p className="text-[11px] text-slate-500 pt-1">
                * Note: If permission was previously blocked, click the site settings / lock icon in your browser address bar and switch Microphone to <strong>"Allow"</strong>.
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 1. TEXT SEARCH CONSOLE & TOPIC EXPLORER (Keyword)                         */}
          {/* ========================================================================= */}
          {modality === 'text' && (
            <div className="space-y-5">
              {/* Search Bar with dedicated Search Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none text-slate-400">
                    <Search className="w-4 h-4 text-slate-500" />
                  </div>
                  <input
                    id="multimodal-text-input"
                    type="text"
                    value={textQuery}
                    onChange={(e) => setTextQuery(e.target.value)}
                    placeholder="Search verified reviews by product, fabric, feature, or flaw (e.g., 'kurti embroidery', 'shirt collar', 'battery drain')..."
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-xs"
                  />
                  {textQuery && (
                    <button
                      type="button"
                      onClick={() => setTextQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                      title="Clear query"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('search-results-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Reviews</span>
                </button>
              </div>

              {/* Quick Topic Chips */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-indigo-600" />
                    Popular Search Topics:
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Showing <span className="font-bold text-slate-900">{results.length}</span> matching reviews
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {TEXT_SEARCH_QUICK_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setTextQuery(chip)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                        textQuery === chip
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs ring-1 ring-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-2xs'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 2. UNIQUE IMAGE & VISUAL BOX (Computer Vision 2.0 Studio)                 */}
          {/* ========================================================================= */}
          {modality === 'image' && (
            <div className="space-y-6">
              {/* Unique Box Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-violet-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
                    <Scan className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Computer Vision & Reverse Product Matcher
                    </h3>
                    <p className="text-xs text-slate-500">
                      Visual neural net extracts apparel weave, silhouette, packaging, and hardware cues
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-violet-800 bg-violet-50 border border-violet-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-violet-600" />
                  <span>
                    {imageState.detectedCategory
                      ? `Target: ${imageState.detectedCategory}`
                      : 'Photogrammetry Ready'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Viewfinder Dropzone with Reticle Corners */}
                <div className="lg:col-span-6">
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[210px] group ${
                      imageState.imageSrc
                        ? 'border-violet-400 bg-violet-50/40 shadow-xs'
                        : 'border-violet-200 hover:border-violet-400 bg-white hover:bg-violet-50/30'
                    }`}
                  >
                    {/* Viewfinder Corner Reticles */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-violet-400 rounded-tl pointer-events-none" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-violet-400 rounded-tr pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-violet-400 rounded-bl pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-violet-400 rounded-br pointer-events-none" />

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileUpload(e.target.files[0]);
                        }
                      }}
                    />

                    {imageState.isAnalyzing ? (
                      <div className="flex flex-col items-center gap-3 py-4">
                        <RefreshCw className="w-8 h-8 text-violet-600 animate-spin" />
                        <span className="text-xs font-semibold text-violet-800">
                          Extracting visual contours, weave texture & aspects...
                        </span>
                      </div>
                    ) : imageState.imageSrc ? (
                      <div className="flex items-center gap-4 w-full">
                        <div className="relative shrink-0">
                          <img
                            src={imageState.imageSrc}
                            alt="Analyzed product"
                            className="w-24 h-24 object-cover rounded-xl border border-violet-200 shadow-sm"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-xs">
                            <CheckCircle2 className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                              Visual Match {imageState.visualConfidence}%
                            </span>
                          </div>
                          <p className="text-sm font-bold text-slate-900 truncate">
                            {imageState.fileName}
                          </p>
                          <p className="text-xs text-violet-600 font-semibold mt-0.5">
                            Category: {imageState.detectedCategory}
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClearImage();
                            }}
                            className="mt-2 text-[11px] text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer font-medium"
                          >
                            <X className="w-3 h-3" />
                            Remove / Upload another image
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-bold text-slate-900">
                          Drop a product photo or click to upload
                        </p>
                        <p className="text-xs text-slate-500 mt-1 max-w-sm">
                          Upload a photo of a kurti, shirt, headphone, serum, or review screenshot to surface matching aspect reviews.
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-[10px] text-violet-700 font-bold uppercase tracking-wider">
                          <span>PNG</span>
                          <span>•</span>
                          <span>JPG</span>
                          <span>•</span>
                          <span>WEBP</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Computer Vision Feature Extraction HUD */}
                <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2.5">
                      <span className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-violet-400" />
                        AI Visual Feature Extraction HUD
                      </span>
                      {imageState.detectedCategory && (
                        <span className="text-[11px] text-emerald-400 font-bold">
                          Active: {imageState.detectedCategory}
                        </span>
                      )}
                    </div>

                    {imageState.detectedKeywords.length > 0 ? (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {imageState.detectedKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-violet-300 text-xs font-semibold flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              {kw}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-slate-400">
                          The search engine is analyzing customer reviews correlating with these visual characteristics and product silhouettes.
                        </p>
                      </div>
                    ) : (
                      <div className="py-6 text-center text-xs text-slate-400">
                        <Eye className="w-7 h-7 mx-auto text-slate-600 mb-2" />
                        Upload a photo or pick a sample preset below to trigger computer vision feature extraction.
                      </div>
                    )}
                  </div>

                  {imageState.detectedCategory && (
                    <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span className="text-emerald-400 font-medium">Marketplace Correlation: 97% Match</span>
                      <button
                        type="button"
                        onClick={handleClearImage}
                        className="text-violet-400 hover:text-violet-300 underline cursor-pointer"
                      >
                        Reset Visual Target
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Instant Visual Presets Library */}
              <div>
                <div className="text-[11px] font-bold text-violet-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-violet-600" />
                  Or test with 1-click Visual Sample Presets:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                  {VISUAL_SAMPLE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectVisualPreset(preset)}
                      className={`text-left p-2 rounded-xl border transition-all cursor-pointer flex flex-col group ${
                        imageState.fileName === preset.label
                          ? 'border-violet-500 bg-violet-50/50 ring-2 ring-violet-500 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/30 shadow-2xs'
                      }`}
                    >
                      <img
                        src={preset.thumbnail}
                        alt={preset.label}
                        className="w-full h-18 object-cover rounded-lg mb-1.5 group-hover:scale-105 transition-transform"
                      />
                      <span className="text-[11px] font-bold text-slate-800 line-clamp-1 group-hover:text-violet-700">
                        {preset.label}
                      </span>
                      <span className="text-[9px] text-violet-600 font-semibold mt-0.5">
                        {preset.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. UNIQUE VOICE BOX (Neural Audio & Acoustic Console)                     */}
          {/* ========================================================================= */}
          {modality === 'voice' && (
            <div className="space-y-6">
              {/* Unique Box Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rose-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Neural Speech Dictation & Acoustic Console
                    </h3>
                    <p className="text-xs text-slate-500">
                      Dictate complex natural language queries to search across verified reviews
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-rose-800 bg-rose-50 border border-rose-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  {voiceState.isListening ? (
                    <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      LISTENING ACTIVE
                    </span>
                  ) : (
                    <span className="text-slate-600">Microphone Ready (Click to Speak)</span>
                  )}
                </div>
              </div>

              {/* Acoustic Studio Recording Console */}
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white border border-rose-200 shadow-xs">
                {/* Tactile Studio Microphone Dial with Pulsing Rings */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative">
                    {voiceState.isListening && (
                      <div className="absolute inset-0 rounded-full bg-rose-400/30 animate-ping" />
                    )}
                    <button
                      id="multimodal-voice-record-btn"
                      type="button"
                      onClick={voiceState.isListening ? stopListening : startListening}
                      className={`relative w-22 h-22 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                        voiceState.isListening
                          ? 'bg-rose-600 text-white ring-8 ring-rose-200 shadow-rose-400 scale-105'
                          : 'bg-rose-600 text-white hover:bg-rose-700 shadow-rose-200 hover:scale-105'
                      }`}
                    >
                      {voiceState.isListening ? (
                        <MicOff className="w-9 h-9 animate-pulse" />
                      ) : (
                        <Mic className="w-9 h-9" />
                      )}
                    </button>
                  </div>

                  <span className="text-xs font-bold mt-3 text-slate-800">
                    {voiceState.isListening ? (
                      <span className="text-rose-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        Listening... Click to Stop
                      </span>
                    ) : (
                      'Click to Dictate'
                    )}
                  </span>
                </div>

                {/* Spoken Transcript & Feedback */}
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-rose-600" />
                      Speech Recognition Console
                    </span>
                    {voiceState.transcript && (
                      <button
                        type="button"
                        onClick={handleClearVoice}
                        className="text-xs text-rose-600 hover:text-rose-800 underline cursor-pointer font-medium"
                      >
                        Clear Speech
                      </button>
                    )}
                  </div>

                  <div className="min-h-[85px] p-4 rounded-xl bg-slate-50 border border-rose-100 flex flex-col justify-center">
                    {voiceState.isListening ? (
                      <div className="w-full">
                        <div className="text-sm text-rose-600 font-semibold italic">
                          {voiceState.interimTranscript || 'Listening for your spoken review query...'}
                        </div>
                        {/* Audio Waveform Equalizer */}
                        <div className="flex items-center gap-1 mt-3 h-5">
                          {[30, 70, 95, 45, 80, 25, 90, 60, 85, 40, 75, 50, 85, 30, 70, 90].map((val, idx) => (
                            <span
                              key={idx}
                              className="w-1.5 bg-rose-500 rounded-full transition-all duration-75"
                              style={{
                                height: `${Math.max(4, val * (voiceState.audioLevel || 0.5))}%`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : voiceState.transcript ? (
                      <div className="w-full">
                        <div className="text-sm font-bold text-slate-900">
                          "{voiceState.transcript}"
                        </div>
                        <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5 mt-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Voice query transcribed & mapped to verified review filters
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500">
                        Click the studio microphone to speak, or pick from the sample voice queries below.
                      </span>
                    )}
                  </div>

                  {voiceState.error && (
                    <div className="mt-2 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex items-center gap-1.5 font-medium">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                      {voiceState.error}
                    </div>
                  )}
                </div>
              </div>

              {/* Instant Voice Command Presets */}
              <div>
                <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-rose-600" />
                  Or 1-Click Test with Spoken Voice Command Presets:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {VOICE_COMMAND_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectVoicePreset(preset)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${
                        voiceState.transcript === preset.command
                          ? 'border-rose-500 bg-rose-50/60 ring-2 ring-rose-500 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-rose-300 hover:bg-rose-50/30 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                          "{preset.command}"
                        </span>
                        <Mic className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5 opacity-70 group-hover:opacity-100" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2 line-clamp-1">
                        {preset.intentDescription}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Unified Omnibar Banner (when query is active) */}
        {activeQueryLabel && (
          <div
            className={`mb-6 px-4 py-2.5 rounded-xl flex items-center justify-between gap-4 shadow-xs border ${
              modality === 'text'
                ? 'bg-indigo-50/90 border-indigo-200 text-indigo-950'
                : modality === 'image'
                ? 'bg-violet-50/90 border-violet-200 text-violet-950'
                : 'bg-rose-50/90 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2 text-xs min-w-0">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  modality === 'text'
                    ? 'bg-indigo-500'
                    : modality === 'image'
                    ? 'bg-violet-500'
                    : 'bg-rose-500'
                }`}
              />
              <span className="font-bold text-slate-900">Active Query Filter:</span>
              <span className="truncate font-medium">{activeQueryLabel}</span>
            </div>
            <button
              type="button"
              onClick={handleResetActiveQuery}
              className={`text-xs flex items-center gap-1 shrink-0 cursor-pointer font-bold ${
                modality === 'text'
                  ? 'text-indigo-700 hover:text-indigo-900'
                  : modality === 'image'
                  ? 'text-violet-700 hover:text-violet-900'
                  : 'text-rose-700 hover:text-rose-900'
              }`}
            >
              <X className="w-3.5 h-3.5" />
              Clear Filter
            </button>
          </div>
        )}

        {/* Refinement & Filter Controls Bar */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-3.5 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              Filters:
            </span>

            {/* Platform Dropdown */}
            <select
              value={filters.platform}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, platform: e.target.value as any }))
              }
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer shadow-2xs"
            >
              <option value="All Platforms">All Platforms</option>
              <option value="Amazon">Amazon</option>
              <option value="Nykaa">Nykaa</option>
              <option value="Myntra">Myntra</option>
              <option value="Meesho">Meesho</option>
              <option value="Snapdeal">Snapdeal</option>
            </select>

            {/* Sentiment Filter */}
            <select
              value={filters.sentiment}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, sentiment: e.target.value as any }))
              }
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer shadow-2xs"
            >
              <option value="All Sentiments">All Sentiments</option>
              <option value="Positive">Positive Only</option>
              <option value="Mixed">Mixed Sentiment</option>
              <option value="Negative">Negative Issues</option>
            </select>

            {/* Min Rating */}
            <select
              value={filters.minRating}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, minRating: Number(e.target.value) }))
              }
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer shadow-2xs"
            >
              <option value={0}>All Star Ratings</option>
              <option value={5}>5 Stars Only</option>
              <option value={4}>4+ Stars</option>
              <option value={3}>3 Stars or Below</option>
            </select>

            {/* Verified toggle */}
            <label className="flex items-center gap-1.5 text-slate-700 cursor-pointer select-none px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
              <input
                type="checkbox"
                checked={filters.verifiedOnly}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, verifiedOnly: e.target.checked }))
                }
                className="rounded border-slate-300 text-indigo-600 focus:ring-0 cursor-pointer"
              />
              Verified Buyers Only
            </label>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))
              }
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer shadow-2xs"
            >
              <option value="relevance">Relevance & Match Score</option>
              <option value="trust-desc">Highest Trust Score</option>
              <option value="rating-desc">Highest Star Rating</option>
              <option value="rating-asc">Lowest Star Rating</option>
              <option value="date-desc">Newest First</option>
            </select>
          </div>
        </div>

        {/* Results Analytics Summary Bar */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="text-lg font-bold text-slate-900">
              {analytics.totalMatches}{' '}
              <span className="text-xs font-normal text-slate-500">
                {analytics.totalMatches === 1 ? 'Review Matched' : 'Reviews Matched'}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              {analytics.avgRating} Avg Rating
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {analytics.avgTrustScore}% Avg Trust
            </div>
          </div>

          {/* Clickable Aspect Tags to drill down */}
          {analytics.topAspects.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
              <span className="text-slate-500 font-medium mr-1">Aspects in Results:</span>
              {analytics.topAspects.map((asp) => (
                <button
                  key={asp.aspect}
                  type="button"
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      aspect: prev.aspect === asp.aspect ? 'All' : asp.aspect,
                    }))
                  }
                  className={`px-2 py-0.5 rounded-full border transition-all cursor-pointer font-medium ${
                    filters.aspect === asp.aspect
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-200/70'
                  }`}
                >
                  {asp.aspect} ({asp.count})
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Cards List */}
        {results.length > 0 ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.slice(0, resultsDisplayLimit).map(({ review, matchScore, matchReasons, matchedKeywords }) => {
                const isExpanded = expandedResultIds.has(review.id);
                return (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-slate-300 hover:shadow-md transition-all shadow-xs flex flex-col justify-between group"
                  >
                <div>
                  {/* Card Top: Match Score & Modality Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          matchScore >= 85
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : matchScore >= 60
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {matchScore}% Match
                      </span>
                      {matchReasons[0] && (
                        <span className="text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 truncate max-w-[220px]">
                          {matchReasons[0]}
                        </span>
                      )}
                    </div>

                    <PlatformPill platform={review.platform} />
                  </div>

                  {/* Product Title */}
                  <div className="mb-2">
                    <span className="text-[11px] text-indigo-600 font-bold block uppercase tracking-wider">
                      Target Product
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                      {review.productTitle}
                    </h4>
                  </div>

                  {/* Review Heading & Star Rating */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                      {renderHighlightedSnippet(review.title, matchedKeywords)}
                    </h3>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Content with Show More / Show Less */}
                  <p className={`text-xs text-slate-600 leading-relaxed mb-1.5 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {renderHighlightedSnippet(review.content, matchedKeywords)}
                  </p>

                  {review.content.length > 90 && (
                    <button
                      type="button"
                      onClick={() => toggleExpandResult(review.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 mb-2.5 cursor-pointer bg-indigo-50/70 hover:bg-indigo-100/70 px-2 py-0.5 rounded transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          <span>Show more</span>
                          <ChevronDown className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  )}

                  {/* Customer Review Photos if available */}
                  {review.photos && review.photos.length > 0 && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                        <Camera className="w-3 h-3 text-indigo-500" />
                        <span>Photos ({review.photos.length}):</span>
                      </span>
                      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                        {review.photos.map((photo, pIdx) => (
                          <img
                            key={pIdx}
                            src={photo}
                            alt="Customer review photo"
                            className="w-9 h-9 rounded-lg object-cover border border-slate-200 hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Aspect Sentiment Pills */}
                  {review.aspects && review.aspects.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {review.aspects.slice(0, 3).map((asp, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                            asp.sentiment === 'Positive'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : asp.sentiment === 'Negative'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {asp.aspect}: {asp.sentiment}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Metadata & Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="font-medium text-slate-700">
                      {review.reviewerName}
                    </span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-medium">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <SentimentBadge sentiment={review.sentiment} />
                    <button
                      type="button"
                      onClick={() => onSelectReview(review)}
                      className="px-3 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      Deep ABSA
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          {/* List Pagination / Show More Results & Show Less Results */}
          {results.length > 6 && (
            <div className="pt-3 flex items-center justify-center gap-3">
              {resultsDisplayLimit < results.length ? (
                <button
                  type="button"
                  onClick={() => setResultsDisplayLimit(results.length)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Show More Results ({results.length - resultsDisplayLimit} remaining)</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setResultsDisplayLimit(6);
                    document.getElementById('search-results-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Show Less Results</span>
                  <ChevronUp className="w-3.5 h-3.5 text-indigo-600" />
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
          /* Empty Search State */
          <div className="text-center py-12 px-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              No Reviews Matched This Query
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              Try adjusting your search criteria, switching modalities, or clearing your active filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setTextQuery('');
                handleClearVoice();
                handleClearImage();
                setFilters({
                  platform: 'All Platforms',
                  sentiment: 'All Sentiments',
                  minRating: 0,
                  verifiedOnly: false,
                  aspect: 'All',
                  sortBy: 'relevance',
                });
              }}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors cursor-pointer shadow-xs"
            >
              Reset All Search Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

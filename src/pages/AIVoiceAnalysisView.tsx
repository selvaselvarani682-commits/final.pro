import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  MicOff,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Square,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Database,
  Check,
  Radio,
} from 'lucide-react';
import { StoryboardPage, AIAnalysisResult } from '../types';
import { analyzeReviewText } from '../services/aiService';

interface AIVoiceAnalysisViewProps {
  onNavigate: (page: StoryboardPage) => void;
  onSaveReview?: (review: any) => Promise<void>;
  userName?: string;
  userEmail?: string;
}

export const AIVoiceAnalysisView: React.FC<AIVoiceAnalysisViewProps> = ({
  onNavigate,
  onSaveReview,
  userName = 'Selvarani K',
  userEmail = '24bit015@stc.ac.in',
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState(
    'The product quality is good, but battery backup and delivery are major concerns. Battery runs out within 3 hours.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [micStatus, setMicStatus] = useState<string>('Ready to record real audio');
  const [savedToDb, setSavedToDb] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Real-time audio waveform bars (dynamically populated by Web Audio API AnalyserNode)
  const [waveformBars, setWaveformBars] = useState<number[]>([
    25, 45, 65, 80, 50, 90, 75, 60, 85, 95, 70, 45, 30, 20, 15,
  ]);

  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>({
    sentiment: 'Negative',
    confidence: 84,
    confidenceScore: 84,
    trustScore: 92,
    aspects: [
      { name: 'Quality', aspect: 'Quality', sentiment: 'Positive', score: 85 },
      { name: 'Battery', aspect: 'Battery', sentiment: 'Negative', score: 28 },
      { name: 'Delivery', aspect: 'Delivery', sentiment: 'Negative', score: 32 },
      { name: 'Price', aspect: 'Price', sentiment: 'Neutral', score: 65 },
    ],
    pros: [
      'Good baseline product finish and reliable core performance',
      'Tactile buttons and display feel well crafted',
    ],
    cons: [
      'Battery backup drains rapidly in everyday use',
      'Delivery took longer than estimated delivery window',
    ],
    summary: 'The product quality is good, but battery backup and delivery are major concerns.',
  });

  // Audio recording references
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const timerIntervalRef = useRef<any>(null);

  // Voice sample presets for quick realistic testing
  const voicePresets = [
    {
      label: 'Positive Experience (Phone & Battery)',
      text: 'I absolutely love this phone! The battery life lasts almost 2 full days, display is vibrant and crystal clear, and charging is lightning fast. Highly recommended!',
    },
    {
      label: 'Negative Battery & Delay Complaint',
      text: 'The product quality is good, but battery backup and delivery are major concerns. Battery runs out within 3 hours and shipment was delayed by a week.',
    },
    {
      label: 'Footwear & Fabric Comfort Review',
      text: 'Outstanding comfort and cushioning for daily running. The stitching is solid and fits true to size. Great value for the price!',
    },
    {
      label: 'Mixed Review (Camera vs Price)',
      text: 'The camera takes crisp photos in daylight, but low light performance is grainy. Also feels a bit overpriced compared to competitors.',
    },
  ];

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllMedia();
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const stopAllMedia = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
    }
  };

  // Start real microphone recording
  const handleStartRecording = async () => {
    setRecordedAudioUrl(null);
    setSavedToDb(false);
    setRecordingSeconds(0);
    setMicStatus('Requesting microphone permission...');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      setIsRecording(true);
      setMicStatus('Microphone active • Listening in real time');

      // Start timer
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

      // 1. Web Audio API for real-time waveform visualization
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const audioCtx = new AudioCtx();
          audioContextRef.current = audioCtx;
          const source = audioCtx.createMediaStreamSource(stream);
          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 64;
          source.connect(analyser);
          analyserRef.current = analyser;

          const dataArray = new Uint8Array(analyser.frequencyBinCount);

          const updateWaveform = () => {
            if (!analyserRef.current) return;
            analyserRef.current.getByteFrequencyData(dataArray);

            // Sample 15 distinct bars from real audio spectrum
            const bars: number[] = [];
            const step = Math.max(1, Math.floor(dataArray.length / 15));
            for (let i = 0; i < 15; i++) {
              const val = dataArray[i * step] || 0;
              // Map 0-255 to percentage 15% - 100%
              const pct = Math.max(12, Math.min(100, Math.round((val / 255) * 100)));
              bars.push(pct);
            }
            setWaveformBars(bars);
            animFrameRef.current = requestAnimationFrame(updateWaveform);
          };
          updateWaveform();
        }
      } catch (err) {
        console.warn('Web Audio API visualization fallback:', err);
      }

      // 2. MediaRecorder to capture real playable audio
      try {
        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;
        const chunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm;codecs=opus' });
          const url = URL.createObjectURL(blob);
          setRecordedAudioUrl(url);
        };

        recorder.start();
      } catch (err) {
        console.warn('MediaRecorder error:', err);
      }

      // 3. Web Speech Recognition for live speech-to-text
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognitionRef.current = recognition;
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.lang = 'en-US';

          let liveText = '';

          recognition.onresult = (event: any) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                liveText += event.results[i][0].transcript + ' ';
              } else {
                interim += event.results[i][0].transcript;
              }
            }
            const fullTranscript = (liveText + ' ' + interim).trim();
            if (fullTranscript) {
              setTranscript(fullTranscript);
            }
          };

          recognition.onerror = (e: any) => {
            console.warn('Speech recognition status:', e.error);
          };

          recognition.start();
        } catch (err) {
          console.warn('SpeechRecognition failed to start:', err);
        }
      }
    } catch (err: any) {
      console.error('Microphone access denied or error:', err);
      setIsRecording(false);
      setMicStatus(
        'Microphone not available in this environment. You can test using the voice sample presets below!'
      );
    }
  };

  // Stop real recording and analyze
  const handleStopRecording = async () => {
    setIsRecording(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    stopAllMedia();
    setMicStatus('Audio recorded • Analyzing spoken review');

    // Run real ABSA on whatever transcript was spoken
    await analyzeSpokenTranscript(transcript);
  };

  const analyzeSpokenTranscript = async (text: string) => {
    if (!text.trim()) return;
    setIsAnalyzing(true);

    try {
      // Call server endpoint or ABSA engine
      const res = await fetch('/api/analyze-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: text }),
      });

      if (res.ok) {
        const data = await res.json();
        setAnalysisResult(data);
      } else {
        const localData = await analyzeReviewText(text);
        setAnalysisResult(localData);
      }
    } catch (err) {
      const fallbackData = await analyzeReviewText(text);
      setAnalysisResult(fallbackData);
    } finally {
      setIsAnalyzing(false);
      setMicStatus('Analysis complete');
    }
  };

  const handleSelectPreset = async (presetText: string) => {
    setTranscript(presetText);
    setRecordedAudioUrl(null);
    setSavedToDb(false);
    await analyzeSpokenTranscript(presetText);
  };

  const handleToggleAudioPlay = () => {
    if (!audioPlayerRef.current) return;
    if (isPlayingAudio) {
      audioPlayerRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioPlayerRef.current.play();
      setIsPlayingAudio(true);
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
        title: 'Voice Verified Review',
        content: transcript,
        sentiment: analysisResult.sentiment,
        confidenceScore: analysisResult.confidence || 88,
        trustScore: 94,
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
      console.error('Error saving voice review:', err);
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
      {/* Title & Sub-tabs (Panel 5 from Storyboard) */}
      <div className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
            <Radio className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>Real Microphone & Web Speech AI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Voice Review Analysis
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Dictate your spoken review with live microphone input and real-time audio waveform processing
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-white/80 font-bold text-xs transition-colors cursor-pointer"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Review</span>
          </button>
          <button
            onClick={() => onNavigate('ai-voice')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice Review</span>
          </button>
        </div>
      </div>

      {/* Voice Recording Interface Card (Panel 5) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center space-y-6">
        {/* Large Mic Recording Button */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <button
            type="button"
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-lg select-none ${
              isRecording
                ? 'bg-rose-600 hover:bg-rose-700 ring-8 ring-rose-100 animate-pulse'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105 shadow-indigo-600/30'
            }`}
            title={isRecording ? 'Click to stop recording' : 'Click to start microphone'}
          >
            {isRecording ? <Square className="w-8 h-8 fill-white" /> : <Mic className="w-8 h-8" />}
          </button>
          <div className="text-xs sm:text-sm font-bold text-slate-800">
            {isRecording
              ? `Listening... (${recordingSeconds}s) Click to Stop & Analyze`
              : 'Click Mic to Speak Real Voice Review'}
          </div>
          <div className="text-[11px] text-slate-400 font-mono">{micStatus}</div>
        </div>

        {/* Real-time Dynamic Waveform Animation (AudioContext sampled) */}
        <div className="h-18 flex items-end justify-center gap-1.5 px-6 py-2 bg-slate-900 rounded-2xl border border-slate-800 max-w-lg mx-auto shadow-inner">
          {waveformBars.map((height, idx) => (
            <div
              key={idx}
              style={{ height: `${height}%` }}
              className={`w-2 rounded-full transition-all duration-75 ${
                isRecording
                  ? 'bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-400'
                  : 'bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Audio Player for Real Playback */}
        {recordedAudioUrl && (
          <div className="p-3 bg-indigo-50/80 rounded-2xl border border-indigo-100 max-w-md mx-auto flex items-center justify-between gap-3 animate-in fade-in duration-200">
            <audio
              ref={audioPlayerRef}
              src={recordedAudioUrl}
              onEnded={() => setIsPlayingAudio(false)}
              className="hidden"
            />
            <button
              onClick={handleToggleAudioPlay}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs hover:bg-indigo-700 cursor-pointer"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-white" />
                  <span>Pause Recording</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Play Your Voice ({recordingSeconds}s)</span>
                </>
              )}
            </button>
            <span className="text-[11px] font-mono text-indigo-700 font-bold">
              Captured Audio Ready
            </span>
          </div>
        )}

        {/* Live Spoken Transcript Box with Direct Edit Support */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-bold text-slate-500 uppercase font-mono flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Spoken Voice Transcript (Live & Editable):</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              {transcript.length} chars
            </span>
          </div>

          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={3}
            placeholder="Your spoken words will appear here in real time as you speak..."
            className="w-full text-xs sm:text-sm text-slate-800 font-medium bg-white p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 leading-relaxed"
          />

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-500">
              Edit text above or re-run sentiment analysis anytime.
            </span>
            <button
              onClick={() => analyzeSpokenTranscript(transcript)}
              disabled={isAnalyzing || !transcript.trim()}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
            >
              <Sparkles className="w-3 h-3" />
              <span>{isAnalyzing ? 'Analyzing...' : 'Re-Analyze Transcript'}</span>
            </button>
          </div>
        </div>

        {/* Quick Voice Sample Presets */}
        <div className="max-w-2xl mx-auto text-left space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-700">
            Or test with authentic voice review presets:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {voicePresets.map((vp, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(vp.text)}
                className="p-2.5 text-left bg-slate-50 hover:bg-indigo-50/80 border border-slate-200 hover:border-indigo-200 rounded-xl transition-all cursor-pointer group"
              >
                <div className="text-[11px] font-bold text-slate-900 group-hover:text-indigo-600 flex items-center justify-between">
                  <span>{vp.label}</span>
                  <Sparkles className="w-3 h-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  "{vp.text}"
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Prominent Analyze Review Button */}
        <button
          type="button"
          onClick={() => analyzeSpokenTranscript(transcript)}
          disabled={isAnalyzing || isRecording || !transcript.trim()}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 select-none mt-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isAnalyzing ? 'Analyzing Review...' : 'Analyze Review'}</span>
        </button>
      </div>

      {/* Analysis Result Card (Panel 5) */}
      {analysisResult && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Voice Review Analysis Result</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Live ABSA v2.4 • Trust Score: {analysisResult.trustScore || 94}%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Donut Gauge for Sentiment */}
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
                  Publish this verified voice review under your account (<span className="font-semibold text-slate-700">{userName}</span>).
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
export default AIVoiceAnalysisView;

import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Lock,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { StoryboardPage } from '../types';

interface AuthPageViewProps {
  onLoginSuccess: () => void;
  onNavigate: (page: StoryboardPage) => void;
}

export const AuthPageView: React.FC<AuthPageViewProps> = ({
  onLoginSuccess,
  onNavigate,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [emailOrPhone, setEmailOrPhone] = useState('selvarani@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Selvarani K');
  const [rememberMe, setRememberMe] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(mode === 'login' ? 'Logging in as Selvarani K...' : 'Account created successfully!');
    setTimeout(() => {
      onLoginSuccess();
      onNavigate('profile');
    }, 900);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Split Card Design (Panel 9 from Storyboard) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        {/* Left Form: Welcome Back / Register */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4 fill-white" />
                </div>
                <span className="text-base font-black text-slate-900 font-heading">
                  Review<span className="text-indigo-600">AI</span>
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-heading tracking-tight">
                {mode === 'login' ? 'Welcome Back!' : 'Create an Account'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {mode === 'login'
                  ? 'Login to your account to view saved insights and verified purchases.'
                  : 'Join 100,000+ smart shoppers making informed buying decisions.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600 font-medium"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email or Phone</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="Enter your email or phone"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 font-medium">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-indigo-600 hover:underline font-semibold cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {submittedMessage && (
                <div className="p-2.5 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-xl text-center">
                  ✓ {submittedMessage}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
              >
                {mode === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>
          </div>

          {/* Toggle between Login and Sign Up */}
          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
            {mode === 'login' ? (
              <span>
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-indigo-600 font-bold hover:underline cursor-pointer"
                >
                  Sign Up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-indigo-600 font-bold hover:underline cursor-pointer"
                >
                  Login
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Right Promo Banner (Panel 9 in Storyboard) */}
        <div className="md:col-span-5 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-8 sm:p-10 text-white flex flex-col justify-between space-y-8 relative overflow-hidden">
          {/* Subtle Ambient Light Ring */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          {/* Bag Icon / Illustration */}
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>

          {/* Slogan & Message */}
          <div className="space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight tracking-tight">
              Better Reviews. <br />
              Better Choices.
            </h3>
            <p className="text-xs text-indigo-100/90 leading-relaxed">
              Join ReviewAI and get personalized recommendations based on real customer reviews.
            </p>
          </div>

          {/* Perks list */}
          <div className="space-y-2 relative z-10 pt-4 border-t border-white/15 text-xs font-semibold text-indigo-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Cross-platform price parity</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Aspect sentiment (ABSA) metrics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Audio and image review analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

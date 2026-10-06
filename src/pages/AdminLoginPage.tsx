import React, { useState } from 'react';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  KeyRound,
  Info,
} from 'lucide-react';
import { StoryboardPage } from '../types';
import { loginAdminApi, AdminUserSession } from '../services/adminAuthService';

interface AdminLoginPageProps {
  onLoginSuccess: (admin: AdminUserSession) => void;
  onNavigate: (page: StoryboardPage) => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({
  onLoginSuccess,
  onNavigate,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Validation & feedback state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Field validation errors
  const [identifierError, setIdentifierError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validate = (): boolean => {
    let valid = true;
    setErrorMessage(null);

    if (!identifier.trim()) {
      setIdentifierError('Admin username or email is required.');
      valid = false;
    } else {
      setIdentifierError(null);
    }

    if (!password.trim()) {
      setPasswordError('Admin password is required.');
      valid = false;
    } else {
      setPasswordError(null);
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await loginAdminApi(identifier.trim(), password);

      if (result.success && result.admin) {
        setSuccessMessage(`Welcome back, ${result.admin.name}! Redirecting to Admin Dashboard...`);
        setTimeout(() => {
          onLoginSuccess(result.admin!);
        }, 800);
      } else {
        setErrorMessage(result.error || 'Invalid admin credentials. Please verify your username and password.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'An unexpected error occurred during authentication.');
    } finally {
      setIsLoading(false);
    }
  };

  // Quick fill helper for evaluation & convenience
  const handleAutofillDemo = (demoUser: string, demoPass: string) => {
    setIdentifier(demoUser);
    setPassword(demoPass);
    setIdentifierError(null);
    setPasswordError(null);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-[82vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Public Storefront</span>
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          {/* Top Decorative Gradient Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

          {/* Header */}
          <div className="space-y-2 text-center pt-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
              <Lock className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-indigo-600" /> Secure Area
              </div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 font-heading">
                Admin Console Login
              </h1>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Sign in to manage catalog products, customer reviews, and Aspect-Based Sentiment analytics.
              </p>
            </div>
          </div>

          {/* Feedback Alerts */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex-1">{successMessage}</div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username / Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Admin Username or Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  autoComplete="username"
                  placeholder="admin or admin@smartreview.ai"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if (identifierError) setIdentifierError(null);
                  }}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                    identifierError
                      ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                      : 'border-slate-200 focus:border-indigo-600 bg-slate-50/50 focus:bg-white'
                  }`}
                />
              </div>
              {identifierError && (
                <p className="text-[11px] font-medium text-rose-600 pl-1">{identifierError}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(null);
                  }}
                  className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-xs text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none ${
                    passwordError
                      ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                      : 'border-slate-200 focus:border-indigo-600 bg-slate-50/50 focus:bg-white'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passwordError && (
                <p className="text-[11px] font-medium text-rose-600 pl-1">{passwordError}</p>
              )}
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <span>Remember session</span>
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                SHA-512 Encrypted
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <span>Authenticating with Backend...</span>
              ) : (
                <>
                  <span>Sign In as Administrator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Box */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span className="font-semibold flex items-center gap-1 text-slate-700">
                <Info className="w-3.5 h-3.5 text-indigo-600" /> Default Admin Credentials:
              </span>
              <button
                type="button"
                onClick={() => handleAutofillDemo('admin@smartreview.ai', 'Admin@2026!')}
                className="text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer underline text-[11px]"
              >
                Auto-fill Demo
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Username:</span>
                <span className="font-bold">admin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Password:</span>
                <span className="font-bold">Admin@2026!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Public Note */}
        <p className="text-center text-xs text-slate-400">
          Normal users do not need an account. Public shopping and review comparisons remain open.
        </p>
      </div>
    </div>
  );
};

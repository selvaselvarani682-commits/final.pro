import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
  LogOut,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  UserCheck,
} from 'lucide-react';

interface AuthBoxProps {
  isLoggedIn: boolean;
  userEmail: string;
  userName: string;
  onLogin: (email: string, name: string) => void;
  onLogout: () => void;
  activeSection: string;
  onSelectSection: (section: string) => void;
}

export const AuthBox: React.FC<AuthBoxProps> = ({
  isLoggedIn,
  userEmail,
  userName,
  onLogin,
  onLogout,
  activeSection,
  onSelectSection,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('24bit015@stc.ac.in');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('Selvarani K');
  const [role, setRole] = useState<'buyer' | 'reviewer' | 'admin'>('reviewer');
  const [rememberMe, setRememberMe] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const displayName = mode === 'signup' ? name : (name || 'Selvarani K');
    onLogin(email, displayName);
    setSuccessToast(mode === 'login' ? `Welcome back, ${displayName}!` : `Account created for ${displayName}!`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleQuickDemo = (demoEmail: string, demoName: string) => {
    setEmail(demoEmail);
    setName(demoName);
    onLogin(demoEmail, demoName);
    setSuccessToast(`Signed in as ${demoName} (${demoEmail})`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
      {/* Container card with backdrop blur and soft shadow */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-indigo-200/80 shadow-md p-4 sm:p-5 transition-all">
        {/* If User IS LOGGED IN: Sleek Status & Control Bar with section shortcuts */}
        {isLoggedIn ? (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              {/* User Identity Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-600/20">
                  {userName.substring(0, 2).toUpperCase() || 'SK'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900 font-heading">
                      {userName}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                      <ShieldCheck className="w-3 h-3" /> Verified Reviewer
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                    <span>{userEmail}</span>
                    <span>•</span>
                    <span className="text-indigo-600 font-semibold flex items-center gap-0.5">
                      <Zap className="w-3 h-3 text-amber-500 fill-amber-500" /> 350 Flash Coins
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Toggle details"
                >
                  {isCollapsed ? (
                    <>
                      <span>Show Login Options</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>Hide Details</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-bold text-rose-700 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Sign out of account"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Quick section jumps placed directly underneath the auth banner */}
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs pt-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] font-mono">
                Explore Under Auth:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'home', label: '1. Homepage' },
                  { id: 'products', label: '2. Product Listing' },
                  { id: 'product-details', label: '3. Product Details' },
                  { id: 'ai-text', label: '4. AI Review (ABSA)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectSection(item.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Expandable panel for switching demo users or viewing details */}
            {!isCollapsed && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span>Quick switch profile:</span>
                  <button
                    onClick={() => handleQuickDemo('24bit015@stc.ac.in', 'Selvarani K')}
                    className="underline text-indigo-600 font-medium hover:text-indigo-800 cursor-pointer"
                  >
                    Student (24bit015@stc.ac.in)
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleQuickDemo('admin@reviewai.com', 'Admin User')}
                    className="underline text-indigo-600 font-medium hover:text-indigo-800 cursor-pointer"
                  >
                    Admin Demo
                  </button>
                </div>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated via Firebase Auth
                </span>
              </div>
            )}
          </div>
        ) : (
          /* If User is NOT LOGGED IN: Full Side-by-Side Login / Signup Box */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Branding, Motivation & Quick Demo Links */}
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold font-mono">
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  AUTHENTICATION GATEWAY
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading leading-snug">
                  Login or Sign Up to Unlock <br />
                  <span className="text-indigo-600">AI Review Intelligence</span>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sign in to access aspect-based sentiment ratings, cross-platform price match alerts, and voice review transcription. Explore the <strong>Homepage</strong>, <strong>Product Listing</strong>, <strong>Product Details</strong>, and <strong>AI Review</strong> directly below!
                </p>

                {/* Quick 1-Click Login for Evaluator / User */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 block">
                    Quick 1-Click Student / Project Login:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('24bit015@stc.ac.in', 'Selvarani K')}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Log In as 24bit015@stc.ac.in</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('admin@reviewai.com', 'Admin User')}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Admin Access</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Login / Signup Form */}
              <div className="lg:col-span-7 bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 sm:p-5">
                {/* Mode Switcher Tabs */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        mode === 'login'
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Sign In (Login)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        mode === 'signup'
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Create Account (Sign Up)
                    </button>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono">
                    Firebase Auth Ready
                  </span>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {mode === 'signup' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name (e.g., Selvarani K)"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-medium"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="24bit015@stc.ac.in"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-medium font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-medium"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Account Role
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {[
                          { id: 'reviewer', label: 'Verified Reviewer' },
                          { id: 'buyer', label: 'Smart Buyer' },
                          { id: 'admin', label: 'Store Admin' },
                        ].map((r) => (
                          <button
                            type="button"
                            key={r.id}
                            onClick={() => setRole(r.id as any)}
                            className={`py-1.5 px-2 rounded-xl text-center font-bold text-[11px] border transition-all cursor-pointer ${
                              role === r.id
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submit Button & Remember me */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-1.5 text-[11px] text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>Remember credentials</span>
                    </label>

                    <button
                      type="submit"
                      className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{mode === 'login' ? 'Sign In Now' : 'Create Free Account'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Section Navigation directly underneath the login box */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-semibold">
                Or jump directly to a page below without login:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'home', label: 'Homepage' },
                  { id: 'products', label: 'Product Listing' },
                  { id: 'product-details', label: 'Product Details' },
                  { id: 'ai-text', label: 'AI Review' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectSection(item.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Success Toast */}
        {successToast && (
          <div className="mt-2 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successToast}</span>
          </div>
        )}
      </div>
    </div>
  );
};

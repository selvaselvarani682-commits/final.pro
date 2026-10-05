import React from 'react';
import {
  X,
  Zap,
  Flame,
  Gift,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Award,
} from 'lucide-react';

interface FlashPerksModalProps {
  isOpen: boolean;
  onClose: () => void;
  coins?: number;
  streakDays?: number;
  onOpenReviewModal?: () => void;
}

export const FlashPerksModal: React.FC<FlashPerksModalProps> = ({
  isOpen,
  onClose,
  coins = 350,
  streakDays = 4,
  onOpenReviewModal,
}) => {
  if (!isOpen) return null;

  const rewards = [
    {
      id: 'perk-1',
      brand: 'Nykaa Beauty',
      title: 'Free Express Delivery on all orders',
      requiredCoins: 200,
      code: 'FLASHNYKAA',
      claimed: true,
    },
    {
      id: 'perk-2',
      brand: 'Myntra Fashion',
      title: 'Flat ₹150 OFF on orders above ₹999',
      requiredCoins: 300,
      code: 'FLASH150MYN',
      claimed: false,
    },
    {
      id: 'perk-3',
      brand: 'Amazon Shopping',
      title: '5% Extra Cashback via Amazon Pay',
      requiredCoins: 500,
      code: 'FLASHAMZ5',
      claimed: false,
    },
    {
      id: 'perk-4',
      brand: 'Meesho Deals',
      title: '₹50 Instant Discount on Kurtis & Shirts',
      requiredCoins: 150,
      code: 'FLASHMEESHO50',
      claimed: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#10131A] text-white rounded-3xl border border-white/10 shadow-2xl max-w-lg w-full overflow-hidden my-4 relative">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#171B26] via-[#1A2030] to-[#171B26] p-6 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close perks modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E2F952]/10 border border-[#E2F952]/30 text-[#E2F952] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-3 h-3 fill-[#E2F952]" /> Flash Perks & Rewards
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white">
            Supercharge Your Shopping
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Earn Flash Coins on every verified review, order track, and price comparison across marketplaces.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E2F952] text-black flex items-center justify-center font-black shadow-[0_0_12px_rgba(226,249,82,0.35)] shrink-0">
                <Zap className="w-5 h-5 fill-black" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Flash Coins
                </div>
                <div className="text-lg font-black font-mono text-white">
                  {coins}{' '}
                  <span className="text-[#E2F952] text-xs font-sans font-bold">COINS</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-black shadow-sm shrink-0">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Active Streak
                </div>
                <div className="text-lg font-black font-mono text-white">
                  {streakDays}{' '}
                  <span className="text-amber-400 text-xs font-sans font-bold">DAYS 🔥</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Earn Coins */}
        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E2F952]" /> How to Earn Flash Coins
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Submit Verified Review</div>
                  <div className="text-[10px] text-slate-400">Share real product feedback</div>
                </div>
                <span className="font-mono font-bold text-[#E2F952] text-xs shrink-0">+50 ⚡</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Track Order in Inbox</div>
                  <div className="text-[10px] text-slate-400">Sync Amazon/Myntra package</div>
                </div>
                <span className="font-mono font-bold text-[#E2F952] text-xs shrink-0">+75 ⚡</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Compare Products</div>
                  <div className="text-[10px] text-slate-400">Cross-marketplace price match</div>
                </div>
                <span className="font-mono font-bold text-[#E2F952] text-xs shrink-0">+25 ⚡</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Voice & Image Search</div>
                  <div className="text-[10px] text-slate-400">Explore multimodal ABSA</div>
                </div>
                <span className="font-mono font-bold text-[#E2F952] text-xs shrink-0">+30 ⚡</span>
              </div>
            </div>
          </div>

          {/* Unlockable Perks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-amber-400" /> Unlockable Marketplace Coupons
            </h4>
            <div className="space-y-2">
              {rewards.map((perk) => {
                const isUnlocked = coins >= perk.requiredCoins;
                return (
                  <div
                    key={perk.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isUnlocked
                        ? 'bg-white/[0.05] border-white/10 hover:border-[#E2F952]/40'
                        : 'bg-black/30 border-white/[0.04] opacity-60'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {perk.brand}
                        </span>
                        {isUnlocked && (
                          <span className="text-[10px] font-mono text-[#E2F952] font-semibold">
                            {perk.code}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-medium text-white">{perk.title}</div>
                    </div>

                    <div className="shrink-0 text-right ml-3">
                      {isUnlocked ? (
                        <span className="px-2.5 py-1 rounded-lg bg-[#E2F952] text-black font-bold text-[10px] inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Ready
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-slate-500" /> {perk.requiredCoins} ⚡
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Done
            </button>

            {onOpenReviewModal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenReviewModal();
                }}
                className="px-4 py-2.5 rounded-xl bg-[#E2F952] hover:bg-[#d6f03d] text-black font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(226,249,82,0.35)] transition-all cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 fill-black" />
                <span>Write Review (+50 Coins)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

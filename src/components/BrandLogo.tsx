import React from 'react';
import { Zap } from 'lucide-react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const zapSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      {/* Flash.co signature electric neon lightning badge */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-[#E2F952] text-black flex items-center justify-center relative overflow-hidden shadow-[0_0_16px_rgba(226,249,82,0.45)] group-hover:scale-105 transition-transform duration-200 shrink-0 border border-black/10`}
      >
        <Zap className={`${zapSizes[size]} fill-black text-black stroke-[2.5]`} />
      </div>

      <div className="flex items-baseline tracking-tight">
        <span
          className={`font-black font-heading ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-slate-900'
          } tracking-tight`}
        >
          flash
        </span>
        <span className="text-[#96b800] sm:text-[#88a800] font-black font-heading text-lg leading-none">.</span>
        <span
          className={`font-bold text-xs uppercase tracking-wider ml-1 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          reviews
        </span>
      </div>
    </div>
  );
};

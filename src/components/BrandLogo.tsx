import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Signature Icon: Tri-color accent block */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-slate-900 text-white flex items-center justify-center p-1.5 relative overflow-hidden shadow-xs border border-slate-800`}
      >
        {/* Abstract 3-line diagonal brand bars in yellow, blue, green */}
        <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-90">
          <div className="w-1 h-5 bg-[#FCA92B] rounded-full rotate-12 transform translate-x-[-2px]" />
          <div className="w-1 h-6 bg-[#3B7FE9] rounded-full rotate-12 transform" />
          <div className="w-1 h-5 bg-[#36C174] rounded-full rotate-12 transform translate-x-[2px]" />
        </div>
      </div>

      <div className="flex items-center">
        <span
          className={`font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          } ${titleSizes[size]} font-heading leading-tight`}
        >
          Review Analysis
        </span>
      </div>
    </div>
  );
};

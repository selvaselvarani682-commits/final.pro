import React from 'react';
import { PlatformType } from '../types';

interface PlatformPillProps {
  platform: PlatformType;
  size?: 'sm' | 'md';
}

const PLATFORM_STYLES: Record<
  PlatformType,
  { bg: string; text: string; border: string }
> = {
  Amazon: {
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    border: 'border-amber-200',
  },
  Nykaa: {
    bg: 'bg-pink-50',
    text: 'text-pink-900',
    border: 'border-pink-200',
  },
  Myntra: {
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    border: 'border-rose-200',
  },
  Meesho: {
    bg: 'bg-purple-50',
    text: 'text-purple-900',
    border: 'border-purple-200',
  },
  Snapdeal: {
    bg: 'bg-red-50',
    text: 'text-red-900',
    border: 'border-red-200',
  },
};

export const PlatformPill: React.FC<PlatformPillProps> = ({
  platform,
  size = 'md',
}) => {
  const style = PLATFORM_STYLES[platform] || {
    bg: 'bg-slate-100',
    text: 'text-slate-800',
    border: 'border-slate-200',
  };

  const sizeClasses =
    size === 'sm'
      ? 'px-2 py-0.5 text-[10px] font-semibold'
      : 'px-2.5 py-1 text-xs font-semibold';

  return (
    <span
      className={`inline-flex items-center rounded-md border ${style.bg} ${style.text} ${style.border} ${sizeClasses}`}
    >
      {platform}
    </span>
  );
};

import React from 'react';
import { SentimentType } from '../types';

interface SentimentBadgeProps {
  sentiment: SentimentType;
  size?: 'sm' | 'md';
}

export const SentimentBadge: React.FC<SentimentBadgeProps> = ({
  sentiment,
  size = 'md',
}) => {
  const getBadgeStyle = () => {
    switch (sentiment) {
      case 'Positive':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Negative':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Mixed':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Neutral':
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const sizeClasses =
    size === 'sm'
      ? 'px-2 py-0.5 text-[10px] font-semibold'
      : 'px-2.5 py-1 text-xs font-semibold';

  return (
    <span
      className={`inline-flex items-center rounded-md border font-mono ${getBadgeStyle()} ${sizeClasses}`}
    >
      {sentiment}
    </span>
  );
};

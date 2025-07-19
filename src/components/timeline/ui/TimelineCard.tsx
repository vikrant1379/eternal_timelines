'use client';

import { ReactNode } from 'react';

interface TimelineCardProps {
  children: ReactNode;
  isEmpty: boolean;
}

export default function TimelineCard({ children, isEmpty }: TimelineCardProps) {
  if (isEmpty) {
    return (
      <div className="academic-card p-8 text-center backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center text-stone-500 text-2xl dark:from-slate-600 dark:to-slate-700 dark:text-slate-400">
            📊
          </div>
          <h3 className="text-xl font-bold text-stone-700 dark:text-slate-300" style={{ fontFamily: 'Playfair Display, serif' }}>
            No Events Found
          </h3>
          <p className="text-stone-600 max-w-md dark:text-slate-400" style={{ fontFamily: 'Source Serif Pro, serif' }}>
            Try adjusting your filters to see more events, or explore the complete timeline by clearing all filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-200 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 dark:border-amber-500/20 dark:shadow-xl">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center text-white text-lg mr-3 shadow-sm dark:bg-gradient-to-br dark:from-amber-600 dark:to-orange-700">
          ⏳
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200" style={{ fontFamily: 'Playfair Display, serif' }}>
          Interactive Timeline
        </h3>
      </div>
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 min-h-[500px] relative overflow-hidden dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 dark:border-amber-500/20">
        {children}
      </div>
    </div>
  );
}
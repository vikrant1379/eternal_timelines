'use client';

import { ReactNode } from 'react';

interface TimelineCardProps {
  children: ReactNode;
  isEmpty: boolean;
}

export default function TimelineCard({ 
  children, 
  isEmpty 
}: TimelineCardProps) {
  if (isEmpty) {
    return (
      <div className="academic-card relative hover:border-transparent">
        {/* Subtle cosmic timeline background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full flex items-center justify-center">
            <div className="text-6xl text-amber-500">∞</div>
          </div>
        </div>
        
        <div className="p-8 relative z-10"> 
          <div className="text-center py-12">
            {/* Vedic timeline reference */}
            <div className="mb-6">
              <div className="text-xs text-amber-700 uppercase tracking-wider font-medium mb-2" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                Cosmic Timeline - From Creation to Present
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-stone-500">
                <span>∞ BCE</span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-200 to-orange-200"></div>
                <span className="text-amber-700">Vedic Era</span>
                <div className="w-16 h-px bg-gradient-to-r from-orange-200 to-amber-200"></div>
                <span>Present</span>
              </div>
            </div>
            
            {/* Main message */}
            <h3 className="text-stone-800 text-lg font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              No events match your current filters
            </h3>
            
            {/* Suggestion text */}
            <p className="text-stone-600 text-sm max-w-md mx-auto" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              Try adjusting your filters to explore our rich heritage and timeline
            </p>
            
            {/* Subtle Vedic time reference */}
            <div className="mt-4 text-xs text-stone-400" style={{ fontFamily: 'Source Serif Pro, serif' }}>
              From the beginning of time according to ancient Vedic wisdom
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="academic-card relative hover:border-transparent">
      {/* Timeline extends beyond card effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-25 via-transparent to-amber-25 opacity-30 pointer-events-none"></div>
      
      {/* Left edge effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-50 to-transparent opacity-40 pointer-events-none"></div>
      
      {/* Right edge effect */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-50 to-transparent opacity-40 pointer-events-none"></div>
      
      <div className="p-6 relative z-10">
        {children}
      </div>
    </div>
  );
}

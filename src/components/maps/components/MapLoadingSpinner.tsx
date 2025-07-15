import React from 'react';

interface LoadingSpinnerProps {
  height: string;
}

export const MapLoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height }) => {
  return (
    <div
      className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-lg flex items-center justify-center border border-stone-200 overflow-hidden"
      style={{ height }}
    >
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-stone-700 serif-text">Loading Map...</p>
      </div>
    </div>
  );
};

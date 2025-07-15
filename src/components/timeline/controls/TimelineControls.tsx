'use client';

import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface TimelineControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  className?: string;
}

export default function TimelineControls({ 
  onZoomIn, 
  onZoomOut, 
  onReset, 
  className = "" 
}: TimelineControlsProps) {
  return (
    <div className={`flex justify-end ${className}`}>
      <div className="timeline-controls flex items-center space-x-2">
        <span className="text-sm text-stone-600" style={{ fontFamily: 'Source Serif Pro, serif' }}>
          Timeline Controls
        </span>
        <button
          onClick={onZoomOut}
          className="p-2 rounded-md transition-all"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={onZoomIn}
          className="p-2 rounded-md transition-all"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={onReset}
          className="p-2 rounded-md transition-all"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

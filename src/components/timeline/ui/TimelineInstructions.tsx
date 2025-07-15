'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatYear } from '@/lib/utils';
import { TimelineEvent as TimelineEventType } from '@/types/timeline';

interface TimelineInstructionsProps {
  selectedEvent: TimelineEventType | null;
  zoomLevel: number;
  filteredEventsCount: number;
}

export default function TimelineInstructions({ 
  selectedEvent, 
  zoomLevel, 
  filteredEventsCount 
}: TimelineInstructionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-amber-25 border border-amber-200 rounded-md">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-amber-50 transition-colors rounded-t-md"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-semibold text-amber-800" style={{ fontFamily: 'Playfair Display, serif' }}>Timeline Navigation</h4>
          <div className="text-sm text-stone-500" style={{ fontFamily: 'Source Serif Pro, serif' }}>
            Interact with the timeline below using mouse or keyboard
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {selectedEvent && (
            <div className="flex items-center space-x-2">
              <div className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                📌 {selectedEvent.title} ({formatYear(selectedEvent.year)})
              </div>
              <div className="text-xs text-amber-700 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-200 animate-pulse">
                ⬇️ Details below
              </div>
            </div>
          )}
          <button className="text-amber-700 hover:text-amber-900 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-3 pb-3 border-t border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-amber-800 mt-3" style={{ fontFamily: 'Source Serif Pro, serif' }}>
            <div>
              <strong>Mouse Controls:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5">
                <li>Scroll wheel: Zoom in/out (centers on selected event or cursor)</li>
                <li>Click & drag: Pan timeline (horizontal only)</li>
                <li>Click events: Select/view details</li>
                <li>Click empty space: Deselect</li>
              </ul>
            </div>
            <div>
              <strong>Keyboard Shortcuts:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5">
                <li>+/= : Zoom in (centers on selected event)</li>
                <li>- : Zoom out (centers on selected event)</li>
                <li>←/→ : Pan left/right</li>
                <li>0 or Esc : Reset view</li>
              </ul>
            </div>
          </div>
          <div className="mt-2 text-xs text-amber-700" style={{ fontFamily: 'Source Serif Pro, serif' }}>
            Zoom: {zoomLevel < 1 ? `${(zoomLevel * 100).toFixed(1)}%` : `${Math.round(zoomLevel * 100)}%`} • {filteredEventsCount} events displayed
          </div>
        </div>
      )}
    </div>
  );
}

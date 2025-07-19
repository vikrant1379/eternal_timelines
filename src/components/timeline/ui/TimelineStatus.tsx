'use client';

import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import { formatYear } from '@/lib/utils';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface TimelineStatusProps {
  filteredEvents: TimelineEventType[];
  totalEvents: number;
  allEvents?: TimelineEventType[]; // Add this to get complete database span
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onReset?: () => void;
}

export default function TimelineStatus({ 
  filteredEvents, 
  totalEvents, 
  allEvents,
  onZoomIn, 
  onZoomOut, 
  onReset 
}: TimelineStatusProps) {
  // Calculate total database span from all events
  const sortedAllEvents = allEvents ? [...allEvents].sort((a, b) => a.year - b.year) : [];
  const totalMinYear = sortedAllEvents.length > 0 ? Math.min(...sortedAllEvents.map(e => e.year)) : 0;
  const totalMaxYear = sortedAllEvents.length > 0 ? Math.max(...sortedAllEvents.map(e => e.year)) : 0;

  // Calculate filtered events span
  const sortedFilteredEvents = [...filteredEvents].sort((a, b) => a.year - b.year);
  const filteredMinYear = sortedFilteredEvents.length > 0 ? Math.min(...sortedFilteredEvents.map(e => e.year)) : 0;
  const filteredMaxYear = sortedFilteredEvents.length > 0 ? Math.max(...sortedFilteredEvents.map(e => e.year)) : 0;

  // Show status section - always show database info
  const isFiltered = filteredEvents.length < totalEvents;
  // Show controls section if any control handlers are provided
  const showControls = onZoomIn || onZoomOut || onReset;

  return (
    <div className="bg-gradient-to-r from-amber-25 via-orange-25 to-amber-25 border border-amber-200 rounded-2xl p-6 mb-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Database Overview - Always visible */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full shadow-sm"></div>
            <span className="text-sm font-semibold text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              {isFiltered ? 'Filtered View' : 'Complete Timeline'}
            </span>
          </div>

          {/* Event counts */}
          <div className="text-sm text-amber-800 bg-white/50 px-4 py-2 rounded-full border border-amber-200" style={{ fontFamily: 'Playfair Display, serif'}}>
            <span className="font-bold">{filteredEvents.length}</span> of{' '}
            <span className="font-bold">{totalEvents}</span> events
          </div>

          {/* Time range display */}
          {sortedFilteredEvents.length > 0 && (
            <div className="flex items-center space-x-3" style={{ fontFamily: 'Playfair Display, serif'}}>
              {isFiltered && (
                
                <div>
                  Showing: <span className="font-bold">{Math.abs(filteredMinYear)}</span> BCE —{' '}
                  <span className="font-bold">{filteredMaxYear}</span> CE
                </div>
              )}

              {/* Show total database span when not filtered or when helpful for context */}
              {sortedAllEvents.length > 0 && (
                <div className="text-xs text-amber-700 bg-white/40 px-3 py-1.5 rounded-full border border-amber-200/80 font-medium dark:text-amber-300 dark:bg-slate-600/60 dark:border-amber-500/30">
                  Database: <span className="font-bold">{Math.abs(totalMinYear)}</span> BCE —{' '}
                  <span className="font-bold">{totalMaxYear}</span> CE
                </div>
              )}
            </div>
          )}
        </div>

        {/* Timeline Controls - Only show if handlers are provided */}
        {showControls && (
          <div className="flex items-center space-x-2">
            {onZoomOut && (
              <button
                onClick={onZoomOut}
                className="p-3 bg-gradient-to-br from-white to-amber-25 border border-amber-200 rounded-xl hover:from-amber-25 hover:to-amber-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 dark:border-amber-500/30 dark:hover:from-slate-600 dark:hover:to-slate-500"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              </button>
            )}
            {onZoomIn && (
              <button
                onClick={onZoomIn}
                className="p-3 bg-gradient-to-br from-white to-amber-25 border border-amber-200 rounded-xl hover:from-amber-25 hover:to-amber-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 dark:border-amber-500/30 dark:hover:from-slate-600 dark:hover:to-slate-500"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              </button>
            )}
            {onReset && (
              <button
                onClick={onReset}
                className="p-3 bg-gradient-to-br from-white to-amber-25 border border-amber-200 rounded-xl hover:from-amber-25 hover:to-amber-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 dark:border-amber-500/30 dark:hover:from-slate-600 dark:hover:to-slate-500"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              </button>
            )}
          </div>
        )}
      </div>

      {isFiltered && (
        <div className="mt-4 text-sm text-amber-700 bg-white/50 px-4 py-2 rounded-xl border border-amber-200 dark:text-amber-300 dark:bg-slate-700/50 dark:border-amber-500/30" style={{ fontFamily: 'Source Serif Pro, serif' }}>
          💡 Use filters above to refine your timeline view
        </div>
      )}
    </div>
  );
}
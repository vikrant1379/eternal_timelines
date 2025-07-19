'use client';

import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import { Search } from 'lucide-react';
import TimelineEvent from '../TimelineEvent';

interface TimelineEventDetailsProps {
  selectedEvent: TimelineEventType | null;
  onClose: () => void;
}

export default function TimelineEventDetails({ selectedEvent, onClose }: TimelineEventDetailsProps) {
  if (!selectedEvent) return null;

  return (
    <div 
      id="event-details-card"
      className="academic-card p-8 transition-all duration-500 ease-in-out backdrop-blur-sm hover:border-transparent"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 flex items-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-amber-500 dark:to-orange-500 rounded-xl flex items-center justify-center text-lg mr-3 shadow-lg">
            <Search className="w-5 h-5 text-white dark:text-gray-900" />
          </div>
          Selected Event Details
        </h3>
        <button
          onClick={onClose}
          className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 text-xl font-normal px-3 py-2 rounded-lg hover:bg-stone-100/50 dark:hover:bg-stone-800/30 transition-all duration-200 group"
          title="Close"
        >
          <span className="group-hover:rotate-90 transition-transform duration-200">✕</span>
        </button>
      </div>
      
      <div className="bg-amber-200/20 rounded-xl shadow-inner backdrop-blur-sm">
        <TimelineEvent
          event={selectedEvent}
          onClick={() => {}}
          isSelected={true}
        />
      </div>
    </div>
  );
}

'use client';

import { TimelineEvent as TimelineEventType } from '@/types/timeline';
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
        <h3 className="text-2xl font-bold text-stone-900 flex items-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <div className="w-10 h-10 academic-accent rounded-xl flex items-center justify-center text-white text-lg mr-3 shadow-lg">
            🔍
          </div>
          Selected Event Details
        </h3>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600 text-2xl font-bold px-4 py-2 rounded-xl hover:bg-gradient-to-br hover:from-stone-50 hover:to-stone-25 transition-all duration-200 transform hover:scale-105"
          title="Close"
        >
          ✕
        </button>
      </div>
      
      <div className="bg-white/60 rounded-xl p-1 shadow-inner backdrop-blur-sm">
        <TimelineEvent
          event={selectedEvent}
          onClick={() => {}}
          isSelected={true}
        />
      </div>
    </div>
  );
}

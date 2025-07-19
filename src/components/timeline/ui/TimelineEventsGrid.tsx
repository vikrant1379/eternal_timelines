'use client';

import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import TimelineEvent from '../TimelineEvent';

interface TimelineEventsGridProps {
  events: TimelineEventType[];
  selectedEvent: TimelineEventType | null;
  onEventSelect: (event: TimelineEventType) => void;
}

export default function TimelineEventsGrid({ 
  events, 
  selectedEvent, 
  onEventSelect 
}: TimelineEventsGridProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-200 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 dark:border-amber-500/20 dark:shadow-xl">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center text-white text-lg mr-3 shadow-sm dark:bg-gradient-to-br dark:from-amber-600 dark:to-orange-700">
          📚
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200" style={{ fontFamily: 'Playfair Display, serif' }}>
          All Events ({events.length})
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 auto-rows-fr">
        {events.map((event) => (
          <div key={event.id} className="timeline-event-card h-full">
            <TimelineEvent
              event={event}
              onClick={onEventSelect}
              isSelected={selectedEvent?.id === event.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

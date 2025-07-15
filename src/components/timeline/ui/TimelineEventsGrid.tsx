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
    <div className="academic-card p-8 backdrop-blur-sm hover:border-transparent">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 academic-accent rounded-xl flex items-center justify-center text-white text-lg mr-3 shadow-lg">
          📚
        </div>
        <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>
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

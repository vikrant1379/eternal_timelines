'use client';

import { useEffect } from 'react';
import { TimelineEvent as TimelineEventType } from '@/types/timeline';

interface UseScrollToDetailsProps {
  selectedEvent: TimelineEventType | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function useScrollToDetails({ selectedEvent, containerRef }: UseScrollToDetailsProps) {
  useEffect(() => {
    console.log('Selected event changed:', selectedEvent?.title || 'None');
    
    // Gently scroll to show the details card without hiding the timeline
    if (selectedEvent) {
      setTimeout(() => {
        const detailsCard = document.getElementById('event-details-card');
        if (detailsCard) {
          // Get the timeline container position
          const timelineContainer = containerRef.current;
          if (timelineContainer) {
            const timelineRect = timelineContainer.getBoundingClientRect();
            const detailsRect = detailsCard.getBoundingClientRect();
            
            // Only scroll if the details card is not visible or mostly hidden
            const viewportHeight = window.innerHeight;
            const isDetailsVisible = detailsRect.top >= 0 && detailsRect.bottom <= viewportHeight;
            
            if (!isDetailsVisible) {
              // Calculate a scroll position that keeps both timeline and details visible
              const timelineHeight = timelineRect.height;
              const detailsHeight = detailsRect.height;
              const availableSpace = viewportHeight - timelineHeight - 100; // 100px buffer
              
              if (detailsHeight <= availableSpace) {
                // Details card can fit below timeline - scroll to show both
                detailsCard.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'end', // Align to bottom of viewport
                  inline: 'nearest'
                });
              } else {
                // Details card is too tall - just scroll slightly to show it exists
                window.scrollBy({
                  top: Math.min(205, detailsRect.top - viewportHeight + 150),
                  behavior: 'smooth'
                });
              }
            }
          }
        }
      }, 300); // Slight delay to ensure DOM is updated
    }
  }, [selectedEvent, containerRef]);
}

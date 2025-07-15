'use client';

import { useMemo } from 'react';
import { TimelineEvent as TimelineEventType, TimelineFilter } from '@/types/timeline';

interface UseTimelineFiltersProps {
  events: TimelineEventType[];
  filters: TimelineFilter;
}

export function useTimelineFilters({ events, filters }: UseTimelineFiltersProps) {
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(event.category)) {
        return false;
      }
      
      // Year range filter
      if (event.year < filters.yearRange[0] || event.year > filters.yearRange[1]) {
        return false;
      }
      
      // Importance filter
      if (filters.importance.length > 0 && !filters.importance.includes(event.importance)) {
        return false;
      }
      
      // Search filter
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
          event.location?.name.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) {
          return false;
        }
      }
      
      return true;
    });
  }, [events, filters]);

  // Sort events by year
  const sortedEvents = useMemo(() => {
    return [...filteredEvents].sort((a, b) => a.year - b.year);
  }, [filteredEvents]);

  return {
    filteredEvents,
    sortedEvents
  };
}

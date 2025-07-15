'use client';

import { useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { TimelineEvent as TimelineEventType, TimelineFilter } from '@/types/timeline';

// Components
import TimelineFilters from './TimelineFilters';
import { TimelineVisualization } from './core';
import { 
  TimelineInstructions, 
  TimelineCard, 
  TimelineEventDetails, 
  TimelineEventsGrid,
  TimelineStatus
} from './ui';

// Hooks
import { 
  useTimelineControls, 
  useTimelineKeyboard, 
  useScrollToDetails,
  useTimelineFilters
} from '@/hooks/timeline';

interface InteractiveTimelineProps {
  events: TimelineEventType[];
}

/**
 * InteractiveTimeline - Main timeline component with modular architecture
 * 
 * This component serves as the coordinator for the timeline functionality,
 * orchestrating various sub-components and custom hooks:
 * 
 * Architecture:
 * - /controls: Timeline control buttons (zoom in/out/reset)
 * - /core: Core D3-based timeline visualization
 * - /ui: UI components (instructions, cards, event details, grid)
 * - /hooks: Custom hooks for business logic and side effects
 * 
 * Features:
 * - Modular component structure for maintainability
 * - Custom hooks for separation of concerns
 * - Responsive design with mobile support
 * - Advanced filtering and search capabilities
 * - Smooth zoom and pan interactions
 * - Keyboard shortcuts for accessibility
 * - Auto-scroll to selected events
 */

export default function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  // Refs for D3 integration - shared with child components
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const currentTransformRef = useRef<d3.ZoomTransform>(d3.zoomIdentity);

  // State
  const [selectedEvent, setSelectedEvent] = useState<TimelineEventType | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [filters, setFilters] = useState<TimelineFilter>({
    categories: [],
    yearRange: [-3000, 2000],
    importance: [],
    searchQuery: '',
  });

  // Filter and sort events using custom hook
  const { filteredEvents, sortedEvents } = useTimelineFilters({ events, filters });

  // Event handlers
  const handleEventSelect = useCallback((event: TimelineEventType | null) => {
    setSelectedEvent(event);
  }, []);

  const handleZoomChange = useCallback((newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  }, []);

  // Custom hooks
  const { handleZoomIn, handleZoomOut, handleReset } = useTimelineControls({
    selectedEvent,
    sortedEvents,
    svgRef,
    containerRef,
    zoomBehaviorRef,
    currentTransformRef,
    onEventSelect: handleEventSelect
  });

  useTimelineKeyboard({
    selectedEvent,
    svgRef,
    zoomBehaviorRef,
    currentTransformRef,
    handleZoomIn,
    handleZoomOut,
    handleReset
  });

  useScrollToDetails({
    selectedEvent,
    containerRef
  });

  const isTimelineEmpty = filteredEvents.length === 0;

  return (
    <div className="min-h-screen academic-bg relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 space-y-8 p-4">
        {/* Timeline Navigation Instructions */}
        <TimelineInstructions
          selectedEvent={selectedEvent}
          zoomLevel={zoomLevel}
          filteredEventsCount={filteredEvents.length}
        />

        {/* Filters */}
        <TimelineFilters
          filters={filters}
          onFiltersChange={setFilters}
          totalEvents={events.length}
          filteredEvents={filteredEvents.length}
        />

        {/* Timeline Status with Controls */}
        <TimelineStatus
          filteredEvents={filteredEvents}
          totalEvents={events.length}
          allEvents={events}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
        />

        {/* Timeline Visualization */}
        <TimelineCard isEmpty={isTimelineEmpty}>
          {!isTimelineEmpty && (
            <TimelineVisualization
              events={sortedEvents}
              selectedEvent={selectedEvent}
              onEventSelect={handleEventSelect}
              onZoomChange={handleZoomChange}
              svgRef={svgRef}
              containerRef={containerRef}
              zoomBehaviorRef={zoomBehaviorRef}
              currentTransformRef={currentTransformRef}
            />
          )}
        </TimelineCard>

        {/* Selected Event Details */}
        <TimelineEventDetails
          selectedEvent={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />

        {/* All Events Grid */}
        <TimelineEventsGrid
          events={sortedEvents}
          selectedEvent={selectedEvent}
          onEventSelect={setSelectedEvent}
        />
      </div>
    </div>
  );
}
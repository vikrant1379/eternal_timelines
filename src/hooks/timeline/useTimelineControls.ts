'use client';

import { useCallback } from 'react';
import * as d3 from 'd3';
import { TimelineEvent as TimelineEventType } from '@/types/timeline';

interface UseTimelineControlsProps {
  selectedEvent: TimelineEventType | null;
  sortedEvents: TimelineEventType[];
  svgRef: React.RefObject<SVGSVGElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  zoomBehaviorRef: React.MutableRefObject<d3.ZoomBehavior<SVGSVGElement, unknown> | null>;
  currentTransformRef: React.MutableRefObject<d3.ZoomTransform>;
  onEventSelect: (event: TimelineEventType | null) => void;
}

export function useTimelineControls({
  selectedEvent,
  sortedEvents,
  svgRef,
  containerRef,
  zoomBehaviorRef,
  currentTransformRef,
  onEventSelect
}: UseTimelineControlsProps) {
  
  const handleZoomIn = useCallback(() => {
    if (svgRef.current && zoomBehaviorRef.current) {
      const svg = d3.select(svgRef.current);
      
      if (selectedEvent) {
        // Calculate the position of the selected event
        const container = containerRef.current;
        if (container) {
          const width = container.clientWidth;
          const currentTransform = currentTransformRef.current;
          
          // Get current scale parameters
          const years = sortedEvents.map(d => d.year);
          const minYear = Math.min(...years);
          const maxYear = Math.max(...years);
          const yearRange = maxYear - minYear;
          const padding = yearRange * 0.1;
          const baseDomain = [minYear - padding, maxYear + padding];
          const baseRange = [80, width - 80];
          
          // Create scale to find event position
          const baseScale = d3.scaleLinear().domain(baseDomain).range(baseRange);
          const eventX = baseScale(selectedEvent.year);
          
          // Zoom in centered on the selected event (horizontal only)
          svg.transition()
            .duration(200)
            .ease(d3.easeQuadOut)
            .call(zoomBehaviorRef.current.transform, 
              d3.zoomIdentity.translate((width / 2 - eventX * 1.5), 0).scale(currentTransform.k * 1.5));
        }
      } else {
        // Normal zoom if no event selected
        svg.transition()
          .duration(200)
          .ease(d3.easeQuadOut)
          .call(zoomBehaviorRef.current.scaleBy, 1.5);
      }
    }
  }, [selectedEvent, sortedEvents, svgRef, containerRef, zoomBehaviorRef, currentTransformRef]);

  const handleZoomOut = useCallback(() => {
    if (svgRef.current && zoomBehaviorRef.current) {
      const svg = d3.select(svgRef.current);
      
      if (selectedEvent) {
        // Calculate the position of the selected event
        const container = containerRef.current;
        if (container) {
          const width = container.clientWidth;
          const currentTransform = currentTransformRef.current;
          
          // Get current scale parameters
          const years = sortedEvents.map(d => d.year);
          const minYear = Math.min(...years);
          const maxYear = Math.max(...years);
          const yearRange = maxYear - minYear;
          const padding = yearRange * 0.1;
          const baseDomain = [minYear - padding, maxYear + padding];
          const baseRange = [80, width - 80];
          
          // Create scale to find event position
          const baseScale = d3.scaleLinear().domain(baseDomain).range(baseRange);
          const eventX = baseScale(selectedEvent.year);
          
          // Zoom out centered on the selected event (horizontal only)
          const newScale = currentTransform.k / 1.5;
          svg.transition()
            .duration(200)
            .ease(d3.easeQuadOut)
            .call(zoomBehaviorRef.current.transform, 
              d3.zoomIdentity.translate((width / 2 - eventX * newScale), 0).scale(newScale));
        }
      } else {
        // Normal zoom if no event selected
        svg.transition()
          .duration(200)
          .ease(d3.easeQuadOut)
          .call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
      }
    }
  }, [selectedEvent, sortedEvents, svgRef, containerRef, zoomBehaviorRef, currentTransformRef]);

  const handleReset = useCallback(() => {
    if (svgRef.current && zoomBehaviorRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition()
        .duration(500)
        .ease(d3.easeQuadOut)
        .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
      
      // Reset the persistent transform
      currentTransformRef.current = d3.zoomIdentity;
    }
    onEventSelect(null);
  }, [svgRef, zoomBehaviorRef, currentTransformRef, onEventSelect]);

  return {
    handleZoomIn,
    handleZoomOut,
    handleReset
  };
}

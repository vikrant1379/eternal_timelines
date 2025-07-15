'use client';

import { useEffect } from 'react';
import * as d3 from 'd3';
import { TimelineEvent as TimelineEventType } from '@/types/timeline';

interface UseTimelineKeyboardProps {
  selectedEvent: TimelineEventType | null;
  svgRef: React.RefObject<SVGSVGElement | null>;
  zoomBehaviorRef: React.MutableRefObject<d3.ZoomBehavior<SVGSVGElement, unknown> | null>;
  currentTransformRef: React.MutableRefObject<d3.ZoomTransform>;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleReset: () => void;
}

export function useTimelineKeyboard({
  selectedEvent,
  svgRef,
  zoomBehaviorRef,
  currentTransformRef,
  handleZoomIn,
  handleZoomOut,
  handleReset
}: UseTimelineKeyboardProps) {
  
  // Basic keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle if the timeline is in focus or no input is focused
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case '+':
        case '=':
          event.preventDefault();
          handleZoomIn();
          break;
        case '-':
          event.preventDefault();
          handleZoomOut();
          break;
        case '0':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            handleReset();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleReset]);

  // Advanced keyboard shortcuts for timeline interaction
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!zoomBehaviorRef.current || !svgRef.current) return;
      
      // Don't interfere with input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      const svg = d3.select(svgRef.current);
      const currentTransform = d3.zoomTransform(svgRef.current);
      
      // Calculate pan distance based on current zoom level (less distance when zoomed in)
      const panDistance = Math.max(50, 150 / Math.max(currentTransform.k, 0.5));
      
      switch (event.key) {
        case '+':
        case '=':
          event.preventDefault();
          if (selectedEvent) {
            handleZoomIn();
          } else {
            svg.transition()
              .duration(150)
              .ease(d3.easeQuadOut)
              .call(zoomBehaviorRef.current.scaleBy, 1.3);
          }
          break;
        case '-':
          event.preventDefault();
          if (selectedEvent) {
            handleZoomOut();
          } else {
            svg.transition()
              .duration(150)
              .ease(d3.easeQuadOut)
              .call(zoomBehaviorRef.current.scaleBy, 1/1.3);
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          // Smooth pan with adaptive distance and momentum-like easing
          svg.transition()
            .duration(200)
            .ease(d3.easeQuadOut)
            .call(zoomBehaviorRef.current.translateBy, panDistance * 2, 0);
          break;
        case 'ArrowRight':
          event.preventDefault();
          // Smooth pan with adaptive distance and momentum-like easing
          svg.transition()
            .duration(200)
            .ease(d3.easeQuadOut)
            .call(zoomBehaviorRef.current.translateBy, -panDistance * 2, 0);
          break;
        case '0':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            svg.transition()
              .duration(400)
              .ease(d3.easeQuadOut)
              .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
            // Reset the persistent transform
            currentTransformRef.current = d3.zoomIdentity;
          }
          break;
        case 'Escape':
          event.preventDefault();
          svg.transition()
            .duration(400)
            .ease(d3.easeQuadOut)
            .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
          // Reset the persistent transform
          currentTransformRef.current = d3.zoomIdentity;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, selectedEvent, svgRef, zoomBehaviorRef, currentTransformRef]);
}

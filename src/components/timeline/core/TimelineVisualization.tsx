'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import { formatYear } from '@/lib/utils';
import { calculateTimelineLayout, type TimelineConfig } from '@/lib/timeline-utils';

interface TimelineVisualizationProps {
  events: TimelineEventType[];
  selectedEvent: TimelineEventType | null;
  onEventSelect: (event: TimelineEventType | null) => void;
  onZoomChange: (zoomLevel: number) => void;
  svgRef: React.RefObject<SVGSVGElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  zoomBehaviorRef: React.MutableRefObject<d3.ZoomBehavior<SVGSVGElement, unknown> | null>;
  currentTransformRef: React.MutableRefObject<d3.ZoomTransform>;
}

export default function TimelineVisualization({
  events,
  selectedEvent,
  onEventSelect,
  onZoomChange,
  svgRef,
  containerRef,
  zoomBehaviorRef,
  currentTransformRef
}: TimelineVisualizationProps) {
  const setSelectedEventRef = useRef(onEventSelect);
  setSelectedEventRef.current = onEventSelect;

  // Track theme changes for re-rendering
  const [themeVersion, setThemeVersion] = useState(0);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setThemeVersion(prev => prev + 1);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // D3 timeline setup
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!svgRef.current || !containerRef.current || events.length === 0) return;

    // Detect current theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Theme-aware colors
    const colors = {
      text: isDarkMode ? '#e5e7eb' : '#374151',
      textSecondary: isDarkMode ? '#9ca3af' : '#6b7280', 
      textEvent: isDarkMode ? '#fbbf24' : '#ea580c',
      textSelected: isDarkMode ? '#ef4444' : '#dc2626',
      textShadow: isDarkMode ? '1px 1px 2px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(255,255,255,0.9)',
      textShadowSelected: isDarkMode ? 
        '1px 1px 2px rgba(239, 68, 68, 0.3), 0 0 10px rgba(239, 68, 68, 0.2)' : 
        '1px 1px 2px rgba(220, 38, 38, 0.3), 0 0 10px rgba(220, 38, 38, 0.2)'
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const svg = d3.select(svgRef.current);
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth;
      const height = 350;

      // Clear previous content
      svg.selectAll('*').remove();

      // Calculate base year range
      const years = events.map(d => d.year);
      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);
      const yearRange = maxYear - minYear;
      const padding = yearRange * 0.1;

      // Base domain for the timeline
      const baseDomain = [minYear - padding, maxYear + padding];
      const baseRange = [80, width - 80];

      // Use the persistent current transform instead of resetting it
      let currentTransform = currentTransformRef.current;
      
      // Function to create xScale based on current zoom transform
      const createXScale = (transform: d3.ZoomTransform) => {
        const domain = baseDomain.map(d => (d - transform.x / transform.k) / transform.k);
        return d3.scaleLinear()
          .domain(domain)
          .range(baseRange);
      };

      // Initial scale
      let xScale = createXScale(currentTransform);

      // Create main timeline group
      const timelineGroup = svg.append('g').attr('class', 'timeline-group');

      // Function to render the timeline with performance optimizations
      const renderTimeline = (transform: d3.ZoomTransform, isInteracting = false) => {
        // Update the scale based on current transform
        xScale = createXScale(transform);
        
        // Clear existing content in timeline group efficiently using a single DOM operation
        const timelineGroupNode = timelineGroup.node();
        if (timelineGroupNode) {
          while (timelineGroupNode.firstChild) {
            timelineGroupNode.removeChild(timelineGroupNode.firstChild);
          }
        }

        // Calculate visible year range for dynamic year markers
        const visibleDomain = xScale.domain();
        const visibleMinYear = Math.floor(visibleDomain[0]);
        const visibleMaxYear = Math.ceil(visibleDomain[1]);
        const visibleRange = visibleMaxYear - visibleMinYear;

        // During interaction, adapt detail reduction based on zoom level for better performance
        const zoomBasedReduction = Math.max(0.1, Math.min(1, visibleRange / 1000));
        const maxMarkersForInteraction = isInteracting ? 
          Math.floor(50 * zoomBasedReduction) : 50;
        const visibleRangeThreshold = isInteracting ? 45000 : 50000;
        const skipEventLabelsForInteraction = isInteracting && (
          visibleRange > 8000 || visibleRange < 200
        );

        // Only render if the range is reasonable
        if (visibleRange > visibleRangeThreshold) {
          // Show a simplified view for very wide ranges
          timelineGroup.append('line')
            .attr('x1', baseRange[0])
            .attr('x2', baseRange[1])
            .attr('y1', height / 2)
            .attr('y2', height / 2)
            .attr('stroke', '#e5e7eb')
            .attr('stroke-width', 3)
            .attr('stroke-linecap', 'round');
          
          timelineGroup.append('text')
            .attr('x', (baseRange[0] + baseRange[1]) / 2)
            .attr('y', height / 2 - 20)
            .attr('text-anchor', 'middle')
            .attr('fill', colors.textSecondary)
            .attr('font-size', '14px')
            .text(`Showing ${Math.round(visibleRange)} years - zoom in for details`);
          return;
        }

        // Main timeline line
        timelineGroup.append('line')
          .attr('x1', baseRange[0])
          .attr('x2', baseRange[1])
          .attr('y1', height / 2)
          .attr('y2', height / 2)
          .attr('stroke', '#e5e7eb')
          .attr('stroke-width', 3)
          .attr('stroke-linecap', 'round');

        // Add subtle background highlighting for visible timeline
        timelineGroup.append('rect')
          .attr('x', baseRange[0])
          .attr('y', height / 2 - 40)
          .attr('width', baseRange[1] - baseRange[0])
          .attr('height', 80)
          .attr('fill', '#fef3c7')
          .attr('opacity', 0.1)
          .attr('rx', 4)
          .style('pointer-events', 'none');

        // Dynamic year markers based on zoom level
        let yearsToShow: number[] = [];
        
        // Get all event years in the visible range
        const visibleEventYears = events
          .filter(e => e.year >= visibleMinYear && e.year <= visibleMaxYear)
          .map(e => e.year);
        const uniqueEventYears = [...new Set(visibleEventYears)];
        
        // Always include event years
        yearsToShow = [...uniqueEventYears];
        
        // Add contextual year markers based on zoom level
        let yearStep: number;
        if (visibleRange > 10000) {
          yearStep = 2000;
        } else if (visibleRange > 5000) {
          yearStep = 1000;
        } else if (visibleRange > 2000) {
          yearStep = 500;
        } else if (visibleRange > 1000) {
          yearStep = 250;
        } else if (visibleRange > 500) {
          yearStep = 100;
        } else if (visibleRange > 200) {
          yearStep = 50;
        } else if (visibleRange > 100) {
          yearStep = isInteracting ? 50 : 25;
        } else if (visibleRange > 50) {
          yearStep = isInteracting ? 25 : 10;
        } else if (visibleRange > 20) {
          yearStep = isInteracting ? 10 : 5;
        } else if (visibleRange > 10) {
          yearStep = isInteracting ? 5 : 2;
        } else if (visibleRange > 5) {
          yearStep = isInteracting ? 2 : 1;
        } else {
          yearStep = isInteracting ? 1 : 0.5;
        }

        // Add year grid markers
        const startYear = Math.floor(visibleMinYear / yearStep) * yearStep;
        const maxMarkers = maxMarkersForInteraction;
        let markerCount = 0;
        
        for (let year = startYear; year <= visibleMaxYear + yearStep && markerCount < maxMarkers; year += yearStep) {
          if (!yearsToShow.includes(year)) {
            yearsToShow.push(year);
          }
          markerCount++;
        }

        // Remove duplicates and sort
        yearsToShow = [...new Set(yearsToShow)].sort((a, b) => a - b);

        // Use the collision detection system for positioning
        const timelineConfig: TimelineConfig = {
          height,
          centerY: height / 2,
          minSpacing: 15,
          verticalSpacing: 30,
          defaultOffset: 35,
          maxAttempts: 8
        };

        // Get visible events for collision detection
        const visibleEvents = events.filter(e => 
          e.year >= visibleMinYear && e.year <= visibleMaxYear
        );

        // Calculate collision-free layout
        const layout = calculateTimelineLayout(visibleEvents, yearsToShow, xScale, timelineConfig);

        // Render year markers with collision-aware positioning
        layout.yearPositions.forEach(yearPos => {
          const x = yearPos.x;
          const year = yearPos.year;
          const side = yearPos.side;
          const isEventYear = yearPos.isEventYear;
          
          // Only render if within visible bounds
          if (x < baseRange[0] - 100 || x > baseRange[1] + 100) return;
          
          // Calculate marker line position based on side
          const markerTop = side === 'above' 
            ? height / 2 - (isEventYear ? 15 : 8)
            : height / 2 - (isEventYear ? 8 : 5);
          const markerBottom = side === 'above'
            ? height / 2 - (isEventYear ? 5 : 3)
            : height / 2 + (isEventYear ? 15 : 8);
          
          // Year marker line
          timelineGroup.append('line')
            .attr('x1', x)
            .attr('x2', x)
            .attr('y1', markerTop)
            .attr('y2', markerBottom)
            .attr('stroke', isEventYear ? '#f97316' : '#9ca3af')
            .attr('stroke-width', isEventYear ? 3 : 1)
            .attr('opacity', isEventYear ? 0.8 : 0.6);

          // Year label
          timelineGroup.append('text')
            .attr('x', x)
            .attr('y', yearPos.y)
            .attr('text-anchor', 'middle')
            .attr('fill', isEventYear ? colors.textEvent : colors.textSecondary)
            .attr('font-size', isEventYear ? '11px' : '10px')
            .attr('font-weight', isEventYear ? '600' : '400')
            .style('text-shadow', colors.textShadow)
            .text(formatYear(year));
        });

        // Render events with collision-free positioning
        layout.eventPositions.forEach((eventPos, index) => {
          const x = eventPos.x;
          const y = eventPos.y;
          const event = eventPos.event;
          const side = eventPos.side;
          
          // Only render if within visible bounds
          if (x < baseRange[0] - 100 || x > baseRange[1] + 100) return;
          
          // During interaction when zoomed in, skip some events for better performance
          const isSelected = selectedEvent?.id === event.id;
          const isCritical = event.importance === 'critical';
          if (isInteracting && visibleRange < 100 && !isSelected && !isCritical) {
            if (index % 3 !== 0) return;
          } else if (isInteracting && visibleRange < 50 && !isSelected && !isCritical) {
            if (index % 4 !== 0) return;
          }
          
          // Event marker with different sizes for importance and selection state
          const markerRadius = event.importance === 'critical' ? 10 : 
                              event.importance === 'high' ? 8 : 6;
          const selectedRadius = markerRadius + (isSelected ? 4 : 0);
          
          // Create event marker with selection highlighting
          timelineGroup.append('circle')
            .attr('cx', x)
            .attr('cy', timelineConfig.centerY)
            .attr('r', selectedRadius)
            .attr('fill', isSelected ? '#dc2626' : '#f97316')
            .attr('stroke', isSelected ? '#fef2f2' : '#fff')
            .attr('stroke-width', isSelected ? 3 : 2)
            .attr('cursor', 'pointer')
            .style('filter', isSelected ? 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))' : 'none')
            .attr('data-event-id', event.id)
            .attr('data-event-title', event.title)
            .on('click', function(mouseEvent) {
              mouseEvent.stopPropagation();
              mouseEvent.preventDefault();
              setSelectedEventRef.current(event);
            })
            .style('pointer-events', 'all')
            .on('mouseenter', function() {
              if (!isSelected) {
                d3.select(this)
                  .attr('r', markerRadius + 4)
                  .attr('fill', '#ea580c')
                  .style('filter', 'drop-shadow(0 0 6px rgba(234, 88, 12, 0.4))');
              }
            })
            .on('mouseleave', function() {
              if (!isSelected) {
                d3.select(this)
                  .attr('r', markerRadius)
                  .attr('fill', '#f97316')
                  .style('filter', 'none');
              }
            });

          // Connection line from marker to text
          if (!skipEventLabelsForInteraction || isSelected) {
            const connectionStartY = side === 'above' 
              ? timelineConfig.centerY - selectedRadius
              : timelineConfig.centerY + selectedRadius;
            const connectionEndY = side === 'above' ? y + 8 : y - 8;
            
            timelineGroup.append('line')
              .attr('x1', x)
              .attr('x2', x)
              .attr('y1', connectionStartY)
              .attr('y2', connectionEndY)
              .attr('stroke', isSelected ? '#dc2626' : '#d1d5db')
              .attr('stroke-width', isSelected ? 2 : 1)
              .attr('stroke-dasharray', '2,2')
              .attr('opacity', isSelected ? 0.8 : 0.6);
          }

          // Event label
          if (!skipEventLabelsForInteraction || isSelected) {
            const truncatedTitle = event.title.length > 18 ? event.title.substring(0, 18) + '...' : event.title;
            timelineGroup.append('text')
              .attr('x', x)
              .attr('y', y)
              .attr('text-anchor', 'middle')
              .attr('fill', isSelected ? colors.textSelected : colors.text)
              .attr('font-size', event.importance === 'critical' ? '11px' : '10px')
              .attr('font-weight', isSelected ? 'bold' : '600')
              .style('text-shadow', isSelected ? colors.textShadowSelected : colors.textShadow)
              .style('cursor', 'pointer')
              .style('pointer-events', 'all')
              .attr('data-event-id', event.id)
              .attr('data-event-title', event.title)
              .on('click', function(mouseEvent) {
                mouseEvent.stopPropagation();
                mouseEvent.preventDefault();
                setSelectedEventRef.current(event);
              })
              .text(truncatedTitle);
          }
        });
      };

      // Initial render
      renderTimeline(currentTransform);

      // Set up zoom behavior with optimized rendering
      let animationFrame: number | null = null;
      let dragStartTime: number;
      let dragStartX: number;
      let dragStartY: number;
      let isDragging = false;
      
      const zoom = d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.01, 500])
        .wheelDelta(() => 0)
        .clickDistance(3)
        .touchable(() => true)
        .extent([[0, 0], [width, height]])
        .translateExtent([[-width * 4, 0], [width * 5, 0]])
        .constrain(function(transform, extent, translateExtent) {
          const constrainedX = Math.max(
            translateExtent[0][0], 
            Math.min(translateExtent[1][0], transform.x)
          );
          
          const constrainedTransform = d3.zoomIdentity
            .translate(constrainedX, 0)
            .scale(transform.k);
            
          return constrainedTransform;
        })
        .filter(function(event) {
          if (event.target && (
            event.target.hasAttribute('data-event-id') ||
            event.target.hasAttribute('data-event-title')
          )) {
            return false;
          }
          
          if (event.type === 'wheel') return false;
          
          if (event.type === 'mousedown') {
            dragStartTime = Date.now();
            dragStartX = event.clientX;
            dragStartY = event.clientY;
            return true;
          }
          
          if (event.type === 'mousemove' && event.buttons === 1) {
            const totalDeltaX = Math.abs(event.clientX - dragStartX);
            const totalDeltaY = Math.abs(event.clientY - dragStartY);
            
            if (totalDeltaX < 5 && totalDeltaY < 5) return true;
            
            if (totalDeltaY > totalDeltaX && totalDeltaY > 10) {
              return false;
            }
            
            return true;
          }
          
          return true;
        })
        .on('start', () => {
          isDragging = true;
          if (svgRef.current) {
            svgRef.current.style.cursor = 'grabbing';
            svgRef.current.style.userSelect = 'none';
            svgRef.current.style.opacity = '0.95';
          }
        })
        .on('zoom', (event) => {
          const dragDuration = Date.now() - dragStartTime;
          if (event.sourceEvent && event.sourceEvent.type === 'mousemove' && dragDuration < 30) {
            return;
          }
          
          const horizontalTransform = d3.zoomIdentity
            .translate(event.transform.x, 0)
            .scale(event.transform.k);
          
          currentTransform = horizontalTransform;
          currentTransformRef.current = currentTransform;
          onZoomChange(currentTransform.k);
          
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
          
          const isMouseMove = event.sourceEvent?.type === 'mousemove';
          const isDragOperation = isDragging && isMouseMove;
          
          animationFrame = requestAnimationFrame(() => {
            renderTimeline(currentTransform, isDragOperation);
            animationFrame = null;
          });
        })
        .on('end', () => {
          isDragging = false;
          
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
          
          animationFrame = requestAnimationFrame(() => {
            renderTimeline(currentTransform, false);
            animationFrame = null;
            
            if (svgRef.current) {
              svgRef.current.style.cursor = 'grab';
              svgRef.current.style.opacity = '1';
            }
          });
        });

      // Store zoom behavior in ref
      zoomBehaviorRef.current = zoom;

      // Apply zoom behavior to SVG
      if (svgRef.current) {
        const svgSelection = d3.select(svgRef.current);
        svgSelection.call(zoom);
        
        // Add custom wheel handler for zoom-to-cursor functionality
        svgSelection.on('wheel', function(event) {
          event.preventDefault();
          event.stopPropagation();
          
          const container = containerRef.current;
          const svgElement = svgRef.current;
          if (!container || !svgElement) return;
          
          const width = container.clientWidth;
          const currentTransform = currentTransformRef.current;
          
          const years = events.map(d => d.year);
          const minYear = Math.min(...years);
          const maxYear = Math.max(...years);
          const yearRange = maxYear - minYear;
          const padding = yearRange * 0.1;
          const baseDomain = [minYear - padding, maxYear + padding];
          const baseRange = [80, width - 80];
          
          const baseScale = d3.scaleLinear().domain(baseDomain).range(baseRange);
          
          const delta = -event.deltaY * 0.003;
          const scaleFactor = Math.exp(delta);
          const newK = Math.max(0.01, Math.min(500, currentTransform.k * scaleFactor));
          
          let newX;
          
          if (selectedEvent) {
            const eventBaseX = baseScale(selectedEvent.year);
            newX = width / 2 - eventBaseX * newK;
          } else {
            const svgRect = svgElement.getBoundingClientRect();
            const mouseX = event.clientX - svgRect.left;
            const timelineMouseX = (mouseX - currentTransform.x) / currentTransform.k;
            const targetYear = baseScale.invert(timelineMouseX);
            const newTimelineMouseX = baseScale(targetYear);
            newX = mouseX - newTimelineMouseX * newK;
          }
          
          const newTransform = d3.zoomIdentity.translate(newX, 0).scale(newK);
          currentTransformRef.current = newTransform;
          svgSelection.call(zoom.transform, newTransform);
        }, { passive: false });
        
        // Restore the previous zoom state
        if (currentTransformRef.current.k !== 1 || currentTransformRef.current.x !== 0) {
          const horizontalTransform = d3.zoomIdentity
            .translate(currentTransformRef.current.x, 0)
            .scale(currentTransformRef.current.k);
          svgSelection.call(zoom.transform, horizontalTransform);
          currentTransformRef.current = horizontalTransform;
        }
        
        // Add click handler to deselect events when clicking on empty space
        svgSelection.on('click', (event) => {
          if (event.target === svgRef.current) {
            setSelectedEventRef.current(null);
          }
        });
      }

      // Set initial cursor
      if (svgRef.current) {
        svgRef.current.style.cursor = 'grab';
        svgRef.current.style.userSelect = 'none';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [events, selectedEvent, onZoomChange, svgRef, containerRef, zoomBehaviorRef, currentTransformRef, themeVersion]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden relative">
      {/* Timeline continuation effects */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-transparent to-orange-300 opacity-60 z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-l from-transparent to-orange-300 opacity-60 z-20 pointer-events-none"></div>
      
      <svg
        ref={svgRef}
        width="100%"
        height="350"
        className="min-w-full cursor-grab select-none transition-opacity duration-75"
        style={{ 
          userSelect: 'none',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          isolation: 'isolate'
        }}
      />
    </div>
  );
}

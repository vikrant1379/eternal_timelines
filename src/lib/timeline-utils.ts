import { TimelineEvent } from '@/types/timeline';

export interface LabelPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  event: TimelineEvent;
  side: 'above' | 'below'; // Which side of timeline
}

export interface YearLabelPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  year: number;
  side: 'above' | 'below'; // Which side of timeline
  isEventYear: boolean;
}

export interface TimelineConfig {
  height: number;
  centerY: number;
  minSpacing: number;
  verticalSpacing: number;
  defaultOffset: number;
  maxAttempts: number;
}

export interface TimelineLayout {
  eventPositions: LabelPosition[];
  yearPositions: YearLabelPosition[];
}

/**
 * Checks if two elements overlap horizontally
 */
function hasHorizontalOverlap(x1: number, width1: number, x2: number, width2: number, minGap: number = 10): boolean {
  const left1 = x1 - width1 / 2;
  const right1 = x1 + width1 / 2;
  const left2 = x2 - width2 / 2;
  const right2 = x2 + width2 / 2;
  
  return !(right1 + minGap < left2 || right2 + minGap < left1);
}

/**
 * Main function to calculate collision-free layout for timeline
 */
export function calculateTimelineLayout(
  events: TimelineEvent[],
  years: number[],
  xScale: (year: number) => number,
  config: TimelineConfig
): TimelineLayout {
  const eventYears = events.map(e => e.year);
  
  // Step 1: Ensure all event years are included in year markers
  const allYears = [...new Set([...years, ...eventYears])].sort((a, b) => a - b);
  
  // Step 2: Resolve year label collisions first
  const yearPositions = resolveYearLabelCollisions(allYears, eventYears, xScale, config);
  
  // Step 3: Resolve event label collisions, considering year positions
  const eventPositions = resolveEventLabelCollisions(events, yearPositions, xScale, config);
  
  return {
    eventPositions,
    yearPositions
  };
}

/**
 * Resolve collisions between year labels by alternating above/below placement
 */
function resolveYearLabelCollisions(
  years: number[],
  eventYears: number[],
  xScale: (year: number) => number,
  config: TimelineConfig
): YearLabelPosition[] {
  const positions: YearLabelPosition[] = [];
  const labelWidth = 80;
  const labelHeight = 20;
  
  years.forEach((year) => {
    const x = xScale(year);
    const isEventYear = eventYears.includes(year);
    
    // Check for horizontal overlap with existing positions
    let side: 'above' | 'below' = 'below'; // Default: year labels below timeline
    
    // Find conflicting positions
    const conflicts = positions.filter(pos => 
      hasHorizontalOverlap(x, labelWidth, pos.x, pos.width, 15)
    );
    
    if (conflicts.length > 0) {
      // If there are conflicts, try to place on opposite side
      const belowConflicts = conflicts.filter(pos => pos.side === 'below');
      const aboveConflicts = conflicts.filter(pos => pos.side === 'above');
      
      if (belowConflicts.length > 0 && aboveConflicts.length === 0) {
        side = 'above';
      } else if (aboveConflicts.length > 0 && belowConflicts.length === 0) {
        side = 'below';
      } else {
        // Both sides have conflicts, choose based on which has fewer
        side = belowConflicts.length <= aboveConflicts.length ? 'below' : 'above';
      }
    }
    
    const y = side === 'below' 
      ? config.centerY + (isEventYear ? 35 : 25)
      : config.centerY - (isEventYear ? 35 : 25);
    
    positions.push({
      x,
      y,
      width: labelWidth,
      height: labelHeight,
      year,
      side,
      isEventYear
    });
  });
  
  return positions;
}

/**
 * Resolve collisions between event labels, considering year label positions
 */
function resolveEventLabelCollisions(
  events: TimelineEvent[],
  yearPositions: YearLabelPosition[],
  xScale: (year: number) => number,
  config: TimelineConfig
): LabelPosition[] {
  const positions: LabelPosition[] = [];
  
  events.forEach(event => {
    const x = xScale(event.year);
    const truncatedTitle = event.title.length > 18 ? event.title.substring(0, 18) + '...' : event.title;
    const textWidth = truncatedTitle.length * 6 + 10;
    const textHeight = 20;
    
    // Default: event labels above timeline
    let side: 'above' | 'below' = 'above';
    
    // Check for conflicts with year labels
    const yearConflicts = yearPositions.filter(yearPos => 
      yearPos.year === event.year || hasHorizontalOverlap(x, textWidth, yearPos.x, yearPos.width, 10)
    );
    
    // Check for conflicts with existing event labels
    const eventConflicts = positions.filter(pos => 
      hasHorizontalOverlap(x, textWidth, pos.x, pos.width, 10)
    );
    
    // Determine optimal side
    if (yearConflicts.some(pos => pos.side === 'above') || eventConflicts.some(pos => pos.side === 'above')) {
      // If there are conflicts above, try below
      const belowYearConflicts = yearConflicts.filter(pos => pos.side === 'below');
      const belowEventConflicts = eventConflicts.filter(pos => pos.side === 'below');
      
      if (belowYearConflicts.length === 0 && belowEventConflicts.length === 0) {
        side = 'below';
      } else {
        // Find the side with fewer conflicts
        const aboveConflicts = yearConflicts.filter(pos => pos.side === 'above').length + 
                              eventConflicts.filter(pos => pos.side === 'above').length;
        const belowConflicts = belowYearConflicts.length + belowEventConflicts.length;
        
        side = belowConflicts < aboveConflicts ? 'below' : 'above';
      }
    }
    
    // Calculate final position with stacking if needed
    let y = side === 'above' 
      ? config.centerY - config.defaultOffset
      : config.centerY + config.defaultOffset;
    
    // Stack if there are still conflicts on the chosen side
    const sideConflicts = [...yearPositions, ...positions].filter(pos => 
      pos.side === side && hasHorizontalOverlap(x, textWidth, pos.x, pos.width, 10)
    );
    
    if (sideConflicts.length > 0) {
      const stackLevel = sideConflicts.length;
      if (side === 'above') {
        y -= stackLevel * config.verticalSpacing;
      } else {
        y += stackLevel * config.verticalSpacing;
      }
    }
    
    positions.push({
      x,
      y,
      width: textWidth,
      height: textHeight,
      event,
      side
    });
  });
  
  return positions;
}

/**
 * Legacy function for backward compatibility - now uses the new layout system
 */
export function calculateOptimalPositions(
  events: TimelineEvent[],
  xScale: (year: number) => number,
  config: TimelineConfig,
  yearLabels: YearLabelPosition[] = []
): LabelPosition[] {
  const years = yearLabels.map(yl => yl.year);
  const layout = calculateTimelineLayout(events, years, xScale, config);
  return layout.eventPositions;
}

/**
 * Create year label positions - now uses the new layout system
 */
export function createYearLabelPositions(
  years: number[],
  xScale: (year: number) => number,
  config: TimelineConfig
): YearLabelPosition[] {
  const layout = calculateTimelineLayout([], years, xScale, config);
  return layout.yearPositions;
}

/**
 * Check if two year labels would overlap horizontally
 */
export function checkYearLabelOverlap(year1: number, year2: number, xScale: (year: number) => number): boolean {
  const x1 = xScale(year1);
  const x2 = xScale(year2);
  const labelWidth = 80;
  return hasHorizontalOverlap(x1, labelWidth, x2, labelWidth, 15);
}

/**
 * Filter out overlapping year labels - now uses smart collision resolution
 */
export function filterOverlappingYearLabels(
  years: number[],
  eventYears: number[]
): number[] {
  // Always include all event years, let the layout system handle collisions
  const allYears = [...new Set([...years, ...eventYears])].sort((a, b) => a - b);
  return allYears;
}

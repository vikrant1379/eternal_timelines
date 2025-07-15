# Timeline Component Architecture

This document outlines the modular architecture of the Interactive Timeline component, designed for maintainability, extensibility, and clarity.

## Directory Structure

```
src/components/timeline/
├── InteractiveTimeline.tsx          # Main coordinator component
├── TimelineFilters.tsx              # Filter controls (existing)
├── TimelineEvent.tsx                # Individual event display (existing)
├── controls/                        # Timeline control components
│   ├── index.ts                     # Export aggregator
│   └── TimelineControls.tsx         # Zoom/reset controls
├── core/                           # Core timeline functionality
│   ├── index.ts                    # Export aggregator
│   └── TimelineVisualization.tsx   # D3-based timeline rendering
└── ui/                             # UI components
    ├── index.ts                    # Export aggregator
    ├── TimelineCard.tsx            # Timeline container with visual effects
    ├── TimelineEventDetails.tsx    # Selected event details card
    ├── TimelineEventsGrid.tsx      # Grid view of all events
    └── TimelineInstructions.tsx    # Collapsible navigation instructions

src/hooks/timeline/
├── index.ts                        # Export aggregator
├── useTimelineControls.ts          # Zoom controls logic
├── useTimelineFilters.ts           # Event filtering logic
├── useTimelineKeyboard.ts          # Keyboard shortcuts
└── useScrollToDetails.ts           # Auto-scroll behavior
```

## Component Responsibilities

### Main Component (InteractiveTimeline.tsx)
- **Role**: Coordinator and state manager
- **Responsibilities**:
  - Manages global state (selected event, zoom level, filters)
  - Coordinates between sub-components
  - Provides refs for D3 integration
  - Orchestrates custom hooks

### Controls (/controls)
- **TimelineControls**: Zoom in/out/reset buttons with clean UI

### Core (/core)
- **TimelineVisualization**: Complex D3-based timeline rendering with:
  - Interactive zoom and pan
  - Event positioning with collision detection
  - Performance optimizations for large datasets
  - Dynamic year markers based on zoom level

### UI (/ui)
- **TimelineCard**: Visual container with gradient effects
- **TimelineInstructions**: Collapsible help/navigation guide
- **TimelineEventDetails**: Detailed view of selected events
- **TimelineEventsGrid**: Grid layout for browsing all events

## Custom Hooks (/hooks)

### useTimelineControls
- **Purpose**: Encapsulates zoom control logic
- **Features**:
  - Smart centering on selected events
  - Smooth transitions
  - Proper ref handling

### useTimelineFilters
- **Purpose**: Manages event filtering and sorting
- **Features**:
  - Memoized filtering for performance
  - Category, year range, importance, and text search
  - Sorted output by year

### useTimelineKeyboard
- **Purpose**: Keyboard shortcuts for accessibility
- **Features**:
  - Zoom controls (+, -, 0)
  - Pan controls (arrow keys)
  - Reset (Escape)
  - Input field detection to avoid conflicts

### useScrollToDetails
- **Purpose**: Auto-scroll behavior when events are selected
- **Features**:
  - Intelligent viewport calculation
  - Smooth scrolling
  - Preserves timeline visibility

## Design Principles

### 1. Separation of Concerns
- **UI components**: Focus on presentation and user interaction
- **Hooks**: Handle business logic and side effects
- **Core**: Manages complex D3 interactions

### 2. Reusability
- Components are designed to be reusable and testable
- Clear prop interfaces with TypeScript
- Minimal external dependencies

### 3. Performance
- Memoized computations in hooks
- Optimized D3 rendering with performance modes
- Efficient event handling

### 4. Maintainability
- Small, focused components (< 200 lines each)
- Clear naming conventions
- Comprehensive TypeScript types
- Index files for clean imports

### 5. Accessibility
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Clear visual indicators

## Best Practices Implemented

### Code Organization
- **Single Responsibility**: Each component/hook has one clear purpose
- **Directory Structure**: Logical grouping by functionality
- **Export Strategy**: Clean imports through index files

### TypeScript
- **Strict typing**: All props and state properly typed
- **Interface definitions**: Clear contracts between components
- **Ref typing**: Proper handling of nullable refs

### Performance
- **Memoization**: Expensive computations cached
- **Event delegation**: Efficient D3 event handling
- **Conditional rendering**: Avoid unnecessary re-renders

### Error Handling
- **Null checks**: Safe ref access
- **Fallback UI**: Graceful degradation
- **Boundary conditions**: Handles edge cases

## Usage Examples

### Basic Usage
```tsx
import InteractiveTimeline from '@/components/timeline/InteractiveTimeline';

<InteractiveTimeline events={timelineEvents} />
```

### Extending Components
```tsx
// Add new UI component
import { TimelineCustomComponent } from './ui';

// Add new hook
import { useCustomTimelineFeature } from '@/hooks/timeline';
```

## Future Enhancements

### Potential Additions
1. **Virtual scrolling** for very large datasets
2. **Export functionality** (PDF, image, data)
3. **Collaborative features** (comments, annotations)
4. **Advanced animations** and transitions
5. **Plugin system** for custom event types

### Testing Strategy
1. **Unit tests** for individual components
2. **Integration tests** for hook interactions
3. **E2E tests** for user workflows
4. **Performance tests** for large datasets

## Migration Notes

The refactoring maintains full backward compatibility while providing:
- Improved maintainability through modular architecture
- Better performance through optimized hooks
- Enhanced accessibility through keyboard navigation
- Cleaner codebase with separation of concerns

No changes are required for existing usage of the InteractiveTimeline component.

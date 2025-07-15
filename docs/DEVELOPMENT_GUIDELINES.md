
# Development Guidelines for AI-Assisted Development

## Overview

This document outlines the essential guidelines for AI-assisted development of the Sanatan Timeline project. These guidelines ensure consistency, maintainability, and professional code quality throughout the development process.

## Design Consistency

### Academic Theme Standards

**Strictly adhere to the existing academic theme:**

- **Typography**: 
  - Headings: `Playfair Display, serif` (implemented via inline styles)
  - Content: `Source Serif Pro, serif` (for academic feel)
  - UI Elements: `Inter, sans-serif` (default font)

- **Color Palette**: Only use these Tailwind classes:
  - Primary: `amber-*` (amber-50, amber-200, amber-600, amber-800, etc.)
  - Secondary: `orange-*` (for accents and highlights)
  - Neutral: `stone-*` (for text and subtle elements)
  - **Avoid**: `red-*`, `blue-*`, `gray-*` classes

- **Global CSS Classes**: Always reuse these classes from `globals.css`:
  ```css
  .academic-bg          /* Page backgrounds */
  .academic-card        /* Card components */
  .btn-academic         /* Primary buttons */
  .btn-secondary        /* Secondary buttons */
  .content-section      /* Content containers */
  .academic-accent      /* Accent highlights */
  .serif-text           /* Source Serif Pro text */
  ```

### Typography Implementation Examples

```tsx
// Page titles and main headings
<h1 className="text-4xl font-bold text-stone-900 mb-4" 
    style={{ fontFamily: 'Playfair Display, serif' }}>
  Main Heading
</h1>

// Section headings
<h2 className="text-2xl font-bold text-stone-900 mb-6" 
    style={{ fontFamily: 'Playfair Display, serif' }}>
  Section Heading
</h2>

// Academic content text
<p className="text-stone-700 leading-relaxed serif-text">
  Body content with academic styling
</p>

// UI elements (buttons, navigation)
<button className="btn-academic">
  Primary Action
</button>
```

### Component Styling Standards

```tsx
// Academic cards - Use throughout the application
<div className="academic-card p-6">
  <h3 style={{ fontFamily: 'Playfair Display, serif' }}>Card Title</h3>
  <p className="serif-text">Card content</p>
</div>

// Page layouts
<div className="min-h-screen academic-bg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <section className="content-section">
      <!-- Content here -->
    </section>
  </div>
</div>
```

## Modular Architecture

### Component Organization

- **Single Responsibility**: Each component should have one clear purpose
- **Reusability**: Design components to be reusable across different contexts
- **Separation of Concerns**: Keep UI, logic, and data separate

### File Structure Standards

```
src/components/feature-name/
├── index.ts              # Export barrel
├── FeatureName.tsx       # Main component
├── FeatureNameCard.tsx   # Sub-components
├── FeatureNameForm.tsx   # Form components
└── ui/                   # Feature-specific UI
    ├── FeatureModal.tsx
    └── FeatureButton.tsx
```

### Logic Extraction

- **Avoid large logic blocks** in components
- **Extract business logic** into custom hooks
- **Use utility functions** for data transformations
- **Keep components focused** on rendering and user interaction

## TypeScript Best Practices

### Strict Typing Requirements

```tsx
// Define interfaces for component props
interface ComponentProps {
  title: string;
  data: TimelineEvent[];
  onSelect: (event: TimelineEvent) => void;
  isLoading?: boolean;
}

// Use strict function signatures
const Component: React.FC<ComponentProps> = ({ 
  title, 
  data, 
  onSelect, 
  isLoading = false 
}) => {
  // Component implementation
};
```

### Shared Types Organization

- **Location**: Place all shared types in `/src/types/` directory
- **Naming**: Use descriptive, PascalCase names
- **Export**: Use barrel exports from `index.ts` files
- **Documentation**: Add JSDoc comments for complex types

```tsx
// src/types/timeline.ts
export interface TimelineEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  category: EventCategory;
  importance: ImportanceLevel;
  sources: string[];
  location?: LocationData;
}

// src/types/index.ts
export * from './timeline';
export * from './maps';
export * from './ui';
```

## Custom Hooks

### Hook Organization

- **Location**: Place all custom hooks in `/src/hooks/` directory
- **Naming**: Use `use` prefix followed by descriptive name
- **Purpose**: Extract reusable logic, state management, and side effects

### Hook Categories

```tsx
// Data management hooks
const useTimelineData = (filters: FilterOptions) => {
  // Data fetching and transformation logic
};

// UI state hooks
const useTimelineControls = () => {
  // UI state and control logic
};

// Side effect hooks
const useScrollToDetails = (selectedEvent: TimelineEvent | null) => {
  // Side effect management
};
```

### Hook Structure Template

```tsx
// src/hooks/useFeatureName.ts
import { useState, useEffect, useCallback } from 'react';

export const useFeatureName = (options: FeatureOptions) => {
  const [state, setState] = useState<FeatureState>(initialState);
  
  const handleAction = useCallback((params: ActionParams) => {
    // Action logic
  }, [dependencies]);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return {
    state,
    actions: {
      handleAction,
    },
  };
};
```

## Performance & Readability

### Performance Optimization

- **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` appropriately
- **Code Splitting**: Implement dynamic imports for large components
- **Virtualization**: Consider for large data sets (timeline events, maps)
- **Bundle Analysis**: Monitor bundle size and optimize imports

### Code Readability Standards

```tsx
// Clear component structure
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // 1. Hooks at the top
  const [state, setState] = useState(initialState);
  const { data, loading } = useCustomHook();
  
  // 2. Event handlers
  const handleClick = useCallback(() => {
    // Handler logic
  }, [dependencies]);
  
  // 3. Conditional rendering helpers
  if (loading) return <LoadingSpinner />;
  
  // 4. Main render
  return (
    <div className="academic-card">
      {/* Clear, semantic JSX */}
    </div>
  );
};
```

### Comments and Documentation

- **Component Purpose**: Add JSDoc comments for complex components
- **Complex Logic**: Explain non-obvious logic with inline comments
- **Props Documentation**: Document prop interfaces thoroughly
- **Hook Documentation**: Explain hook usage and return values

## Accessibility & Responsiveness

### WCAG Standards

- **Semantic HTML**: Use proper HTML elements and ARIA attributes
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Screen Reader Support**: Add appropriate labels and descriptions
- **Color Contrast**: Maintain proper contrast ratios (academic theme provides this)

### Responsive Design

```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>

// Responsive text sizing
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
```

### Accessibility Implementation

```tsx
// Proper ARIA attributes
<button 
  aria-label="Select timeline event"
  aria-expanded={isExpanded}
  onClick={handleClick}
  className="btn-academic"
>
  {title}
</button>

// Keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    handleClick();
  }
};
```

## Scalability Considerations

### Future-Proof Design

- **Extensible Interfaces**: Design types that can accommodate new features
- **Flexible Components**: Build components that can adapt to different data structures
- **Modular Architecture**: Create systems that can grow without major refactoring

### Data Structure Flexibility

```tsx
// Extensible interfaces
interface TimelineEvent {
  id: string;
  title: string;
  // Core fields
  year: number;
  description: string;
  
  // Optional extensible fields
  metadata?: Record<string, any>;
  customFields?: CustomField[];
  relatedEvents?: string[];
}
```

### Component Extensibility

```tsx
// Flexible component design
interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'minimal';
  actions?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  variant = 'default',
  actions,
  className 
}) => {
  const baseClasses = 'academic-card';
  const variantClasses = {
    default: 'p-6',
    highlighted: 'p-6 border-amber-400 bg-amber-50',
    minimal: 'p-4 border-stone-200'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <h3 style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
      {children}
      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
};
```

## Code Quality Standards

### Component Size Limits

- **Maximum 200 lines** per component
- **Extract sub-components** when components grow too large
- **Use custom hooks** to manage complex state logic

### Import Organization

```tsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party imports
import { ChevronDown, Calendar } from 'lucide-react';

// 3. Internal imports - absolute paths
import { TimelineEvent } from '@/types/timeline';
import { useTimelineControls } from '@/hooks/timeline';
import { LoadingSpinner } from '@/components/ui';

// 4. Relative imports
import { TimelineCard } from './TimelineCard';
import { TimelineFilters } from './TimelineFilters';
```

### Error Handling

```tsx
// Graceful error handling
const Component: React.FC<Props> = ({ data }) => {
  const [error, setError] = useState<string | null>(null);
  
  if (error) {
    return (
      <div className="academic-card p-6 border-red-200 bg-red-50">
        <h3 className="text-red-800 font-semibold">Error</h3>
        <p className="text-red-600 serif-text">{error}</p>
      </div>
    );
  }
  
  return (
    // Component content
  );
};
```

## Testing Considerations

### Testing Strategy

- **Component Testing**: Test component rendering and user interactions
- **Hook Testing**: Test custom hooks in isolation
- **Integration Testing**: Test feature flows and data integration
- **Accessibility Testing**: Verify WCAG compliance

### Test Structure

```tsx
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  const mockProps = {
    title: 'Test Title',
    data: mockData,
    onSelect: jest.fn(),
  };
  
  it('renders with academic styling', () => {
    render(<Component {...mockProps} />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveStyle('font-family: Playfair Display, serif');
  });
  
  it('handles user interactions', () => {
    render(<Component {...mockProps} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockProps.onSelect).toHaveBeenCalled();
  });
});
```

## Deployment & Environment

### Environment Configuration

- **Development**: Use Next.js development server with hot reloading
- **Production**: Optimize for Replit deployment
- **Environment Variables**: Use Replit secrets for sensitive data
- **Port Configuration**: Use `0.0.0.0:3000` for accessibility

### Deployment Standards

- **Build Optimization**: Ensure efficient bundle sizes
- **Performance Metrics**: Monitor Core Web Vitals
- **Error Monitoring**: Implement proper error tracking
- **Analytics**: Track user interactions for insights

## Summary

These guidelines ensure that AI-assisted development maintains the high standards of the Sanatan Timeline project. By following these practices, we create maintainable, scalable, and professional code that honors the academic theme and serves users effectively.

Remember: **Consistency, Quality, and User Experience** are the core principles that guide all development decisions.

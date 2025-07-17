
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

## Dark/Light Mode Compatibility

### Core Principles

**All new features MUST support both light and dark modes seamlessly:**

1. **Never use absolute colors** - Always use theme-aware classes
2. **Test in both modes** - Verify functionality and aesthetics in both themes
3. **Consistent contrast ratios** - Ensure accessibility in both modes
4. **Smooth transitions** - All theme changes should be animated

### Theme Context Usage

**Always use the enhanced ThemeContext for theme-aware components:**

```tsx
import { useTheme } from '@/contexts/ThemeContext';

const Component = () => {
  const { theme, isLight, isDark, getThemeClass, getThemeStyle } = useTheme();
  
  return (
    <div className={getThemeClass(
      'bg-white text-stone-900',      // Light mode
      'bg-gray-900 text-gray-100'     // Dark mode
    )}>
      <h1 style={{ 
        color: getThemeStyle('#111827', '#f3f4f6') 
      }}>
        Theme-aware heading
      </h1>
    </div>
  );
};
```

### Theme-Aware Utility Classes

**Use these pre-built utility classes for consistent theming:**

```css
/* Background Classes */
.theme-bg-primary       /* Main backgrounds */
.theme-bg-secondary     /* Secondary backgrounds */
.theme-bg-card          /* Card backgrounds */
.academic-bg-gradient   /* Academic gradient backgrounds */

/* Text Classes */
.theme-text-primary     /* Primary text */
.theme-text-secondary   /* Secondary text */
.theme-text-muted       /* Muted text */
.academic-text-primary  /* Academic primary text with dark mode gradient */
.academic-text-secondary /* Academic secondary text */

/* Border Classes */
.theme-border           /* Standard borders */
.theme-border-hover     /* Hover border effects */
.academic-border        /* Academic theme borders */

/* Shadow Classes */
.theme-shadow           /* Standard shadows */
.theme-shadow-hover     /* Hover shadow effects */

/* Button Classes */
.academic-button-primary   /* Primary academic buttons */
.academic-button-secondary /* Secondary academic buttons */

/* Focus States */
.theme-focus            /* Accessible focus states */
```

### Implementation Guidelines

#### 1. Component Structure for Theme Compatibility

```tsx
// ✅ CORRECT - Theme-aware component
const FeatureComponent: React.FC<Props> = ({ data }) => {
  const { getThemeClass } = useTheme();
  
  return (
    <div className="academic-card theme-shadow">
      <h2 className="academic-text-primary serif-text">
        {data.title}
      </h2>
      <p className="theme-text-secondary serif-text">
        {data.description}
      </p>
      <button className="academic-button-primary theme-focus">
        Action
      </button>
    </div>
  );
};

// ❌ INCORRECT - Hard-coded colors
const BadComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white text-black border-gray-300">
      <h2 className="text-gray-900">{data.title}</h2>
      <p className="text-gray-600">{data.description}</p>
      <button className="bg-blue-500 text-white">Action</button>
    </div>
  );
};
```

#### 2. CSS Custom Properties for Advanced Theming

**For complex components, use CSS custom properties:**

```css
.advanced-component {
  --bg-primary: theme('colors.white');
  --text-primary: theme('colors.stone.900');
  --border-color: theme('colors.orange.200');
  
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.dark .advanced-component {
  --bg-primary: theme('colors.gray.900');
  --text-primary: theme('colors.gray.100');
  --border-color: theme('colors.amber.600');
}
```

#### 3. Dynamic Styling with Theme Context

```tsx
const DynamicComponent: React.FC = () => {
  const { theme, getThemeStyle } = useTheme();
  
  const dynamicStyles = {
    background: getThemeStyle(
      'linear-gradient(135deg, #fff7ed, #fed7aa)',  // Light
      'linear-gradient(145deg, #1e293b, #334155)'   // Dark
    ),
    boxShadow: getThemeStyle(
      '0 4px 6px rgba(0, 0, 0, 0.1)',              // Light
      '0 8px 16px rgba(0, 0, 0, 0.4)'              // Dark
    )
  };
  
  return (
    <div style={dynamicStyles} className="theme-border rounded-lg p-6">
      Content with dynamic theming
    </div>
  );
};
```

### Testing Requirements

**Every new feature must pass these theme compatibility tests:**

1. **Visual Testing**: Component looks good in both light and dark modes
2. **Contrast Testing**: Text maintains proper contrast ratios (WCAG AA)
3. **Transition Testing**: Theme switching is smooth without layout shifts
4. **State Persistence**: Theme preference is saved and restored correctly
5. **Accessibility Testing**: Focus states work in both themes

### Common Pitfalls to Avoid

#### ❌ Don't Do This:
```tsx
// Hard-coded colors
<div className="bg-white text-black">

// Theme-unaware conditionals
<div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>

// Missing dark mode variants
<button className="bg-blue-500 text-white hover:bg-blue-600">

// Inconsistent color schemes
<div className="bg-red-100 border-green-500 text-purple-900">
```

#### ✅ Do This Instead:
```tsx
// Theme-aware utility classes
<div className="academic-bg-gradient theme-text-primary">

// Context-based theming
<div className={getThemeClass('bg-white', 'bg-gray-900')}>

// Complete theme variants
<button className="academic-button-primary theme-focus">

// Consistent academic color scheme
<div className="academic-card academic-border theme-shadow">
```

### New Feature Checklist

**Before submitting any new feature, ensure:**

- [ ] Component works in both light and dark modes
- [ ] Uses academic color palette (amber/orange/stone)
- [ ] Implements proper focus states with `.theme-focus`
- [ ] Uses theme-aware utility classes or ThemeContext
- [ ] Maintains consistent typography (Playfair Display/Source Serif Pro)
- [ ] Includes hover and interaction states for both themes
- [ ] Tested with theme switching (no layout shifts or visual glitches)
- [ ] Follows accessibility guidelines (contrast, keyboard navigation)
- [ ] Uses existing `.academic-*` classes where applicable

### Migration Guide for Existing Components

**To make existing components theme-compatible:**

1. **Replace hard-coded colors** with theme utility classes
2. **Add dark mode variants** using Tailwind's `dark:` prefix
3. **Use ThemeContext** for dynamic styling needs
4. **Test thoroughly** in both light and dark modes
5. **Update any inline styles** to be theme-aware

Example migration:
```tsx
// Before
<div className="bg-white border-gray-300 text-gray-900">

// After  
<div className="academic-card theme-text-primary">
```

## Academic Theme Integration

### Dark Mode Academic Design Philosophy

**The dark mode maintains the scholarly, professional aesthetic while providing:**
- **Enhanced readability** during extended reading sessions
- **Reduced eye strain** for late-night research
- **Premium academic feel** with gradient text effects
- **Consistent brand identity** across both themes

### Academic Dark Mode Specifications

#### Typography in Dark Mode
```tsx
// Headings get gradient treatment in dark mode
<h1 className="academic-text-primary" 
    style={{ fontFamily: 'Playfair Display, serif' }}>
  Gradient Academic Heading
</h1>

// Body text maintains readability
<p className="academic-text-secondary serif-text">
  Academic content with proper contrast
</p>
```

#### Card Design in Dark Mode
```css
.academic-card {
  /* Light mode: Clean white cards */
  background: #ffffff;
  border: 1px solid #e5e7eb;
  
  /* Dark mode: Sophisticated gradient cards */
  .dark & {
    background: linear-gradient(145deg, #1e293b 0%, #1a2332 100%);
    border: 1px solid rgba(245, 158, 11, 0.15);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
}
```

#### Button Consistency Across Themes
```tsx
// Primary academic buttons
<button className="academic-button-primary theme-focus">
  {/* Light: Orange-600, Dark: Amber-600 */}
  Primary Action
</button>

// Secondary academic buttons  
<button className="academic-button-secondary theme-focus">
  {/* Maintains border and hover states in both themes */}
  Secondary Action
</button>
```

### Theme-Specific Enhancements

#### Dark Mode Special Effects
- **Gradient text** for headings creates premium feel
- **Subtle inset shadows** on cards for depth
- **Warm amber accent colors** maintain academic warmth
- **Enhanced box shadows** for better visual hierarchy

#### Light Mode Clarity
- **High contrast** for professional readability
- **Clean white backgrounds** for traditional academic feel
- **Subtle orange accents** for warmth and personality
- **Sharp typography** for scholarly authority

### Implementation Best Practices

#### Theme-Aware Color Selection
```tsx
// Academic color palette mapping
const academicColors = {
  light: {
    primary: '#ea580c',      // orange-600
    secondary: '#fed7aa',    // orange-200  
    text: '#1c2937',         // stone-900
    textSecondary: '#374151', // stone-700
    background: '#ffffff',
    cardBg: '#ffffff',
    border: '#d1d5db'
  },
  dark: {
    primary: '#f59e0b',      // amber-500
    secondary: '#fbbf24',    // amber-400
    text: '#f3f4f6',         // gray-100
    textSecondary: '#e5e7eb', // gray-200  
    background: '#0f172a',   // slate-900
    cardBg: 'linear-gradient(145deg, #1e293b, #1a2332)',
    border: 'rgba(245, 158, 11, 0.15)'
  }
};
```

#### Responsive Academic Design
```tsx
const AcademicComponent: React.FC = () => {
  return (
    <div className="academic-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="academic-card p-6 lg:p-8">
          <h1 className="academic-text-primary text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Responsive Academic Heading
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Theme-aware responsive grid */}
          </div>
        </section>
      </div>
    </div>
  );
};
```

### Quality Assurance for Academic Theming

#### Theme Testing Checklist
- [ ] **Contrast ratios** meet WCAG AA standards in both themes
- [ ] **Academic typography** renders correctly (serif fonts load)
- [ ] **Card shadows and borders** provide proper visual hierarchy  
- [ ] **Button states** (hover, focus, active) work in both themes
- [ ] **Gradient text effects** in dark mode display properly
- [ ] **Navigation elements** maintain academic professional look
- [ ] **Form elements** follow academic styling conventions
- [ ] **Loading states** and **animations** respect theme colors

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

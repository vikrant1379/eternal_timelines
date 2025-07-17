# 🕉️ Sanatan Timeline

A comprehensive digital platform dedicated to preserving and sharing the rich history, philosophy, and cultural heritage of Indian civilization through an interactive timeline spanning thousands of years. Built with a professional, academic design inspired by scholarly institutions like the World History Encyclopedia.

## ✨ Features

### 🕰️ Interactive Timeline
- **Horizontal scrolling timeline** with zoom and pan controls
- **Smart filtering** by category, year range, importance, and search
- **Event details** with rich information and sources
- **D3.js powered** for smooth animations and interactions
- **Academic styling** with professional typography and color scheme
- **Modular architecture** with separated concerns (UI, controls, core visualization)
- **Custom React hooks** for timeline logic and state management
- **Responsive design** optimized for all device sizes
- **Keyboard navigation** for accessibility compliance

### 📚 Knowledge Hub
- **Sacred Scriptures** - Explore Vedas, Upanishads, Bhagavad Gita
- **Philosophical Concepts** - Dharma, Karma, Moksha, and more
- **Spiritual Teachings** - From ancient sages to modern masters
- **Academic presentation** with scholarly typography and layout
- **Organized sections** for easy navigation and learning

### 🗺️ Geographic Insights
- **Location-based events** with coordinates
- **Regional analysis** of historical events
- **Interactive maps** (coming soon with Leaflet)
- **Academic cartographic styling** consistent with overall theme

### 👥 Community Contributions
- **Add new events** to the timeline
- **Submit articles** and fact checks
- **Quality guidelines** for accurate information
- **Professional submission forms** with academic styling
- **Community guidelines** for maintaining scholarly standards

## 🚀 Getting Started

### Prerequisites
- Node.js v22.17.0 (specified in `.nvmrc`)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eternal_threads
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with academic hero section
│   ├── layout.tsx         # Root layout with font imports
│   ├── globals.css        # Global styles with academic theme classes
│   ├── timeline/          # Interactive timeline with D3.js
│   │   └── page.tsx       # Timeline page with filters & visualization
│   ├── knowledge/         # Knowledge hub with scripture sections
│   │   └── page.tsx       # Academic-styled knowledge content
│   ├── maps/             # Geographic insights & regional analysis
│   │   └── page.tsx       # Map-based historical events
│   ├── contribute/       # Community contribution portal
│   │   └── page.tsx       # Submission forms & guidelines
│   └── about/            # About page with team & mission
│       └── page.tsx       # Academic-styled about content
├── components/            # Reusable UI components
│   ├── layout/           # Layout components
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   └── Navbar.tsx    # Academic-themed navigation
│   ├── timeline/         # Timeline-specific components
│   │   ├── InteractiveTimeline.tsx  # Main timeline component
│   │   ├── TimelineWrapper.tsx      # Dynamic import wrapper
│   │   ├── TimelineFilters.tsx      # Advanced filtering system
│   │   ├── TimelineEvent.tsx        # Individual event cards
│   │   ├── controls/     # Timeline control components
│   │   ├── core/         # D3.js visualization core
│   │   └── ui/           # Timeline UI components
│   │       ├── TimelineCard.tsx           # Event card wrapper
│   │       ├── TimelineInstructions.tsx   # Usage instructions
│   │       ├── TimelineStatus.tsx         # Status & controls
│   │       ├── TimelineEventDetails.tsx   # Detailed event view
│   │       └── TimelineEventsGrid.tsx     # Grid view layout
│   ├── maps/             # Map-related components (future)
│   └── ui/               # Shared UI components
│       └── LoadingSpinner.tsx  # Loading indicator
├── data/                 # Static data and content
│   └── timeline-data.ts  # Historical events dataset
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── utils/            # Specialized utility modules
├── types/                # TypeScript type definitions
│   └── timeline.ts       # Timeline-specific types
├── hooks/                # Custom React hooks (timeline logic)
└── assets/               # Images and static assets
    └── images/           # Image resources
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom academic theme
- **Typography**: Google Fonts (Playfair Display, Inter, Source Serif Pro)
- **Visualization**: D3.js for interactive timeline
- **Icons**: Lucide React
- **State Management**: React hooks with custom timeline hooks
- **Design System**: Academic theme with amber/stone/orange color palette
- **Deployment**: Ready for Vercel/Netlify

## 📊 Sample Data

The project includes 20+ historical events spanning from 2500 BCE to 1950 CE:

- **Ancient Period**: Indus Valley, Vedas, Upanishads
- **Classical Era**: Buddha, Mahavira, Maurya Empire
- **Medieval Period**: Gupta Empire, Islamic invasions, Delhi Sultanate
- **Modern Era**: British rule, Independence, Constitution

### Categories
- 🧘‍♂️ Philosophy
- 🙏 Saints
- 👑 Rulers
- ⚔️ Invasions
- 📖 Scriptures
- 🏯 Architecture
- 🔬 Science
- 🎭 Culture
- 🛡️ Wars
- ⚖️ Reforms

## 🎨 Design System

### Academic Theme
- **Inspiration**: World History Encyclopedia design principles
- **Color Palette**: Professional amber/orange/stone earth tones
- **Typography**: 
  - **Headings**: Playfair Display (serif) for academic elegance
  - **Body Text**: Inter (sans-serif) for readability
  - **Content**: Source Serif Pro (serif) for scholarly appearance
- **Components**: Unified `.academic-card`, `.btn-academic`, `.btn-secondary` classes
- **Background**: Consistent `.academic-bg` with subtle gradients
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant with proper contrast ratios

### Design Consistency Guidelines
- All headings use `Playfair Display` with inline font styles
- All content text uses `Source Serif Pro` for academic feel
- Color scheme: `amber-*`, `orange-*`, `stone-*` Tailwind classes
- Cards use `.academic-card` class for consistent styling
- Buttons use `.btn-academic` (primary) or `.btn-secondary` classes
- Backgrounds use `.academic-bg` or `.content-section` classes

## 🎓 Academic Theme Implementation

### Design Philosophy
The Sanatan Timeline follows a scholarly, academic design approach inspired by prestigious educational institutions and research platforms like the World History Encyclopedia. This creates trust, credibility, and a sense of academic rigor appropriate for historical and cultural content.

### Key Design Elements
- **Professional Color Palette**: Warm earth tones (amber, orange, stone) that reflect Indian heritage
- **Academic Typography**: Serif fonts for headings and content to convey scholarly authority
- **Clean Card Layouts**: Organized information presentation with subtle shadows and borders
- **Consistent Spacing**: Generous whitespace and consistent margins for readability
- **Subtle Animations**: Professional hover effects and transitions

### Global CSS Classes
Located in `src/app/globals.css`, these classes ensure consistency:

```css
/* Core academic theme classes */
.academic-bg          /* Subtle gradient background for pages */
.academic-card        /* Professional card styling with shadow */
.btn-academic         /* Primary button with amber gradient */
.btn-secondary        /* Secondary button with subtle styling */
.content-section      /* Structured content area styling */
.academic-accent      /* Accent color gradient for highlights */

/* Utility classes */
.amber-25            /* Very light amber background */
.line-clamp-*        /* Text truncation utilities */
```

### Typography Guidelines
```tsx
// Page Titles & Main Headings
<h1 style={{ fontFamily: 'Playfair Display, serif' }} 
    className="text-4xl font-bold text-stone-900">
  Main Heading
</h1>

// Section Headings
<h2 style={{ fontFamily: 'Playfair Display, serif' }} 
    className="text-2xl font-bold text-stone-900">
  Section Heading
</h2>

// Academic Content
<p style={{ fontFamily: 'Source Serif Pro, serif' }} 
   className="text-stone-700 leading-relaxed">
  Body content with academic feel
</p>

// UI Elements (buttons, navigation)
<button className="btn-academic font-sans">
  UI Button
</button>
```

### Maintaining Theme Consistency

#### When Adding New Components:
1. **Always use academic color palette**: amber-*, orange-*, stone-*
2. **Apply proper typography**: Playfair Display for headings, Source Serif Pro for content
3. **Use existing CSS classes**: .academic-card, .btn-academic, etc.
4. **Follow spacing patterns**: Consistent padding, margins, and gap sizes
5. **Maintain accessibility**: Proper contrast ratios and semantic HTML

#### Color Usage Patterns:
- **Backgrounds**: `academic-bg`, `amber-25`, `stone-25`
- **Text**: `stone-900` (headings), `stone-700` (body), `amber-800` (highlights)
- **Borders**: `amber-200`, `stone-200`, `orange-200`
- **Buttons**: Use `.btn-academic` and `.btn-secondary` classes
- **Cards**: Always use `.academic-card` class

#### Avoiding Design Drift:
- **Don't mix color palettes**: Avoid blue, red, gray colors from previous theme
- **Consistent font usage**: Don't use random fonts, stick to the three defined fonts
- **Reuse existing classes**: Don't create one-off styles, extend existing academic classes
- **Test across pages**: Ensure new components work well on all pages

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style & Consistency Guidelines

#### Typography Implementation
```tsx
// Headings - Always use Playfair Display
<h1 style={{ fontFamily: 'Playfair Display, serif' }}>Heading Text</h1>

// Content - Use Source Serif Pro for academic feel
<p style={{ fontFamily: 'Source Serif Pro, serif' }}>Content text</p>

// UI Elements - Use Inter (default) for navigation/buttons
<span className="font-sans">UI Element</span>
```

#### Component Styling Classes
```tsx
// Academic cards - Use throughout the app
<div className="academic-card">Card Content</div>

// Primary buttons - Academic theme
<button className="btn-academic">Primary Action</button>

// Secondary buttons - Subtle academic styling
<button className="btn-secondary">Secondary Action</button>

// Page backgrounds - Consistent academic background
<div className="academic-bg">Page Content</div>

// Content sections - For structured content areas
<section className="content-section">Section Content</section>
```

#### Color Palette Usage
- **Primary**: `amber-*` classes (amber-50, amber-500, amber-800, etc.)
- **Secondary**: `orange-*` classes for accents
- **Neutral**: `stone-*` classes for text and subtle elements
- **Avoid**: Previous `red-*`, `blue-*`, `gray-*` classes (use stone instead)

### Adding New Events

1. Edit `src/data/timeline-data.ts`
2. Add new event following the `TimelineEvent` interface
3. Include proper sources and location data
4. Test the timeline to ensure proper display

### Adding New Pages

1. Create page in appropriate `src/app/` directory
2. Use academic theme classes and typography
3. Follow existing component structure
4. Maintain consistency with design system

### Component Development

When creating new components:
- Use academic theme classes from `globals.css`
- Apply proper typography (Playfair Display for headings, Source Serif Pro for content)
- Follow amber/orange/stone color palette
- Ensure responsive design
- Add proper TypeScript types

### Customization

- **Theme Colors**: Modify academic color variables in `src/app/globals.css`
- **Typography**: Update font imports in `src/app/layout.tsx`
- **Data**: Update timeline data in `src/data/timeline-data.ts`
- **Components**: Extend components in `src/components/` following academic theme
- **Academic Classes**: Add new utility classes to `src/app/globals.css`

### File Structure for New Features
```
src/components/new-feature/
├── index.ts              # Export barrel
├── NewFeature.tsx        # Main component with academic styling
├── NewFeatureCard.tsx    # Card component using .academic-card
├── NewFeatureForm.tsx    # Form with academic inputs
└── ui/                   # Feature-specific UI components
    ├── NewFeatureModal.tsx
    └── NewFeatureButton.tsx
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** 
3. **Follow the academic theme guidelines** (see Design System section)
4. **Make your changes** with proper typography and styling
5. **Test on all pages** to ensure consistency
6. **Add tests if applicable**
7. **Submit a pull request** with detailed description

### Contribution Guidelines

#### Design Consistency Checklist
- [ ] Uses academic color palette (amber/orange/stone)
- [ ] Applies proper typography (Playfair Display for headings, Source Serif Pro for content)
- [ ] Uses existing CSS classes (.academic-card, .btn-academic, etc.)
- [ ] Maintains responsive design
- [ ] Follows accessibility standards
- [ ] Tests well on all existing pages

#### Code Quality Standards
- [ ] TypeScript types properly defined
- [ ] Components are properly documented
- [ ] Follows existing file structure patterns
- [ ] No console errors or warnings
- [ ] Maintains performance standards

#### Content Guidelines
- [ ] Historical accuracy with reliable sources
- [ ] Appropriate cultural sensitivity
- [ ] Scholarly tone and language
- [ ] Proper citations and references

## � Troubleshooting

### Common Issues

#### Timeline Not Loading
- Ensure D3.js is properly installed: `npm install d3`
- Check browser console for JavaScript errors
- Verify timeline data format in `src/data/timeline-data.ts`

#### Font Loading Issues
- Verify Google Fonts are loading in `src/app/layout.tsx`
- Check network connectivity for external font resources
- Clear browser cache and reload

#### Styling Inconsistencies
- Ensure all components use academic theme classes
- Check for conflicting CSS or inline styles
- Verify Tailwind classes are correctly applied

#### Performance Issues
- Timeline with many events may be slow - consider implementing virtualization
- Large images should be optimized and properly sized
- Use React DevTools to identify performance bottlenecks

### Development Environment
- **Node.js**: v22.17.0 (check with `node --version`)
- **npm**: Latest version recommended
- **Browser**: Modern browsers with ES6+ support

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ancient Scholars** - For preserving knowledge through millennia
- **Modern Researchers** - For continuing the tradition of learning
- **World History Encyclopedia** - Design inspiration for academic presentation
- **Open Source Community** - For the tools that make this possible
- **Google Fonts** - For providing beautiful typography (Playfair Display, Inter, Source Serif Pro)
- **D3.js Community** - For powerful data visualization capabilities
- **Tailwind CSS** - For utility-first styling approach

## 📚 Development Guidelines

For AI-assisted development and maintaining code quality standards, please refer to:

**[Development Guidelines](docs/DEVELOPMENT_GUIDELINES.md)** - Comprehensive guidelines for AI-assisted development including:
- Design consistency standards
- Modular architecture principles
- TypeScript best practices
- Custom hooks implementation
- Performance optimization
- Accessibility requirements
- Scalability considerations

These guidelines ensure professional code quality and maintain the academic theme throughout development.

## 📞 Contact

- **Founder**: Vikrant Chaudhary
- **Email**: cvikrant462@gmail.com
- **Website**: https://www.linkedin.com/in/vikrant1379/

---

**Om Namah Shivaya** 🙏

*Preserving the eternal threads of Indian civilization for future generations.*

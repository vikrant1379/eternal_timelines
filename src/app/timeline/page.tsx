import TimelineWrapper from '@/components/timeline/TimelineWrapper';
import { timelineData } from '@/data/timeline-data';

export default function TimelinePage() {
  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Interactive Timeline
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Source Serif Pro, serif' }}>
            Explore the rich tapestry of Indian civilization through an interactive timeline spanning thousands of years. 
            From ancient scriptures to modern reforms, discover the eternal threads that connect our past to the present.
          </p>
        </div>

        {/* Timeline Component */}
        <TimelineWrapper events={timelineData} />
      </div>
    </div>
  );
} 
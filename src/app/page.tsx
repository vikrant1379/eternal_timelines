import Link from 'next/link';
import { ArrowRight, BookOpen, Map, Clock, Users, Sparkles, Heart } from 'lucide-react';
import { timelineData } from '@/data/timeline-data';
import StatsCards from "@/components/ui/StatsCards";

export default function HomePage() {
  // Get some featured events for the homepage
  const featuredEvents = timelineData
    .filter(event => event.importance === 'critical')
    .slice(0, 6);

  const features = [
    {
      icon: Clock,
      title: 'Interactive Timeline',
      description: 'Explore thousands of years of Indian history through our interactive, zoomable timeline.',
      href: '/timeline'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Hub',
      description: 'Deep dive into scriptures, philosophy, and teachings that shaped Indian civilization.',
      href: '/knowledge'
    },
    {
      icon: Map,
      title: 'Geographic Insights',
      description: 'Visualize the spread of culture, invasions, and historical events across the subcontinent.',
      href: '/maps'
    },
    {
      icon: Users,
      title: 'Community Contributions',
      description: 'Join our community in preserving and expanding the knowledge of Indian history.',
      href: '/contribute'
    }
  ];

  return (
    <div className="min-h-screen academic-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 dark:text-transparent mb-8 hero-title" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sanatan Timeline
            </h1>
            <p className="text-xl lg:text-2xl text-stone-700 dark:text-cbd5e1 mb-12 max-w-4xl mx-auto serif-text hero-description">
              Preserving the eternal threads of Indian civilization through an interactive journey 
              across time. From the ancient wisdom of the Vedas to the modern era of 
              independence, discover the rich tapestry that makes India's heritage truly timeless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/timeline"
                className="btn-academic"
              >
                Explore Timeline
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCards 
            stats={[
              { number: "65", suffix: "+", label: "Historical Events" },
              { number: "5000", suffix: "+", label: "Years of History" },
              { number: "10", label: "Categories" },
              { number: "∞", label: "Stories to Discover" }
            ]}
          />
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section className="py-20 academic-bg pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Explore Indian Civilization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-text">
              Dive deep into the rich heritage of India through our comprehensive platform designed to educate, 
              inspire, and preserve the knowledge of our ancestors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="academic-card p-6 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{feature.title}</h3>
                <p className="text-gray-600 serif-text">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Featured Historical Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-text">
              Discover some of the most significant moments that shaped Indian civilization and continue to 
              influence our world today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="academic-card p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{event.category === 'saints' ? '🙏' : 
                    event.category === 'rulers' ? '👑' : 
                    event.category === 'scriptures' ? '📖' : 
                    event.category === 'philosophy' ? '🧘‍♂️' : '📌'}</span>
                  <span className="text-sm font-semibold text-amber-700 serif-text">
                    {event.year < 0 ? `${Math.abs(event.year)} BCE` : `${event.year} CE`}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{event.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 serif-text">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/timeline"
              className="btn-academic"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 academic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-section bg-gradient-to-br from-amber-600 to-orange-700 text-white text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-amber-200" />
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Our Mission
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed serif-text">
              To preserve and share the timeless wisdom, rich history, and cultural heritage of India. 
              We believe that understanding our past is essential for building a better future, and we&apos;re 
              committed to making this knowledge accessible to everyone, everywhere.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Learn About Our Mission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
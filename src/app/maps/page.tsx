'use client';

import { useState, useEffect } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { timelineData } from '@/data/timeline-data';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { LeafletMap, type MapDataPoint } from '@/components/maps';

export default function MapsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  // Filter events with locations
  const eventsWithLocations = timelineData.filter(event => event.location);

  // Convert timeline data to map data points
  const mapDataPoints: MapDataPoint[] = eventsWithLocations.map(event => ({
    id: event.id,
    lat: event.location!.lat,
    lng: event.location!.lng,
    name: event.title,
    value: event.year, // Use absolute year as the value for visualization
    description: event.description,
    category: event.category,
    year: event.year
  }));

  // Get filtered data points based on selected category
  const filteredDataPoints = selectedCategory === 'all' 
    ? mapDataPoints 
    : mapDataPoints.filter(point => point.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Events', icon: '🌍', count: eventsWithLocations.length },
    { id: 'rulers', name: 'Rulers', icon: '👑', count: eventsWithLocations.filter(e => e.category === 'rulers').length },
    { id: 'saints', name: 'Saints', icon: '🙏', count: eventsWithLocations.filter(e => e.category === 'saints').length },
    { id: 'architecture', name: 'Architecture', icon: '🏯', count: eventsWithLocations.filter(e => e.category === 'architecture').length },
    { id: 'invasions', name: 'Invasions', icon: '⚔️', count: eventsWithLocations.filter(e => e.category === 'invasions').length },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? eventsWithLocations 
    : eventsWithLocations.filter(event => event.category === selectedCategory);

  const regions = [
    {
      name: 'North India',
      description: 'Heart of ancient empires and cultural centers',
      events: eventsWithLocations.filter(e => 
        e.location && e.location.lat > 20 && e.location.lat < 35 && e.location.lng > 70 && e.location.lng < 85
      ).length,
      color: 'from-orange-400 to-amber-600'
    },
    {
      name: 'South India',
      description: 'Land of temples and classical arts',
      events: eventsWithLocations.filter(e => 
        e.location && e.location.lat < 20 && e.location.lng > 70 && e.location.lng < 85
      ).length,
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'East India',
      description: 'Birthplace of Buddhism and cultural diversity',
      events: eventsWithLocations.filter(e => 
        e.location && e.location.lat > 20 && e.location.lat < 35 && e.location.lng > 85
      ).length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'West India',
      description: 'Gateway to trade and maritime history',
      events: eventsWithLocations.filter(e => 
        e.location && e.location.lat > 20 && e.location.lat < 35 && e.location.lng < 70
      ).length,
      color: 'from-red-500 to-orange-700'
    }
  ];

    const currentEvents = selectedCategory === 'all' ? eventsWithLocations : eventsWithLocations.filter(event => event.category === selectedCategory);

    const getCategoryIcon = (category: string): string => {
      switch (category) {
        case 'saints':
          return '🙏';
        case 'rulers':
          return '👑';
        case 'architecture':
          return '🏯';
        case 'invasions':
          return '⚔️';
        default:
          return '📌';
      }
    };

  return (
    <div className="min-h-screen academic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Geographic Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto serif-text">
            Explore the geographical spread of Indian civilization. Visualize how historical events, 
            cultural movements, and spiritual teachings spread across the subcontinent.
          </p>
        </div>

        {/* Interactive Map - Full Width */}
        <div className="mb-12">
          {/* Refined Map Header */}
          <div className="academic-card mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <div className="px-8 py-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-stone-800" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        Interactive Historical Map
                      </h2>
                      {/* Simple Tooltip */}
                      <div className="group relative">
                        <div className="w-6 h-6 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center cursor-help hover:bg-amber-200 transition-all duration-200">
                          <span className="text-xs font-bold text-amber-800">?</span>
                        </div>
                        {/* Tooltip matching timeline pills style */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                          <div className="relative w-80 p-4 rounded-lg shadow-lg bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200">
                            <div className="text-sm text-amber-800 leading-relaxed serif-text font-medium">
                              Explore the geographical spread of Indian civilization through an interactive map. Each marker represents a significant historical event, colored by time period and sized by historical importance.
                            </div>
                            {/* Small arrow pointing down */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-2 h-2 bg-gradient-to-br from-amber-100 to-orange-100 border-r border-b border-amber-200 transform rotate-45"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="flex items-center gap-3">
                  {/* Selected Category Pill */}
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-amber-800 serif-text">
                        {selectedCategory === 'all' ? 'All Events' : 
                          selectedCategory === 'rulers' ? 'Rulers' :
                          selectedCategory === 'saints' ? 'Saints' :
                          selectedCategory === 'architecture' ? 'Architecture' :
                          selectedCategory === 'invasions' ? 'Invasions' : 'Unknown'}
                      </span>
                      <span className="text-lg">
                        {selectedCategory === 'all' ? '🌍' : getCategoryIcon(selectedCategory)}
                      </span>
                    </div>
                  </div>

                  {/* Timeline Range Pill */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-stone-700 font-medium" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                        {currentEvents.length > 0 ? 
                          `${Math.min(...currentEvents.map(e => e.year))} to ${Math.max(...currentEvents.map(e => e.year))}` :
                          'No Events'
                        }
                      </span>
                      <span className="text-lg">⏳</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Interactive Map */}
          <div className="w-full">
            <LeafletMap
              dataPoints={filteredDataPoints}
              height="600px"
              colorScale={{
                min: '#FEF3C7',
                max: '#B45309'
              }}
              visualizationType="circles"
              legendTitle="Historical Timeline (Years)"
              onPointClick={(point) => {
                console.log('Selected event:', point);
              }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="content-section mb-12 rounded-[10px] p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Filter by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`academic-card p-4 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-amber-600 bg-amber-50 text-amber-800'
                    : 'hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm serif-text">{category.name}</div>
                <div className="text-xs text-gray-500 serif-text">{category.count} events</div>
              </button>
            ))}
          </div>
        </div>

        {/* Regional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region) => (
            <div
              key={region.name}
              className="academic-card p-6"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${region.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{region.name}</h3>
              <p className="text-gray-600 text-sm mb-4 serif-text">{region.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-700" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{region.events}</span>
                <span className="text-sm text-gray-500 serif-text">events</span>
              </div>
            </div>
          ))}
        </div>

        {/* Events with Locations */}
        <div className="content-section rounded-[10px] p-5">
          <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Historical Events with Locations ({filteredEvents.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="academic-card p-4 bg-gradient-to-br from-amber-50 to-orange-50"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">
                    {event.category === 'saints' ? '🙏' : 
                     event.category === 'rulers' ? '👑' : 
                     event.category === 'architecture' ? '🏯' : 
                     event.category === 'invasions' ? '⚔️' : '📌'}
                  </span>
                  <span className="text-sm font-semibold text-amber-700 serif-text">
                    {event.year < 0 ? `${Math.abs(event.year)} BCE` : `${event.year} CE`}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{event.title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 serif-text">{event.description}</p>
                <div className="flex items-center text-sm text-gray-600 serif-text">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{event.location?.name}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1 serif-text">
                  {event.location?.lat.toFixed(2)}°, {event.location?.lng.toFixed(2)}°
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="content-section bg-gradient-to-br from-amber-600 to-orange-700 text-white mt-12 rounded-[10px] p-5">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Geographic Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>{eventsWithLocations.length}</div>
              <div className="text-amber-200 serif-text">Events with Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>4</div>
              <div className="text-amber-200 serif-text">Major Regions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>5000+</div>
              <div className="text-amber-200 serif-text">Years of History</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>∞</div>
              <div className="text-amber-200 serif-text">Cultural Connections</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
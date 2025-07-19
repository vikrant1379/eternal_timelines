'use client';

import { TimelineCategory, TimelineFilter } from '@/types/timeline';
import { getCategoryIcon } from '@/lib/utils';
import { Search, Filter, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TimelineFiltersProps {
  filters: TimelineFilter;
  onFiltersChange: (filters: TimelineFilter) => void;
  totalEvents: number;
  filteredEvents: number;
}

const categories: { value: TimelineCategory; label: string }[] = [
  { value: 'philosophy', label: 'Philosophy' },
  { value: 'saints', label: 'Saints' },
  { value: 'rulers', label: 'Rulers' },
  { value: 'invasions', label: 'Invasions' },
  { value: 'scriptures', label: 'Scriptures' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'science', label: 'Science' },
  { value: 'culture', label: 'Culture' },
  { value: 'wars', label: 'Wars' },
  { value: 'reforms', label: 'Reforms' },
];

const importanceLevels = [
  { value: 'critical', label: 'Critical', color: 'bg-gradient-to-br from-amber-600 to-orange-700' },
  { value: 'high', label: 'High', color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  { value: 'medium', label: 'Medium', color: 'bg-gradient-to-br from-amber-400 to-yellow-600' },
  { value: 'low', label: 'Low', color: 'bg-gradient-to-br from-amber-300 to-orange-400' },
];

export default function TimelineFilters({ filters, onFiltersChange, totalEvents, filteredEvents }: TimelineFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fromYearInput, setFromYearInput] = useState(filters.yearRange[0].toString());
  const [toYearInput, setToYearInput] = useState(filters.yearRange[1].toString());

  // Sync local state with filter props when they change externally (e.g., "Clear all")
  useEffect(() => {
    setFromYearInput(filters.yearRange[0].toString());
    setToYearInput(filters.yearRange[1].toString());
  }, [filters.yearRange]);

  const updateFilters = (updates: Partial<TimelineFilter>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const toggleCategory = (category: TimelineCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    updateFilters({ categories: newCategories });
  };

  const toggleImportance = (importance: 'low' | 'medium' | 'high' | 'critical') => {
    const newImportance = filters.importance.includes(importance)
      ? filters.importance.filter(i => i !== importance)
      : [...filters.importance, importance];
    updateFilters({ importance: newImportance });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      yearRange: [-3000, 2000],
      importance: [],
      searchQuery: '',
    });
  };

  const hasActiveFilters = filters.categories.length > 0 || 
    filters.importance.length > 0 || 
    filters.searchQuery || 
    filters.yearRange[0] !== -3000 || 
    filters.yearRange[1] !== 2000;

  return (
    <div className="academic-card p-6 mb-6 hover:border-transparent">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 academic-accent rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
              🔍
            </div>
            <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>Filters</h3>
          </div>
          <span className="text-sm text-amber-800 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200 font-medium" style={{ fontFamily: 'Playfair Display, serif'}}>
            {filteredEvents} of {totalEvents} events
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-amber-800 hover:text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-xl transition-all duration-200 border border-amber-200 font-medium"
            >
              <X className="w-4 h-4" />
              <span style={{ fontFamily: 'Playfair Display, serif' }}>Clear all</span>
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 px-4 py-2 text-sm text-amber-800 hover:text-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-xl transition-all duration-200 border border-amber-200 font-medium"
          >
            <Filter className="w-4 h-4" />
            <span style={{ fontFamily: 'Playfair Display, serif' }}>{isExpanded ? 'Hide' : 'Show'} filters</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events..."
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
            className="w-full pl-12 pr-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gradient-to-r from-white to-amber-25 transition-all duration-200 font-medium"
            style={{ fontFamily: 'Source Serif Pro, serif' }}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Categories */}
          <div>
            <h4 className="text-base font-bold text-amber-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Categories</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => toggleCategory(category.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors font-medium ${
                    filters.categories.includes(category.value)
                      ? 'bg-amber-50 text-amber-800 border border-amber-300'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                  style={{ fontFamily: 'Source Serif Pro, serif' }}
                >
                  <span>{getCategoryIcon(category.value)}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Year Range and Importance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Year Range - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-bold text-amber-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Year Range</h4>
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2" style={{ fontFamily: 'Source Serif Pro, serif' }}>From</label>
                  <input
                    type="number"
                    value={fromYearInput}
                    onChange={(e) => {
                      setFromYearInput(e.target.value);
                      if (e.target.value === '') {
                        // Field is empty, don't update the filter yet
                        return;
                      }
                      const value = parseInt(e.target.value);
                      if (!isNaN(value)) {
                        updateFilters({ yearRange: [value, filters.yearRange[1]] });
                      }
                    }}
                    onBlur={(e) => {
                      // If field is empty on blur, set to a default value
                      if (e.target.value === '') {
                        setFromYearInput('-3000');
                        updateFilters({ yearRange: [-3000, filters.yearRange[1]] });
                      }
                    }}
                    step="1"
                    placeholder="-3000"
                    className="w-32 px-3 py-2 border border-amber-300 rounded-md text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium"
                    style={{ fontFamily: 'Source Serif Pro, serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2" style={{ fontFamily: 'Source Serif Pro, serif' }}>To</label>
                  <input
                    type="number"
                    value={toYearInput}
                    onChange={(e) => {
                      setToYearInput(e.target.value);
                      if (e.target.value === '') {
                        // Field is empty, don't update the filter yet
                        return;
                      }
                      const value = parseInt(e.target.value);
                      if (!isNaN(value)) {
                        updateFilters({ yearRange: [filters.yearRange[0], value] });
                      }
                    }}
                    onBlur={(e) => {
                      // If field is empty on blur, set to a default value
                      if (e.target.value === '') {
                        setToYearInput('2000');
                        updateFilters({ yearRange: [filters.yearRange[0], 2000] });
                      }
                    }}
                    step="1"
                    placeholder="2000"
                    className="w-32 px-3 py-2 border border-amber-300 rounded-md text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium"
                    style={{ fontFamily: 'Source Serif Pro, serif' }}
                  />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-stone-600 font-medium" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                  Enter any year (negative for BCE, positive for CE). Examples: -500 to 2000
                </p>
              </div>
            </div>

            {/* Importance - Takes up 1 column on the extreme right */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-bold text-amber-900 mb-3 text-right" style={{ fontFamily: 'Playfair Display, serif' }}>Importance</h4>
              <div className="flex flex-wrap gap-2 justify-end">
                {importanceLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => toggleImportance(level.value as 'low' | 'medium' | 'high' | 'critical')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors font-medium ${
                      filters.importance.includes(level.value as 'low' | 'medium' | 'high' | 'critical')
                        ? 'bg-amber-50 text-amber-800 border border-amber-300'
                        : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                    style={{ fontFamily: 'Source Serif Pro, serif' }}
                  >
                    <div className={`w-3 h-3 rounded-full ${level.color}`} />
                    <span>{level.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
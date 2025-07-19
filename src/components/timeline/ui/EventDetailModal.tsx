'use client';

import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import { formatYear, getCategoryColor, getCategoryIcon } from '@/lib/utils';
import { MapPin, Calendar, Tag, X, BookOpen } from 'lucide-react';

interface EventDetailModalProps {
  event: TimelineEventType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-white dark:bg-slate-800 border border-orange-200 dark:border-slate-600 rounded-xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-orange-100 to-amber-200 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-orange-200 dark:border-slate-600">
            {/* Category indicator */}
            <div className={`absolute top-4 right-16 w-16 h-16 ${getCategoryColor(event.category)} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white dark:border-slate-700 transform rotate-3`}>
              {getCategoryIcon(event.category)}
            </div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-700 dark:text-stone-400 hover:text-slate-900 dark:hover:text-stone-200 p-2 rounded-lg hover:bg-orange-200/50 dark:hover:bg-slate-800/50 transition-all duration-200"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Year badge */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-200 to-amber-300 dark:from-amber-900/50 dark:to-orange-900/50 px-4 py-2 rounded-full border border-orange-400 dark:border-amber-700">
                <Calendar className="w-5 h-5 text-orange-800 dark:text-amber-300" />
                <span className="text-xl font-bold text-orange-900 dark:text-amber-200">{formatYear(event.year)}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-stone-100 mb-4 leading-tight pr-20" style={{ fontFamily: 'Playfair Display, serif' }}>
              {event.title}
            </h2>

            {/* Location */}
            {event.location && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-200 to-amber-300 dark:from-amber-900/50 dark:to-orange-900/50 px-4 py-2 rounded-full border border-orange-400 dark:border-amber-700">
                  <MapPin className="w-5 h-5 text-orange-800 dark:text-amber-300" />
                  <span className="text-lg font-medium text-orange-900 dark:text-amber-200">{event.location.name}</span>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 overflow-y-auto max-h-[60vh] bg-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900">
            {/* Description */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-6 h-6 text-slate-700 dark:text-amber-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-stone-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Description
                </h3>
              </div>
              <div className="prose prose-orange dark:prose-invert max-w-none">
                <p className="text-slate-800 dark:text-stone-300 text-lg leading-relaxed" style={{ fontFamily: 'Source Serif Pro, serif' }}>
                  {event.description}
                </p>
              </div>
            </div>

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-6 h-6 text-slate-700 dark:text-amber-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-stone-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Tags
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-orange-200 to-amber-200 dark:from-amber-900/30 dark:to-orange-900/30 text-slate-800 dark:text-amber-200 text-sm font-medium rounded-full border border-orange-300 dark:border-amber-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-orange-300 dark:border-slate-600">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-stone-100 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Category
                </h4>
                <span className="capitalize text-slate-800 dark:text-stone-300 font-medium">
                  {event.category.replace('_', ' ')}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-stone-100 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Importance
                </h4>
                <span className={`capitalize px-3 py-1 rounded-full text-sm font-medium ${
                  event.importance === 'critical' 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' 
                    : event.importance === 'high'
                    ? 'bg-orange-200 dark:bg-amber-900/30 text-orange-900 dark:text-amber-200'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                }`}>
                  {event.importance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

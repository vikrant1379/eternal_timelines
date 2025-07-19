import { TimelineEvent as TimelineEventType } from '@/types/timeline';
import { formatYear, getCategoryColor, getCategoryIcon } from '@/lib/utils';
import { MapPin, Calendar, Tag } from 'lucide-react';

interface TimelineEventProps {
  event: TimelineEventType;
  onClick: (event: TimelineEventType) => void;
  isSelected: boolean;
}

export default function TimelineEvent({ event, onClick, isSelected }: TimelineEventProps) {
  return (
    <div
      className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-200 h-80 flex flex-col ${
        isSelected 
          ? 'border-amber-300 dark:border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 shadow-lg' 
          : 'border-amber-100 dark:border-amber-700/50 bg-gradient-to-br from-white to-amber-25 dark:from-slate-800 dark:to-slate-700 hover:border-amber-200 dark:hover:border-amber-600 hover:shadow-md'
      } backdrop-blur-sm`}
      onClick={() => onClick(event)}
    >
      {/* Category indicator with enhanced design */}
      <div className={`absolute -top-3 -left-3 w-12 h-12 ${getCategoryColor(event.category)} rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg border-2 border-white transform rotate-3 transition-transform duration-300`}>
        {getCategoryIcon(event.category)}
      </div>

      {/* Year with enhanced styling */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4 text-amber-700" />
          <span className="text-lg font-bold text-amber-800">{formatYear(event.year)}</span>
        </div>
      </div>

      {/* Title with better typography and theme-aware colors */}
      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3 leading-tight line-clamp-2 flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif' }}>{event.title}</h3>

      {/* Description with improved spacing and theme-aware colors */}
      <p className="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed line-clamp-4 flex-grow" style={{ fontFamily: 'Source Serif Pro, serif' }}>
        {event.description}
        {event.description.length > 150 && (
          <span className="text-amber-600 dark:text-amber-400 font-medium ml-2">Click to read more...</span>
        )}
      </p>

      {/* Location with enhanced design */}
      {event.location && (
        <div className="flex items-center space-x-2 mb-3 flex-shrink-0">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1 rounded-full border border-amber-200">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-medium text-amber-800">{event.location.name}</span>
          </div>
        </div>
      )}

      {/* Tags with professional styling */}
      {event.tags && event.tags.length > 0 && (
        <div className="flex items-start space-x-2 mb-3 flex-shrink-0">
          <Tag className="w-4 h-4 text-amber-700 mt-1 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 text-xs font-medium rounded-full border border-amber-200"
              >
                {tag}
              </span>
            ))}
            {event.tags.length > 3 && (
              <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-medium rounded-full border border-amber-300">
                +{event.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Importance indicator with enhanced design */}
      <div className="absolute top-3 right-3">
        <div className={`w-4 h-4 rounded-full shadow-sm border-2 border-white ${
          event.importance === 'critical' ? 'bg-gradient-to-br from-amber-600 to-orange-700' :
          event.importance === 'high' ? 'bg-gradient-to-br from-amber-500 to-orange-600' :
          event.importance === 'medium' ? 'bg-gradient-to-br from-amber-400 to-yellow-600' :
          'bg-gradient-to-br from-amber-300 to-orange-400'
        }`} />
      </div>
    </div>
  );
} 
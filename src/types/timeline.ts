export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  year: number;
  category: TimelineCategory;
  location?: {
    lat: number;
    lng: number;
    name: string;
  };
  image?: string;
  sources?: string[];
  tags?: string[];
  importance: 'low' | 'medium' | 'high' | 'critical';
}

export type TimelineCategory = 
  | 'philosophy'
  | 'saints'
  | 'rulers'
  | 'invasions'
  | 'scriptures'
  | 'architecture'
  | 'science'
  | 'culture'
  | 'wars'
  | 'reforms';

export interface TimelineFilter {
  categories: TimelineCategory[];
  yearRange: [number, number];
  importance: ('low' | 'medium' | 'high' | 'critical')[];
  searchQuery: string;
}

export interface TimelineState {
  events: TimelineEvent[];
  filters: TimelineFilter;
  selectedEvent: TimelineEvent | null;
  zoomLevel: number;
  centerYear: number;
} 
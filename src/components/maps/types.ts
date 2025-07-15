// Map component types and interfaces
export interface MapDataPoint {
  id: string;
  lat: number;
  lng: number;
  name: string;
  value: number;
  description?: string;
  category?: string;
  year?: number;
}

export interface ColorScale {
  min: string;
  max: string;
}

export interface LeafletMapProps {
  dataPoints: MapDataPoint[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  colorScale?: ColorScale;
  onPointClick?: (point: MapDataPoint) => void;
  visualizationType?: "circles" | "heatmap" | "markers";
  showLegend?: boolean;
}

export interface MarkerConfig {
  radius: number;
  fillColor: string;
  color: string;
  weight: number;
  opacity: number;
  fillOpacity: number;
  className: string;
  id: string;
}

export interface MapBounds {
  southwest: [number, number];
  northeast: [number, number];
}

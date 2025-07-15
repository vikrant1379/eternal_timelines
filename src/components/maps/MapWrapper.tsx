
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { MapDataPoint } from './LeafletMap';

// Dynamically import the LeafletMap component
const LeafletMap = dynamic(
  () => import('./LeafletMap'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />
  }
);

interface MapWrapperProps {
  dataPoints: MapDataPoint[];
  height?: string;
  center?: [number, number];
  zoom?: number;
  colorScale?: {
    min: string;
    max: string;
  };
  visualizationType?: 'circles' | 'heatmap';
  legendTitle?: string;
  onPointClick?: (point: MapDataPoint) => void;
}

export default function MapWrapper(props: MapWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return <LeafletMap {...props} />;
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import MapLegend from "./MapLegend";
import { loadLeaflet } from "./utils";
import { useMapInstance } from "./hooks/useMapInstance";
import { useMapMarkers } from "./hooks/useMapMarkers";
import { MapLoadingSpinner } from "./components/MapLoadingSpinner";
import type { LeafletMapProps, ColorScale } from "./types";

export default function LeafletMap({
  dataPoints,
  height = "400px",
  center = [22.5, 78.9629], // Better center for entire India including northern regions
  zoom = 4.5, // Increased zoom to show entire India properly
  colorScale = { min: "#FCD34D", max: "#B45309" } as ColorScale, // Changed from very light cream to visible amber
  visualizationType = "circles",
  onPointClick,
}: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  // Initialize map instance hook
  const { setupMap, cleanupMap } = useMapInstance({
    L,
    mapRef,
    mapInstanceRef,
    dataPoints,
    zoom,
  });

  // Initialize map markers hook
  const { addMarkersToMap } = useMapMarkers({
    L,
    mapInstanceRef,
    dataPoints,
    colorScale,
    visualizationType,
    zoom,
    onPointClick,
  });

  useEffect(() => {
    setIsClient(true);
    loadLeaflet().then((leaflet) => {
      if (leaflet) {
        setL(leaflet);
      }
    });
  }, []);

  useEffect(() => {
    if (!isClient || !L || !mapRef.current || !dataPoints.length) return;

    // Initialize map if it doesn't exist
    if (!mapInstanceRef.current && mapRef.current) {
      setupMap();
    }

    // Add markers to map
    addMarkersToMap();

    return cleanupMap;
  }, [
    isClient,
    L,
    mapInstanceRef,
    dataPoints,
    center,
    zoom,
    colorScale,
    onPointClick,
    visualizationType,
    setupMap,
    addMarkersToMap,
    cleanupMap,
  ]);

  if (!isClient) {
    return <MapLoadingSpinner height={height} />;
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-stone-200 shadow-lg">
      <div ref={mapRef} style={{ height, width: "100%" }} className="z-0" />

      <MapLegend
        dataPoints={dataPoints}
        colorScale={colorScale}
        position="bottom-left"
      />
    </div>
  );
}

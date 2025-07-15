import { useCallback } from 'react';
import type { MapDataPoint } from '../types';
import { MAP_CONFIG, calculateMarkerRadius } from '../utils';

interface UseMapInstanceProps {
  L: any;
  mapRef: React.RefObject<HTMLDivElement>;
  mapInstanceRef: React.MutableRefObject<any>;
  dataPoints: MapDataPoint[];
  zoom: number;
}

export const useMapInstance = ({
  L,
  mapRef,
  mapInstanceRef,
  dataPoints,
  zoom,
}: UseMapInstanceProps) => {
  
  const initializeMap = useCallback(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    
    // Check if the container already has a map instance
    if ((mapRef.current as any)._leaflet_id) {
      return;
    }

    mapInstanceRef.current = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
      minZoom: MAP_CONFIG.MIN_ZOOM,
      maxZoom: MAP_CONFIG.MAX_ZOOM,
      maxBounds: MAP_CONFIG.MAX_BOUNDS,
      maxBoundsViscosity: 1.0,
      worldCopyJump: true,
      continuousWorld: true,
    });

    // Define India's bounds and fit map
    const indiaBounds = L.latLngBounds(
      MAP_CONFIG.INDIA_BOUNDS.southwest,
      MAP_CONFIG.INDIA_BOUNDS.northeast
    );

    mapInstanceRef.current.fitBounds(indiaBounds, {
      padding: [20, 20],
      maxZoom: 5
    });

    // Add tile layer
    L.tileLayer(MAP_CONFIG.TILE_URL, {
      attribution: "",
      subdomains: "abcd",
      maxZoom: 19,
      minZoom: 3,
      noWrap: false,
      bounds: MAP_CONFIG.MAX_BOUNDS,
    }).addTo(mapInstanceRef.current);

    // Remove attribution control
    if (mapInstanceRef.current.attributionControl) {
      mapInstanceRef.current.attributionControl.remove();
    }
  }, [L, mapRef, mapInstanceRef]);

  const add3DEffects = useCallback(() => {
    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.on("dragstart", () => {
      const container = document.getElementById("leaflet-map");
      if (container) {
        container.style.transform = "perspective(1000px) rotateX(1deg) rotateY(1deg)";
        container.style.transition = "transform 0.1s ease-out";
      }
    });

    mapInstanceRef.current.on("dragend", () => {
      const container = document.getElementById("leaflet-map");
      if (container) {
        container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        container.style.transition = "transform 0.3s ease-out";
      }
    });

    mapInstanceRef.current.on("drag", (e: any) => {
      const container = document.getElementById("leaflet-map");
      if (container && e.originalEvent) {
        const movementX = e.originalEvent.movementX || 0;
        const movementY = e.originalEvent.movementY || 0;
        const rotateY = Math.max(-3, Math.min(3, movementX * 0.1));
        const rotateX = Math.max(-3, Math.min(3, -movementY * 0.1));
        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
  }, [mapInstanceRef]);

  const addZoomHandler = useCallback(() => {
    if (!mapInstanceRef.current) return;

    let zoomTimeout: NodeJS.Timeout;
    mapInstanceRef.current.on("zoomend", () => {
      clearTimeout(zoomTimeout);
      zoomTimeout = setTimeout(() => {
        const currentZoom = mapInstanceRef.current?.getZoom() || zoom;
        const zoomFactor = Math.max(0.5, Math.min(1.2, currentZoom / 10));

        mapInstanceRef.current.eachLayer((layer: any) => {
          if (layer instanceof L.CircleMarker && layer.options.id) {
            const layerId = layer.options.id;
            const point = dataPoints.find((p) => p.id === layerId);
            if (point) {
              const values = dataPoints.map((p) => p.value);
              const minVal = Math.min(...values);
              const maxVal = Math.max(...values);
              const normalizedValue = maxVal > minVal
                ? (point.value - minVal) / (maxVal - minVal)
                : 0;
              const newRadius = calculateMarkerRadius(normalizedValue, zoomFactor);
              layer.setRadius(newRadius);
            }
          }
        });
      }, 150);
    });
  }, [L, mapInstanceRef, dataPoints, zoom]);

  const setupMap = useCallback(() => {
    initializeMap();
    add3DEffects();
    addZoomHandler();
  }, [initializeMap, add3DEffects, addZoomHandler]);

  const cleanupMap = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.eachLayer((layer: any) => {
        mapInstanceRef.current?.removeLayer(layer);
      });
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
  }, [mapInstanceRef]);

  return {
    setupMap,
    cleanupMap,
  };
};

import { useCallback } from 'react';
import type { MapDataPoint, ColorScale } from '../types';
import { interpolateColor, calculateMarkerRadius, calculateColorFactor, calculateOpacity } from '../utils';

interface UseMapMarkersProps {
  L: any;
  mapInstanceRef: React.MutableRefObject<any>;
  dataPoints: MapDataPoint[];
  colorScale: ColorScale;
  visualizationType: "circles" | "heatmap" | "markers";
  zoom: number;
  onPointClick?: (point: MapDataPoint) => void;
}

export const useMapMarkers = ({
  L,
  mapInstanceRef,
  dataPoints,
  colorScale,
  visualizationType,
  zoom,
  onPointClick,
}: UseMapMarkersProps) => {

  const createMarkerPopup = useCallback((point: MapDataPoint): string => {
    return `
      <div class="p-3 min-w-48">
        <h3 class="font-bold text-amber-800 text-base mb-2">${point.name}</h3>
        ${point.description ? `<p class="text-sm text-gray-600 mb-2">${point.description}</p>` : ""}
        <div class="text-sm space-y-1">
          ${point.year ? `<div><strong class="text-gray-700">Year:</strong> <span class="text-amber-700">${point.year}</span></div>` : ""}
          ${point.category ? `<div><strong class="text-gray-700">Category:</strong> <span class="text-amber-700">${point.category}</span></div>` : ""}
          ${point.importance ? `<div><strong class="text-gray-700">Importance:</strong> <span class="text-amber-700">${point.importance}</span></div>` : ''}
          ${point.tags && point.tags.length > 0 ? `<div><strong class="text-gray-700">Tags:</strong> <span class="text-amber-700">${point.tags.slice(0, 3).join(', ')}${point.tags.length > 3 ? '...' : ''}</span></div>` : ''}
        </div>
      </div>
    `;
  }, []);

  const createHoverBehavior = useCallback((marker: any, originalOpacity: number) => {
    let hoverTimeout: NodeJS.Timeout | null = null;
    let isPopupHovered = false;
    let isMarkerHovered = false;

    const showPopup = () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      // Close all other popups first
      mapInstanceRef.current?.eachLayer((layer: any) => {
        if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
          if (layer !== marker && layer.isPopupOpen()) {
            layer.closePopup();
          }
        }
      });

      marker.openPopup();

      // Add hover listener to popup after it's opened
      setTimeout(() => {
        const popupElement = marker.getPopup()?.getElement();
        if (popupElement) {
          popupElement.addEventListener('mouseenter', () => {
            isPopupHovered = true;
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
              hoverTimeout = null;
            }
          });

          popupElement.addEventListener('mouseleave', () => {
            isPopupHovered = false;
            hoverTimeout = setTimeout(() => {
              if (!isMarkerHovered && !isPopupHovered) {
                marker.closePopup();
                if (marker instanceof L.CircleMarker) {
                  marker.setStyle({
                    weight: 1,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fillOpacity: originalOpacity
                  });
                }
              }
            }, 150);
          });
        }
      }, 50);
    };

    const hidePopup = () => {
      hoverTimeout = setTimeout(() => {
        if (!isMarkerHovered && !isPopupHovered) {
          marker.closePopup();
          if (marker instanceof L.CircleMarker) {
            marker.setStyle({
              weight: 1,
              color: 'rgba(255, 255, 255, 0.8)',
              fillOpacity: originalOpacity
            });
          }
        }
      }, 150);
    };

    // Marker hover events
    marker.on('mouseover', () => {
      isMarkerHovered = true;
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      if (marker instanceof L.CircleMarker) {
        marker.setStyle({
          weight: 1.5,
          color: 'rgba(245, 158, 11, 0.9)',
          fillOpacity: Math.min(originalOpacity + 0.15, 0.9)
        });
      }

      showPopup();
    });

    marker.on('mouseout', () => {
      isMarkerHovered = false;
      hidePopup();
    });

    return { showPopup, hidePopup };
  }, [L, mapInstanceRef]);

  const createMarker = useCallback((
    point: MapDataPoint,
    values: number[],
    currentZoom: number
  ) => {
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    let marker: any;
    let originalOpacity = 0.8;

    if (visualizationType === "circles") {
      const normalizedValue = maxValue > minValue
        ? (point.value - minValue) / (maxValue - minValue)
        : 0;

      const colorFactor = calculateColorFactor(normalizedValue);
      const zoomFactor = Math.max(0.5, Math.min(1.2, currentZoom / 10));
      const radius = calculateMarkerRadius(normalizedValue, zoomFactor);
      originalOpacity = calculateOpacity(normalizedValue);

      marker = L.circleMarker([point.lat, point.lng], {
        radius,
        fillColor: interpolateColor(colorScale.min, colorScale.max, colorFactor),
        color: "rgba(255, 255, 255, 0.8)",
        weight: 1,
        opacity: 1,
        fillOpacity: originalOpacity,
        className: "leaflet-3d-marker",
        id: point.id,
      });
    } else if (visualizationType === "markers") {
      marker = L.marker([point.lat, point.lng]);
          marker.bindTooltip(`
        <div style="font-family: 'Source Serif Pro', serif; padding: 8px;">
          <div style="font-weight: bold; color: #92400e; margin-bottom: 4px;">
            ${point.title}
          </div>
          <div style="color: #78716c; font-size: 12px; margin-bottom: 4px;">
            ${point.value < 0 ? `${Math.abs(point.value)} BCE` : `${point.value} CE`}
          </div>
          <div style="color: #57534e; font-size: 11px;">
            ${point.location || 'Location not specified'}
          </div>
        </div>
      `, {
        permanent: false,
        direction: 'top',
        opacity: 0.9
      });
    } else {
      // Default to circles
      const normalizedValue = maxValue > minValue
        ? (point.value - minValue) / (maxValue - minValue)
        : 0;
      const colorFactor = calculateColorFactor(normalizedValue);

      marker = L.circleMarker([point.lat, point.lng], {
        radius: 8,
        fillColor: interpolateColor(colorScale.min, colorScale.max, colorFactor),
        color: "#fff",
        weight: 1,
        opacity: 1,
        fillOpacity: originalOpacity,
        id: point.id,
      });
    }

    // Add popup
    const popupContent = createMarkerPopup(point);
    marker.bindPopup(popupContent, {
      closeButton: true,
      autoClose: false,
      closeOnClick: false,
      className: 'custom-popup'
    });

    // Add hover behavior
    createHoverBehavior(marker, originalOpacity);

    // Add click handler
    marker.on('click', () => {
      // Close all other popups first
      mapInstanceRef.current?.eachLayer((layer: any) => {
        if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
          if (layer !== marker && layer.isPopupOpen()) {
            layer.closePopup();
          }
        }
      });

      marker.openPopup();

      if (onPointClick) {
        onPointClick(point);
      }
    });

    return marker;
  }, [L, visualizationType, colorScale, zoom, onPointClick, createMarkerPopup, createHoverBehavior, mapInstanceRef]);

  const addMarkersToMap = useCallback(() => {
    if (!mapInstanceRef.current || !dataPoints.length) return;

    // Clear existing markers
    mapInstanceRef.current.eachLayer((layer: any) => {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        mapInstanceRef.current?.removeLayer(layer);
      }
    });

    // Get min and max values for color scaling
    const values = dataPoints.map(point => point.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue;

    // Debug logging
    console.log('Data values:', values);
    console.log('Min value:', minValue);
    console.log('Max value:', maxValue);

    const currentZoom = mapInstanceRef.current?.getZoom() || zoom;

    dataPoints.forEach((point) => {
      const marker = createMarker(point, values, currentZoom);
      marker.addTo(mapInstanceRef.current);
    });
  }, [L, mapInstanceRef, dataPoints, zoom, createMarker]);

  return {
    addMarkersToMap,
    createMarker,
  };
};
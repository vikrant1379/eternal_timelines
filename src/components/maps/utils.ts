// Leaflet utilities and configuration
export const loadLeaflet = async () => {
  if (typeof window !== "undefined") {
    const L = await import("leaflet");
    await import("leaflet/dist/leaflet.css");

    // Fix for default markers in Leaflet with Next.js
    delete (L.default.Icon.Default.prototype as any)._getIconUrl;
    L.default.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    return L.default;
  }
  return null;
};

// Color interpolation utility
export const interpolateColor = (
  color1: string,
  color2: string,
  factor: number,
): string => {
  const hex1 = color1.replace("#", "");
  const hex2 = color2.replace("#", "");

  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);

  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

// Map configuration constants
export const MAP_CONFIG = {
  DEFAULT_CENTER: [22.5, 78.9629] as [number, number],
  DEFAULT_ZOOM: 4.5,
  MIN_ZOOM: 3,
  MAX_ZOOM: 18,
  INDIA_BOUNDS: {
    southwest: [6.0, 68.0] as [number, number],
    northeast: [37.5, 97.5] as [number, number],
  },
  MAX_BOUNDS: [
    [-170, -540],
    [170, 540],
  ] as [[number, number], [number, number]],
  TILE_URL: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
} as const;

// Marker sizing utilities
export const calculateMarkerRadius = (
  normalizedValue: number,
  zoomFactor: number,
): number => {
  const baseRadius = 6 + normalizedValue * 8;
  return Math.max(baseRadius * zoomFactor, 4);
};

export const calculateColorFactor = (normalizedValue: number): number => {
  return 0.3 + (normalizedValue * 0.7);
};

export const calculateOpacity = (normalizedValue: number): number => {
  return 0.65 + normalizedValue * 0.25;
};

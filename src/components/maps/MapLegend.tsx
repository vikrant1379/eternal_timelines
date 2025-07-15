"use client";

import { MapDataPoint, ColorScale } from "./types";

export interface MapLegendProps {
  dataPoints: MapDataPoint[];
  colorScale: ColorScale;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export default function MapLegend({
  dataPoints,
  colorScale,
  position = "bottom-left",
}: MapLegendProps) {
  if (!dataPoints.length) return null;

  const values = dataPoints.map((point) => point.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Check if we have year property to determine BCE/CE logic
  const samplePoint = dataPoints[0];
  const hasYearProperty = samplePoint && 'year' in samplePoint;

  // Helper function to format year based on data structure
  const formatYear = (value: number) => {
    // Check if this is timeline/historical data by looking at the data structure
    const isTimelineData = hasYearProperty || 
      (samplePoint && ('category' in samplePoint || 'title' in samplePoint)) ||
      dataPoints.some(point => 'year' in point);
    
    if (isTimelineData) {
      // For timeline data, treat negative values as BCE, positive as CE
      return value < 0 ? `${Math.abs(value)} BCE` : `${value} CE`;
    } else {
      // For non-year data (like literacy rates, population density), just show the number
      return value.toString();
    }
  };

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-[1000]`}>
      {/* Color gradient bar */}
      <div
        className="relative h-8 w-40 rounded-lg shadow-lg border border-amber-300/40 overflow-hidden"
        style={{
          background: `linear-gradient(to right, 
            color-mix(in srgb, ${colorScale.min} 70%, #f59e0b 30%), 
            ${colorScale.max}
          )`,
          boxShadow: `
            inset 0 2px 4px rgba(0, 0, 0, 0.1), 
            0 4px 12px rgba(245, 158, 11, 0.2),
            inset 4px 0 8px rgba(245, 158, 11, 0.3),
            inset -4px 0 8px rgba(194, 65, 12, 0.3)
          `,
        }}
      >
        {/* Left edge 3D highlight */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2 rounded-l-lg"
          style={{
            background:
              "linear-gradient(to right, rgba(245, 158, 11, 0.4), transparent)",
            boxShadow: "inset 2px 0 4px rgba(245, 158, 11, 0.6)",
          }}
        />

        {/* Right edge 3D shadow */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2 rounded-r-lg"
          style={{
            background:
              "linear-gradient(to left, rgba(194, 65, 12, 0.4), transparent)",
            boxShadow: "inset -2px 0 4px rgba(194, 65, 12, 0.6)",
          }}
        />

        {/* Date labels with elegant styling */}
        <div className="absolute inset-0 flex items-center justify-between px-3 z-10">
          <span
            className="text-xs font-bold tracking-wide text-gray-900 serif-text"
            style={{
              fontFamily: "Source Serif Pro, Georgia, serif",
              textShadow:
                "0 1px 2px rgba(255, 255, 255, 0.9), 0 0 4px rgba(255, 255, 255, 0.5)",
            }}
          >
            {formatYear(minValue)}
          </span>
          <span
            className="text-xs font-bold tracking-wide text-gray-900 serif-text"
            style={{
              fontFamily: "Source Serif Pro, Georgia, serif",
              textShadow:
                "0 1px 2px rgba(255, 255, 255, 0.9), 0 0 4px rgba(255, 255, 255, 0.5)",
            }}
          >
            {formatYear(maxValue)}
          </span>
        </div>
      </div>
    </div>
  );
}

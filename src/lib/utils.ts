import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BCE`
  }
  return `${year} CE`
}

export function getCategoryColor(category: string): string {
  const colors = {
    philosophy: 'bg-gradient-to-br from-orange-500 to-amber-600',
    saints: 'bg-gradient-to-br from-orange-600 to-amber-700',
    rulers: 'bg-gradient-to-br from-amber-500 to-orange-600',
    invasions: 'bg-gradient-to-br from-orange-600 to-red-500',
    scriptures: 'bg-gradient-to-br from-amber-600 to-yellow-700',
    architecture: 'bg-gradient-to-br from-orange-400 to-amber-500',
    science: 'bg-gradient-to-br from-orange-300 to-amber-400',
    culture: 'bg-gradient-to-br from-amber-400 to-orange-500',
    wars: 'bg-gradient-to-br from-orange-700 to-red-600',
    reforms: 'bg-gradient-to-br from-amber-700 to-orange-800'
  }
  return colors[category as keyof typeof colors] || 'bg-gradient-to-br from-amber-500 to-orange-600'
}

export function getCategoryIcon(category: string): string {
  const icons = {
    philosophy: '🧘‍♂️',
    saints: '🙏',
    rulers: '👑',
    invasions: '⚔️',
    scriptures: '📖',
    architecture: '🏯',
    science: '🔬',
    culture: '🎭',
    wars: '🛡️',
    reforms: '⚖️'
  }
  return icons[category as keyof typeof icons] || '📌'
}

export function getImportanceColor(importance: string): string {
  const colors = {
    low: 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50',
    medium: 'border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100',
    high: 'border-orange-400 bg-gradient-to-br from-orange-100 to-amber-200',
    critical: 'border-orange-500 bg-gradient-to-br from-orange-200 to-red-200 shadow-lg'
  }
  return colors[importance as keyof typeof colors] || 'border-gray-300 bg-white'
} 
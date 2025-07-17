
"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors serif-text border border-orange-200 dark:border-amber-700 bg-orange-50 dark:bg-amber-900/20 text-orange-700 dark:text-amber-300 hover:bg-orange-100 dark:hover:bg-amber-900/30 hover:border-orange-300 dark:hover:border-amber-600"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}


"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-amber-200 dark:border-amber-600 bg-white dark:bg-gray-700 hover:bg-amber-50 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-amber-700 dark:text-amber-400" />
      ) : (
        <Sun className="w-4 h-4 text-amber-700 dark:text-amber-400" />
      )}
    </button>
  );
}

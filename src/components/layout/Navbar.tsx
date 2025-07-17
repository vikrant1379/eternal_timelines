"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from 'lucide-react';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline" },
  { name: "Maps", href: "/maps" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "Contribute", href: "/contribute" },
  { name: "About", href: "/about" },
];

function ThemeToggleButton() {
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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-orange-200 dark:border-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span 
                className="text-xl font-bold text-stone-900 dark:text-amber-100" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Sanatan Timeline
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors serif-text ${
                    isActive
                      ? "bg-orange-100 dark:bg-amber-900/30 text-orange-700 dark:text-amber-300 border border-orange-200 dark:border-amber-700"
                      : "text-stone-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-amber-400 hover:bg-orange-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="ml-4">
              <ThemeToggleButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            {/* Add mobile menu logic here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}
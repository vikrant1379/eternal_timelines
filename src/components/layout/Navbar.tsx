"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Map, Clock, Users, Info, Home } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Timeline", href: "/timeline", icon: Clock },
  { name: "Maps", href: "/maps", icon: Map },
  { name: "Knowledge", href: "/knowledge", icon: BookOpen },
  { name: "Contribute", href: "/contribute", icon: Users },
  { name: "About", href: "/about", icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-50/98 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-300 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="text-2xl font-bold text-orange-700 dark:text-amber-400 serif-text">
                Sanatan Timeline
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors serif-text",
                    isActive
                      ? "text-orange-700 dark:text-amber-300 bg-orange-50 dark:bg-amber-900/20 border border-orange-200 dark:border-amber-700"
                      : "text-gray-800 dark:text-gray-300 hover:text-orange-700 dark:hover:text-amber-300 hover:bg-orange-50 dark:hover:bg-amber-900/20",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-800 dark:text-gray-300 hover:text-orange-700 dark:hover:text-amber-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
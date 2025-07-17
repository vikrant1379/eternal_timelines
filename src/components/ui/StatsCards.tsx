"use client";

interface StatItem {
  number: string;
  label: string;
  suffix?: string;
}

interface StatsCardsProps {
  stats: StatItem[];
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <div key={index} className="academic-card p-6 hover:shadow-lg transition-all duration-300 text-center group relative">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-amber-400 mb-2">
              {stat.number}
              {stat.suffix && (
                <span className="text-amber-400 text-xl ml-1">{stat.suffix}</span>
              )}
            </div>
            <div className="text-sm font-medium text-gray-800 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
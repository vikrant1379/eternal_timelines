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
        <div key={index} className="bg-white dark:stats-card border border-gray-200 dark:border-transparent rounded-lg p-6 hover:shadow-lg hover:border-orange-300 dark:hover:shadow-xl transition-all duration-300 text-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:stats-number mb-2">
              {stat.number}
              {stat.suffix && (
                <span className="text-amber-400 text-xl ml-1">{stat.suffix}</span>
              )}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:stats-label uppercase tracking-wide">{stat.label}</div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
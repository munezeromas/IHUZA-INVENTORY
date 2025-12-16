import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  count: number;
  label: string;
  iconBgColor: string;
  iconColor: string;
}

export function StatsCard({ icon: Icon, count, label, iconBgColor, iconColor }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          <Icon className={iconColor} size={24} />
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-900">{count}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}

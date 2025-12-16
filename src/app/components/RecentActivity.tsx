import { Package, Users, FileText, AlertTriangle, UserCheck } from 'lucide-react';

interface Activity {
  id: number;
  icon: any;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}

export function RecentActivity() {
  const activities: Activity[] = [
    {
      id: 1,
      icon: Package,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'Product added to inventory',
      description: 'Dell Latitude 7420 (SKU: PRD20241001)',
      time: 'Dec 8, 2024'
    },
    {
      id: 2,
      icon: Users,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'Product assigned to Sarah Johnson',
      description: 'Dell ThinkPad E1 Carbon (PRD20241001)',
      time: 'Dec 7, 2024'
    },
    {
      id: 3,
      icon: FileText,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'Product assigned to Michael Brown',
      description: 'Apple MacBook Air M2 (PRD20245001)',
      time: 'Dec 6, 2024'
    },
    {
      id: 4,
      icon: AlertTriangle,
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      title: 'Product sent for maintenance',
      description: 'HP Elite Dragonfly - Battery replacement required',
      time: 'Dec 15, 2024'
    },
    {
      id: 5,
      icon: UserCheck,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      title: 'New user registered',
      description: 'Christopher Miller - Staff Member',
      time: 'Dec 12, 2024'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex gap-4">
                <div className={`w-10 h-10 ${activity.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={activity.iconColor} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1 truncate">{activity.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

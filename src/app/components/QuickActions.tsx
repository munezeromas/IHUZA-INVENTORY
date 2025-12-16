import { Users, Package, FileText, ChevronRight } from 'lucide-react';

interface QuickAction {
  id: number;
  icon: any;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  buttonColor: string;
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      id: 1,
      icon: Users,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'View Users',
      description: 'View all registered users',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 2,
      icon: Package,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'View Products',
      description: 'View all registered products',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 3,
      icon: FileText,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'View Assignments',
      description: 'View all product assignments',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
      </div>
      <div className="p-4 space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div key={action.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 ${action.iconBg} rounded-lg flex items-center justify-center`}>
                  <Icon className={action.iconColor} size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </div>
              <button className={`px-4 py-2 ${action.buttonColor} text-white rounded-lg transition-colors text-sm flex items-center gap-1`}>
                Go
                <ChevronRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

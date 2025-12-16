import { Bell, Sun, Settings, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Title - hidden on mobile when sidebar button is visible */}
        <div className="ml-12 lg:ml-0">
          <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Sun size={20} className="text-gray-600" />
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings size={20} className="text-gray-600" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User profile */}
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
            <div className="text-right hidden md:block">
              <p className="text-sm text-gray-500">Admin@ihuza.com</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">A</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}

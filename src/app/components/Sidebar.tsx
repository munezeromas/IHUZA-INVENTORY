import { LayoutDashboard, Users, Package, FileText, Tag, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', count: null },
    { id: 'users', icon: Users, label: 'Users', count: 116 },
    { id: 'products', icon: Package, label: 'Products', count: 180 },
    { id: 'assignments', icon: FileText, label: 'Assignments', count: 10 },
    { id: 'categories', icon: Tag, label: 'Categories', count: null },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">iHUZA</h1>
                <p className="text-xs text-gray-500">INVENTORY</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActivePage(item.id);
                        setIsMobileOpen(false);
                      }}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 rounded-lg
                        transition-colors duration-200
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </div>
                      {item.count !== null && (
                        <span className="text-xs text-gray-400">{item.count}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

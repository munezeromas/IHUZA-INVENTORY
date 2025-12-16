import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { ProductCard } from './components/ProductCard';
import { UsersTable } from './components/UsersTable';
import { RecentActivity } from './components/RecentActivity';
import { QuickActions } from './components/QuickActions';
import { Users, Package, CheckCircle, AlertCircle, Check } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const handleAddUser = () => {
    alert('Add User functionality would open a modal here');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-4 lg:p-8">
          {/* System Overview Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 lg:p-8 mb-6 lg:mb-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2">
                  iHUZA INVENTORY - System Overview
                </h2>
                <p className="text-blue-100 text-sm lg:text-base mb-3">
                  Monitor your iHUZA inventory and product assignments in real-time
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5" />
                  <span>All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatsCard
              icon={Users}
              count={116}
              label="Total Users"
              iconBgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <StatsCard
              icon={Package}
              count={100}
              label="Total Products"
              iconBgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <StatsCard
              icon={CheckCircle}
              count={10}
              label="Assigned Products"
              iconBgColor="bg-green-50"
              iconColor="text-green-600"
            />
            <StatsCard
              icon={AlertCircle}
              count={90}
              label="Unassigned Products"
              iconBgColor="bg-yellow-50"
              iconColor="text-yellow-600"
            />
          </div>

          {/* Recent Added Products */}
          <div className="mb-6 lg:mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Added Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ProductCard
                name="MacBook Pro 16"
                category="Laptops"
                date="Dec 18, 2024"
                status="In Stock"
                statusColor="green"
              />
              <ProductCard
                name="Dell XPS 13"
                category="Laptops"
                date="Dec 17, 2024"
                status="In Stock"
                statusColor="green"
              />
              <ProductCard
                name="iPad Air"
                category="Tablets"
                date="Dec 16, 2024"
                status="In Stock"
                statusColor="green"
              />
              <ProductCard
                name="Surface Pro 9"
                category="Tablets"
                date="Dec 15, 2024"
                status="Out of Stock"
                statusColor="red"
              />
              <ProductCard
                name="iPhone 15 Pro"
                category="Phones"
                date="Dec 14, 2024"
                status="Low Stock"
                statusColor="yellow"
              />
              <ProductCard
                name="Samsung Galaxy S24"
                category="Phones"
                date="Dec 13, 2024"
                status="In Stock"
                statusColor="green"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="mb-6 lg:mb-8">
            <UsersTable onAddUser={handleAddUser} />
          </div>

          {/* Recent Activity and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
}

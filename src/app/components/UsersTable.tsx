import { Edit, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

interface UsersTableProps {
  onAddUser: () => void;
}

export function UsersTable({ onAddUser }: UsersTableProps) {
  const users: User[] = [
    { id: 1, name: 'John Smith', email: 'john.smith@ihuza.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@ihuza.com', role: 'Manager', status: 'Active', lastLogin: '5 hours ago' },
    { id: 3, name: 'Michael Brown', email: 'm.brown@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '1 day ago' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@ihuza.com', role: 'Staff', status: 'Inactive', lastLogin: '3 days ago' },
    { id: 5, name: 'David Wilson', email: 'david.w@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '8 hours ago' },
    { id: 6, name: 'Lisa Anderson', email: 'lisa.a@ihuza.com', role: 'Manager', status: 'Active', lastLogin: '30 min ago' },
    { id: 7, name: 'Robert Taylor', email: 'robert.t@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '2 days ago' },
    { id: 8, name: 'Jennifer Miller', email: 'jen.m@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '4 hours ago' },
    { id: 9, name: 'Christopher Lee', email: 'chris@ihuza.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
    { id: 10, name: 'Amanda White', email: 'a.white@ihuza.com', role: 'Staff', status: 'Inactive', lastLogin: '1 week ago' },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-700';
      case 'Manager':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-red-100 text-red-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Users</h3>
        <button 
          onClick={onAddUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          Add User
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm text-gray-600">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded ${getRoleBadgeColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded ${getStatusBadgeColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden divide-y divide-gray-200">
        {users.map((user) => (
          <div key={user.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-600">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 text-xs rounded ${getRoleBadgeColor(user.role)}`}>
                {user.role}
              </span>
              <span className={`px-2 py-1 text-xs rounded ${getStatusBadgeColor(user.status)}`}>
                {user.status}
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-3">Last login: {user.lastLogin}</div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                <Edit size={14} /> Edit
              </button>
              <button className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

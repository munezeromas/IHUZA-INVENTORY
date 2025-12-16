interface ProductCardProps {
  name: string;
  category: string;
  date: string;
  status: string;
  statusColor: string;
}

export function ProductCard({ name, category, date, status, statusColor }: ProductCardProps) {
  const statusColors: Record<string, string> = {
    'In Stock': 'bg-green-100 text-green-700',
    'Out of Stock': 'bg-red-100 text-red-700',
    'Low Stock': 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <span className={`text-xs px-2 py-1 rounded ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-xs text-gray-400 mt-1">{date}</p>
    </div>
  );
}

import { FaClipboardList, FaUsers, FaBell, FaCheckCircle, FaRoad, FaLightbulb, FaTrash, FaTree } from 'react-icons/fa';
import { useState } from 'react';

const StatCard = ({ icon, title, value, trend }: { icon: React.ReactNode; title: string; value: string; trend?: { value: number; isPositive: boolean } }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{value}</h3>
        </div>
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          <span className="font-medium">{trend.value}%</span>
          <span>{trend.isPositive ? '↑' : '↓'}</span>
        </div>
      )}
    </div>
  </div>
);

const RecentActivity = ({ activity }: { activity: { type: string; title: string; time: string; status: string; icon: React.ReactNode } }) => (
  <div className="flex items-center gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all duration-300">
    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
      {activity.icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
      <p className="text-xs text-gray-500">{activity.type}</p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <div className={`text-xs font-medium px-2 py-1 rounded-full ${activity.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
        {activity.status}
      </div>
      <div className="text-xs text-gray-500">{activity.time}</div>
    </div>
  </div>
);

const ProblemTypeCard = ({ icon, name, count, percentage, color, trend }: {
  icon: React.ReactNode;
  name: string;
  count: number;
  percentage: number;
  color: string;
  trend: { value: number; isPositive: boolean };
}) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{count} issues</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
        <div className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '+' : ''}{trend.value}%
        </div>
      </div>
    </div>
    
    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
      <div 
        className="h-3 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%`, backgroundColor: color.replace('bg-', '') }}
      />
    </div>
    
    <div className="flex justify-between text-xs text-gray-500">
      <span>This month</span>
      <span>{percentage}% of total issues</span>
    </div>
  </div>
);

export default function GovernmentDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<'problems' | 'hours' | 'staff'>('problems');
  
  const stats = [
    { icon: <FaClipboardList className="w-6 h-6" />, title: "Total Reports", value: "1,284", trend: { value: 12, isPositive: true } },
    { icon: <FaCheckCircle className="w-6 h-6" />, title: "Resolved Issues", value: "876", trend: { value: 8, isPositive: true } },
    { icon: <FaUsers className="w-6 h-6" />, title: "Active Staff", value: "32", trend: { value: 2, isPositive: true } },
    { icon: <FaBell className="w-6 h-6" />, title: "Pending Reviews", value: "18", trend: { value: 5, isPositive: false } }
  ];

  const recentActivities = [
    { type: "Infrastructure", title: "Pothole repair on Main St", time: "2h ago", status: "resolved", icon: <FaRoad className="w-4 h-4" /> },
    { type: "Public Safety", title: "Broken streetlight reported", time: "4h ago", status: "pending", icon: <FaLightbulb className="w-4 h-4" /> },
    { type: "Sanitation", title: "Waste collection delay", time: "6h ago", status: "resolved", icon: <FaTrash className="w-4 h-4" /> },
    { type: "Parks", title: "Tree maintenance request", time: "8h ago", status: "pending", icon: <FaTree className="w-4 h-4" /> }
  ];

  const problemTypes = [
    { icon: <FaRoad className="w-6 h-6" />, name: "Infrastructure", count: 245, percentage: 35, color: "bg-blue-500", trend: { value: 12, isPositive: true } },
    { icon: <FaTrash className="w-6 h-6" />, name: "Sanitation", count: 189, percentage: 27, color: "bg-green-500", trend: { value: 8, isPositive: true } },
    { icon: <FaLightbulb className="w-6 h-6" />, name: "Electricity", count: 134, percentage: 19, color: "bg-yellow-500", trend: { value: 5, isPositive: true } },
    { icon: <FaTree className="w-6 h-6" />, name: "Parks & Gardens", count: 89, percentage: 13, color: "bg-emerald-500", trend: { value: 3, isPositive: true } }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Work Progress</h3>
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {[12, 35, 28, 45, 22, 15, 8].map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-blue-100 rounded-t-lg" style={{ height: `${value * 2}px` }}>
                  <div className="w-full bg-blue-500 rounded-t-lg transition-all duration-1000" style={{ height: '100%' }}></div>
                </div>
                <span className="mt-2 text-xs text-gray-500">Day {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-2">
            {recentActivities.map((activity, index) => (
              <RecentActivity key={index} activity={activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Problem Types */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Problem Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemTypes.map((problem, index) => (
            <ProblemTypeCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </div>
  );
}

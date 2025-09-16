"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaUsers, FaBell, FaCheckCircle, FaCog, FaRoad, FaLightbulb, FaTrash, FaTree, FaWater, FaWifi } from 'react-icons/fa';

type WorkData = {
  day: string;
  date: string;
  problemsReported: number;
  problemsResolved: number;
  workHours: number;
  staffAssigned: number;
  categories: {
    infrastructure: number;
    safety: number;
    sanitation: number;
    parks: number;
  };
};

const StatCard = ({ icon, title, value, trend }: { icon: React.ReactNode; title: string; value: string; trend?: { value: number; isPositive: boolean } }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
  >
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
        <div 
          className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          <span className="font-medium">{trend.value}%</span>
          <svg
            className={`w-4 h-4 ${trend.isPositive ? 'rotate-0' : 'rotate-180'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 5l8 8-1.4 1.4-5.6-5.6V21h-2V8.8L5.4 14.4 4 13l8-8z" />
          </svg>
        </div>
      )}
    </div>
  </motion.div>
);

const RecentActivity = ({ activity }: { activity: { type: string; title: string; time: string; status: string; icon: React.ReactNode } }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all duration-300 group"
  >
    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
      {activity.icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{activity.title}</p>
      <p className="text-xs text-gray-500">{activity.type}</p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <div className={`text-xs font-medium px-2 py-1 rounded-full ${activity.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
        {activity.status}
      </div>
      <div className="text-xs text-gray-500">{activity.time}</div>
    </div>
  </motion.div>
);

const WeekwiseTimelineChart = ({ data }: { data: WorkData[] }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<'problems' | 'hours' | 'staff'>('problems');
  
  const maxProblems = Math.max(...data.map(d => d.problemsReported));
  const maxHours = Math.max(...data.map(d => d.workHours));
  const maxStaff = Math.max(...data.map(d => d.staffAssigned));

  const getMaxValue = () => {
    switch (selectedMetric) {
      case 'problems': return maxProblems;
      case 'hours': return maxHours;
      case 'staff': return maxStaff;
      default: return maxProblems;
    }
  };

  const getValue = (item: WorkData) => {
    switch (selectedMetric) {
      case 'problems': return item.problemsResolved;
      case 'hours': return item.workHours;
      case 'staff': return item.staffAssigned;
      default: return item.problemsResolved;
    }
  };

  const getTotalValue = (item: WorkData) => {
    switch (selectedMetric) {
      case 'problems': return item.problemsReported;
      case 'hours': return item.workHours;
      case 'staff': return item.staffAssigned;
      default: return item.problemsReported;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {[
          { key: 'problems', label: 'Problems Solved', color: 'blue' },
          { key: 'hours', label: 'Work Hours', color: 'green' },
          { key: 'staff', label: 'Staff Assigned', color: 'purple' }
        ].map((metric) => (
          <button
            key={metric.key}
            onClick={() => setSelectedMetric(metric.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedMetric === metric.key
                ? `bg-${metric.color}-100 text-${metric.color}-700 border-2 border-${metric.color}-200`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {metric.label}
          </button>
        ))}
      </div>

      <div className="h-[350px] flex items-end justify-between gap-3 px-4">
        {data.map((item, index) => {
          const totalValue = getTotalValue(item);
          const resolvedValue = getValue(item);
          const maxValue = getMaxValue();
          const totalHeight = Math.max((totalValue / maxValue) * 80, 10);
          const resolvedHeight = totalValue > 0 ? Math.max((resolvedValue / totalValue) * 100, 5) : 0;

          return (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center max-w-[80px]"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div className="relative w-full h-full flex flex-col justify-end">
                {hoveredBar === index && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-3 px-4 z-10 min-w-[200px]">
                      <div className="text-center font-medium mb-2">{item.day} - {item.date}</div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Problems Reported:</span>
                          <span className="text-blue-400">{item.problemsReported}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Problems Resolved:</span>
                          <span className="text-green-400">{item.problemsResolved}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Work Hours:</span>
                          <span className="text-yellow-400">{item.workHours}h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Staff Assigned:</span>
                          <span className="text-purple-400">{item.staffAssigned}</span>
                        </div>
                        <div className="border-t border-gray-600 pt-1 mt-2">
                          <div className="text-center text-xs text-gray-300">Categories</div>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <div>Infrastructure: {item.categories.infrastructure}</div>
                            <div>Safety: {item.categories.safety}</div>
                            <div>Sanitation: {item.categories.sanitation}</div>
                            <div>Parks: {item.categories.parks}</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <div className="border-solid border-t-gray-800 border-t-8 border-x-transparent border-x-8 border-b-0" />
                      </div>
                    </div>
                  )}
                
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${totalHeight}%` }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1 
                  }}
                  className="bg-gray-200 rounded-t-lg w-full relative overflow-hidden mb-2"
                  style={{ minHeight: '20px' }}
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${resolvedHeight}%` }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1 + 0.2 
                    }}
                    className={`rounded-t-lg w-full absolute bottom-0 hover:brightness-110 transition-all duration-200 ${
                      selectedMetric === 'problems' ? 'bg-blue-500' :
                      selectedMetric === 'hours' ? 'bg-green-500' : 'bg-purple-500'
                    }`}
                    style={{ minHeight: '10px' }}
                  />
                </motion.div>
              </div>
              
              <div className="mt-3 text-center w-full">
                <p className="text-xs font-medium text-gray-600">{item.day}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedMetric === 'problems' && `${item.problemsResolved}/${item.problemsReported}`}
                  {selectedMetric === 'hours' && `${item.workHours}h`}
                  {selectedMetric === 'staff' && `${item.staffAssigned} staff`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProblemTypeCard = ({ icon, name, count, percentage, color, trend }: {
  icon: React.ReactNode;
  name: string;
  count: number;
  percentage: number;
  color: string;
  trend: { value: number; isPositive: boolean };
}) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
  >
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
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-3 rounded-full ${color.replace('bg-', 'bg-')}`}
      />
    </div>
    
    <div className="flex justify-between text-xs text-gray-500">
      <span>This month</span>
      <span>{percentage}% of total issues</span>
    </div>
  </motion.div>
);

export default function MunicipalDashboard() {
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

  const workData: WorkData[] = [
    { day: 'Mon', date: 'Dec 9', problemsReported: 8, problemsResolved: 5, workHours: 16, staffAssigned: 4, categories: { infrastructure: 2, safety: 2, sanitation: 1, parks: 0 } },
    { day: 'Tue', date: 'Dec 10', problemsReported: 22, problemsResolved: 18, workHours: 42, staffAssigned: 10, categories: { infrastructure: 8, safety: 6, sanitation: 5, parks: 3 } },
    { day: 'Wed', date: 'Dec 11', problemsReported: 15, problemsResolved: 9, workHours: 28, staffAssigned: 6, categories: { infrastructure: 5, safety: 4, sanitation: 3, parks: 2 } },
    { day: 'Thu', date: 'Dec 12', problemsReported: 35, problemsResolved: 28, workHours: 55, staffAssigned: 12, categories: { infrastructure: 12, safety: 8, sanitation: 10, parks: 5 } },
    { day: 'Fri', date: 'Dec 13', problemsReported: 12, problemsResolved: 10, workHours: 24, staffAssigned: 5, categories: { infrastructure: 4, safety: 3, sanitation: 3, parks: 2 } },
    { day: 'Sat', date: 'Dec 14', problemsReported: 6, problemsResolved: 4, workHours: 14, staffAssigned: 3, categories: { infrastructure: 2, safety: 1, sanitation: 2, parks: 1 } },
    { day: 'Sun', date: 'Dec 15', problemsReported: 4, problemsResolved: 2, workHours: 8, staffAssigned: 2, categories: { infrastructure: 1, safety: 1, sanitation: 1, parks: 1 } }
  ];

  const problemTypes = [
    { icon: <FaRoad className="w-6 h-6" />, name: "Infrastructure", count: 245, percentage: 35, color: "bg-blue-500", trend: { value: 12, isPositive: true } },
    { icon: <FaTrash className="w-6 h-6" />, name: "Sanitation", count: 189, percentage: 27, color: "bg-green-500", trend: { value: 8, isPositive: true } },
    { icon: <FaLightbulb className="w-6 h-6" />, name: "Electricity", count: 134, percentage: 19, color: "bg-yellow-500", trend: { value: 5, isPositive: true } },
    { icon: <FaTree className="w-6 h-6" />, name: "Parks & Gardens", count: 89, percentage: 13, color: "bg-emerald-500", trend: { value: 3, isPositive: true } },
    { icon: <FaWater className="w-6 h-6" />, name: "Water Supply", count: 76, percentage: 11, color: "bg-cyan-500", trend: { value: 2, isPositive: true } },
    { icon: <FaWifi className="w-6 h-6" />, name: "IT & Digital", count: 45, percentage: 6, color: "bg-purple-500", trend: { value: 15, isPositive: true } }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Municipal Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">Issue management and analytics for municipal staff</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <FaCog className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Weekly Work Progress & Problem Resolution
                </h3>
                <select className="text-sm border rounded-lg px-3 py-2 text-gray-600 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              <WeekwiseTimelineChart data={workData} />
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Problems Resolved</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Work Hours</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span className="text-sm text-gray-600">Staff Assigned</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Problem Categories & Distribution
                </h3>
                <button className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaCog className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problemTypes.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProblemTypeCard {...problem} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Recent Activity
              </h3>
              <button className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                <FaCog className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {recentActivities.map((activity, index) => (
                <RecentActivity key={index} activity={activity} />
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              View All Activity
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



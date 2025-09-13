"use client"

import { motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { FaClipboardList, FaChartLine, FaUsers, FaBell, FaCheckCircle, FaCog } from 'react-icons/fa';
import { useState } from 'react';

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

const RecentActivity = ({ activity }: { activity: { type: string; title: string; time: string; status: string } }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all duration-300 group"
  >
    <div className={`w-2 h-2 rounded-full ${activity.status === 'resolved' ? 'bg-green-500' : 'bg-orange-500'}`} />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{activity.title}</p>
      <p className="text-xs text-gray-500">{activity.type}</p>
    </div>
    <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-600">{activity.time}</div>
  </motion.div>
);

type TimelineData = {
  day: string;
  resolved: number;
  total: number;
  pending: number;
};

const TimelineChart = ({ data }: { data: TimelineData[] }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const maxValue = Math.max(...data.map(d => d.total));

  return (
    <div className="h-[300px] flex items-end justify-between gap-2">
      {data.map((item, index) => {
        const totalHeight = (item.total / maxValue) * 100;
        const resolvedHeight = (item.resolved / item.total) * 100;

        return (
          <div 
            key={index} 
            className="w-full flex flex-col items-center"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="relative w-full group">
              {/* Tooltip */}
              {hoveredBar === index && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 z-10">
                  <div className="text-center font-medium mb-1">{item.day}</div>
                  <div>Total: {item.total}</div>
                  <div className="text-green-400">Resolved: {item.resolved}</div>
                  <div className="text-orange-400">Pending: {item.pending}</div>
                  <div className="text-blue-400">
                    {Math.round((item.resolved / item.total) * 100)}% Complete
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="border-solid border-t-gray-800 border-t-8 border-x-transparent border-x-8 border-b-0" />
                  </div>
                </div>
              )}
              
              {/* Background Bar */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: `${totalHeight}%` }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1 
                }}
                className="bg-blue-100 rounded-t-lg w-full relative overflow-hidden"
                style={{ height: `${totalHeight}%` }}
              >
                {/* Striped Pattern for Pending */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200/50"
                  style={{
                    backgroundSize: '10px 10px',
                    backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)'
                  }}
                />
                
                {/* Resolved Bar */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${resolvedHeight}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1 + 0.2 
                  }}
                  className="bg-blue-500 rounded-t-lg w-full absolute bottom-0 hover:brightness-110 transition-all duration-200"
                  style={{ height: `${resolvedHeight}%` }}
                />
              </motion.div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs font-medium text-gray-600">{item.day}</p>
              <p className="text-xs text-gray-400">{item.resolved}/{item.total}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MunicipalDashboardSection = () => {
  const stats = [
    { icon: <FaClipboardList className="w-6 h-6" />, title: "Total Reports", value: "1,284", trend: { value: 12, isPositive: true } },
    { icon: <FaCheckCircle className="w-6 h-6" />, title: "Resolved Issues", value: "876", trend: { value: 8, isPositive: true } },
    { icon: <FaUsers className="w-6 h-6" />, title: "Active Staff", value: "32", trend: { value: 2, isPositive: true } },
    { icon: <FaBell className="w-6 h-6" />, title: "Pending Reviews", value: "18", trend: { value: 5, isPositive: false } }
  ];

  const recentActivities = [
    { type: "Infrastructure", title: "Pothole repair on Main St", time: "2h ago", status: "resolved" },
    { type: "Public Safety", title: "Broken streetlight reported", time: "4h ago", status: "pending" },
    { type: "Sanitation", title: "Waste collection delay", time: "6h ago", status: "resolved" },
    { type: "Parks", title: "Tree maintenance request", time: "8h ago", status: "pending" }
  ];

  // Mock data for the chart
  const chartData = [
    { day: 'Mon', resolved: 45, total: 65 },
    { day: 'Tue', resolved: 52, total: 70 },
    { day: 'Wed', resolved: 61, total: 85 },
    { day: 'Thu', resolved: 48, total: 75 },
    { day: 'Fri', resolved: 38, total: 50 },
    { day: 'Sat', resolved: 28, total: 40 },
    { day: 'Sun', resolved: 35, total: 45 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm tracking-wide mb-3">
              Municipal Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Efficient <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Issue Management</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empower municipal staff with powerful tools to track, manage, and resolve community issues effectively.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Stats and Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats grid */}
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

            {/* Chart section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Issue Resolution Timeline
                </h3>
                <select className="text-sm border rounded-lg px-3 py-2 text-gray-600 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              <TimelineChart data={chartData.map(item => ({
                ...item,
                pending: item.total - item.resolved
              }))} />
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Resolved</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-blue-100 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-stripes"></div>
                  </div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Recent Activity */}
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
    </section>
  );
};

export default MunicipalDashboardSection;
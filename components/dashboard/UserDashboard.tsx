"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCheckCircle, FaUsers, FaBell, FaCoins, FaShoppingCart, FaTag } from 'react-icons/fa';

type WeekData = {
  week: string;
  reports: number;
};

type ReportData = {
  id: string;
  issue: string;
  location: string;
  status: string;
  tokens: string;
};

type RewardData = {
  name: string;
  description: string;
  tokens: number;
};

const StatCard = ({ icon, title, value, sub, color, bgColor }: { icon: React.ReactNode; title: string; value: string; sub?: string; color?: string; bgColor?: string }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-8 h-8 rounded-lg ${bgColor || 'bg-blue-100'} flex items-center justify-center ${color ? 'text-white' : 'text-blue-600'}`}>
        {icon}
      </div>
      <p className="text-gray-500 text-xs">{title}</p>
    </div>
    <div className="flex items-center gap-2">
      <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      {sub && <div className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">{sub}</div>}
    </div>
  </div>
);

export default function UserDashboard() {
  const stats = [
    { icon: <FaClipboardList className="w-4 h-4" />, title: 'My Reports', value: '12', sub: '+3 this month', bgColor: 'bg-blue-100' },
    { icon: <FaCheckCircle className="w-4 h-4" />, title: 'Resolved Reports', value: '8', sub: '75% success rate', bgColor: 'bg-green-100' },
    { icon: <FaBell className="w-4 h-4" />, title: 'Pending Reports', value: '4', sub: 'being reviewed', bgColor: 'bg-orange-100' },
    { icon: <FaCoins className="w-4 h-4" />, title: 'Tokens Earned', value: '1,250', sub: '+150 this week', bgColor: 'bg-yellow-400', color: 'text-white' }
  ];

  // Use client-side only data generation to avoid hydration mismatch
  const [weeklyData, setWeeklyData] = useState<WeekData[]>([
    { week: 'Week 1', reports: 0 },
    { week: 'Week 2', reports: 0 },
    { week: 'Week 3', reports: 0 },
    { week: 'Week 4', reports: 0 }
  ]);
  
  // Generate random data after component mounts to avoid hydration mismatch
  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window !== 'undefined') {
      const randomData = [
        { week: 'Week 1', reports: Math.floor(Math.random() * 5) + 2 },
        { week: 'Week 2', reports: Math.floor(Math.random() * 5) + 2 },
        { week: 'Week 3', reports: Math.floor(Math.random() * 5) + 2 },
        { week: 'Week 4', reports: Math.floor(Math.random() * 5) + 2 }
      ];
      
      setWeeklyData(randomData);
    }
  }, []);

  const recentReports: ReportData[] = [
    { id: '#1234', issue: 'Pothole', location: 'Main St & 5th Ave', status: 'Resolved', tokens: '+25 tokens' },
    { id: '#1235', issue: 'Broken Streetlight', location: 'Park Ave & 12th St', status: 'In Progress', tokens: '+10 tokens' },
    { id: '#1236', issue: 'Graffiti', location: 'Community Center', status: 'Pending', tokens: '+10 tokens' }
  ];

  const availableRewards: RewardData[] = [
    { name: 'Coffee Voucher', description: 'Local Coffee Shop', tokens: 50 },
    { name: 'Restaurant Coupon', description: '20% Off at Local Bistro', tokens: 100 },
    { name: 'Community Merchandise', description: 'Civic Connect T-Shirt', tokens: 200 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 mb-1">My Dashboard</h1>
        <p className="text-sm text-gray-600 mb-6">Track your community reports, earn tokens for your contributions, and redeem rewards.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>

      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Civic Tokens</h3>
          <div className="flex items-center gap-2"><FaCoins className="w-4 h-4" /><span className="font-bold">1,250</span></div>
        </div>
        <p className="text-sm text-blue-100 mb-4">Earn and spend tokens for community engagement</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-white">How to Earn</h4>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>• Submit a report: +10 tokens</li>
              <li>• Report gets resolved: +25 tokens</li>
              <li>• Join community events: +15 tokens</li>
              <li>• Complete feedback surveys: +5 tokens</li>
            </ul>
          </div>
          <div className="bg-blue-500/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-white">Redeem Rewards</h4>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>• Coffee vouchers: 50 tokens</li>
              <li>• Local restaurant coupons: 100 tokens</li>
              <li>• Community merchandise: 200 tokens</li>
              <li>• Event tickets: 150 tokens</li>
            </ul>
          </div>
          <div className="bg-blue-500/30 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-white">Token Store</h4>
            <button className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors rounded-lg py-2 px-4 text-sm font-medium mb-2 flex items-center justify-center">
              <FaShoppingCart className="w-4 h-4 mr-2" />
              Browse Store
            </button>
            <button className="w-full bg-blue-400/30 text-white hover:bg-blue-400/40 border border-blue-400/40 rounded-lg py-2 px-4 text-sm font-medium">
              View Rewards
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">My Activity This Month</h3>
        
        <div className="flex items-stretch justify-between gap-4 mb-4">
          {weeklyData.map((week, idx) => {
            const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className={`${colors[idx]} w-full h-24 rounded-lg flex items-center justify-center text-white font-medium`}>
                  {week.reports} resolved
                </div>
                <p className="text-xs font-medium text-gray-600 mt-2">{week.week}</p>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-2">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded" /><span className="text-xs text-gray-600">Total Reports</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded" /><span className="text-xs text-gray-600">Resolved Reports</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">My Recent Reports</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b">
                  <th className="pb-2 text-left font-medium">REPORT ID</th>
                  <th className="pb-2 text-left font-medium">ISSUE</th>
                  <th className="pb-2 text-left font-medium">LOCATION</th>
                  <th className="pb-2 text-left font-medium">STATUS</th>
                  <th className="pb-2 text-left font-medium">TOKENS</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-3 text-sm font-medium">{report.id}</td>
                    <td className="py-3 text-sm">{report.issue}</td>
                    <td className="py-3 text-sm text-gray-600">{report.location}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        report.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                        report.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-blue-600 font-medium">{report.tokens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4">
            <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-lg py-2 px-4 text-sm font-medium">
              View All Reports
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Rewards</h3>
          
          <div className="space-y-4">
            {availableRewards.map((reward, idx) => (
              <div key={idx} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-blue-600">{reward.name}</h4>
                  <div className="text-blue-600 font-bold">{reward.tokens}</div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                <div className="text-xs text-gray-500 mb-3">tokens</div>
                <button className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors rounded-lg py-2 px-4 text-sm font-medium">
                  Redeem Now
                </button>
              </div>
            ))}
            
            <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-lg py-2 px-4 text-sm font-medium mt-2">
              View All Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

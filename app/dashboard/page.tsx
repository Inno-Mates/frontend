'use client';

import { useState } from 'react';
import UserDashboard from '@/components/dashboard/UserDashboard';
import MunicipalDashboard from '@/components/dashboard/MunicipalDashboard';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'user' | 'government'>('user');

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-10 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
                  <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">Switch between User, Government, and Municipal dashboards</p>
          </div>
          <div className="flex gap-2">
            {[
              { key: 'user', label: 'User' },
              { key: 'government', label: 'Government' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'user' && (
          <UserDashboard />
        )}
        {activeTab === 'government' && (
          <MunicipalDashboard />
        )}
      </div>
    </div>
  );
}
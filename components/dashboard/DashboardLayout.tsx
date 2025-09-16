'use client';

import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

type UserRole = 'user' | 'government';

interface DashboardLayoutProps {
  children: React.ReactNode;
  initialRole?: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export default function DashboardLayout({
  children,
  initialRole = 'user',
  onRoleChange,
}: DashboardLayoutProps) {
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleRole = () => {
    setIsSwitching(true);
    // Add a small delay for smooth transition
    setTimeout(() => {
      const newRole = initialRole === 'user' ? 'government' : 'user';
      onRoleChange(newRole);
      setIsSwitching(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {initialRole === 'user' ? 'My Dashboard' : 'Municipal Dashboard'}
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              {initialRole === 'user' 
                ? 'Track your community reports and earn rewards'
                : 'Issue management and analytics for municipal staff'}
            </p>
          </div>
          
          <button
            onClick={toggleRole}
            disabled={isSwitching}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:shadow-sm"
          >
            <FaExchangeAlt className="text-blue-600" />
            <span>Switch to {initialRole === 'user' ? 'Government' : 'User'} View</span>
          </button>
        </div>

        <div className={`transition-opacity duration-200 ${isSwitching ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

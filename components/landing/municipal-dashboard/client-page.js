'use client';

import dynamic from 'next/dynamic';

// Import the MunicipalDashboardSection component with dynamic import and disable SSR
const MunicipalDashboardSection = dynamic(
  () => import('./MunicipalDashboardSection'),
  { ssr: false }
);

export default function ClientMunicipalDashboardSection() {
  return <MunicipalDashboardSection />;
}
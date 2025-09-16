'use client';

import dynamic from 'next/dynamic';

// Dynamically import the MobileAppSection component with SSR disabled
// Using dynamic import to ensure animations work properly on the client side
const MobileAppSection = dynamic(
  () => import('./MobileAppSection'),
  { ssr: false }
);

const ClientMobileAppSection = () => {
  return <MobileAppSection />;
};

export default ClientMobileAppSection;
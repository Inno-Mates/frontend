'use client';

import dynamic from 'next/dynamic';

// Dynamically import client components with no SSR
const ClientHowItWorksPage = dynamic(() => import('./client-page.js'), { ssr: false });

export default function HowItWorksPage() {
  return <ClientHowItWorksPage />;
}
'use client';

import dynamic from 'next/dynamic';

// Import the HeroSection component with dynamic import and disable SSR
const HeroSection = dynamic(
  () => import('./HeroSection'),
  { ssr: false }
);

export default function ClientHeroSection() {
  return <HeroSection />;
}
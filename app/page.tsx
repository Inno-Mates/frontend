import ClientHeroSection from '@/components/landing/hero/client-hero';
import HowItWorksSection from '@/components/landing/how-it-works/HowItWorksSection';
import ImpactSection from '@/components/landing/impact/ImpactSection';
import IssueCategoriesSection from '@/components/landing/issue-categories/IssueCategoriesSection';
import CommunitySection from '@/components/landing/community/CommunitySection';
import MobileAppSection from '@/components/landing/mobile-app/MobileAppSection';
import ClientMunicipalDashboardSection from '@/components/landing/municipal-dashboard/client-page';

export default function Home() {
  return (
    <>
      <ClientHeroSection />
      <HowItWorksSection />
      <ImpactSection />
      <IssueCategoriesSection />
      <CommunitySection />
      <MobileAppSection />
      <ClientMunicipalDashboardSection />
      {/* Other sections will go here */}
    </>
  );
}

import HeroSection from '@/components/landing/hero/HeroSection';
import HowItWorksSection from '@/components/landing/how-it-works/HowItWorksSection';
import ImpactSection from '@/components/landing/impact/ImpactSection';
import IssueCategoriesSection from '@/components/landing/issue-categories/IssueCategoriesSection';
import CommunitySection from '@/components/landing/community/CommunitySection';
import MobileAppSection from '@/components/landing/mobile-app/MobileAppSection';
import MunicipalDashboardSection from '@/components/landing/municipal-dashboard/MunicipalDashboardSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      {/* <ImpactSection /> */}
      <IssueCategoriesSection />
      <CommunitySection />
      <MobileAppSection />
      <MunicipalDashboardSection />
      {/* Other sections will go here */}
    </>
  );
}

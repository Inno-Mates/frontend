import HeroSection from '@/components/landing/hero/HeroSection';
import HowItWorksSection from '@/components/landing/how-it-works/HowItWorksSection';
import ImpactSection from '@/components/landing/impact/ImpactSection';
import IssueCategoriesSection from '@/components/landing/issue-categories/IssueCategoriesSection';
import CommunitySection from '@/components/landing/community/CommunitySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ImpactSection />
      <IssueCategoriesSection />
      <CommunitySection />
      {/* Other sections will go here */}
    </>
  );
}

'use client';

import { Hero } from '@/components/HeroSection/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { EventSectionMain } from '@/components/EventsSection/wrapperComponents/Main';
import { StatisticsMain } from '@/components/Statistics/wrapper/Main';
import { SponsorSection } from '@/components/Sponsors/sponsors';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUsMain />
      <StatisticsMain />
      <EventSectionMain />
      <SponsorSection />
    </>
  );
};

export default Page;

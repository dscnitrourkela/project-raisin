'use client';

import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { Footer } from '@/components/Footer/Footer';
import { EventSectionMain } from '@/components/EventsSection/wrapperComponents/Main';
import { StatisticsMain } from '@/components/Statistics/wrapper/Main';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUsMain />
      <StatisticsMain />
      <EventSectionMain />
      <Footer />
    </>
  );
};

export default Page;

'use client';

import Navbar from '@/components/Marginals/navbar/navbar';
import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { Footer } from '@/components/Footer/Footer';
import { EventSectionMain } from '@/components/EventsSection/wrapperComponents/Main';
import { StatisticsMain } from '@/components/Statistics/wrapper/Main';
import SponsorSection from '@/components/Sponsers/sponsors';

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

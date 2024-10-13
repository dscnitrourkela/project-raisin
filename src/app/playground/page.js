'use client';

import Navbar from '@/components/Marginals/navbar/navbar';
import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { Footer } from '@/components/Footer/Footer';
import { EventSectionMain } from '@/components/EventsSection/wrapperComponents/Main';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsMain />
      <EventSectionMain />
      <Footer />
    </>
  );
};

export default Page;

'use client';

import Navbar from '@/components/Marginals/navbar/navbar';
import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { EventCarousalMain } from '@/components/eventsCarousel/layoutComponents/Main';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsMain />
      <EventCarousalMain />
    </>
  );
};

export default Page;

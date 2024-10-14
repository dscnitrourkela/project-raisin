'use client';

import Navbar from '@/components/Marginals/navbar/navbar';
import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { EventCarousalMain } from '@/components/eventsCarousel/layoutComponents/Main';
import { Footer } from '@/components/Footer/Footer';
import EventsPage from '@/components/EventsPage';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUsMain />
      <EventsPage />
    </>
  );
};

export default Page;

'use client';

// import { NavBar } from '@/components/NavBar/Nav';
import Hero from '@/components/Hero Section/Hero';
import Navbar from '@/components/Marginals/navbar/navbar';

import { EventCarousalMain } from '@/components/eventsCarousel/layoutComponents/Main';
// import { Footer } from '@/components/Footer/Footer';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <EventCarousalMain />
      {/* <Footer /> */}
    </>
  );
};

export default Page;

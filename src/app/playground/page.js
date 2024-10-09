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

const styles = {
  con2: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    width: 'full',
    height: 'full',
    gap: '10px',
    margin: '20px 0',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: 'full',
    height: 'full',
  },
};

export default Page;

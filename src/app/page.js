'use client';

import { Hero } from '@/components/HeroSection/Hero';
import { AboutUsMain } from '@/components/AboutUs/Main';
import { EventSectionMain } from '@/components/EventsSection/wrapperComponents/Main';
import { StatisticsMain } from '@/components/Statistics/wrapper/Main';
import { SponsorSection } from '@/components/Sponsors/sponsors';
import SEO from '@/components/SEO';
import EventStructuredData from '@/components/EventStructureData';

const Page = () => {
  return (
    <>
      <SEO
        title='INNOVISION 2024 | NIT ROURKELA'
        description='Join us for the biggest college event of the year! Featuring workshops, competitions, and networking opportunities.'
        ogImage='https://yourcollege.edu/event-image.jpg'
        ogUrl='https://yourcollege.edu/awesome-event-2024'
      />
      <EventStructuredData
        name='Awesome College Event 2024'
        startDate='2024-09-15T09:00'
        endDate='2024-09-17T18:00'
        location='Your College Campus'
        description='Join us for the biggest college event of the year!'
        organizerName='Your College Name'
      />
      <Hero />
      <AboutUsMain />
      <StatisticsMain />
      <EventSectionMain />
      <SponsorSection />
    </>
  );
};

export default Page;

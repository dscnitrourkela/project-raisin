import React from 'react';
import { About, EventSection, FaqSection, FlexSection, HeroSection, Layout } from '../components';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <FlexSection />
      <EventSection />
      <FaqSection id='faq' />
    </Layout>
  );
}

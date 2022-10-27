/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { about } from '../../config/content';
import { About, EventSection, FaqSection, FlexSection, HeroSection, Layout } from '../components';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About {...about} />
      <FlexSection />
      <EventSection />
      <FaqSection id='faq' />
    </Layout>
  );
}

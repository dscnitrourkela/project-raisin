/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Helmet } from 'react-helmet';
import { about } from '../../config/content';
import { About, EventSection, FaqSection, FlexSection, HeroSection, Layout } from '../components';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Home</title>
        <meta name='description' content='This is home page' />
      </Helmet>
      <Layout>
        <HeroSection />
        <About {...about} />
        <FlexSection />
        <EventSection />
        <FaqSection id='faq' />
      </Layout>
    </>
  );
}

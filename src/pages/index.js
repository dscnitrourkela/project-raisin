/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Helmet } from 'react-helmet';
import { About, FAQSection, SponsorSection, Ticker } from '../components';
import AboutUs from '../../config/content/AboutUs';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Home</title>
        <meta name='description' content='This is home page' />
      </Helmet>
      <Ticker />
      <About title={AboutUs.title} desc={AboutUs.desc} link={AboutUs.link} />
      <SponsorSection />
      <FAQSection />
    </>
  );
}

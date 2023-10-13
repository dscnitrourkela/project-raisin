/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  About,
  EventSection,
  FAQSection,
  HeroSection,
  SponsorSection,
  Ticker,
} from '../components';
import AboutUs from '../../config/content/AboutUs';

const Home = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Innovision | Home</title>
      <meta name='description' content='This is home page' />
    </Helmet>
    <HeroSection />
    <Ticker />
    <About title={AboutUs.title} desc={AboutUs.desc} link={AboutUs.link} />
    <EventSection />
    <SponsorSection />
    <FAQSection />
  </>
);

export default Home;

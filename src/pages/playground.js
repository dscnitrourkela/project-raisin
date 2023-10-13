/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection/HeroSection';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <HeroSection />
  </>
);

export default Playground;

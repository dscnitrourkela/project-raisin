/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import SponsorSection from '../components/SponsorSection/SponsorSection';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <SponsorSection />
  </>
);

export default Playground;

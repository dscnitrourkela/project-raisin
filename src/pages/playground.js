/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import { About } from '../components/shared';
import AboutUs from '../../config/content/AboutUs';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <About title={AboutUs.title} desc={AboutUs.desc} link={AboutUs.link} />
  </>
);

export default Playground;

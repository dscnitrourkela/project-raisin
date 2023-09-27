/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import Ticker from '../components/Ticker/Ticker';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <Ticker />
  </>
);

export default Playground;

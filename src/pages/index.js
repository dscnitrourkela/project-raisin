/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FAQSection, Ticker } from '../components';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Home</title>
        <meta name='description' content='This is home page' />
      </Helmet>
      <Ticker />
      <FAQSection />
    </>
  );
}

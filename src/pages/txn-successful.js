import React from 'react';
import { Helmet } from 'react-helmet';
import { SuccessCard } from '../components';

export default function Successful() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Success</title>
        <meta name='description' content='This is success page' />
      </Helmet>
      <SuccessCard />
    </>
  );
}

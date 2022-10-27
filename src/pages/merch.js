import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, MerchSection } from '../components';

export default function Merch() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Merch</title>
        <meta name='description' content='This is merch page' />
      </Helmet>
      <Layout>
        <MerchSection />
      </Layout>
    </>
  );
}

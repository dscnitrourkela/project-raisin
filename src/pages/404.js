import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNotFoundCard } from '../components';

export default function Error404() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Page not found</title>
        <meta name='description' content='This is 404 page' />
      </Helmet>
      <Layout>
        <PageNotFoundCard />
      </Layout>
    </>
  );
}

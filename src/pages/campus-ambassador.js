import React from 'react';
import { Helmet } from 'react-helmet';
import { CaHeroSection, CaPerksSection, CaWorkFlowSection, Layout } from '../components';

export default function CaPage() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Campus Ambassador</title>
        <meta name='description' content='This is campus ambassador page' />
      </Helmet>
      <Layout>
        <CaHeroSection />
        {/* <CaFlexSection /> */}
        <CaWorkFlowSection />
        <CaPerksSection />
      </Layout>
    </>
  );
}

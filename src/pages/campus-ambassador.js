import React from 'react';
import { CaHeroSection, CaPerksSection, CaWorkFlowSection, Layout } from '../components';

export default function CaPage() {
  return (
    <Layout>
      <CaHeroSection />
      {/* <CaFlexSection /> */}
      <CaWorkFlowSection />
      <CaPerksSection />
    </Layout>
  );
}

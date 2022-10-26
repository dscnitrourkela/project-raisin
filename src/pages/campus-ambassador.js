import React from 'react';
import {
  CaEligibilty,
  CaFlexSection,
  CaHeroSection,
  CaPerksSection,
  CaWorkFlowSection,
  FaqSection,
  Layout,
} from '../components';

export default function CaPage() {
  return (
    <Layout>
      <CaHeroSection />
      <CaFlexSection />
      <CaWorkFlowSection />
      <CaPerksSection />
      <CaEligibilty />
      <FaqSection />
    </Layout>
  );
}

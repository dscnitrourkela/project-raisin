import React from 'react';
import { sponsorData } from '@/config/content/Sponsers/sponsers';
import { SponsorWrapper, SponsorContainer, SponsorRow, HalfColumn } from './sponsers.styles';
import { SponsorCategory } from './sponsorCategory';
import { Header } from './Header';

const SponsorSection = () => {
  return (
    <>
      <Header />
      <SponsorWrapper id='sponsers'>
        <SponsorContainer>
          <SponsorCategory title='Alpha Sponsors' sponsors={sponsorData.alpha} />
          <SponsorCategory title='Beta Sponsors' sponsors={sponsorData.beta} />
          <SponsorRow>
            <HalfColumn>
              <SponsorCategory title='Gamma Sponsors' sponsors={sponsorData.gamma} />
            </HalfColumn>
            <HalfColumn>
              <SponsorCategory title='Delta Sponsors' sponsors={sponsorData.delta} />
            </HalfColumn>
          </SponsorRow>
        </SponsorContainer>
      </SponsorWrapper>
    </>
  );
};

export default SponsorSection;

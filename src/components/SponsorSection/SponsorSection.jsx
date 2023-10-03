import React from 'react';
import {
  SponsorContainer,
  SponsorLogo,
  SponsorSectionContainer,
  SponsorText,
  SponsorWrapper,
  TitleSponsorContainer,
  TitleSponsorLogo,
  TitleSponsorWrapper,
} from './styles';
import Sponsors from '../../../config/content/sponsors';
import SectionLayout from '../shared/SectionLayout';

const { titleSponsor, sponsors } = Sponsors;
const SponsorSection = () => (
  <SectionLayout>
    <SponsorSectionContainer>
      <TitleSponsorWrapper>
        {titleSponsor.map(({ id, logo, alt, link, color }) => (
          <TitleSponsorContainer key={id}>
            <a href={link} target='_blank noopener noreferer'>
              <TitleSponsorLogo src={logo} alt={alt} />
            </a>
            <SponsorText color={color}>Title Sponsor</SponsorText>
          </TitleSponsorContainer>
        ))}
      </TitleSponsorWrapper>
      <SponsorWrapper>
        {sponsors.map(({ id, logo, alt, link, type, color }) => (
          <SponsorContainer key={id}>
            <a href={link} target='_blank noopener noreferer'>
              <SponsorLogo src={logo} alt={alt} />
            </a>
            <SponsorText color={color}>{type}</SponsorText>
          </SponsorContainer>
        ))}
      </SponsorWrapper>
    </SponsorSectionContainer>
  </SectionLayout>
);
export default SponsorSection;

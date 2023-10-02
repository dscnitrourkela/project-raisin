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

const { titleSponsor, sponsors } = Sponsors;
const SponsorSection = () => (
  <SponsorSectionContainer>
    <TitleSponsorWrapper>
      {titleSponsor.map(({ id, logo, alt, link, color }) => (
        <TitleSponsorContainer key={id}>
          <a href={link} target='_blank noopener noreferer'>
            <TitleSponsorLogo src={logo} alt={alt} />
            <SponsorText color={color}>Title Sponsor</SponsorText>
          </a>
        </TitleSponsorContainer>
      ))}
    </TitleSponsorWrapper>
    <SponsorWrapper>
      {sponsors.map(({ id, logo, alt, link, type, color }) => (
        <SponsorContainer key={id}>
          <a href={link} target='_blank noopener noreferer'>
            <SponsorLogo src={logo} alt={alt} />
            <SponsorText color={color}>{type}</SponsorText>
          </a>
        </SponsorContainer>
      ))}
    </SponsorWrapper>
  </SponsorSectionContainer>
);
export default SponsorSection;

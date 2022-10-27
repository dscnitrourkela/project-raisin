import React from 'react';
import { caHero } from '../../../config/content';
import { Body1, Container, Heading3, Heading4, LinkButton } from '../shared';
import {
  FlexCard,
  FlexContainer,
  FlexLogo,
  HeroContainer,
  HeroHeading,
  HeroImage,
  HeroImageContain,
  HeroImageContainer,
  HeroTextContainer,
  SectionContainer,
} from './styles';

const CaHeroSection = () => (
  <SectionContainer>
    <Container>
      <HeroContainer>
        <HeroTextContainer>
          <Heading4 style={{ color: 'var(--text-color-tertiary)' }}>{caHero.text.head}</Heading4>
          <HeroHeading bold>{caHero.text.title}</HeroHeading>
          <Heading3>{caHero.text.eventName}</Heading3>
          <LinkButton link='/' text='sign up' />
          <FlexContainer>
            {caHero.flex.map(({ id, logo, title, number }) => (
              <FlexCard key={id}>
                <FlexLogo src={logo.src} alt={logo.alt} />
                <Body1 bold style={{ color: 'var(--text-color-secondary)' }}>
                  {number}
                  {'+'}
                </Body1>
                <Body1 style={{ color: 'var(--text-color-tertiary)' }}>{title}</Body1>
              </FlexCard>
            ))}
          </FlexContainer>
        </HeroTextContainer>
        <HeroImageContainer>
          <HeroImageContain>
            <HeroImage src={caHero.image.src} alt={caHero.image.alt} />
            <div className='bg' />
          </HeroImageContain>
        </HeroImageContainer>
      </HeroContainer>
    </Container>
  </SectionContainer>
);

export default CaHeroSection;

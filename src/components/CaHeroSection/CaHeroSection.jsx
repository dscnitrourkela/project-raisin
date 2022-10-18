import React from 'react';
import { caHero } from '../../../config/content';
import {
  Body1,
  Container,
  Heading2,
  Heading3,
  Heading4,
  LinkButton,
  SectionContainer,
} from '../shared';
import {
  FlexCard,
  FlexContainer,
  FlexLogo,
  HeroContainer,
  HeroImage,
  HeroImageContain,
  HeroImageContainer,
  HeroTextContainer,
} from './styles';

const CaHeroSection = () => (
  <SectionContainer>
    <Container>
      <HeroContainer>
        <HeroTextContainer>
          <Heading4 style={{ color: 'var(--text-color-tertiary)' }}>{caHero.text.head}</Heading4>
          <Heading2 bold>{caHero.text.title}</Heading2>
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

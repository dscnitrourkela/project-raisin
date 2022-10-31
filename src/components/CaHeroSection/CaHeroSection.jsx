/* eslint-disable arrow-body-style */
import React from 'react';
import { caHero } from '../../../config/content';
import { Body1, Container, Heading3, Heading4, ModalBox, Body2 } from '../shared';
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

const CaHeroSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <SectionContainer>
      <Container>
        <HeroContainer>
          <HeroTextContainer>
            <Heading4 style={{ color: 'var(--text-color-tertiary)' }}>{caHero.text.head}</Heading4>
            <HeroHeading bold>{caHero.text.title}</HeroHeading>
            <Heading3>{caHero.text.eventName}</Heading3>
            <Body2>
              Each successful registered user serves as a campus representative. To onboard new
              users, share your{' '}
              <u>
                <b>mobile number</b>
              </u>{' '}
              as a referral code.
            </Body2>
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

      <ModalBox isOpen={open} close={() => setOpen(false)}>
        <h1>Hello World</h1>
      </ModalBox>
    </SectionContainer>
  );
};

export default CaHeroSection;

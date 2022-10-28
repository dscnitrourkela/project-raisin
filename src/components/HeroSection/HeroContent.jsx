import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { hero } from '../../../config/content';
import AuthButton from '../marginals/Navbar/AuthButton';

const rotating = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const ContentContainer = styled.div`
  ${tw`
  md:mt-6
  flex
  flex-col
  items-center
  gap-16
  `}
`;

const HeroImageOuterContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-5
  `}
`;

const HeroImageContainer = styled.div`
  ${tw`
    max-w-full
    mx-auto
    flex
    justify-center
    gap-4
  `}
  .round {
    animation: ${rotating} 6s linear infinite;
  }
`;

const HeroImageSpecial = styled.img`
  ${tw`
    1xsm:h-[140px]
    2xsm:h-[100px]
    object-contain
  `}
`;

const HeroImage = styled.img`
  ${tw`
    max-w-full
    object-contain
  `}
`;

const HeroDates = styled.h3`
  ${tw`
    flex
    md:text-2xl
    text-4xl
    font-bold
    text-color-primary
  `}
`;

const HeroContent = () => (
  <ContentContainer>
    <HeroImageOuterContainer>
      <HeroImageContainer>
        <HeroImageSpecial src={hero.mainText.left.src} alt={hero.mainText.left.alt} />
        <HeroImageSpecial
          className='round'
          src={hero.mainText.right.src}
          alt={hero.mainText.right.alt}
        />
      </HeroImageContainer>
      <HeroImage src={hero.mainText.src} alt={hero.mainText.alt} />
    </HeroImageOuterContainer>
    <HeroDates>{hero.date}</HeroDates>
    <AuthButton text='REGISTER' link='/register' />
  </ContentContainer>
);

export default HeroContent;

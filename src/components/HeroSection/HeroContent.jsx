import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { hero } from '../../../config/content';
import { LinkButton } from '../shared';

const ContentContainer = styled.div`
  ${tw`
  md:mt-6
  flex
  flex-col
  items-center
  gap-16
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
    <HeroImage src={hero.mainText.src} alt={hero.mainText.alt} />
    <HeroDates>{hero.date}</HeroDates>
    <LinkButton link='/' text='register' />
  </ContentContainer>
);

export default HeroContent;

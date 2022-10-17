import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../shared';
import HeroContent from './HeroContent';

const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
  `}
`;

const HeroContainer = styled.div`
  ${tw`
    items-center
    justify-center
    flex
  `}
`;

const HeroSection = () => (
  <SectionContainer>
    <Container>
      <HeroContainer>
        <HeroContent />
      </HeroContainer>
    </Container>
  </SectionContainer>
);
export default HeroSection;

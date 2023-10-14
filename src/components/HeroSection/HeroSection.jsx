import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SectionContainer } from './styles';
import HeroContent from './HeroContent';
import VideoBackground from './VideoBackground';

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
    w-11/12
    lg:max-w-7xl
    max-w-full
    mx-auto
    my-0
    p-0
    overflow-y-hidden
    flex
    items-center
    justify-center
  `}
`;

function HeroSection() {
  return (
    <SectionContainer className='flex items-center'>
      <VideoBackground />
      <Container>
        <HeroContent />
      </Container>
    </SectionContainer>
  );
}

export default HeroSection;

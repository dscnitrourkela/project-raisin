import React from 'react';
import { Container } from '../shared';
import { SectionContainer } from './styles';
import HeroContent from './HeroContent';
import VideoBackground from './VideoBackground';

function HeroSection() {
  return (
    <SectionContainer>
      <VideoBackground />
      <Container>
        <HeroContent />
      </Container>
    </SectionContainer>
  );
}

export default HeroSection;

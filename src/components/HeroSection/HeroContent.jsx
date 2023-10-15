import React from 'react';
import { HeroContainer, HeroTitle, Year, Dates, DatesDiv, Line } from './styles';
import HeroButton from './HeroButton';

function HeroContent() {
  return (
    <HeroContainer>
      <HeroTitle>INNOVISION</HeroTitle>
      <Year>2023</Year>
      <DatesDiv>
        <Line />
        <Dates>3rd-5th November 2023</Dates>
        <Line />
      </DatesDiv>
      <HeroButton />
    </HeroContainer>
  );
}

export default HeroContent;

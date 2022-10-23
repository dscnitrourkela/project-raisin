import React from 'react';
import { caFlex } from '../../../config/content';
import { Container, SectionContainer } from '../shared';
import { BackgroundContainer, FlexHeading, FlexTagLine } from './styles';

const CaFlexSection = () => (
  <SectionContainer>
    <BackgroundContainer>
      <Container>
        <FlexHeading>{caFlex.text}</FlexHeading>
        <FlexTagLine bold>{caFlex.title}</FlexTagLine>
      </Container>
    </BackgroundContainer>
  </SectionContainer>
);

export default CaFlexSection;

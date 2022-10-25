import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, Heading3 } from '../shared';

const CardContainer = styled.div`
  width: 400px;
  max-width: 328px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
  ${tw`
   h-auto
   py-8
   md:py-6
   bg-background-dark
   text-center
   rounded-4xl
 `};
`;

const Heading = styled(Heading3)`
  ${tw`
  mb-6
  md:mb-4
  `}
`;

const PerksCard = () => (
  <CardContainer>
    <Heading>Certificates</Heading>
    <Body1>1000+ Registrations</Body1>
  </CardContainer>
);

export default PerksCard;

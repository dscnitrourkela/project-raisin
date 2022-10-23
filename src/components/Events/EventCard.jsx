import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import logo from '../../../images/logo.png';
import { Body1, Body2, ButtonText, Heading4, LinkButton } from '../shared';

const CardContainer = styled.div`
  width: 400px;
  max-width: 328px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
  ${tw`
     h-auto
     p-4
     md:p-3
     bg-background-dark
   `};
`;
const CardImage = styled.img`
  ${tw`
  w-full
  `}
`;

const CardTextContainer = styled.div`
  ${tw`
  mt-4
  md:mt-3
   `}
`;

const CardTitleContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
`}
`;

const EventDate = styled(Body1)`
  ${tw`
    text-color-secondary
  `}
`;

const EventClub = styled(Body2)`
  ${tw`
  text-color-secondary
`}
`;

const EventPrizes = styled(ButtonText)`
  margin-left: -16px;
  @media (max-width: 768px) {
    margin-left: -12px;
  }
  ${tw`
    my-4
    text-color-primary
    py-2
    px-4
    md:px-3
    bg-background-darker
    w-max
  `}
`;

const EventCard = () => (
  <CardContainer>
    <CardImage src={logo} />
    <CardTextContainer>
      <CardTitleContainer>
        <Heading4>RoboWars</Heading4>
        <EventDate>11th November</EventDate>
      </CardTitleContainer>
      <EventClub>udaan club</EventClub>
      <EventPrizes>CASH PRIZE UPTO 50K</EventPrizes>
      <CardTitleContainer>
        <ButtonText> Know More</ButtonText>
        <LinkButton text='Book Slots' link='/register' />
      </CardTitleContainer>
    </CardTextContainer>
  </CardContainer>
);

export default EventCard;

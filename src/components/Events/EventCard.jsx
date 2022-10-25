/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import EventDetailsModal from '../EventDetailsModal/EventDetailsModal';
import { Body1, Body2, Button2, ButtonText, Heading4, LinkButton, ModalBox } from '../shared';

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
     rounded-xl
   `};
`;
const CardImage = styled.img`
  ${tw`
  w-full
  rounded-lg
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

const EventCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CardContainer>
        <CardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoLJjZ41ReLUaOGGMJp1748jh1stdXSitPQ&usqp=CAU' />
        <CardTextContainer>
          <CardTitleContainer>
            <Heading4>RoboWars</Heading4>
            <EventDate>11th November</EventDate>
          </CardTitleContainer>
          <EventClub>udaan club</EventClub>
          <EventPrizes>CASH PRIZE UPTO 50K</EventPrizes>
          <CardTitleContainer>
            <Button2 method={() => setModalOpen(true)} text='Know More' />
            <LinkButton text='Book Slots' link='/register' />
          </CardTitleContainer>
        </CardTextContainer>
      </CardContainer>
      <ModalBox isOpen={modalOpen} close={() => setModalOpen(false)}>
        <EventDetailsModal />
      </ModalBox>
    </>
  );
};
export default EventCard;

/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import EventDetailsModal from '../EventDetailsModal/EventDetailsModal';
import { Body1, Body2, Button2, ButtonText, Heading4, ModalBox } from '../shared';

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

const CardButtonContainer = styled.div`
  ${tw` flex justify-center`}
`;

const EventDate = styled(Body1)`
  ${tw`
    text-color-secondary
    min-w-[80px]
    text-right
  `}
`;

const EventTime = styled(Body2)`
  ${tw`
    text-color-secondary
  `}
`;

const CardHeading = styled(Heading4)`
  ${tw`
  truncate
  mr-2
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

const EventCard = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CardContainer>
        <CardImage src={data.eventImage.imgSrc} alt={data.eventImage.alt} />
        <CardTextContainer>
          <CardTitleContainer>
            <CardHeading bold>{data.heading}</CardHeading>
            <EventDate>{data.dateTime ? `${data.dateTime.split(', ')[0]}` : 'TBA'}</EventDate>
          </CardTitleContainer>
          <CardTitleContainer>
            <EventClub>{data.subHeading ? data.subHeading : 'TBA'}</EventClub>
            <EventTime>{data.dateTime ? `${data.dateTime.split(', ')[1]}` : 'TBA'}</EventTime>
          </CardTitleContainer>
          <EventPrizes>
            {data.prizeAmount ? `GOODIES WORTH UPTO ${data.prizeAmount}` : 'Prizes to be declared'}
          </EventPrizes>
          <CardButtonContainer>
            <Button2 method={() => setModalOpen(true)} text='Know More' />
            {/* <LinkButton text='Book Slots' link='/register' /> */}
          </CardButtonContainer>
        </CardTextContainer>
      </CardContainer>
      <ModalBox isOpen={modalOpen} close={() => setModalOpen(false)}>
        <EventDetailsModal
          heading={data.heading}
          subHeading={data.subHeading}
          imgSrc={data.eventImage.imgSrc}
          alt={data.eventImage.alt}
          dateTime={data.dateTime}
          location={data.location}
          prizeAmount={data.prizeAmount}
          contactDetails={data.contactDetails}
          aboutDetails={data.aboutDetails}
        />
      </ModalBox>
    </>
  );
};
export default EventCard;

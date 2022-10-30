/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import EventDetailsModal from '../EventDetailsModal/EventDetailsModal';
import { ButtonText, CaptionText, Heading4, ModalBox } from '../shared';

const RegisteredEventsCardContainer = styled.div`
  border-bottom: 2px solid #323232;
  ${tw`px-4 py-3 flex justify-between `}
`;

const EventDetailsContainer = styled.div`
  ${tw`text-color-primary`}
`;

const Category = styled(CaptionText)`
  ${tw`text-color-secondary`}
`;

const Button = styled.button`
  ${tw`
  text-color-primary
  `}
`;

const data = {
  eventImage: {
    imgSrc: `https://res.cloudinary.com/donmjeufi/image/upload/v1666964515/Innovision%202k22/Event%20Posters/Technical%20Events/deathrace_thpjax.jpg`,
    alt: 'Event image',
  },
  heading: 'Death Race 2022',
  subHeading: 'cyborg',
  dateTime: 'Nov 13, 9:00 am',
  location: 'SAC',
  prizeAmount: '40k',
  aboutDetails: [
    {
      id: 0,
      desc: `The death race event will require the participating teams to build a teleoperated four-wheeled bot that must clear a trail full of obstacles. Three rounds will be held over two days at SAC, NIT Rourkela. On day one, there will be an elimination round, and on day two, there will be round 1&2. Rope bridges, hurdle paths, mall doors, fire pits, grease pits, rollers and other obstacles will be placed at various points along the trail.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus magna, finibus viverra lacinia elementum, `,
    },
  ],
  contactDetails: [],
};

const RegisteredEventsCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <RegisteredEventsCardContainer>
        <EventDetailsContainer>
          <Heading4>Death Race</Heading4>
          <Category>Technical Events</Category>
        </EventDetailsContainer>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <ButtonText>View More</ButtonText>
        </Button>
      </RegisteredEventsCardContainer>
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
          prize={false}
        />
      </ModalBox>
    </>
  );
};

export default RegisteredEventsCard;

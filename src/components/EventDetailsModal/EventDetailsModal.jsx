import React from 'react';
import { eventModal } from '../../../config/content';
import { Body1, Heading3, Heading4, LinkButton } from '../shared';
import {
  AboutContainer,
  AboutText,
  CompositeContainer,
  ContactContainer,
  ContactDetails,
  EventContainer,
  EventImage,
  LeftContainer,
  PrizesAmount,
  RightContainer,
  SubHeading,
} from './styles';

const EventDetailsModal = () => (
  <EventContainer>
    <LeftContainer>
      <EventImage src={eventModal.eventImage.imgSrc} alt={eventModal.eventImage.alt} />
      <CompositeContainer>
        <Heading3 bold>{eventModal.heading}</Heading3>
        <SubHeading>{eventModal.subHeading}</SubHeading>
      </CompositeContainer>
      <CompositeContainer>
        <Body1>{eventModal.dateTime}</Body1>
        <Body1>{eventModal.location}</Body1>
      </CompositeContainer>
      <CompositeContainer>
        <Heading4 bold>Prizes</Heading4>
        <PrizesAmount>
          Prizes worth <span>{eventModal.prizeAmount}</span>
        </PrizesAmount>
      </CompositeContainer>
      <LinkButton text='Register' link='/' />
    </LeftContainer>
    <RightContainer>
      <AboutContainer>
        <Heading4>About</Heading4>
        {eventModal.aboutDetails.map(({ id, desc }) => (
          <AboutText key={id}>{desc}</AboutText>
        ))}
      </AboutContainer>
      <ContactContainer>
        <Heading4 bold>Contact</Heading4>
        <ContactDetails>
          {eventModal.contactDetails.map(({ id, contact }) => (
            <Body1 key={id}>{contact}</Body1>
          ))}
        </ContactDetails>
      </ContactContainer>
    </RightContainer>
  </EventContainer>
);

export default EventDetailsModal;

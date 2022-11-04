import React from 'react';
import { format } from 'date-fns';
import { Body1, Heading3, Heading4 } from '../shared';
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
import eventImg from '../../../images/coming-soon.png';

const EventDetailsModal = ({
  imgSrc,
  alt,
  heading,
  subHeading,
  dateTime,
  location,
  prizeAmount,
  contactDetails,
  aboutDetails,
  prize = false,
}) => (
  <EventContainer>
    <LeftContainer>
      <EventImage src={imgSrc || eventImg} alt={alt} />
      <CompositeContainer>
        <Heading3 bold>{heading}</Heading3>
        <SubHeading>{subHeading}</SubHeading>
      </CompositeContainer>
      <CompositeContainer>
        <Body1>{dateTime ? `${format(new Date(dateTime), 'MMM do h:mm aaa')}` : 'Date: TBA'}</Body1>
        <Body1>{location ? `${location}` : 'location: TBA'}</Body1>
      </CompositeContainer>
      {prize ? (
        <CompositeContainer>
          <Heading4 bold>Prizes</Heading4>
          <PrizesAmount>
            {prizeAmount ? (
              <>
                Goodies Worth Upto <span>{prizeAmount}</span>
              </>
            ) : (
              'TBA'
            )}
          </PrizesAmount>
        </CompositeContainer>
      ) : null}
      {/* <LinkButton text='Register' link='/' /> */}
    </LeftContainer>
    <RightContainer>
      <AboutContainer>
        <Heading4>About</Heading4>
        {aboutDetails.map(({ id, desc }) => (
          <AboutText key={id}>{desc}</AboutText>
        ))}
      </AboutContainer>
      <ContactContainer>
        <Heading4 bold>Contact</Heading4>
        <ContactDetails>
          {contactDetails.length > 0 ? (
            contactDetails.map(({ id, contact }) => <Body1 key={id}>{contact}</Body1>)
          ) : (
            <Body1>TBA</Body1>
          )}
        </ContactDetails>
      </ContactContainer>
    </RightContainer>
  </EventContainer>
);

export default EventDetailsModal;

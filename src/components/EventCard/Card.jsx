/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Back,
  BackDescription,
  BackDescriptionContainer,
  Card,
  CardButtonContainer,
  CardImage,
  CardTextContainer,
  CardTitleContainer,
  Circle,
  EventClub,
  EventName,
  EventRegisterButton,
  EventTimeVenue,
  Front,
  KnowButton,
} from './styles';
import { Body2 } from '../shared';

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, club, venue, time, date, month, prizes, description, contact, poster } = event;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const bringToFront = () => {
    setIsFlipped(false);
  };

  return (
    <Card style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
      <Front>
        <CardImage src={poster} alt={club} />
        <CardTextContainer>
          <CardTitleContainer>
            <EventTimeVenue>
              {date} {month}
              <Circle />
              {time}
              <Circle />
              {venue}
            </EventTimeVenue>
          </CardTitleContainer>
          <CardTitleContainer>
            <EventName>{title}</EventName>
            <EventClub>{club}</EventClub>
          </CardTitleContainer>
        </CardTextContainer>
        <CardButtonContainer>
          <KnowButton text='Know More' onClick={flipCard} />
          <EventRegisterButton variant='outline' text='Register For Event' />
        </CardButtonContainer>
      </Front>
      <Back>
        <CardTitleContainer>
          <EventName style={{ marginTop: 0 }}>{title}</EventName>
          <EventClub>{club}</EventClub>
        </CardTitleContainer>
        <CardTitleContainer>
          Prize - {prizes}
          <EventTimeVenue style={{ paddingTop: '0.1rem' }}>
            {date} {month}
            <Circle />
            {venue}
          </EventTimeVenue>
        </CardTitleContainer>
        <BackDescriptionContainer>
          {description?.map(({ id, desc }) => (
            <BackDescription key={id}>{desc}</BackDescription>
          ))}
        </BackDescriptionContainer>
        <Body2>Contact: {contact?.join(', ')}</Body2>
        <CardButtonContainer>
          <KnowButton text='Back' onClick={bringToFront} />
          <EventRegisterButton variant='outline' text='Register For Event' />
        </CardButtonContainer>
      </Back>
    </Card>
  );
};

export default EventCard;

/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Back,
  BackDescription,
  Card,
  CardButtonContainer,
  CardContainer,
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

const CardComponent = ({
  title,
  club,
  venue,
  time,
  date,
  month,
  prizes,
  description,
  contact,
  poster,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const bringToFront = () => {
    setIsFlipped(false);
  };

  return (
    <CardContainer>
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
          <CardTitleContainer style={{ paddingTop: '1.2rem' }}>
            Prize - {prizes}
            <EventTimeVenue style={{ paddingTop: '0.1rem' }}>
              {date} {month}
              <Circle />
              {venue}
            </EventTimeVenue>
          </CardTitleContainer>
          <BackDescription>{description}</BackDescription>
          <Body2>Contact: {contact?.join(', ')}</Body2>
          <CardButtonContainer>
            <KnowButton text='Back' onClick={bringToFront} />
            <EventRegisterButton variant='outline' text='Register For Event' />
          </CardButtonContainer>
        </Back>
      </Card>
    </CardContainer>
  );
};

export default CardComponent;

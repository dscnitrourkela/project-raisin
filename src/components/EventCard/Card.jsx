/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
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
import { AuthContext } from '../../utils/Auth';
import Api from '../../utils/Api';

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { authenticated, userData, token } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);

  const api = Api.getInstance();

  const handleClick = () => {
    if (!authenticated) {
      toast.info('Please login to register for the event');
      return;
    }

    if (disabled) {
      toast.info('Please wait for the previous request to complete');
      return;
    }

    setDisabled(true);

    toast.promise(
      api.bookEvent({
        userID: userData.id,
        eventID: event.id,
        accessToken: token,
        final: () => setDisabled(false),
      }),
      {
        pending: 'Registering for event...',
        success: 'Registered for event',
        error: 'Unable to register for event',
      },
    );
  };

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
          <EventRegisterButton
            variant='outline'
            text='Register For Event'
            onClick={handleClick}
            disabled={disabled || !authenticated}
          />
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
          <EventRegisterButton
            variant='outline'
            text='Register For Event'
            onClick={handleClick}
            disabled={disabled || !authenticated}
          />
        </CardButtonContainer>
      </Back>
    </Card>
  );
};

export default EventCard;

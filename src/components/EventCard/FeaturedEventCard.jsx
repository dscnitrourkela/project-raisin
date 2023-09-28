import React from 'react';
import {
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
  KnowButton,
} from './styles';

const FeaturedEventCard = () => (
    <CardContainer>
      <CardImage
        src='https://res.cloudinary.com/dw9odubkt/image/upload/v1695829352/Rectangle_1_wqmr3i.png'
        alt='Event Name'
      />
      <CardTextContainer>
        <CardTitleContainer>
          <EventTimeVenue>
            17 July
            <Circle />
            LA
          </EventTimeVenue>
        </CardTitleContainer>
        <CardTitleContainer>
          <EventName>Game Of Thrones</EventName>
          <EventClub>Knights Club</EventClub>
        </CardTitleContainer>
      </CardTextContainer>
      <CardButtonContainer>
        <KnowButton text='Know More' />
        <EventRegisterButton variant='outline' text='Register For Event' />
      </CardButtonContainer>
    </CardContainer>
  );

export default FeaturedEventCard;

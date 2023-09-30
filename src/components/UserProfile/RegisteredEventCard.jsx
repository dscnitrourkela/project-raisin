import React from 'react';
import {
  Circle,
  RegEventCard,
  RegEventDate,
  RegEventDetails,
  RegEventImage,
  RegEventName,
  RegEventTitle,
  RegEventClubname,
  RegEventKnowMore,
} from './styles';

const RegisteredEventImage = ({ src }) => <RegEventImage src={src} alt='Event Image' />;

const RegisteredEventCard = ({ title, img, clubName, date, location }) => (
  <RegEventCard>
    <RegisteredEventImage src={img} />
    <RegEventDetails>
      <RegEventDate>
        <p>{date}</p>
        <Circle />
        <p>{location}</p>
      </RegEventDate>
      <RegEventName>
        <RegEventTitle>{title}</RegEventTitle>
        <RegEventClubname>{clubName}</RegEventClubname>
      </RegEventName>
      <RegEventKnowMore>Know More</RegEventKnowMore>
    </RegEventDetails>
  </RegEventCard>
);
export default RegisteredEventCard;

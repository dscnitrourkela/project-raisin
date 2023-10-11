import React, { useContext, useEffect, useState } from 'react';
import { DetailContainer, DetailWrapper } from './styles';
import { UserData } from '../../../config/content/Profile';
import { Heading2, Input } from '../shared';
import { AuthContext } from '../../utils/Auth';
import Api from '../../utils/Api';
import EventCard from '../EventCard/Card';
import { EventSectionContainer } from '../EventSection/styles';

const UserProfile = () => {
  const { userData, token, authenticated } = useContext(AuthContext);
  const api = Api.getInstance();

  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    if (authenticated) {
      api.fetchRegisteredEvents({
        userID: userData.id,
        accessToken: token,
        sideEffects: (data) => setRegisteredEvents(data),
      });
    }
  }, [authenticated, userData, token, api]);

  return (
    <DetailWrapper>
      <Heading2>Your Details</Heading2>
      <DetailContainer>
        {UserData.map((item) => (
          <Input
            data={{
              ...item,
              value: userData[item.key],
              disabled: true,
            }}
            key={item.key}
          />
        ))}
      </DetailContainer>
      <Heading2>Registered Events</Heading2>
      <EventSectionContainer>
        {registeredEvents?.map((event) => (
          <EventCard event={event} key={event.id} registered />
        ))}
      </EventSectionContainer>
    </DetailWrapper>
  );
};

export default UserProfile;

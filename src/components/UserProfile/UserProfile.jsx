import React, { useContext } from 'react';
import { DetailContainer, DetailWrapper, RegEventContainer } from './styles';
import { UserData, RegisteredEvents as RegEvents } from '../../../config/content/Profile';
import { Heading2, Input } from '../shared';
import RegisteredEventCard from './RegisteredEventCard';
import { AuthContext } from '../../utils/Auth';

const UserProfile = () => {
  const { userData } = useContext(AuthContext);

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
      <RegEventContainer>
        {RegEvents.map(({ id, title, img, clubName, date, location }) => (
          <RegisteredEventCard
            key={id}
            title={title}
            img={img}
            clubName={clubName}
            date={date}
            location={location}
          />
        ))}
      </RegEventContainer>
    </DetailWrapper>
  );
};

export default UserProfile;

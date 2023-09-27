import React, { useContext } from 'react';
import {
  DetailContainer,
  Legend,
  FieldSet,
  DataValue,
  DetailWrapper,
  RegEventContainer,
} from './styles';
import { UserData, RegisteredEvents as RegEvents } from '../../../config/content/Profile';
import { Heading2 } from '../shared';
import RegisteredEventCard from './RegisteredEventCard';
import { AuthContext } from '../../utils/Auth';

const DataContainer = ({ name, value }) => (
  <FieldSet>
    <Legend align='left'>{name}</Legend>
    <DataValue>{value}</DataValue>
  </FieldSet>
);

const User = () => {
  const { userData } = useContext(AuthContext);

  return (
    <DetailWrapper>
      <Heading2>Your Details</Heading2>
      <DetailContainer>
        {UserData.map((item) => (
          <DataContainer
            key={item.key}
            name={item.fieldName}
            value={userData[item.key] || item.value}
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

export default User;

import React from 'react';
import {
  DetailContainer,
  Legend,
  FieldSet,
  DataValue,
  DetailWrapper,
  RegEventContainer,
} from './styles';
import { UserData, RegisteredEvents as RegEvents } from './UserData';
import { Heading2 } from '../shared';
import RegisteredEventCard from './RegisteredEventCard';

const DataContainer = ({ name, value }) => (
    <FieldSet>
      <Legend align='left'>{name}</Legend>
      <DataValue>{value}</DataValue>
    </FieldSet>
  );

const User = () => (
    <DetailWrapper>
      <Heading2>Your Details</Heading2>
      <DetailContainer>
        {UserData.map((item) => (
          <DataContainer key={item.id} name={item.fieldName} value={item.fieldValue} />
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

export default User;

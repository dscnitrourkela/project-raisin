import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading3 } from '../shared';
import RegisteredEventsCard from './RegisteredEventsCard';

const RegisteredEventsSectionContainer = styled.div`
  ${tw`
  rounded-4xl
  p-12
  sm:px-3
  bg-background-dark
  max-h-[620px] 
  w-[700px]
  lg:w-full
  `}
`;

const RegisteredEventsContainer = styled.div`
  ${tw`rounded-lg bg-background-darker mt-9 overflow-auto 
  max-h-[470px] 
  
  `}
`;

const Heading = styled(Heading3)`
  ${tw`
    lg:text-center
  `}
`;

const RegisteredEventsSection = () => (
  <RegisteredEventsSectionContainer>
    <Heading bold>Registered Events</Heading>
    <RegisteredEventsContainer>
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
      <RegisteredEventsCard />
    </RegisteredEventsContainer>
  </RegisteredEventsSectionContainer>
);

export default RegisteredEventsSection;

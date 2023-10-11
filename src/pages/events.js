/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useEvents from '../utils/useEvents';
import { EventSectionContainer } from '../components/EventSection/styles';
import EventCard from '../components/EventCard/Card';
import { _eventPage } from '../../config/content';
import { Heading4 } from '../components/shared';

const TypeSelectWrapper = styled.div`
  ${tw` flex items-center space-x-4 pb-14 overflow-x-clip w-11/12 mx-auto`}
  overflow-x: auto;
`;

const TypeSelector = styled.div`
  ${tw`flex justify-center items-center flex-col cursor-pointer gap-4 relative`}
  min-width: 208px;

  @media (max-width: 768px) {
    min-width: 116px;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    bottom: -10px;
    left: ${({ active }) => (active ? '0' : '50%')};
    height: 2px;
    display: block;
    transition:
      width 0.3s ease 0s,
      left 0.3s ease 0s;
    background-image: var(--brand-gradient);
  }
`;

const ImageContainer = styled.div`
  ${tw`flex justify-center items-center rounded-full h-20 w-20 bg-gray-200 overflow-clip`}
`;

const EventPage = () => {
  const [type, setType] = useState('Technical');
  const { events, isLoading } = useEvents(type);

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  return (
    <div>
      <TypeSelectWrapper>
        {_eventPage.map(({ type: _type, image }) => (
          <TypeSelector onClick={() => handleTypeChange(_type)} key={_type} active={_type === type}>
            <ImageContainer>
              <img src={image} alt={_type} />
            </ImageContainer>
            <Heading4 style={{ textTransform: 'none' }}>{_type}</Heading4>
          </TypeSelector>
        ))}
      </TypeSelectWrapper>

      <EventSectionContainer>
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventSectionContainer>
    </div>
  );
};

export default EventPage;

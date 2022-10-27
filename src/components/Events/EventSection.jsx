import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading2, SectionContainer } from '../shared';
import CategoryCard from './CategoryCard';
import { events } from '../../../config/content';

const EventContainer = styled.div`
  ${tw`
        w-11/12
        max-w-[1440px]
        my-0
        mx-auto
        p-2.5
        sm:p-0
        overflow-y-hidden
    `}
`;

const EventCardContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
      py-5
      flex 
      gap-4
      overflow-y-hidden
  `}
`;

const EventHeading = styled(Heading2)`
  ${tw`
    max-w-7xl
    mx-auto
  `}
`;

const EventSection = () => (
  <SectionContainer>
    <EventContainer>
      <EventHeading bold>{events.title}</EventHeading>
      <EventCardContainer>
        {events.categoryDetails.map(({ link, image, title, desc }) => (
          <CategoryCard key={link} link={link} image={image} title={title} desc={desc} />
        ))}
      </EventCardContainer>
    </EventContainer>
  </SectionContainer>
);

export default EventSection;

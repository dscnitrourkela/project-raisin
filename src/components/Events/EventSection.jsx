import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading2, SectionContainer } from '../shared';
import CategoryCard from './CategoryCard';
import { eventsCategory } from '../../../config/content';

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
      flex-wrap
      justify-center
      gap-6
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
    <Container>
      <EventHeading bold>{eventsCategory.title}</EventHeading>
      <EventCardContainer>
        {eventsCategory.categoryDetails.map(({ link, image, title, desc }) => (
          <CategoryCard key={link} link={link} image={image} title={title} desc={desc} />
        ))}
      </EventCardContainer>
    </Container>
  </SectionContainer>
);

export default EventSection;

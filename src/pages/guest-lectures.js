import React from 'react';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function GuestLecture() {
  return (
    <Layout>
      <CategoryHeroContainer>
        <About
          desc={events.guestLecture.desc}
          title={events.guestLecture.title}
          alt={events.guestLecture.title}
          link={events.guestLecture.img}
          image
        />
      </CategoryHeroContainer>
      <Container>
        <CategoryCardContainer>
          {events.guestLecture.list.map((list) => (
            <EventCard data={list} key={list.heading} />
          ))}
        </CategoryCardContainer>
      </Container>
    </Layout>
  );
}

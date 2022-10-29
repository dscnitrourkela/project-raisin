import React from 'react';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function FunEvents() {
  return (
    <Layout>
      <CategoryHeroContainer>
        <About
          title={events.funEvents.title}
          desc={events.funEvents.desc}
          link={events.funEvents.img}
          alt={events.funEvents.title}
          image
        />
      </CategoryHeroContainer>
      <Container>
        <CategoryCardContainer>
          {events.funEvents.list.map((list) => (
            <EventCard data={list} prize key={list.heading} />
          ))}
        </CategoryCardContainer>
      </Container>
    </Layout>
  );
}

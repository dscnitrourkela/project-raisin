import React from 'react';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Workshop() {
  return (
    <Layout>
      <CategoryHeroContainer>
        <About
          desc={events.workshop.desc}
          title={events.workshop.title}
          link={events.workshop.img}
          image
        />
      </CategoryHeroContainer>
      <Container>
        <CategoryCardContainer>
          {events.workshop.list.map((list) => (
            <EventCard data={list} key={list.heading} />
          ))}
        </CategoryCardContainer>
      </Container>
    </Layout>
  );
}

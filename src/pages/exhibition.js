import React from 'react';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Exhibitions() {
  return (
    <Layout>
      <CategoryHeroContainer>
        <About
          title={events.exhibition.title}
          desc={events.exhibition.desc}
          link={events.exhibition.img}
          alt={events.exhibition.title}
          image
        />
      </CategoryHeroContainer>
      <Container>
        <CategoryCardContainer>
          {events.exhibition.list.map((list) => (
            <EventCard data={list} key={list.heading} />
          ))}
        </CategoryCardContainer>
      </Container>
    </Layout>
  );
}

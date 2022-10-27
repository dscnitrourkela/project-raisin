import React from 'react';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Proshows() {
  return (
    <Layout>
      <CategoryHeroContainer>
        <About
          desc={events.proshows.desc}
          title={events.proshows.title}
          link={events.proshows.img}
          image
        />
      </CategoryHeroContainer>
      <Container>
        <CategoryCardContainer>
          {events.proshows.list.map((list) => (
            <EventCard data={list} key={list.heading} />
          ))}
        </CategoryCardContainer>
      </Container>
    </Layout>
  );
}

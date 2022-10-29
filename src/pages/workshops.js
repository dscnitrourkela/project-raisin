import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Workshop() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Workshops</title>
        <meta name='description' content='This is workshops page' />
      </Helmet>
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
    </>
  );
}

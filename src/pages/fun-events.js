import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function FunEvents() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Fun Events</title>
        <meta name='description' content='This is fun events page' />
      </Helmet>
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
              <EventCard prize data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function TechnicalEvents() {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Technical Events</title>
        <meta name='description' content='This is technical events page' />
      </Helmet>
      <Layout>
        <CategoryHeroContainer>
          <About
            desc={events.technicalEvents.desc}
            title={events.technicalEvents.title}
            alt={events.technicalEvents.title}
            link={events.technicalEvents.img}
            image
          />
        </CategoryHeroContainer>
        <Container>
          <CategoryCardContainer>
            {events.technicalEvents.list.map((list) => (
              <EventCard prize data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

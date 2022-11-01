/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { avenueApi } from '../utils/api';
import { useEvents } from '../utils/useEvents';

const fetchEvents = async () => {
  try {
    const data = await avenueApi.get('/events', {
      params: { type: 'technical' },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default function TechnicalEvents() {
  const [events, error, isLoading] = useEvents('technical');

  if (isLoading) return <>Loading...</>;
  if (error) return <>Something went wrong, please try again</>;

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
            desc={eventDetails.technicalEvents.desc}
            title={eventDetails.technicalEvents.title}
            alt={eventDetails.technicalEvents.title}
            link={eventDetails.technicalEvents.img}
            image
          />
        </CategoryHeroContainer>
        <Container>
          <CategoryCardContainer>
            {events.map((list) => (
              <EventCard prize data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

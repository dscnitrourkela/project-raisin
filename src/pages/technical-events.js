/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function TechnicalEvents() {
  const [events, error, isLoading] = useEvents('technical');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard prize data={list} key={list.id} />);
  };

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
          <CategoryCardContainer>{renderEvents()}</CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function FunEvents() {
  const [events, error, isLoading] = useEvents('fun');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard prize data={list} key={list.id} />);
  };

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
            title={eventDetails.funEvents.title}
            desc={eventDetails.funEvents.desc}
            link={eventDetails.funEvents.img}
            alt={eventDetails.funEvents.title}
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

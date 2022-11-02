import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function Workshop() {
  const [events, error, isLoading] = useEvents('workshops');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard data={list} key={list.id} />);
  };

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
            desc={eventDetails.workshop.desc}
            title={eventDetails.workshop.title}
            link={eventDetails.workshop.img}
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

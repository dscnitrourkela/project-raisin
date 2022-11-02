import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function Exhibitions() {
  const [events, error, isLoading] = useEvents('exhibitions');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard data={list} key={list.id} />);
  };

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Exhibition</title>
        <meta name='description' content='This is exhibition page' />
      </Helmet>
      <Layout>
        <CategoryHeroContainer>
          <About
            title={eventDetails.exhibition.title}
            desc={eventDetails.exhibition.desc}
            link={eventDetails.exhibition.img}
            alt={eventDetails.exhibition.title}
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

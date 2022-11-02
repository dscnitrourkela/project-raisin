import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function Proshows() {
  const [events, error, isLoading] = useEvents('pro');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard data={list} key={list.id} />);
  };

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Pro Shows</title>
        <meta name='description' content='This is pro-shows page' />
      </Helmet>
      <Layout>
        <CategoryHeroContainer>
          <About
            desc={eventDetails.proshows.desc}
            title={eventDetails.proshows.title}
            link={eventDetails.proshows.img}
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

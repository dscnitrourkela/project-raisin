import React from 'react';
import { Helmet } from 'react-helmet';
import { events as eventDetails } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';
import { useEvents } from '../utils/useEvents';

export default function GuestLecture() {
  const [events, error, isLoading] = useEvents('guest-lectures ');

  const renderEvents = () => {
    if (isLoading) return <>Loading...</>;
    if (error) return <>Something went wrong, please try again</>;

    return events?.map((list) => <EventCard data={list} key={list.id} />);
  };

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | Guest Lectures</title>
        <meta name='description' content='This is guest lectures page' />
      </Helmet>
      <Layout>
        <CategoryHeroContainer>
          <About
            desc={eventDetails.guestLecture.desc}
            title={eventDetails.guestLecture.title}
            alt={eventDetails.guestLecture.title}
            link={eventDetails.guestLecture.img}
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

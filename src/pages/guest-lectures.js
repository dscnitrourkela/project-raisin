import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function GuestLecture() {
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
            desc={events.guestLecture.desc}
            title={events.guestLecture.title}
            alt={events.guestLecture.title}
            link={events.guestLecture.img}
            image
          />
        </CategoryHeroContainer>
        <Container>
          <CategoryCardContainer>
            {events.guestLecture.list.map((list) => (
              <EventCard data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

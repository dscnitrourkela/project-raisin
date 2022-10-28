import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Exhibitions() {
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
            title={events.exhibition.title}
            desc={events.exhibition.desc}
            link={events.exhibition.img}
            alt={events.exhibition.title}
            image
          />
        </CategoryHeroContainer>
        <Container>
          <CategoryCardContainer>
            {events.exhibition.list.map((list) => (
              <EventCard data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

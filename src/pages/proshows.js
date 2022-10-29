import React from 'react';
import { Helmet } from 'react-helmet';
import { events } from '../../config/content';
import { About, Container, EventCard, Layout } from '../components';
import { CategoryCardContainer, CategoryHeroContainer } from '../components/categoryPage/styles';

export default function Proshows() {
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
            desc={events.proshows.desc}
            title={events.proshows.title}
            link={events.proshows.img}
            image
          />
        </CategoryHeroContainer>
        <Container>
          <CategoryCardContainer>
            {events.proshows.list.map((list) => (
              <EventCard data={list} key={list.heading} />
            ))}
          </CategoryCardContainer>
        </Container>
      </Layout>
    </>
  );
}

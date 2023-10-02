/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardComponent from '../components/EventCard/Card';

const cardData = {
  title: 'Game Of Thrones',
  club: 'Knights Club',
  venue: 'LA',
  time: '10:00 AM',
  date: '17',
  month: 'July',
  prizes: 'Cash prizes and trophies',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in rutrum metus. Pellentesque commodo ante neque, eu hendrerit lorem gravida et. Aliquam scelerisque...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in rutrum metus. Pellentesque commodo ante neque, eu hendrerit lorem gravida et. Aliquam scelerisque...',
  contact: ['Rashmi - 9848948949'],
  poster: 'https://res.cloudinary.com/dw9odubkt/image/upload/v1695829352/Rectangle_1_wqmr3i.png',
};
const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <CardComponent
      title={cardData.title}
      club={cardData.club}
      venue={cardData.venue}
      time={cardData.time}
      date={cardData.date}
      month={cardData.month}
      prizes={cardData.prizes}
      description={cardData.description}
      contact={cardData.contact}
      poster={cardData.poster}
    />
  </>
);

export default Playground;

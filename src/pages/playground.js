/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardComponent from '../components/EventCard/Card';

const events = {
  title: 'Game Of Thrones',
  club: 'Knights Club',
  venue: 'LA',
  time: '10:00 AM',
  date: '17',
  month: 'July',
  prizes: '7 karod',
  description:
    'Game of Thrones is a strategy board game created by Christian T. Petersen and released by Fantasy Flight Games in 2003. The game is based on the A Song of Ice and Fire fantasy series by George R. R. Martin. It was followed in 2004 by the expansion A Clash of Kings, and in 2006 by the expansion A Storm of Swords. A Game of Thrones allows the players to take on the roles of several of the Great Houses vying for control of the Seven Kingdoms, including House Stark, House Lannister, House Baratheon, House Greyjoy, House Tyrell, and a of the expansion A Clash of Kings, House Martell. Players maneuver armies to secure support in the various regions that comprise the Seven Kingdoms, with the goal of capturing enough support to claim the Iron Throne. The game is designed for three to six players, who each begin with control of one of the six Great Houses of Westeros. Randomly chosen neutral territories and land areas make up the remainder of the board.',
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
      key={events.id}
      id={events.id}
      title={events.title}
      club={events.club}
      venue={events.venue}
      time={events.time}
      date={events.date}
      month={events.month}
      prizes={events.prizes}
      description={events.description}
      contact={events.contact}
      poster={events.poster}
    />
  </>
);

export default Playground;

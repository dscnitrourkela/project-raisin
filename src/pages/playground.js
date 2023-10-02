import React from 'react';
import { Helmet } from 'react-helmet';
import CardComponent from '../components/EventCard/Card';
import useEvents from '../utils/useEvents';

const Playground = () => {
  const { events } = useEvents('technical');

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Playground</title>
        <meta name='description' content='This is playground' />
      </Helmet>
      <CardComponent
        key={events[0]?.id}
        id={events[0]?.id}
        title={events[0]?.title}
        club={events[0]?.club}
        venue={events[0]?.venue}
        time={events[0]?.time}
        date={events[0]?.date}
        month={events[0]?.month}
        prizes={events[0]?.prizes}
        description={events[0]?.description}
        contact={events[0]?.contact}
        poster={events[0]?.poster}
      />
    </>
  );
};

export default Playground;

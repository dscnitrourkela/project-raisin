import React from 'react';
import useEvents from '../utils/useEvents';

const EventPage = () => {
  const { events } = useEvents('Technical');
  console.log(events);

  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};

export default EventPage;

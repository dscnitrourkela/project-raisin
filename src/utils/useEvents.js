import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { avenueApi } from './api';

const fetchEvents = (type) => async () => {
  try {
    const data = await avenueApi.get('/events', {
      params: { type },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const useEvents = (type) => {
  const { data, error, isLoading } = useQuery('events', fetchEvents(type));

  const events = useMemo(
    () =>
      data?.data
        ?.map((event) => {
          const name = JSON.parse(event.name);
          const description = JSON.parse(event.description);

          return {
            eventImage: {
              imgSrc: event.poster,
              alt: name.heading,
            },
            heading: name.heading,
            subHeading: name.subHeading,
            dateTime: event.startDate,
            location: 'SAC',
            prizeAmount: name.prizeAmount,
            aboutDetails: description,
            contactDetails: [],
            priority: event.priority,
          };
        })
        .sort((a, b) => a.priority > b.priority),
    [data],
  );

  return [events, error, isLoading];
};

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { avenueApi } from './api';

const fetchEvents = (type) => () => avenueApi.get('/events', { params: { type } });

export const useEvents = (type) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents(type),
  });

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
            id: event.id,
          };
        })
        .sort((a, b) => a.priority > b.priority),
    [data],
  );

  return [events, error, isLoading];
};

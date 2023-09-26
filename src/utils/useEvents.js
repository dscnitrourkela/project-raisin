import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { avenueApi } from './Api';

const fetchEvents = (event) =>
  avenueApi.get('/events', { params: { type: event, orgID: '640892e9f785cdd0afcd8ccf' } });

const useEvents = (eventName) => {
  const { data, isLoading } = useQuery({
    queryKey: ['events', eventName],
    queryFn: () => fetchEvents(eventName),
  });

  const events = useMemo(
    () =>
      data?.data
        ?.map((event) => {
          const name = JSON.parse(event.name);
          const description = JSON.parse(event.description);
          const date = new Date(event.startDate);

          return {
            id: event.id,
            title: name.heading,
            club: name.subHeading,
            date: date.getDate(),
            month: date.toDateString().split(' ')[1],
            time: `${date.getHours().toString().padStart(2, '0')}:${date
              .getMinutes()
              .toString()
              .padStart(2, '0')}`,
            description,
            venue: 'LA',
            prizes: name.prizeAmount,
            poster: event.poster ? event.poster : 'TODO://link',
          };
        })
        .sort((a, b) => +a.date - +b.date),
    [data],
  );

  return { events, isLoading };
};

export default useEvents;

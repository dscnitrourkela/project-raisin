import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Api from './Api';

const useEvents = (eventName) => {
  const api = Api.getInstance();

  const { data, isLoading } = useQuery({
    queryKey: ['events', eventName],
    queryFn: () => api.getEvents(eventName),
  });

  const events = useMemo(
    () =>
      data?.data
        ?.filter((event) => event?.status === 'ACTIVE')
        ?.map((event) => {
          const description = JSON.parse(event.description);
          const date = new Date(event.startDate);

          return {
            id: event.id,
            title: event.name,
            club: event.subHeading,
            date: date.getDate(),
            month: date.toDateString().split(' ')[1],
            time: `${date.getHours().toString().padStart(2, '0')}:${date
              .getMinutes()
              .toString()
              .padStart(2, '0')}`,
            description,
            contact: event.contact,
            venue: 'LA',
            prizes: event.prizeMoney,
            poster: event.poster ? event.poster : 'TODO://link',
            priority: event.priority,
          };
        })
        // sort by priority and then by date
        ?.sort((a, b) => {
          if (a.priority === b.priority) {
            return a.date - b.date;
          }
          return b.priority - a.priority;
        }),
    [data],
  );

  return { events, isLoading };
};

export default useEvents;

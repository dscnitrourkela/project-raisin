import { EventCardType1, EventCardType2 } from '@/components/Events/eventsCard/eventsCard';
import { eventsData } from '@/config/content/EventsData/Data';

export const EventCardWrapper = () => {
  return (
    <>
      {eventsData.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <EventCardType1
              key={event.id}
              bgImage={event.eventPosterURL}
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
            />
          );
        } else {
          return (
            <EventCardType2
              key={event.id}
              bgImage={event.eventPosterURL}
              eventHeading={event.eventTitle}
              eventDescription={event.eventDescription}
            />
          );
        }
      })}
    </>
  );
};

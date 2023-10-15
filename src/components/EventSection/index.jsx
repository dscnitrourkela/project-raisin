import React from 'react';
import EventCard from '../EventCard/Card';
import { EventSectionContainer } from './styles';
import { SectionLayout } from '../shared';
import useEvents from '../../utils/useEvents';
import { _event } from '../../../config/content';

const EventSection = () => {
  const { events } = useEvents();

  return (
    <SectionLayout
      id={_event.id}
      title={_event.title}
      footer={_event.footer}
      footerLink={_event.link}
    >
      <EventSectionContainer>
        {events?.slice(0, 3)?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventSectionContainer>
    </SectionLayout>
  );
};

export default EventSection;

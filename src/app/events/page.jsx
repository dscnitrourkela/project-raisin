'use client';
import React from 'react';
import { EventCardWrapper } from '@/components/Events/eventsCardWrapper/eventsCardWrapper';
import { EventsPageHeading } from '@/components/Events/eventsCard/eventsCard.styles';
import { CenteredEventsCardWrapper } from './events.styles';

function EventsPage() {
  return (
    <>
      <CenteredEventsCardWrapper>
        <EventsPageHeading>Events</EventsPageHeading>
        <EventCardWrapper />
      </CenteredEventsCardWrapper>
    </>
  );
}

export default EventsPage;

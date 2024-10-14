'use client';
import { Heading3 } from '@/components/shared/Typography/Headings';
import { EventsContainer } from './page.style';
import EventsPage from '@/components/EventsPage';

export default function Page() {
  return (
    <EventsContainer>
      <Heading3>Events Page</Heading3>
      <EventsPage />
    </EventsContainer>
  );
}

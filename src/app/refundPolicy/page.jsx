'use client';
import { EventsContainer, Heading3, Heading4 } from './page.styles';
import { PaymentPolicyPageData } from '@/config/content/Footer';

export default function Page() {
  return (
    <EventsContainer>
      {PaymentPolicyPageData.map((item) => (
        <div key={item.id}>
          <Heading3>{item.title}</Heading3>
          <Heading4>{item.description}</Heading4>
        </div>
      ))}
    </EventsContainer>
  );
}

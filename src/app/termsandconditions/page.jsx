'use client';
import { PaymentContainer, Heading3, Heading4 } from './page.styles';
import { TermsAndConditionsModalData } from '@/config/content/Footer';

export default function Page() {
  return (
    <PaymentContainer>
      {TermsAndConditionsModalData.map((item) => (
        <div key={item.id}>
          <Heading3>{item.title}</Heading3>
          <Heading4>
            {item.description
              .split('•')
              .filter((part) => part.trim() !== '')
              .map((part, index) => (
                <span key={index}>
                  {item.description.includes('•') && `• ${part.trim()}`}
                  {!item.description.includes('•') && part.trim()}
                  <br />
                </span>
              ))}
          </Heading4>
        </div>
      ))}
    </PaymentContainer>
  );
}

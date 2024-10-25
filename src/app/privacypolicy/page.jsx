'use client';
import { PaymentContainer, Heading3, Heading4 } from './page.styles';
import { PrivacyPolicyModalData } from '@/config/content/Footer';

export default function Page() {
  return (
    <PaymentContainer>
      {PrivacyPolicyModalData.map((item) => (
        <div key={item.id}>
          <Heading3>{item.title}</Heading3>
          <Heading4>
            {item.description.split('•').map((part, index) => {
              const email = 'innovision2024.nitr@gmail.com';
              const emailLink = `<a href="mailto:${email}">${email}</a>`;
              const modifiedPart = part.replace(email, emailLink);
              return (
                <span key={index}>
                  <span dangerouslySetInnerHTML={{ __html: modifiedPart.trim() }} />
                  <br />
                </span>
              );
            })}
          </Heading4>
        </div>
      ))}
    </PaymentContainer>
  );
}

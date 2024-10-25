'use client';
import { PaymentContainer, Heading3, Heading4, Heading5 } from './page.styles';
import { PaymentPolicyPageData, abideByRefundPolicy } from '@/config/content/Footer';

export default function Page() {
  return (
    <PaymentContainer>
      {PaymentPolicyPageData.map((item) => (
        <div key={item.id}>
          <Heading3>{item.title}</Heading3>
          <Heading4>{item.description}</Heading4>
        </div>
      ))}
      <Heading5>{abideByRefundPolicy}</Heading5>
    </PaymentContainer>
  );
}

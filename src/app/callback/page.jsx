'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CallbackPage = () => {
  const router = useRouter();
  const { transactionId } = router.query;

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (transactionId) {
        const response = await fetch('/api/phonepePaymentStatus', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transactionId }),
        });
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          alert('Payment successful!');
        } else {
          alert('Payment failed. Please try again.');
        }
      }
    };
    checkPaymentStatus();
  }, [transactionId]);

  return <div>Processing your payment...</div>;
};

export default CallbackPage;

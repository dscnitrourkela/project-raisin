'use client';
import { useState } from 'react';
import { SecondaryButton } from '@/components/shared/Typography/Buttons';

const PayButton = () => {
  const handlePayment = async () => {
    const response = await fetch('/api/phonepePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 100,
        orderId: 'unique_order_id_12345',
        callbackUrl: `${window.location.origin}/callback`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = data.paymentUrl;
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return <button onClick={handlePayment}>Pay with PhonePe</button>;
};

export default PayButton;

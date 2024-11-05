'use client';

import crypto from 'crypto';
import { useState } from 'react';
import { SecondaryButton } from '@/components/shared/Typography/Buttons';
import { PayButtonWrap } from './payment.styles';

const PayButton = () => {
  const handlePayment = async () => {
    const response = await fetch('/api/phonepePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 200,
        orderId: Date.now().toString(),
        callbackUrl: `${window.location.origin}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = data.paymentUrl;
    } else {
      alert('Payment failed. Please try again.');
      console.log(data);
    }
  };

  // const payload = {
  //   merchantId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
  //   amount: 200,
  //   merchantTransactionId: '45fghrewvty786hjdf',
  //   redirectUrl: 'http://localhost:3000',
  //   redirectMode: 'REDIRECT',
  //   callbackUrl: `http://localhost:3000`,
  //   paymentInstrument: {
  //     type: 'PAY_PAGE',
  //   },
  // };

  // const payloadString = JSON.stringify(payload);
  // const base64Payload = Buffer.from(payloadString).toString('base64');

  // const checksum = crypto
  //   .createHmac('sha256', process.env.NEXT_PUBLIC_PHONEPE_API_KEY)
  //   .update(base64Payload + '/pg/v1/pay' + process.env.NEXT_PUBLIC_PHONEPE_API_KEY)
  //   .digest('base64');

  // const x_veri = `${checksum}###${process.env.NEXT_PUBLIC_PHONEPE_API_KEY_INDEX}`;
  // console.log(x_veri);

  return <PayButtonWrap onClick={handlePayment}>Pay with PhonePe</PayButtonWrap>;
};

export default PayButton;

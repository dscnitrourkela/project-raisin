import React from 'react';
import { Heading1, PrivateRoute } from '../components';

const PaymentPage = () => {
  // eslint-disable-next-line no-console
  console.log('PaymentPage');

  return (
    <PrivateRoute>
      <Heading1>Payment</Heading1>
      {/* Payment form here */}
      TODO - Payment form
    </PrivateRoute>
  );
};

export default PaymentPage;

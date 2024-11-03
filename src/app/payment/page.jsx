'use client';
import React, { useEffect, useState } from 'react';
import PayButton from './payButton';
import { PayContainer } from './payment.styles';
import Cookies from 'js-cookie';

const PaymentPage = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const userData = Cookies.get('userData');
    const email = (userData && JSON.parse(userData).email) || '';
    setUserEmail(email);
  }, []);

  const validMails = [
    'innovision2024.nitr@gmail.com',
    'srishtymangutte@gmail.com',
    'jaiswal2nikhil@gmail.com',
  ];

  if (userEmail === null) {
    return <div>Loading...</div>;
  }

  return (
    <PayContainer>
      {validMails.includes(userEmail) ? (
        <div>
          <h1>Payment Page</h1>
          <PayButton />
        </div>
      ) : (
        <h1>404 page not found</h1>
      )}
    </PayContainer>
  );
};

export default PaymentPage;

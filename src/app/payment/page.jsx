'use client';
import React, { useEffect, useState } from 'react';
import PayButton from './payButton';
import { PayContainer } from './payment.styles';
import Cookies from 'js-cookie';

const PaymentPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    setIsClient(true);
    const userData = Cookies.get('userData');
    const email = (userData && JSON.parse(userData).email) || '';
    setUserEmail(email);
  }, []);

  const validEmails = [
    'innovision2024.nitr@gmail.com',
    'srishtymangutte@gmail.com',
    'jaiswal2nikhil@gmail.com',
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <PayContainer>
        {validEmails.includes(userEmail) ? (
          <>
            <h1>Payment Page</h1>
            <PayButton />
          </>
        ) : (
          <h1>404 page not found</h1>
        )}
      </PayContainer>
    </div>
  );
};

export default PaymentPage;

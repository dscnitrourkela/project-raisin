import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { EventSection, Layout, SuccessCard } from '../components';
import { success, failure } from '../../config/content';

export default function Successful() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('payment_status=Credit')) {
      setPaymentStatus(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Innovision | {paymentStatus ? 'Success' : 'Failure'}</title>
        <meta name='description' content='This is success page' />
      </Helmet>
      <Layout>
        <SuccessCard data={paymentStatus ? success : failure} failure={paymentStatus} />
        <EventSection />
      </Layout>
    </>
  );
}

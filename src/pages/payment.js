import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import { PaymentCard, PrivateRoute, SuccessCard } from '../components';
import { AuthContext } from '../utils/Auth';

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(false);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    if (!userData) {
      toast.error('Please register first');
      navigate('/register');
    }
  }, [userData]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currPaymentStatus = params.get('payment_status');
    const paymentId = params.get('payment_id');
    const paymentRequestId = params.get('payment_request_id');

    if (currPaymentStatus === 'Credit' && paymentId && paymentRequestId) {
      toast.success('Payment Successful');
      setPaymentStatus(true);
    } else if (currPaymentStatus === 'Failed') {
      toast.error('Payment Failed');
      setPaymentStatus(false);
    }
  }, []);

  return (
    <PrivateRoute>
      {/* Payment form here */}
      {userData && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {paymentStatus ? <SuccessCard /> : <PaymentCard />}
        </div>
      )}
    </PrivateRoute>
  );
};

export default PaymentPage;

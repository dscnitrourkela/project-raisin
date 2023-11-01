import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
// import { Body1, ButtonText, PaymentCard, PrivateRoute, SuccessCard } from '../components';
import { AuthContext } from '../utils/Auth';
import { PaymentCardContainer } from '../components/Payment/styles';
import { Heading4, PrivateRoute } from '../components/shared';

const PaymentPage = () => {
  // const [paymentStatus, setPaymentStatus] = useState(false);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    if (!userData) {
      toast.error('Please register first');
      navigate('/register');
    }
  }, [userData]);

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const currPaymentStatus = params.get('payment_status');
  //   const paymentId = params.get('payment_id');
  //   const paymentRequestId = params.get('payment_request_id');

  //   if (currPaymentStatus === 'Credit' && paymentId && paymentRequestId) {
  //     toast.success('Payment Successful');
  //     setPaymentStatus(true);
  //   } else if (currPaymentStatus === 'Failed') {
  //     toast.error('Payment Failed');
  //     setPaymentStatus(false);
  //   }
  // }, []);

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
            marginTop: '7rem',
          }}
        >
          <PaymentCardContainer>
            <Heading4 font='Inter' style={{ textAlign: 'center', maxWidth: '500px' }}>
              Registration for non-NITR students has been closed for this year. Please come back
              next year.
            </Heading4>
          </PaymentCardContainer>
        </div>
      )}
    </PrivateRoute>
  );
};

export default PaymentPage;

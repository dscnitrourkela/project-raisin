import React, { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, navigate } from 'gatsby';
import { AuthContext } from '../../utils/Auth';
import { PaymentContent, PaymentDetails } from '../../../config/content';
import Api from '../../utils/Api';
import { Body1, Body2, CaptionText } from '../shared';
import {
  Consent,
  Info,
  PaymentCardContainer,
  PaymentDetailsList,
  PaymentDetailsListItem,
  PaymentTitle,
  Warning,
} from './styles';
import Button from '../shared/Button';

const PaymentCard = () => {
  const { userData, token } = useContext(AuthContext);
  const { title, description, endNote, info, proceed, termsLink, warning, caption } =
    PaymentContent;
  const [agreed, setAgreed] = useState(false);

  const api = Api.getInstance();
  const details = useMemo(() => PaymentDetails(userData), [userData]);

  const handlePayment = () => {
    toast.promise(
      api.initiatePayment({
        accessToken: token,
        ...details,
        sideEffects: (link) => navigate(link),
      }),
      {
        pending: 'Initiating payment...',
        success: 'Payment initiated',
        error: 'Unable to initiate payment',
      },
    );
  };

  return (
    <PaymentCardContainer>
      <PaymentTitle>{title}</PaymentTitle>
      <Body2>{description}</Body2>
      <Info>{info}</Info>
      <PaymentDetailsList>
        {Object.entries(details).map(([key, value]) => (
          <PaymentDetailsListItem key={key}>
            <Body1 style={{ textTransform: 'capitalize' }}>{key}: </Body1>
            <Body1>{value}</Body1>
          </PaymentDetailsListItem>
        ))}
      </PaymentDetailsList>
      <Consent>
        <input
          type='checkbox'
          id='consent'
          name='consent'
          onClick={() => setAgreed((prev) => !prev)}
          value={agreed}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='consent' aria-label='consent' aria-selected={agreed}>
          I agree to the <Link to={termsLink}>terms and conditions</Link>
        </label>
      </Consent>

      <Warning>{warning}</Warning>
      {/* TODO: Remove afterwards */}
      <Body2 style={{ margin: '8px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {caption}:<b style={{ textDecoration: 'line-through' }}> ₹1000</b>
        <b
          style={{
            background: 'var(--brand-gradient)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ₹750
        </b>
      </Body2>

      <Button
        type='submit'
        variant='filled'
        text={proceed}
        width='350px'
        disabled={!agreed}
        onClick={handlePayment}
        tooltip={!agreed ? 'Please agree to the terms and conditions' : ''}
      />

      <CaptionText style={{ marginTop: '16px' }}>{endNote}</CaptionText>
    </PaymentCardContainer>
  );
};

export default PaymentCard;

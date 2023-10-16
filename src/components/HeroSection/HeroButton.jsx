import React, { useContext } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Arrow from '../../../images/Arrow.svg';
import HeroBtnTop from '../../../images/HeroBtnTop.svg';
import HeroBtnBelow from '../../../images/HeroBtnBelow.svg';
import { AuthContext } from '../../utils/Auth';

const ButtonTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
`;

const ButtonBelow = styled.div`
  transition: transform 0.2s ease-in-out;
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  border: none;
  background: none;
  width: 320px;
  cursor: pointer;
  &:hover {
    ${ButtonTop} {
      transform: translateY(6px);
    }
    ${ButtonBelow} {
      transform: scaleY(0.3);
    }
  }
  @media (min-width: 576px) {
    max-width: 60%;
    width: 100%;
  }
`;

const ButtonText = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const enumButtonText = {
  registered: 'Go to Profile',
  paymentPending: 'Pay Now',
  notRegistered: 'Register Now',
  notLoggedIn: 'Login to Register',
};

function HeroButton() {
  const { userData, authenticated, login } = useContext(AuthContext);

  const isRegistered = userData?.rollNumber || userData?.festID?.includes('innovision-2023');
  const isPaymentPending =
    !userData?.rollNumber && !userData?.festID?.includes('innovision-2023') && userData?.id;

  let buttonText = enumButtonText.notRegistered;
  let buttonLink = '/register';

  if (isRegistered) {
    buttonText = enumButtonText.registered;
    buttonLink = '/profile';
  }

  if (isPaymentPending) {
    buttonText = enumButtonText.paymentPending;
    buttonLink = '/payment';
  }

  if (!authenticated) {
    buttonText = enumButtonText.notLoggedIn;
  }

  return (
    <ButtonContainer type='submit' onClick={() => (authenticated ? navigate(buttonLink) : login())}>
      <ButtonTop>
        <ButtonText>
          {buttonText}
          <img src={Arrow} alt='arrow' className='md:w-[16px]' />
        </ButtonText>
        <img src={HeroBtnTop} alt='Hero-Btn' />
      </ButtonTop>
      <ButtonBelow>
        <img src={HeroBtnBelow} alt='Hero-Btn' />
      </ButtonBelow>
    </ButtonContainer>
  );
}

export default HeroButton;

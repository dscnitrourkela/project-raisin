import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../images/Arrow.svg';
import HeroBtnTop from '../../../images/HeroBtnTop.svg';
import HeroBtnBelow from '../../../images/HeroBtnBelow.svg';

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

function HeroButton() {
  return (
    <ButtonContainer type='submit'>
      <ButtonTop>
        <ButtonText>
          REGISTER NOW
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

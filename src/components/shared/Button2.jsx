import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from './Typography/ButtonText';

const ButtonContainer = styled.button`
  background: ${(props) => (props.success ? '#1BBE00' : 'none')};
  :hover {
    background: ${(props) => (props.success ? '#1BBE00' : '#323232')};
  }
  ${tw`
    rounded-4xl
    px-9
    py-3
    text-color-primary
  `}
`;

const Button2 = ({ text, success = false, method = undefined }) => (
  <ButtonContainer onClick={method} success={success}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default Button2;

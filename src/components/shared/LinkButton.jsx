import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from './Typography/ButtonText';

const ButtonContainer = styled.button`
  background: ${(props) => (props.outline ? 'none' : '#ffffff')};
  border: ${(props) => (props.outline ? '1px solid #ffffff' : 'none')};
  color: ${(props) => (props.outline ? '#ffffff' : '#000000')};
  :hover {
    background: ${(props) => (props.outline ? '#ffffff' : '#ECFDFF')};
    color: #000000;
  }
  transition: all 0.1s linear;

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
  }

  ${tw`py-3 rounded-4xl px-9 w-max`}
`;

const LinkButton = ({ link, text, outline = false, method = undefined, disabled = false }) => (
  <ButtonContainer onClick={method} outline={outline} disabled={disabled}>
    {link ? (
      <Link to={link}>
        <ButtonText>{text}</ButtonText>
      </Link>
    ) : (
      <ButtonText>{text}</ButtonText>
    )}
  </ButtonContainer>
);

export default LinkButton;

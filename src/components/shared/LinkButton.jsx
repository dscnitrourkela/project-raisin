/* eslint-disable no-nested-ternary */
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

  ${tw`
    rounded-4xl
    px-9
    py-3
    w-max
  `}
`;

const LinkButton = ({ link, text, outline = false, method = undefined, disabled }) => (
  <ButtonContainer disabled={disabled} onClick={method} outline={outline}>
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

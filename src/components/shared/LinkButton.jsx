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

  width: fit-content;
  ${tw`
    rounded-4xl
    px-9
    py-3
  `}
`;

const LinkButton = ({ link, text, outline = false }) => (
  <ButtonContainer outline={outline}>
    <Link to={link}>
      <ButtonText>{text}</ButtonText>
    </Link>
  </ButtonContainer>
);

export default LinkButton;

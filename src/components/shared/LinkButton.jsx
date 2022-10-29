import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from './Typography/ButtonText';

const ButtonContainer = styled.button`
  background: ${(props) =>
    (props.outline && 'none') || (props.disabled && 'rgba(74, 74, 74, 0.5)') || '#ffffff'};
  border: ${(props) => (props.outline && '1px solid #ffffff') || 'none'};
  color: ${(props) => (props.outline && '#ffffff') || (props.disabled && '#ffffff') || '#000000'};
  padding: ${(props) => `${props.paddingY || '12px'} ${props.paddingX || '36px'}`};
  cursor: ${(props) => (props.disabled && 'not-allowed') || 'pointer'};
  :hover {
    background: ${(props) =>
      (props.outline && '#ffffff') || (props.disabled && 'rgba(74, 74, 74, 0.5)') || '#ECFDFF'};
    color: ${(props) => (props.disabled && '#ffffff') || '#000000'};
  }
  transition: all 0.1s linear;
  ${tw`
    rounded-4xl
    w-max
  `}
`;

const LinkButton = ({
  link,
  text,
  paddingY,
  paddingX,
  bold,
  disabled = false,
  outline = false,
  method = undefined,
}) => (
  <ButtonContainer
    paddingY={paddingY}
    paddingX={paddingX}
    onClick={method}
    disabled={disabled}
    outline={outline}
  >
    {!disabled && link ? (
      <Link to={link}>
        <ButtonText bold={bold}>{text}</ButtonText>
      </Link>
    ) : (
      <ButtonText bold={bold}>{text}</ButtonText>
    )}
  </ButtonContainer>
);

export default LinkButton;

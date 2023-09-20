/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from './Typography/ButtonText';

const variants = {
  outline: {
    background: 'transparent',
    borderImage: 'var(--brand-gradient)',
    borderImageSlice: 1,
    border: '2px solid',
  },
  primary: {
    background: 'var(--background-secondary)',
    border: 'var(--background-secondary) 2px solid',
    borderImage: 'none',
    borderImageSlice: 0,
  },
  filled: {
    background: 'var(--brand-gradient)',
    border: 'var(--brand-gradient) 2px solid',
    borderImage: 'none',
    borderImageSlice: 0,
    color: 'var(--accent-primary)',
  },
};

const StyledButton = styled.button`
  background: ${(props) =>
    variants[props.variant] ? variants[props.variant].background : variants.primary.background};

  border: ${(props) =>
    variants[props.variant] ? variants[props.variant].border : variants.primary.border};

  border-image: ${(props) =>
    variants[props.variant] ? variants[props.variant].borderImage : variants.primary.borderImage};

  border-image-slice: ${(props) =>
    variants[props.variant]
      ? variants[props.variant].borderImageSlice
      : variants.primary.borderImageSlice};

  ${tw`
    px-9
    py-3
    text-color-primary
  `}
  color: ${(props) =>
    variants[props.variant] ? variants[props.variant].color : variants.primary.color};
`;
const Button = ({ text, onClick, link, variant, ...props }) =>
  link ? (
    <Link to={link}>
      <StyledButton variant={variant} {...props}>
        <ButtonText outline={variant === 'outline'}>{text}</ButtonText>
      </StyledButton>
    </Link>
  ) : (
    <StyledButton variant={variant} {...props} onClick={onClick}>
      <ButtonText outline={variant === 'outline'}>{text}</ButtonText>
    </StyledButton>
  );

export default Button;

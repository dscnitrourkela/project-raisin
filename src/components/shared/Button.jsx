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
    border: '2px solid var(--background-secondary))',
    borderImage: 'none',
    borderImageSlice: 0,
  },
  filled: {
    background: 'var(--brand-gradient)',
    border: '2px solid',
    borderImage: 'var(--brand-gradient)',
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

  width: ${({ width }) => width};

  ${tw`
    relative
    px-9
    py-3
    text-color-primary
    rounded-xl
    sm:w-auto
  `}
  color: ${(props) =>
    variants[props.variant] ? variants[props.variant].color : variants.primary.color};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:before {
    content: attr(data-tooltip);
    padding: 0.2rem 1rem;
    position: absolute;
    top: -30%;
    left: 50%;
    background: var(--accent-error);
    color: var(--text-primary);
    border-radius: 2px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    transform: translate(-50%, 50%) scale(0.5, 0.5);
    transition:
      opacity 0.2s ease-out,
      transform 0.2s ease-out;
    white-space: nowrap;
  }

  &:disabled:hover:before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1, 1);
  }
`;

const Button = ({ text, onClick, link, variant, tooltip, className, ...props }) =>
  link ? (
    <Link to={link}>
      <StyledButton variant={variant} {...props} className={className}>
        <ButtonText outline={variant === 'outline'}>{text}</ButtonText>
      </StyledButton>
    </Link>
  ) : (
    <StyledButton
      variant={variant}
      {...props}
      onClick={onClick}
      data-tooltip={tooltip}
      className={className}
    >
      <ButtonText outline={variant === 'outline'}>{text}</ButtonText>
    </StyledButton>
  );

export default Button;

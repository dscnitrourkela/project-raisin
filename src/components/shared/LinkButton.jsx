import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from './Typography/ButtonText';

const ButtonContainer = styled.button`
  border: 1px solid #ffffff;
  color: var(--brand-gradient);
  padding: ${(props) => `${props.paddingY || '14px'} ${props.paddingX || '18px'}`};
  cursor: pointer;
  ${tw`w-max`}
`;

const LinkButton = ({ link, text, paddingY, paddingX, disabled = false, method = undefined }) => (
  <ButtonContainer paddingY={paddingY} paddingX={paddingX} onClick={method} disabled={disabled}>
    {!disabled && link ? (
      <Link to={link}>
        <ButtonText style={{ fontWeight: 500 }} outline>
          {text}
        </ButtonText>
      </Link>
    ) : (
      <ButtonText style={{ fontWeight: 500 }} outline>
        {text}
      </ButtonText>
    )}
  </ButtonContainer>
);

export default LinkButton;

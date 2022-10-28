import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1 } from '../shared';

const TextInputContainer = styled.div`
  ${tw``}
`;

const TextInputBox = styled.input`
  background-color: ${(props) => (props.disabled ? '#555' : 'transparent')};
  border-bottom: 1px solid white;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'auto')};
  ${tw`
    mt-2
    w-full
    p-1
    text-color-secondary
  `}
`;

const TextInput = ({ title, type, setType, disabled = false, inputType, required }) => (
  <TextInputContainer>
    <Body1>{title}</Body1>
    <TextInputBox
      disabled={disabled}
      onChange={(e) => setType(e.target.value)}
      type={inputType || 'text'}
      required={required}
      value={type}
    />
  </TextInputContainer>
);

export default TextInput;

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, CaptionText } from '../shared';

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

const ErrorText = styled(CaptionText)`
  color: red;
  ${tw`mt-1  `}
`;

const TextInput = ({
  inputType = 'text',
  title,
  type,
  onChange,
  onBlur,
  disabled = false,
  error,
}) => (
  <TextInputContainer>
    <Body1>{title}</Body1>
    <TextInputBox
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      type={inputType}
      required
      value={type}
      error
    />
    <ErrorText>{error}</ErrorText>
  </TextInputContainer>
);

export default TextInput;

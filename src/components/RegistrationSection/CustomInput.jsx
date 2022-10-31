import React from 'react';

import styled from 'styled-components';

import { Body1, Body2 } from '../shared';

const CustomSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.25rem;
  color: var(--text-color-secondary);

  &:focus {
    outline: none !important;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border-bottom: 1px solid white;
  cursor: auto;
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.25rem;
  color: var(--text-color-secondary);

  &:focus {
    outline: none !important;
  }

  &:read-only {
    background: #555555;
  }
`;

const ErrorMsg = styled(Body2)`
  color: #e62b1e;
  margin-top: 10px;
  width: 100%;
`;

const CustomInput = ({ values, onChange, objKey, onBlur }) => {
  const {
    placeholder,
    readOnly,
    type,
    inputMode,
    value,
    maxLength,
    errorVisibility,
    errorMessage,
  } = values[objKey];
  return (
    <React.Fragment key={placeholder}>
      <Body1 style={{ marginTop: '1.5rem', width: '100%' }}>{placeholder}</Body1>
      {type === 'select' ? (
        <CustomSelect
          value={value}
          onChange={(event) => onChange(event, objKey)}
          placeholder='choose from the options'
        >
          <option value=''>--Please Choose an Option--</option>
          {values[objKey]?.options.map((option) => (
            <option key={option} value={option.toUpperCase()}>
              {option}
            </option>
          ))}
        </CustomSelect>
      ) : (
        <Input
          onChange={(event) => onChange(event, objKey)}
          readOnly={readOnly}
          value={value}
          type={type}
          inputMode={inputMode}
          max={maxLength}
          maxLength={maxLength}
          onBlur={(event) => onBlur(event, objKey)}
        />
      )}
      {errorVisibility && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </React.Fragment>
  );
};

export default CustomInput;

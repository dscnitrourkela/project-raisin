import React from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel } from './CheckBox.styles';
import { ErrorMessage } from '../InputField/InputField.styles';

function CheckBox({ label, checked, onChange, className, name, error }) {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxLabel>{label}</CheckBoxLabel>
      <CheckBoxInput
        type='checkbox'
        checked={checked}
        onChange={onChange}
        name={name}
        $hasError={error && true}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckBoxContainer>
  );
}

export default CheckBox;

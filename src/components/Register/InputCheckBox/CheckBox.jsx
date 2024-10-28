import React from 'react';
import {
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxParentContainer,
} from './CheckBox.styles';
import { ErrorMessage } from '../InputField/InputField.styles';

function CheckBox({ label, checked, onChange, className, name, error }) {
  return (
    <CheckBoxParentContainer>
      <CheckBoxContainer className={className}>
        <CheckBoxLabel>{label}</CheckBoxLabel>
        <CheckBoxInput
          type='checkbox'
          checked={checked}
          onChange={onChange}
          name={name}
          $hasError={error && true}
        />
      </CheckBoxContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckBoxParentContainer>
  );
}

export default CheckBox;

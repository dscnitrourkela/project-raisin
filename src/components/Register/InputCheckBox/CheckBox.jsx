import React from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel } from './CheckBox.styles';

function CheckBox({ label, checked, onChange, className, name }) {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxLabel>{label}</CheckBoxLabel>
      <CheckBoxInput type='checkbox' checked={checked} onChange={onChange} name={name} />
    </CheckBoxContainer>
  );
}

export default CheckBox;

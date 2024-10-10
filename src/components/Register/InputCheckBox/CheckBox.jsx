import React from 'react';
import { CheckBoxContainer, CheckBoxInput, CheckBoxLabel } from './CheckBox.styles';

function CheckBox({ label, checked, onChange, name, className }) {
  return (
    <CheckBoxContainer className={className}>
      <CheckBoxLabel htmlFor={name}>{label}</CheckBoxLabel>
      <CheckBoxInput type='checkbox' checked={checked} onChange={onChange} name={name} id={name} />
    </CheckBoxContainer>
  );
}

export default CheckBox;

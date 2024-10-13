'use client';
import { Label } from '../FileInput/FileInput.styles';
import { useState, useEffect } from 'react';

import { ErrorMessage } from '../InputField/InputField.styles';
import {
  DropdownIcon,
  DropdownItem,
  DropdownList,
  LabelAndInputContainer,
  SelectFieldContainer,
  SelectFieldInput,
  SelectFieldParentContainer,
} from './SelectField.styles';
function SelectField({
  options = [],
  onChange,
  placeholder,
  value,
  className,
  name,
  label,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || '');

  useEffect(() => {
    setSelectedOption(value || '');
  }, [value]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option);
  };
  return (
    <SelectFieldParentContainer>
      <LabelAndInputContainer>
        {label && <Label>{label}</Label>}
        <SelectFieldContainer $hasError={!!error} onClick={handleToggle}>
          <SelectFieldInput>{selectedOption || placeholder || 'Select an option'}</SelectFieldInput>
          <DropdownIcon size={20} />
        </SelectFieldContainer>
        {isOpen && (
          <DropdownList>
            {options.map((option, index) => (
              <DropdownItem key={index} onClick={() => handleSelect(option.value)}>
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </LabelAndInputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <input type='hidden' name={name} value={selectedOption} />
    </SelectFieldParentContainer>
  );
}

export default SelectField;

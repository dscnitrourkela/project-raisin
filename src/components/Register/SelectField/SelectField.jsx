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
  handleSelect,
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

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSelect((prevState) => ({ ...prevState, [name]: option }));
  };
  const isOneLine = className?.includes('oneliner');
  return (
    <SelectFieldParentContainer>
      <LabelAndInputContainer
        className={isOneLine ? 'flex-col xxs:flex-row items-center' : 'flex-col items-start'}
      >
        {label && <Label>{label}</Label>}
        <SelectFieldContainer $hasError={!!error} onClick={handleToggle}>
          <SelectFieldInput>{selectedOption || placeholder || 'Select an option'}</SelectFieldInput>
          <DropdownIcon size={20} />
        </SelectFieldContainer>
        {isOpen && (
          <DropdownList>
            {options.map((option, index) => (
              <DropdownItem key={index} onClick={() => handleSelectChange(option.value)}>
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </LabelAndInputContainer>
      {error && <ErrorMessage className='mt-5'>{error}</ErrorMessage>}
      <input type='hidden' name={name} value={selectedOption} />
    </SelectFieldParentContainer>
  );
}

export default SelectField;

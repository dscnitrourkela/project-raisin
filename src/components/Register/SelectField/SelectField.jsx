'use client';
import { Label } from '../FileInput/FileInput.styles';
import { useState, useEffect } from 'react';
import InputField from '../InputField/InputField';
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
  setErrors,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || '');
  const [otherInstituteName, setOtherInstituteName] = useState('');
  const isOneLine = className?.includes('oneliner');

  const isOthers =
    (!options.some((option) => option.value === selectedOption) && selectedOption !== '') ||
    selectedOption === 'others';

  useEffect(() => {
    setSelectedOption(value || '');
  }, [value]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (option === '') {
      handleSelect((prevState) => ({
        ...prevState,
        [name]: otherInstituteName,
      }));
    } else {
      handleSelect((prevState) => ({
        ...prevState,
        [name]: option,
      }));
    }
  };

  useEffect(() => {
    if (isOthers) {
      handleSelect((prevState) => ({
        ...prevState,
        [name]: otherInstituteName,
      }));
    }
  }, [otherInstituteName]);

  return (
    <div>
      <SelectFieldParentContainer>
        <LabelAndInputContainer
          className={isOneLine ? 'flex-col xxs:flex-row items-center' : 'flex-col items-start'}
        >
          {label && <Label>{label}</Label>}
          <SelectFieldContainer $hasError={!!error} onClick={handleToggle}>
            <SelectFieldInput>
              {selectedOption || placeholder || 'Select an option'}
            </SelectFieldInput>
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
        {error && !isOthers && <ErrorMessage className='mt-5'>{error}</ErrorMessage>}
        <input type='hidden' name={name} value={selectedOption} />
      </SelectFieldParentContainer>

      {isOthers && (
        <div className='mt-5'>
          <InputField
            placeholder='Enter your institute name'
            type='text'
            onChange={(e) => setOtherInstituteName(e.target.value)}
            value={otherInstituteName}
            className='w-full'
            name='institute'
            label='Enter your institute name'
            error={error}
            setErrors={setErrors}
            showReferral={true}
          />
        </div>
      )}
    </div>
  );
}

export default SelectField;

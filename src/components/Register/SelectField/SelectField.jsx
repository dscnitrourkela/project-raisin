'use client';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Label } from '../FileInput/FileInput.styles';
import InputField from '../InputField/InputField';
import SearchField from './SearchField/SearchField';
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
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);
  const isOneLine = className?.includes('oneliner');
  const [isOthers, setIsOthers] = useState(false);

  useEffect(() => {
    setSelectedOption(value || '');
  }, [value]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchQuery('');
  };

  const handleSelectChange = (option, id) => {
    if (id === 'notAllowed') {
      toast.error(
        "Students from this institute have been officially barred from participating in INNO'24",
      );
      return;
    }

    setSelectedOption(option);
    setIsOpen(false);
    setSearchQuery('');
    setErrors((prev) => ({ ...prev, [name]: '' }));

    if (option === '') {
      handleSelect((prev) => ({ ...prev, [name]: otherInstituteName }));
      return;
    }

    if (name === 'institute') {
      setIsOthers(!id);
      handleSelect((prev) => ({
        ...prev,
        instituteId: id || null,
        institute: option,
      }));
      return;
    }

    handleSelect((prev) => ({ ...prev, [name]: option }));
  };

  useEffect(() => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }));
    if (isOthers) {
      handleSelect((prevState) => ({
        ...prevState,
        [name]: otherInstituteName,
      }));
    }
  }, [otherInstituteName, handleSelect, isOthers, name, setErrors]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  function returnSortedAndFilteredOptions(array) {
    const sortedOptions = array.sort((a, b) => a.label.localeCompare(b.label));

    const othersIndex = sortedOptions.findIndex((option) => option.value === 'others');
    if (othersIndex !== -1) {
      const [othersOption] = sortedOptions.splice(othersIndex, 1);
      sortedOptions.push(othersOption);
    }

    if (!searchQuery) return sortedOptions;

    return sortedOptions.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  const filteredOptions = returnSortedAndFilteredOptions(options);

  return (
    <div ref={ref}>
      <SelectFieldParentContainer>
        <LabelAndInputContainer
          className={
            isOneLine
              ? 'flex-col xxs:flex-row xxs:items-center items-start'
              : 'flex-col items-start'
          }
        >
          {label && <Label>{label}</Label>}
          <SelectFieldContainer $hasError={!!error} onClick={handleToggle}>
            <SelectFieldInput>
              {isOthers ? 'Others' : selectedOption || placeholder || 'Select an option'}
            </SelectFieldInput>
            <DropdownIcon size={20} />
          </SelectFieldContainer>

          {isOpen && (
            <DropdownList>
              <div className='sticky top-0 p-2'>
                <SearchField
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder='Search options...'
                  autoFocus
                  showClearButton
                  onClear={() => setSearchQuery('')}
                />
              </div>

              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => handleSelectChange(option.value, option.id)}
                  >
                    {option.label}
                  </DropdownItem>
                ))
              ) : (
                <div className='px-4 py-3 text-sm text-gray-500'>No options found</div>
              )}
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

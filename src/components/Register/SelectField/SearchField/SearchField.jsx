'use client';
import { useRef, useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import {
  SearchContainer,
  SearchInnerContainer,
  SearchFieldInput,
  ClearButton,
  IconContainer,
  ErrorMessage,
} from './SearchField.styles';

function SearchField({
  value = '',
  onChange,
  placeholder = 'Search options...',
  className = '',
  name = '',
  autoFocus = false,
  debounceTime = 300,

  disabled = false,
  error = '',
  onFocus,
  onBlur,
  onClear,
  showClearButton = true,

  iconSize = 20,
  customStyles,
}) {
  const [internalValue, setInternalValue] = useState(value);
  const searchInputRef = useRef(null);
  const debounceTimerRef = useRef(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [autoFocus]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      onChange?.(newValue);
    }, debounceTime);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
    onClear?.();
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <SearchContainer css={[customStyles]} className={className}>
      <SearchInnerContainer>
        <SearchFieldInput
          ref={searchInputRef}
          type='text'
          value={internalValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={!!error}
        />

        {showClearButton && internalValue && !disabled && (
          <ClearButton type='button' onClick={handleClear} aria-label='Clear search'>
            <X size={16} />
          </ClearButton>
        )}

        <IconContainer>
          <Search size={iconSize} />
        </IconContainer>
      </SearchInnerContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SearchContainer>
  );
}

export default SearchField;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  CustomButton,
  CustomInput,
  // CustomOption,
  CustomSelect,
  InputContainer,
  InputField,
  InputFieldSet,
  InputLabel,
  // OptionContainer,
} from './styles';
import CaptionText from '../../Typography/CaptionText';

/**
 * @param {object} props
 * @param {object} props.data
 * @param {string} props.data.caption
 * @param {string} props.data.type
 * @param {string} props.data.placeHolder
 * @param {string} props.data.errorMessage
 * @param {string} props.data.value
 * @param {boolean} props.data.readOnly
 * @param {string[]} props.data.options
 * @param {boolean} props.data.errorVisibility
 * @param {boolean} props.data.color
 * @param {object} props.data.button
 * @param {string} props.data.button.text
 * @param {function} props.data.button.onClick
 * @param {string} props.data.button.color
 *
 * @param {string} props.key
 * @param {function} props.onChange
 * @param {function} props.onBlur
 * @param {function} props.onFocus
 *
 * @returns {JSX.Element}
 */

const Input = ({ onChange, onBlur, onFocus, data, ...props }) => {
  const {
    caption,
    type,
    placeHolder,
    errorMessage,
    value,
    readOnly,
    options,
    errorVisibility,
    color,
    button,
    key,
  } = data;

  const [focus, setFocus] = useState(value !== '');
  const [showPassword, setShowPassword] = useState(false);

  const focused = focus || value !== '';

  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleFocus = (e) => {
    setFocus(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (value === '') {
      setFocus(false);
    }
    if (onBlur) onBlur(e);
  };

  return (
    <InputContainer>
      <CustomInput select={type === 'select'} focused={focused}>
        <InputLabel htmlFor={key} focused={focused} errorVisibility={errorVisibility} color={color}>
          {placeHolder}
        </InputLabel>
        {type === 'select' ? (
          <CustomSelect
            role='button'
            aria-haspopup='listbox'
            aria-label={placeHolder}
            value={value}
            id={key}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={onChange}
            focused={focused}
            {...props}
          >
            <option value='' disabled hidden aria-label='None' />
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </CustomSelect>
        ) : (
          <InputField
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            id={key}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            readOnly={readOnly}
            disabled={readOnly}
            style={{ paddingRight: button || type === 'password' ? '70px' : '14px' }}
            {...props}
          />
        )}
        {type === 'password' && (
          <CustomButton type='button' onClick={handlePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </CustomButton>
        )}

        {button && (
          <CustomButton type='button' onClick={button.onClick} color={button.color} bgColor={color}>
            {button.text}
          </CustomButton>
        )}

        <InputFieldSet focused={focused} errorVisibility={errorVisibility} color={color}>
          <legend>{placeHolder}</legend>
        </InputFieldSet>
      </CustomInput>
      {caption && <CaptionText>{caption}</CaptionText>}

      {errorMessage && (
        <CaptionText color={errorVisibility ? 'var(--accent-error)' : null}>
          {errorVisibility ? errorMessage : null}
        </CaptionText>
      )}

      {/* TODO : AFTERWARDS CHNAGE THE SELECT TO BUTTON AND STYLE OPTIONS PROPERLY */}
      {/* {type === 'select' && (
        <OptionContainer focused={open}>
          {options?.map((option) => (
            <CustomOption
              key={option}
              value={option}
              onClick={() => onChange({ target: { value: option, id: key } })}
            >
              {option}
            </CustomOption>
          ))}
        </OptionContainer>
      )} */}
    </InputContainer>
  );
};

export default Input;

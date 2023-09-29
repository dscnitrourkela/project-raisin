import React, { useContext, useEffect } from 'react';
import { RegistrationContext } from './RegistrationContext';
import { Body2, ButtonText, Heading2, Input } from '../shared';
import { InputContainer, RegistrationCard, RegistrationCardTitle } from './styles';
import Button from '../shared/Button';

// Define enum for show
const SHOW = {
  NITR: ['both', 'nitr'],
  NON_NITR: ['both', 'non-nitr'],
};

export const RegistrationForm = () => {
  const { inputData, setInputValue, isNITR, setErrorMessage, verified } =
    useContext(RegistrationContext);

  const onBlur = (e) => {
    const { id, value } = e.target;
    const { minLength, maxLength, regex, type } = inputData[id];

    if (!value || type === 'select') return;

    if (value.length < minLength) {
      setErrorMessage(id, `Minimum length is ${minLength}`, true);
    } else if (value.length > maxLength) {
      setErrorMessage(id, `Maximum length is ${maxLength}`, true);
    } else if (regex && !regex.test(value)) {
      setErrorMessage(id, 'Invalid input', true);
    } else {
      setErrorMessage(id, '', false);
    }
  };

  useEffect(() => {
    Object.values(inputData).forEach(({ minLength, maxLength, value, regex, key, type }) => {
      if (!value || type === 'select') return;

      if (value.length < minLength) {
        setErrorMessage(key, `Minimum length is ${minLength}`, true);
      } else if (value.length > maxLength) {
        setErrorMessage(key, `Maximum length is ${maxLength}`, true);
      } else if (!regex.test(value)) {
        setErrorMessage(key, 'Invalid input', true);
      } else {
        setErrorMessage(key, '', false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RegistrationCard>
      <RegistrationCardTitle>
        <Heading2 style={{ textTransform: 'none' }}>Registration form</Heading2>
        <Body2 style={{ display: 'flex', gap: '16px' }}>
          {isNITR ? 'Student from NIT Rourkela' : 'Student from other college'}
          <ButtonText outline>Change</ButtonText>
        </Body2>
      </RegistrationCardTitle>

      <InputContainer>
        {Object.entries(inputData)
          .filter(([, value]) =>
            isNITR ? SHOW.NITR.includes(value.show) : SHOW.NON_NITR.includes(value.show),
          )
          .map(([key, value], index, array) => {
            let gridCols;
            if (array.length <= 4) {
              gridCols = 'span 4';
            } else if (index === array.length - 1 && index % 2 === 0) {
              gridCols = '2 / 4';
            } else {
              gridCols = 'span 2';
            }

            return (
              <div key={key} style={{ gridColumn: gridCols }}>
                <Input
                  data={value}
                  key={key}
                  onChange={(e) => setInputValue(key, e.target.value)}
                  onBlur={onBlur}
                />
              </div>
            );
          })}
      </InputContainer>

      <Button
        type='submit'
        variant='filled'
        text='Register'
        width='350px'
        disabled={!verified && isNITR}
        tooltip={verified ? '' : 'Verify your credentials'}
      />
    </RegistrationCard>
  );
};

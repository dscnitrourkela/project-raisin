import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';
import { toast } from 'react-toastify';
import { RegistrationContext } from './RegistrationContext';
import { Body2, ButtonText, Heading2, Input } from '../shared';
import { InputContainer, RegistrationCard, RegistrationCardTitle } from './styles';
import Button from '../shared/Button';
import { SHOW, verify, verifyAll } from './utils';
import Api from '../../utils/Api';
import { AuthContext } from '../../utils/Auth';

export const RegistrationForm = () => {
  const { inputData, setInputValue, isNITR, setErrorMessage, verified, setIsNITR } =
    useContext(RegistrationContext);

  const { token, uid, setUserData } = useContext(AuthContext);

  const api = Api.getInstance();

  const onBlur = (e) => {
    const { id, value } = e.target;
    const { minLength, maxLength, regex, type } = inputData[id];

    verify({ minLength, maxLength, regex, value, type, id, setErrorMessage });
  };

  useEffect(() => {
    Object.values(inputData).forEach(({ minLength, maxLength, value, regex, key, type }) => {
      verify({ minLength, maxLength, value, regex, type, id: key, setErrorMessage });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerUser = async () => {
    const payload = verifyAll({ inputData, isNITR, verified });
    if (!payload) return;

    const sideEffects = (userData) => {
      if (userData) {
        setUserData(userData);
      }
      if (isNITR) navigate('/');
      else navigate('/payment');
    };

    toast.promise(
      api.registerUser({ accessToken: token, payload, sideEffects, uid }),
      {
        pending: 'Registering...',
        success: 'Registered successfully',
        error: 'Unable to register',
      },
      {
        toastId: 'registerUser',
      },
    );
  };

  return (
    <RegistrationCard>
      <RegistrationCardTitle>
        <Heading2 style={{ textTransform: 'none' }}>
          {/* {isNITR ? 'Registration form' : 'Registration has been closed'} */}
          Registration form
        </Heading2>
        <Body2 style={{ display: 'flex', gap: '16px' }}>
          {isNITR ? 'Student from NIT Rourkela' : 'Student from other college'}
          <ButtonText onClick={() => setIsNITR((prev) => !prev)} className='cursor-pointer' outline>
            Change
          </ButtonText>
        </Body2>
      </RegistrationCardTitle>
      {/* {isNITR ? ( */}
      <>
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
          onClick={registerUser}
        />
      </>
      {/* ) : (
        <>
          <Heading4 font='Inter' style={{ textAlign: 'center', maxWidth: '500px' }}>
            Registration for non-NITR students has been closed.
          </Heading4>
          <Body2 style={{ textAlign: 'center', maxWidth: '500px' }}>
            If you have any queries reach out to innovision team at reachus.inno@gmail.com
          </Body2>
          <Body1 style={{ display: 'flex', gap: '16px' }}>
            Are you a student from NIT Rourkela?{' '}
            <ButtonText onClick={() => setIsNITR(true)} className='cursor-pointer' outline>
              Change
            </ButtonText>
          </Body1>
        </>
      )} */}
    </RegistrationCard>
  );
};

import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import { Container, Heading3, CaptionText } from '../shared';
// import { AuthContext } from '../../utils/Auth';
// import { avenueApi } from '../../utils/api';
import FailureIcon from './failure.svg';
import SuccessIcon from './succuss.svg';
import CustomInput from './CustomInput';
import TxnCard from './TxnCard';

import { STAGES, INPUTS } from './CONSTANTS';

const InfoText = styled(CaptionText)`
  ${tw`text-color-secondary`}
`;

const RegistrationContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 100px;
`;

const RegisterFormContainer = styled.div`
  width: 40%;
  background: var(--background-secondary);
  border-radius: 7px;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const NewButton = styled.button`
  width: auto;
  min-width: 150px;
  border: 1px solid #ecfdff;
  color: ${(props) => (props.selected ? '#000000' : '#ECFDFF')};
  background: ${(props) => (props.selected ? '#ECFDFF' : 'transparent')};
  margin-right: 1rem;
  margin-top: 4rem;
  padding: 15px 20px;
  border-radius: 50px;

  &:hover {
    color: #000000;
    background: #ecfdff;
  }
`;

/**
 * Possible stages
 * 1. selection if NITR student or not
 * 2. registration for NITR student
 * 3. registration for non NITR student
 * 4. transaction successful screen
 * 5. transaction unsuccessful screen
 */

export const getURLParameter = (paramName, URLString = window.location.href) => {
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`);
  const results = regex.exec(URLString);

  if (results && results.length > 0) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  return '';
};

const EventRegister = () => {
  const [stage, setStage] = useState(STAGES.TYPE_OF_USER);
  const [values, setValues] = useState(INPUTS);
  const [isNitrStudent, setIsNitrStudent] = useState({ yes: false, no: false });

  const setStageToNitrForm = () => setStage(STAGES.NITR_STUDENT_FORM);
  const setStageToNonNitrForm = () => setStage(STAGES.NON_NITR_STUDENT_FORM);
  const setStageToTxnSuccessful = () => setStage(STAGES.TXN_SUCCESSFUL);
  const setStageToTxnUnsuccessful = () => setStage(STAGES.TXN_UNSUCCESSFUL);
  const setStageToTypeOfUser = () => {
    setStage(STAGES.TYPE_OF_USER);
    setIsNitrStudent({ yes: false, no: false });
  };

  const setNitrStudent = () => {
    setIsNitrStudent({ yes: true, no: false });
    setStageToNitrForm();
  };
  const setNonNitrStudent = () => {
    setIsNitrStudent({ yes: false, no: true });
    setStageToNonNitrForm();
  };

  const onInputChange = (event, objKey) => {
    let { value } = event.target;
    const { regex, maxLength } = values[objKey];
    value = value.substring(0, maxLength);
    value = value.replace(regex, '');

    const fieldUpdate = {
      ...values,
      [objKey]: {
        ...values[objKey],
        value,
      },
    };

    setValues(fieldUpdate);
  };

  const onInputBlurChange = (event, objKey) => {
    const {
      target: { value },
    } = event;

    if (value.length < values[objKey].minLength) {
      setValues((current) => ({
        ...current,
        [objKey]: {
          ...current[objKey],
          errorVisibility: true,
          errorMessage: 'Required Field',
        },
      }));
    }
  };

  // const onSubmitClick = () => {
  //   if (!NITRStudent) {
  //     return handleNonNitrUserRegistration();
  //   }

  //   return handleNitrUserRegistration();
  // };

  useEffect(() => {
    Object.values(values).forEach(({ errorVisibility, minLength, key, value }) => {
      if (errorVisibility && value?.length >= minLength) {
        setValues((current) => ({
          ...current,
          [key]: {
            ...current[key],
            errorVisibility: false,
            errorMessage: '',
          },
        }));
      }
    });
  }, [values]);

  useEffect(() => {
    const paymentStatus = getURLParameter('payment_status');
    const paymentId = getURLParameter('payment_id');
    const paymentRequestId = getURLParameter('payment_request_id');

    if (paymentId && paymentRequestId && paymentStatus === 'Credit') {
      setStageToTxnSuccessful();
    } else {
      setStageToTxnUnsuccessful();
    }
  }, []);

  const renderStage = () => {
    switch (stage) {
      case STAGES.NON_NITR_STUDENT_FORM:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px' }}>{stage}</Heading3>
            <InfoText>
              Please fill up the form and pay a registration fees of ₹700 to proceed
            </InfoText>
            {Object.keys(values)
              .filter((key) => ['both', 'non-nitr'].includes(values[key].show))
              .map((key) => (
                <CustomInput
                  key={key}
                  objKey={key}
                  values={values}
                  onChange={onInputChange}
                  onBlur={onInputBlurChange}
                />
              ))}
            <NewButton onClick={setStageToTypeOfUser}>Back</NewButton>
            <NewButton>Proceed to Pay</NewButton>
          </RegisterFormContainer>
        );

      case STAGES.NITR_STUDENT_FORM:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px' }}>{stage}</Heading3>
            <InfoText>
              We don&apos;t save your password. This is to just verify if you are an NITR student
            </InfoText>
            {Object.keys(values)
              .filter((key) => ['both', 'nitr'].includes(values[key].show))
              .map((key) => (
                <CustomInput
                  key={key}
                  objKey={key}
                  values={values}
                  onChange={onInputChange}
                  onBlur={onInputBlurChange}
                />
              ))}
            <NewButton onClick={setStageToTypeOfUser}>Back</NewButton>
            <NewButton>Login with Webmail</NewButton>
          </RegisterFormContainer>
        );

      case STAGES.TXN_SUCCESSFUL:
        return (
          <TxnCard
            text='your payment was successful you have successfully registered to innovison 2k22'
            icon={SuccessIcon}
            type='success'
            button={
              <NewButton
                onClick={setStageToTypeOfUser}
                style={{ marginTop: '1rem', marginLeft: 0 }}
              >
                Continue
              </NewButton>
            }
          />
        );

      case STAGES.TXN_UNSUCCESSFUL:
        return (
          <TxnCard
            text='your payment was unsuccessful. please try again'
            icon={FailureIcon}
            type='failure'
            button={
              <NewButton
                onClick={setStageToTypeOfUser}
                style={{ marginTop: '1rem', marginLeft: 0 }}
              >
                Retry
              </NewButton>
            }
          />
        );

      case STAGES.TYPE_OF_USER:
      default:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px' }}>{stage}</Heading3>
            <InfoText>Registration for NIT Rourkela students is free</InfoText>
            <NewButton selected={isNitrStudent.yes} onClick={setNitrStudent}>
              Yes
            </NewButton>
            <NewButton selected={isNitrStudent.no} onClick={setNonNitrStudent}>
              No
            </NewButton>
          </RegisterFormContainer>
        );
    }
  };

  return (
    <Container>
      <RegistrationContainer>
        {renderStage()}
        <ImageContainer />
      </RegistrationContainer>
    </Container>
  );
};

export default EventRegister;

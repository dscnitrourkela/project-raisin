import React, { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import Lottie from 'react-lottie';
import tw from 'twin.macro';
import { toast } from 'react-toastify';
import { Link } from 'gatsby';

import { Container, Heading3, CaptionText } from '../shared';
import { AuthContext } from '../../utils/Auth';
import { avenueApi } from '../../utils/api';

import FailureIcon from './failure.svg';
import SuccessIcon from './succuss.svg';
import CustomInput from './CustomInput';
import TxnCard from './TxnCard';
import * as animationData from './register.json';

import { STAGES, INPUTS } from './CONSTANTS';

const InfoText = styled(CaptionText)`
  ${tw`text-color-secondary`}
  text-align: center;
`;

const RegistrationContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem - 110px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const RegisterFormContainer = styled.div`
  width: 50%;
  height: calc(100vh - 8rem - 110px);
  overflow-y: auto;
  background: var(--background-secondary);
  border-radius: 7px;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 100%;

  .image {
    width: 30%;
    height: auto;
    aspect-ratio: 1.2/1;
  }

  @media screen and (max-width: 990px) {
    width: 90%;
    margin-top: 4rem;
  }
`;

const NewButton = styled.button`
  width: auto;
  min-width: 150px;
  border: 1px solid #ecfdff;
  color: ${(props) => (props.selected ? '#000000' : '#ECFDFF')};
  background: ${(props) => (props.selected ? '#ECFDFF' : 'transparent')};
  margin-right: 1rem;
  margin-top: 0.5rem;
  padding: 15px 20px;
  border-radius: 50px;

  &:hover {
    color: #000000;
    background: #ecfdff;
  }
`;

export const getURLParameter = (paramName, URLString = window.location.href) => {
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`);
  const results = regex.exec(URLString);

  if (results && results.length > 0) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  return '';
};

const EventRegister = () => {
  const authContext = useContext(AuthContext);
  const { userData, setUserData } = authContext;

  const [isNitrStudent, setIsNitrStudent] = useState({ yes: false, no: false });
  const [stage, setStage] = useState();
  const [values, setValues] = useState(INPUTS({}));

  const setInputValue = (type, value) =>
    setValues((current) => ({
      ...current,
      [type]: {
        ...current[type],
        value,
      },
    }));

  const setStageToNitrForm = () => {
    setStage(STAGES.NITR_STUDENT_FORM);
    setInputValue('state', 'Odisha');
    setInputValue('city', 'Rourkela');
    setInputValue('college', 'National Institute of Technology Rourkela');
  };
  // const setStageToNonNitrForm = () => setStage(STAGES.NON_NITR_STUDENT_FORM);
  const setStageToClosedRegistration = () => setStage(STAGES.REGISTRATION_CLOSED);
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
    setStageToClosedRegistration();
    // setStageToNonNitrForm();
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

  const onTxnBackClick = () => {
    if (isNitrStudent.yes || userData?.rollNumber) {
      setStageToNitrForm();
    } else {
      // setStageToNonNitrForm();
      setStageToClosedRegistration();
    }
  };

  const onRetryClick = () => {
    // initiatePayment();
    setStageToClosedRegistration();
  };

  const saveUser = async () => {
    let payload;

    if (isNitrStudent.yes) {
      payload = Object.keys(values)
        .filter((key) => ['both', 'nitr'].includes(values[key].show))
        .reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: values[curr].value,
          }),
          {},
        );
    } else {
      payload = Object.keys(values)
        .filter((key) => ['both', 'non-nitr'].includes(values[key].show))
        .reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: values[curr].value,
          }),
          {},
        );
    }

    payload.uid = userData?.uid;

    try {
      const { data: newUser } = await avenueApi.post('/user', payload, {
        headers: {
          Authorization: `Bearer ${userData.accessToken}`,
        },
      });

      if (!newUser) {
        throw new Error('Something went Wrong: failed to regsiter user');
      }

      setUserData((current) => ({
        ...current,
        ...newUser,
      }));
      return newUser;
    } catch (error) {
      toast.error(error.response.data || 'Something went Wrong, please try again');
      return null;
    }
  };

  const initiatePayment = async () => {
    try {
      const { data: registrationLink } = await avenueApi.post(
        '/payment/instamojo',
        {
          amount: 700,
          purpose: 'INNOVISION-2022 | REGISTRATION',
          buyerName: values.name.value,
          email: values.email.value,
          phone: values.mobile.value,
          redirectUrl: 'https://inno.nitrkl.in/register',
          // redirectUrl: 'http://localhost:8000/register',
          webhook: 'https://avenue-api.nitrkl.in/payment/webhook',
          // webhook: 'http://1bcc-13-235-217-104.ngrok.io/payment/webhook',
        },
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        },
      );

      if (!registrationLink) {
        throw new Error('Something went Wrong: failed to generate payment link');
      }

      window.location = registrationLink;
    } catch (error) {
      toast.error(error.response.data || 'Something went Wrong, please try again');
    }
  };

  const verifyZimbraMail = async () => {
    try {
      const { status } = await avenueApi.get('/zimbra-login', {
        params: {
          username: values.rollNumber.value,
          password: values.password.value,
        },
      });

      if (status === 401) {
        throw new Error('Invalid Credentials');
      }

      return true;
    } catch (error) {
      toast.error(error.response.data || 'Something went Wrong, please try again');
      return false;
    }
  };

  // eslint-disable-next-line consistent-return
  const onNitrFormSubmit = async () => {
    const areAllFieldsValid = Object.keys(values)
      .filter((key) => key !== 'referredBy')
      .filter((key) => ['both', 'nitr'].includes(values[key].show))
      .reduce((acc, curr) => !!values[curr].value && acc, true);

    if (!areAllFieldsValid) {
      return toast.error('Please fill in all the fields');
    }

    const isStudentVerified = await verifyZimbraMail();
    if (isStudentVerified) {
      if (userData?.id) {
        return setStageToTxnSuccessful();
      }

      const data = await saveUser();
      if (data) return setStageToTxnSuccessful();
    }
  };

  // eslint-disable-next-line consistent-return
  const onNonNitrFormSubmit = async () => {
    const areAllFieldsValid = Object.keys(values)
      .filter((key) => key !== 'referredBy')
      .filter((key) => ['both', 'non-nitr'].includes(values[key].show))
      .reduce((acc, curr) => !!values[curr].value && acc, true);

    if (!areAllFieldsValid) {
      return toast.error('Please fill in all the fields');
    }

    if (userData?.id) {
      return initiatePayment();
    }

    const user = await saveUser();
    if (user) return initiatePayment();
  };

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

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const paymentStatus = getURLParameter('payment_status');

    if (!userData?.accessToken) {
      return setStage();
    }

    if (paymentStatus === 'Credit') {
      return setStageToTxnSuccessful();
    }

    if (userData?.id) {
      if (userData?.rollNumber) {
        return setStageToTxnSuccessful();
      }

      if (userData?.festID.includes('innovision-2022')) {
        return setStageToTxnSuccessful();
      }

      return setStageToTxnUnsuccessful();
    }

    return setStageToTypeOfUser();
  }, [userData]);

  useEffect(() => {
    const paymentStatus = getURLParameter('payment_status');
    const paymentId = getURLParameter('payment_id');
    const paymentRequestId = getURLParameter('payment_request_id');

    if (paymentId && paymentRequestId && paymentStatus === 'Credit') {
      setStageToTxnSuccessful();
    } else if (paymentStatus === 'Failed') {
      setStageToTxnUnsuccessful();
    }
  }, []);

  useEffect(() => {
    setInputValue('name', userData?.displayName);
    setInputValue('email', userData?.email);
    setInputValue('mobile', userData?.phoneNumber || '');
  }, [userData]);

  useEffect(() => {
    if (userData) {
      setValues(
        INPUTS({
          name: userData?.displayName || '',
          email: userData?.email || '',
          mobile: userData?.mobile || '',
          gender: userData?.gender || '',
          state: userData?.state || '',
          city: userData?.city || '',
          college: userData?.college || '',
          stream: userData?.stream || '',
          referredBy: userData?.referredBy || '',
          rollNumber: userData?.rollNumber || '',
          password: userData?.password || '',
        }),
      );
    }
  }, [userData]);

  const renderStage = () => {
    switch (stage) {
      case STAGES.NON_NITR_STUDENT_FORM:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px', textAlign: 'center' }}>{stage}</Heading3>
            <InfoText>
              Please fill up the form and pay a registration fees of ₹700 to proceed
            </InfoText>
            <InfoText
              style={{
                width: '100%',
                padding: '5px 10px',
                border: '1px solid white',
                borderRadius: '5px',
                marginTop: '1rem',
                fontWeight: 'bold',
              }}
            >
              *Accomodation will be provided on the basis of registration number (earlier numbers
              will be prioritized)
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
            <div style={{ marginTop: '4rem', marginLeft: 0 }}>
              <NewButton onClick={setStageToTypeOfUser}>Back</NewButton>
              <NewButton onClick={onNonNitrFormSubmit}>Proceed to Pay</NewButton>
            </div>
          </RegisterFormContainer>
        );

      case STAGES.NITR_STUDENT_FORM:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px', textAlign: 'center' }}>{stage}</Heading3>
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
            <div style={{ marginTop: '4rem', marginLeft: 0 }}>
              <NewButton onClick={setStageToTypeOfUser}>Back</NewButton>
              <NewButton onClick={onNitrFormSubmit}>Login with Webmail</NewButton>
            </div>
          </RegisterFormContainer>
        );

      case STAGES.TXN_SUCCESSFUL:
        return (
          <TxnCard
            text='You have successfully registered for INNOVISION 2K22'
            icon={SuccessIcon}
            type='success'
            button={
              <Link to='/'>
                <NewButton style={{ marginTop: '1rem', marginLeft: 0 }}>Continue</NewButton>
              </Link>
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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NewButton
                  style={{ marginRight: '1rem', marginTop: '1rem' }}
                  onClick={onTxnBackClick}
                >
                  Back
                </NewButton>
                <NewButton onClick={onRetryClick} style={{ marginTop: '1rem', marginLeft: 0 }}>
                  Retry
                </NewButton>
              </div>
            }
          />
        );

      case STAGES.TYPE_OF_USER:
        return (
          <RegisterFormContainer style={{ justifyContent: 'center' }}>
            <Heading3 style={{ marginBottom: '10px', textAlign: 'center' }}>{stage}</Heading3>
            <InfoText>Registration for NIT Rourkela students is free</InfoText>
            <div style={{ marginTop: '4rem', marginLeft: 0 }}>
              <NewButton selected={isNitrStudent.yes} onClick={setNitrStudent}>
                Yes
              </NewButton>
              <NewButton selected={isNitrStudent.no} onClick={setNonNitrStudent}>
                No
              </NewButton>
            </div>
          </RegisterFormContainer>
        );

      case STAGES.REGISTRATION_CLOSED:
        return (
          <RegisterFormContainer style={{ justifyContent: 'center' }}>
            <Heading3 style={{ marginBottom: '10px', textAlign: 'center' }}>{stage}</Heading3>
            <InfoText>
              Registrations have been temporarily halted. Stay tuned to get further updates.
            </InfoText>
            <NewButton
              style={{ marginRight: '1rem', marginTop: '4rem' }}
              onClick={setStageToTypeOfUser}
            >
              Back
            </NewButton>
          </RegisterFormContainer>
        );

      default:
        return (
          <RegisterFormContainer>
            <Heading3 style={{ marginBottom: '10px', textAlign: 'center' }}>Loading</Heading3>
          </RegisterFormContainer>
        );
    }
  };

  return (
    <Container>
      <RegistrationContainer>
        {renderStage()}
        <ImageContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </ImageContainer>
      </RegistrationContainer>
      {/* <ToastContainer /> */}
    </Container>
  );
};

export default EventRegister;

/**
 * Simple Flow Logic
 * 1. if user is new, show the registration form
 * 2. if user is already created in database,
 *    if nitr student, show successful transaction screen
 *    if non nitr student
 *        show successful transaction screen
 *        show unsuccessful if transaction failed
 */

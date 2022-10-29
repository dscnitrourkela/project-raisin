import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AuthContext } from '../../utils/Auth';
import { avenueApi } from '../../utils/api';
import { Body1, CaptionText, LinkButton } from '../shared';
import TextInput from './TextInput';

const InputContainer = styled.div`
  ${tw`grid gap-6 my-8 `}
`;

const NITRContainer = styled.div`
  ${tw`flex items-center justify-center gap-3 mb-4 `}
`;

const NITRStudentButton = styled.button`
  background-color: ${(props) => (props.success ? '#1bbe00' : '#d9d9d9')};
  ${tw`p-2 `}
`;

const InfoText = styled(CaptionText)`
  ${tw`text-center text-color-secondary`}
`;

const ButtonContainer = styled.div`
  ${tw`flex flex-col items-center gap-3 `}
`;

const RegistrationForm = () => {
  const authContext = useContext(AuthContext);
  const { userData } = authContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [college, setCollege] = useState('');
  const [stream, setStream] = useState('');
  const [mobile, setMobile] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [rollNumber, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [NITRStudent, setNITRStudent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const initializePayment = async () => {
    const { data: registrationLink } = await avenueApi.post(
      '/payment/instamojo',
      {
        amount: 700,
        purpose: 'INNOVISION-2022 | REGISTRATION',
        buyerName: name,
        email,
        phone: mobile,
        redirectUrl: 'https://inno.nitrkl.in/txn-successful',
        webhook: 'https://avenue-api.nitrkl.in/payment/webhook',
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
  };

  const handleNitrUserRegistration = async () => {
    try {
      setLoading(true);
      const { status } = await avenueApi.get('/zimbra-login', {
        params: {
          username: `${rollNumber}@nitrkl.ac.in`,
          password,
        },
      });

      if (status === 401) {
        throw new Error('Invalid Credentials');
      }

      const { data: newUser } = await avenueApi.post(
        '/user',
        {
          name,
          email,
          gender,
          dob: new Date(),
          state: 'Odisha',
          city: 'Rourkela',
          college: 'National Institute of Technology Rourkela',
          stream,
          mobile,
          rollNumber,
          uid: userData.uid,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        },
      );

      setLoading(false);
      if (!newUser) {
        throw new Error('Something went Wrong: failed to regsiter user');
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleNonNitrUserRegistration = async () => {
    setLoading(true);
    try {
      const { data: newUser } = await avenueApi.post(
        '/user',
        {
          name,
          email,
          mobile,
          gender,
          dob: new Date(),
          state,
          city,
          college,
          stream,
          referredBy,
          rollNumber,
          uid: userData.uid,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        },
      );

      if (!newUser) {
        throw new Error('Something went Wrong: failed to regsiter user');
      }

      initializePayment();
    } catch (err) {
      setError(err);
      console.error(err);
    }

    setLoading(false);
  };

  const onSubmitClick = () => {
    setError(false);
    if (!NITRStudent) {
      return handleNonNitrUserRegistration();
    }

    return handleNitrUserRegistration();
  };

  useEffect(() => {
    setName(userData.displayName);
    setEmail(userData.email);
    setMobile(userData.phoneNumber ? userData.phoneNumber : '');
  }, [userData]);

  return (
    <>
      <NITRContainer>
        <Body1>Studying in NIT Rourkela?</Body1>
        <NITRStudentButton onClick={() => setNITRStudent(true)} success={!!NITRStudent}>
          Yes
        </NITRStudentButton>
        <NITRStudentButton onClick={() => setNITRStudent(false)} success={!NITRStudent}>
          NO
        </NITRStudentButton>
      </NITRContainer>
      <InfoText>Registration for NIT Rourkela students is free</InfoText>
      <InputContainer>
        <TextInput required title='Name' type={name} setType={setName} />
        <TextInput
          required
          title='Email (same as gmail used for google Auth)'
          type={email}
          setType={setEmail}
          disabled
        />
        <TextInput required title='Mobile No.' type={mobile} setType={setMobile} />
        <TextInput required title='Gender' type={gender} setType={setGender} />
        {!NITRStudent ? (
          <>
            <TextInput required title='State' type={state} setType={setState} other />
            <TextInput required title='City' type={city} setType={setCity} other />
            <TextInput required title='College' type={college} setType={setCollege} other />
            <TextInput required title='Stream' type={stream} setType={setStream} other />
            <TextInput required title='Referral Code' type={referredBy} setType={setReferredBy} />
          </>
        ) : (
          <>
            <TextInput required title='Roll No.' type={rollNumber} setType={setRollNo} />
            <TextInput
              required
              title='Password'
              inputType='password'
              type={password}
              setType={setPassword}
            />
          </>
        )}

        {error && <Body1>Error, Something went wrong, please try again</Body1>}
      </InputContainer>
      <ButtonContainer>
        <LinkButton
          disabled={loading}
          method={onSubmitClick}
          type='submit'
          text={NITRStudent ? `Login with webmail` : `Proceed to pay`}
        />
        <CaptionText>
          {NITRStudent ? `Registration Fees: ₹0` : `Registration Fees: ₹700`}
        </CaptionText>
      </ButtonContainer>
    </>
  );
};

export default RegistrationForm;

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

  const handleNitrUserRegistration = async () => {};

  const handleNonNitrUserRegistration = async () => {
    try {
      const { data: newUser } = await avenueApi.post(
        '/user',
        {
          name,
          email,
          gender,
          dob: new Date().getTime(),
          state,
          city,
          college,
          stream,
          mobile,
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
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitClick = () => {
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
        <TextInput title='Name' type={name} setType={setName} />
        <TextInput
          title='Email (same as gmail used for google Auth)'
          type={email}
          setType={setEmail}
          disabled
        />
        <TextInput title='Mobile No.' type={mobile} setType={setMobile} />
        <TextInput title='Gender' type={gender} setType={setGender} />
        {!NITRStudent ? (
          <>
            <TextInput title='State' type={state} setType={setState} other />
            <TextInput title='City' type={city} setType={setCity} other />
            <TextInput title='College' type={college} setType={setCollege} other />
            <TextInput title='Stream' type={stream} setType={setStream} other />
            <TextInput title='Referred By' type={referredBy} setType={setReferredBy} />
          </>
        ) : (
          <>
            <TextInput title='Roll No.' type={rollNumber} setType={setRollNo} />
            <TextInput title='Password' type={password} setType={setPassword} />
          </>
        )}
      </InputContainer>
      <ButtonContainer>
        <LinkButton
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

import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { State, City } from 'country-state-city';
import { AuthContext } from '../../utils/Auth';
import { Body1, CaptionText, LinkButton } from '../shared';
import TextInput from './TextInput';
import DropDownInput from './DropDownInput';
import { CollegeList } from '../../../config/CollegeList';

const InputContainer = styled.div`
  ${tw`
  grid
  gap-6
  my-8
`}
`;

const NITRContainer = styled.div`
  ${tw`
  flex
  mb-4
  gap-3
  justify-center
  items-center
  `}
`;

const NITRStudentButton = styled.button`
  background-color: ${(props) => (props.success ? '#1bbe00' : '#d9d9d9')};
  ${tw`
    p-2
    `}
`;

const InfoText = styled(CaptionText)`
  ${tw`
  text-color-secondary 
  text-center
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-3
  `}
`;

const PhoneContainer = styled.div`
  ${tw`grid gap-3`}
`;

const RegistrationForm = () => {
  const authContext = useContext(AuthContext);
  const { userData } = authContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState();
  const [gender, setGender] = useState('');
  const [state, setState] = useState(null);
  const [city, setCity] = useState('');
  const [college, setCollege] = useState('');
  const [stream, setStream] = useState('');
  const [mobile, setMobile] = useState('');
  const [referredId, setRefferedId] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [NITRStudent, setNITRStudent] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setName(userData.displayName);
    setEmail(userData.email);
    setMobile(userData.phoneNumber ? userData.phoneNumber : '');
  }, [userData]);

  const genderOptions = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
    { label: 'other', value: 'other' },
  ];

  const states = State.getStatesOfCountry('IN').map((item) => ({
    label: item.name,
    value: item.name,
    ...item,
  }));

  const cities = City.getCitiesOfState('IN', state ? state.isoCode : 'DL').map((item) => ({
    label: item.name,
    value: item.name,
    ...item,
  }));

  const handleName = (e) => {
    const nameInput = e.target.value;
    if (nameInput.length >= 1) {
      setError((err) => ({ name: '', ...err }));
    }
    setName(nameInput);
  };

  const handleStream = (e) => {
    const streamInput = e.target.value;
    if (streamInput.length >= 1) {
      setError((err) => ({ stream: '', ...err }));
    }
    setStream(streamInput);
  };

  const handleRoll = (e) => {
    const rollInput = e.target.value;
    if (rollInput.length >= 1) {
      setError((err) => ({ roll: '', ...err }));
    }
    setRollNo(rollInput);
  };

  console.log(error);

  const handleDob = (e) => {
    setDob(e.target.value);
  };

  const handleNameBlur = () => {
    if (!name) {
      setError((err) => ({ name: 'This field requires a entry', ...err }));
    } else {
      setError((err) => ({ ...err }));
    }
  };

  const handleStreamBlur = () => {
    if (!stream) {
      setError((err) => ({ stream: 'This Field Requires a entry', ...err }));
    }
  };

  const handleRollBlur = () => {
    if (rollNo === 0) {
      setError((err) => ({ roll: 'This field requires a entry', ...err }));
    }

    if (rollNo.length !== 9) {
      setError((err) => ({ roll: 'This field requires 9 characters', ...err }));
    }
  };

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
        <TextInput
          title='Name'
          inputType='text'
          type={name}
          onChange={handleName}
          onBlur={handleNameBlur}
          error={error.name}
        />
        <TextInput
          title='Email (same as gmail used for google Auth)'
          type={email}
          setType={setEmail}
          disabled
        />
        <TextInput inputType='date' title='Date of Birth' type={dob} onChange={handleDob} />
        <PhoneContainer>
          <Body1>Phone</Body1>
          <PhoneInput country='in' value={mobile} onChange={setMobile} />
        </PhoneContainer>
        <DropDownInput title='Gender' value={gender} onChange={setGender} options={genderOptions} />
        {!NITRStudent ? (
          <>
            <DropDownInput title='State' value={state} onChange={setState} options={states} />
            <DropDownInput title='City' value={city} onChange={setCity} options={cities} />
            <DropDownInput
              title='College'
              value={college}
              onChange={setCollege}
              options={CollegeList}
            />
            <TextInput
              title='Stream'
              type={stream}
              onChange={handleStream}
              onBlur={handleStreamBlur}
              error={error.stream}
            />
            <TextInput title='Referral Code' type={referredId} setType={setRefferedId} />
          </>
        ) : (
          <>
            <TextInput
              title='Roll No.'
              type={rollNo}
              onChange={handleRoll}
              onBlur={handleRollBlur}
              error={error.roll}
              inputType='text'
            />
            <TextInput
              inputType='password'
              title='Password'
              type={password}
              setType={setPassword}
            />
          </>
        )}
      </InputContainer>
      <ButtonContainer>
        <LinkButton
          disabled={!!error}
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

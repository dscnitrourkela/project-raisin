import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, CaptionText, LinkButton } from '../shared';
import DropDownInput from './DropDownInput';
import TextInput from './TextInput';

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
  mb-3
  gap-3
  `}
`;

const NITRStudentButton = styled.button`
  background-color: ${(props) => (props.success ? '#1bbe00' : '#d9d9d9')};

  ${tw`
    p-2
    `}
`;

const InfoText = styled(CaptionText)`
  ${tw`text-color-secondary`}
`;

const DropDownOptions = [
  'Male',
  'Female',
  'Other',
  'Male',
  'Female',
  'Other',
  'Male',
  'Female',
  'Other',
];

const RegistrationForm = () => {
  const [name, setName] = useState('Hemant Bajaj');
  const [email, setEmail] = useState('41hemu38@gmail.com');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [college, setCollege] = useState('');
  const [Stream, setStream] = useState('');
  const [mobile, setMobile] = useState('');
  const [referredId, setRefferedId] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [NITRStudent, setNITRStudent] = useState(false);

  return (
    <>
      <NITRContainer>
        <Body1>Are you studying in NIT Rourkela?</Body1>
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
        <DropDownInput options={DropDownOptions} title='Gender' type={gender} setType={setGender} />
        {!NITRStudent ? (
          <>
            <DropDownInput
              options={DropDownOptions}
              title='State'
              type={state}
              setType={setState}
              other
            />
            <DropDownInput
              options={DropDownOptions}
              title='City'
              type={city}
              setType={setCity}
              other
            />
            <DropDownInput
              options={DropDownOptions}
              title='College'
              type={college}
              setType={setCollege}
              other
            />
            <DropDownInput
              options={DropDownOptions}
              title='Stream'
              type={Stream}
              setType={setStream}
              other
            />
            <TextInput title='Referred By' type={referredId} setType={setRefferedId} />
          </>
        ) : (
          <TextInput title='Roll No.' type={rollNo} setType={setRollNo} />
        )}
      </InputContainer>
      <LinkButton type='submit' text='Register' />
    </>
  );
};

export default RegistrationForm;

'use client';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { RegisterContainer, RegisterForm } from './Register.styles';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import FileInput from '@/components/Register/FileInput/FileInput';

function Page() {
  const options = [
    { value: '1', label: 'Americano' },
    { value: '2', label: 'Latte' },
    { value: '3', label: 'Green Tea' },
  ];
  return (
    <RegisterContainer>
      <Heading1>Register</Heading1>
      <RegisterForm className='mt-20'>
        <InputField placeholder='Enter Your Name' />
        <FileInput label='Upload your Id Card' id={'idcard'} />
        <CheckBox label='Do you want accomodation in NIT Rourkela?' name={'check'} />
        <SelectField options={options} placeholder={'Type of cofee?'} value={'Type of cofee?'} />
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Page;

'use client';
import { useState } from 'react';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { RegisterContainer, RegisterForm } from './Register.styles';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import FileInput from '@/components/Register/FileInput/FileInput';
import { formFields } from '@/config/content/Registration/details';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

function Page() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    rollNumber: '',
    idCard: '',
    gender: '',
    accomodation: false,
    campusAmbassador: false,
  });
  const [idCardImage, setIdCardImage] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value, type, checked);
    setUserDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit() {
    console.log(userDetails);
  }

  function returnFormFields(field) {
    switch (field.type) {
      case 'text':
        return (
          <InputField
            key={field.id}
            name={field.id}
            placeholder={field.label}
            onChange={handleChange}
            value={userDetails[field.id]}
            className={field?.className}
          />
        );
      case 'email':
        return (
          <InputField
            key={field.id}
            name={field.id}
            placeholder={field.label}
            type='email'
            onChange={handleChange}
            value={userDetails[field.id]}
            className={field?.className}
          />
        );
      case 'tel':
        return (
          <InputField
            key={field.id}
            name={field.id}
            placeholder={field.label}
            type='tel'
            onChange={handleChange}
            value={userDetails[field.id]}
            className={field?.className}
          />
        );
      case 'select':
        return (
          <SelectField
            key={field.id}
            name={field.id}
            options={field.options}
            placeholder={field.label}
            value={userDetails[field.id]}
            onChange={handleChange}
            className={field?.className}
          />
        );
      case 'file':
        return (
          <FileInput
            name={field.id}
            key={field.id}
            label={field.label}
            className={field?.className}
          />
        );
      case 'checkbox':
        return (
          <CheckBox
            name={field.id}
            onChange={handleChange}
            key={field.id}
            label={field.label}
            className={field?.className}
          />
        );
      default:
        return null;
    }
  }

  return (
    <RegisterContainer className='py-20 px-5 xsm:px-10 md:px-20'>
      <Heading1>Register</Heading1>
      <RegisterForm className='mt-20'>
        {formFields.map((field) => {
          return returnFormFields(field);
        })}
      </RegisterForm>
      <PrimaryButton onClick={handleSubmit} className='w-96 mt-16'>
        Submit
      </PrimaryButton>
    </RegisterContainer>
  );
}

export default Page;

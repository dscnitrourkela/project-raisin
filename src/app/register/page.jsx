'use client';
import { useState } from 'react';
import {
  RegisterContainer,
  RegisterForm,
  RegisterHeading,
  RegsiterButton,
} from './register.styles';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import FileInput from '@/components/Register/FileInput/FileInput';
import { formFields } from '@/config/content/Registration/details';
import { uploadToCloudinary } from '../utils/uploadToCloudinary';
import handleLoadingAndToast from '../utils/handleLoadingToast';
import { userSchema } from '@/config/zodd/userDetailsSchema';

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  async function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'file') {
      try {
        const imageUrl = await handleLoadingAndToast(
          uploadToCloudinary(event.target.files[0]),
          'Uploading Image...',
          'Image uploaded successfully',
          'Image upload failed',
          setLoading,
        );
        setUserDetails((prev) => ({
          ...prev,
          [name]: imageUrl,
        }));
      } catch (error) {
        console.error(error);
      }
      return;
    }

    setUserDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit() {
    const isFormValid = validateForm();
    if (!isFormValid) return;
    console.log(userDetails);
  }

  function validateForm() {
    const validationResult = userSchema.safeParse(userDetails);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      console.log(fieldErrors);
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
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
            label={field.label}
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
            label={field.label}
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
            label={field.label}
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
            label={field.label}
          />
        );
      case 'file':
        return (
          <FileInput
            name={field.id}
            key={field.id}
            label={field.label}
            className={field?.className}
            handleChange={handleChange}
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
      <RegisterHeading>Register</RegisterHeading>
      <RegisterForm className='mt-20 w-full'>
        {formFields.map((field) => {
          return returnFormFields(field);
        })}
      </RegisterForm>
      <RegsiterButton onClick={handleSubmit} disabled={loading}>
        Submit
      </RegsiterButton>
    </RegisterContainer>
  );
}

export default Page;

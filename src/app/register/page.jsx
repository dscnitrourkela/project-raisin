'use client';
import { useState } from 'react';
import {
  RegisterContainer,
  RegisterForm,
  RegisterHeading,
  RegsiterButton,
  RegisterInnerContainer,
  Moon,
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
        setErrors((prev) => ({ ...prev, [name]: '' }));
      } catch (error) {
        console.error(error);
      }
      return;
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
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
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  }

  function returnFormFields(field) {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <InputField
            key={field.id}
            name={field.id}
            placeholder={field.label}
            type={field.type}
            onChange={handleChange}
            value={userDetails[field.id]}
            className={field?.className}
            label={field.label}
            error={errors[field.id]}
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
            error={errors[field.id]}
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
            error={errors[field.id]}
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
            error={errors[field.id]}
          />
        );
      default:
        return null;
    }
  }

  return (
    <RegisterContainer className='pt-20 pb-16 px-5 xsm:px-10 md:px-20'>
      <Moon />
      <RegisterInnerContainer>
        <RegisterHeading>Register</RegisterHeading>
        <RegisterForm className='mt-10 w-full'>
          {formFields.map((field) => {
            return returnFormFields(field);
          })}
        </RegisterForm>
        <RegsiterButton onClick={handleSubmit} disabled={loading}>
          Submit
        </RegsiterButton>
      </RegisterInnerContainer>
    </RegisterContainer>
  );
}

export default Page;

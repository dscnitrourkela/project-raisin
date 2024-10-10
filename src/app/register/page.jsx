'use client';
import { useEffect, useState } from 'react';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { RegisterContainer, RegisterForm } from './register.styles';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import FileInput from '@/components/Register/FileInput/FileInput';
import { formFields } from '@/config/content/Registration/details';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import { uploadToCloudinary } from '../utils/uploadToCloudinary';
import toast from 'react-hot-toast';

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

  async function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'file') {
      setLoading(true);
      const toastId = toast.loading('Uploading Image...');
      try {
        const imageUrl = await uploadToCloudinary(event.target.files[0]);
        setUserDetails((prev) => ({
          ...prev,
          [name]: imageUrl,
        }));
        toast.dismiss(toastId);
        toast.success('Image uploaded successfully');
        setLoading(false);
        return;
      } catch (error) {
        setLoading(false);
        toast.dismiss(toastId);
        toast.error('Image upload failed');
        return;
      }
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
    const { name, email, phone, college, rollNumber, idCard } = userDetails;
    if (!name || !email || !phone || !college || !rollNumber || !idCard) {
      toast.error('Please fill all the fields');
      return false;
    }
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
      <Heading1>Register</Heading1>
      <RegisterForm className='mt-20'>
        {formFields.map((field) => {
          return returnFormFields(field);
        })}
      </RegisterForm>
      <PrimaryButton onClick={handleSubmit} className='w-96 mt-16' disabled={loading}>
        Submit
      </PrimaryButton>
    </RegisterContainer>
  );
}

export default Page;

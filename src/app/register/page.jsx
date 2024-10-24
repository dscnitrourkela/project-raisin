'use client';
import { useState, useLayoutEffect, useContext } from 'react';
import {
  RegisterContainer,
  RegisterForm,
  RegisterHeading,
  RegsiterButton,
  RegisterInnerContainer,
  Moon,
  UndertakingLink,
  PaymentPolicyInfo,
} from './register.styles';
import Link from 'next/link';
import InputField from '@/components/Register/InputField/InputField';
import SelectField from '@/components/Register/SelectField/SelectField';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import FileInput from '@/components/Register/FileInput/FileInput';
import { formFields, undertakingContent } from '@/config/content/Registration/details';
import { uploadToCloudinary } from '../../utils/uploadToCloudinary';
import handleLoadingAndToast from '../../utils/handleLoadingToast';
import { userSchema } from '@/config/zodd/userDetailsSchema';
import { useUserDetails } from '@/hooks/useUserDetails';
import CampusAmbassador from '@/components/Register/CampusAmbassador/CampusAmbassador';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import { AuthContext } from '@/context/auth-context';
// import { RegistrationModal } from './RegistrationModal';

function Page() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    institute: '',
    university: '',
    rollNumber: '',
    idCard: '',
    referralCode: '',
    gender: '',
    permission: false,
    payment: '',
    undertaking: false,
    campusAmbassador: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUserDetails = useUserDetails();
  const { handleGoogleSignIn, userInfo, authLoading } = useContext(AuthContext);

  useLayoutEffect(() => {
    const userDetails = getUserDetails();
    if (userDetails.name) {
      setIsLoggedIn(true);
    }
  }, [getUserDetails, userInfo]);

  async function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'file') {
      try {
        const imageUrl = await handleLoadingAndToast(
          uploadToCloudinary(event.target.files[0]),
          'Uploading Image...',
          `${name.toUpperCase()} uploaded successfully`,
          `${name.toUpperCase()} upload failed!`,
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
            setErrors={setErrors}
            showReferral={userDetails.undertaking}
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
            handleSelect={setUserDetails}
            className={field?.className}
            label={field.label}
            error={errors[field.id]}
            setErrors={setErrors}
            allowedRegistrations={0}
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

  const [isModalOpen, setModalOpen] = useState(true);

  function handleSubmit() {
    const isFormValid = validateForm();
    if (!isFormValid) return;
    setModalOpen(true);
    console.log(userDetails);
  }

  return (
    <RegisterContainer>
      <Moon />

      {isLoggedIn ? (
        <RegisterInnerContainer>
          <RegisterHeading>Register</RegisterHeading>
          <RegisterForm>
            {formFields.map((field) => {
              return returnFormFields(field);
            })}
          </RegisterForm>
          <UndertakingLink href={undertakingContent.link} target='_blank'>
            {undertakingContent.text}
          </UndertakingLink>
          <CampusAmbassador
            handleChange={handleChange}
            userReferral={userDetails.phone}
            isCampusAmbassador={userDetails.campusAmbassador}
          />
          <RegsiterButton onClick={handleSubmit} disabled={loading}>
            Submit
          </RegsiterButton>
        </RegisterInnerContainer>
      ) : (
        <PrimaryButton onClick={handleGoogleSignIn} disabled={authLoading}>
          {authLoading ? 'Loading...' : 'Sign In with Google'}
        </PrimaryButton>
      )}
    </RegisterContainer>
  );
}

export default Page;

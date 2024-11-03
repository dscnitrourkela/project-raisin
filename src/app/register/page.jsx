'use client';
import { useContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { v4 } from 'uuid';

import CampusAmbassador from '@/components/Register/CampusAmbassador/CampusAmbassador';
import FileInput from '@/components/Register/FileInput/FileInput';
import CheckBox from '@/components/Register/InputCheckBox/CheckBox';
import InputField from '@/components/Register/InputField/InputField';
import { MerchantInfo } from '@/components/Register/PaymentComponents/MerchantInfo';
import { Qr } from '@/components/Register/PaymentComponents/Qr';
import SelectField from '@/components/Register/SelectField/SelectField';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import {
  formFields,
  innoOrgID,
  maxRegistrations,
  nitrID,
  notNitrFields,
  undertakingContent,
} from '@/config/content/Registration/details';
import { userSchema } from '@/config/zodd/userDetailsSchema';
import { AuthContext } from '@/context/auth-context';
import { REGISTER_ORG } from '@/graphql/mutations/organizationMutations';
import { REGISTER_USER } from '@/graphql/mutations/userMutations';
import { GET_USER_BY_UID, GET_USERS } from '@/graphql/queries/userQueries';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import { useUserDetails } from '@/hooks/useUserDetails';
import handleLoadingAndToast from '@/utils/handleLoadingToast';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { useMutation, useQuery } from '@apollo/client';

import {
  DisclaimerPara,
  Moon,
  PaymentHeading,
  PaymentPolicyInfo,
  RegisterContainer,
  RegisterForm,
  RegisterHeading,
  RegisterInnerContainer,
  RegsiterButton,
  UndertakingLink,
} from './register.styles';

function Page() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    institute: '',
    instituteId: '',
    university: '',
    rollNumber: '',
    idCard: '',
    referralCode: '',
    gender: '',
    permission: false,
    payment: '',
    undertaking: false,
    campusAmbassador: false,
    transactionID: '',
  });
  const getUserDetails = useUserDetails();
  const [errors, setErrors] = useState({});
  const isLoggedIn = useIsLoggedIn();
  const [loading, setLoading] = useState(false);
  const [queryLoading, setQueryLoading] = useState(false);
  const { handleGoogleSignIn, authLoading, handleSignOut } = useContext(AuthContext);
  const [registerUser] = useMutation(REGISTER_USER);
  const [registerCollege] = useMutation(REGISTER_ORG);
  const [genderStats, setGenderStats] = useState(null);
  const router = useRouter();
  const storedUserId = getUserDetails().uid;
  const isNitR = userDetails.instituteId === nitrID;

  const { data: totalRegistrations, loading: totalRegistrationsLoading } = useQuery(GET_USERS, {
    variables: storedUserId ? { orgId: innoOrgID } : undefined,
    skip: !storedUserId,
    errorPolicy: 'all',
    onError: (error) => {
      toast.error('Login failed! try logging in again.');
      handleSignOut(false);
      console.error('Total registrations query error:', error);
    },
  });

  const { data: userDataDB, error: userErr } = useQuery(GET_USER_BY_UID, {
    variables: storedUserId ? { uid: storedUserId } : undefined,
    skip: !storedUserId,
    errorPolicy: 'all',
    onError: (error) => {
      console.error('User query error:', error);
    },
  });

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

    if (name === 'campusAmbassador' && userDetails.phone.length !== 10) {
      toast.error('Please enter a valid phone number to proceed');
      return;
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setUserDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function validateForm() {
    let updatedUserDetails = userDetails;
    if (isNitR) {
      updatedUserDetails = {
        ...updatedUserDetails,
        university: 'NIT Rourkela',
        transactionID: 'NITR',
        payment: 'https://www.nitrkl.ac.in/',
        permission: true,
        undertaking: true,
      };
    }

    const validationResult = userSchema.safeParse(updatedUserDetails);
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
            genderStats={genderStats}
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

      case 'head':
        return <PaymentHeading key={field.id}>{field.content}</PaymentHeading>;

      case 'title':
        return <MerchantInfo label={field.label} labelInfo={field.content} key={field.id} />;
      case 'image':
        return <Qr QrUrl={field.QrUrl} key={field.id} />;

      case 'disclaimer':
        return <DisclaimerPara key={field.id}>{field.content}</DisclaimerPara>;

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

  async function handleSubmit() {
    const isFormValid = validateForm();
    if (!isFormValid) return;

    setLoading(true);
    try {
      let collegeID;
      if (!userDetails.instituteId) {
        const newCollgeDetails = await registerCollege({
          variables: {
            orgs: [
              {
                logo: userDetails.institute + userDetails.email + v4().slice(0, 8),
                name: userDetails.institute,
                orgType: 'MESS',
                registrations: 0,
              },
            ],
          },
        });

        collegeID = newCollgeDetails.data.createMultipleOrgs[0].id;
      }

      const res = await registerUser({
        variables: {
          user: {
            uid: storedUserId,
            name: userDetails.name,
            email: userDetails.email,
            mobile: userDetails.phone,
            college: userDetails.instituteId ? userDetails.instituteId : collegeID,
            rollNumber: userDetails.rollNumber,
            idCard: userDetails.idCard,
            referredBy: isNitR ? null : userDetails.referralCode,
            gender: userDetails.gender,
            receipt: isNitR ? null : userDetails.payment,
            transactionID: isNitR ? null : userDetails.transactionID,
            hasPaid: false,
          },
        },
      });

      const user = res.data.createUser;
      Cookies.set('userDataDB', JSON.stringify({ ...user, isNitR }), {
        expires: 1,
        sameSite: 'strict',
      });

      toast.success(
        isNitR
          ? 'Registration successful!'
          : 'Registration successful! You will recieve confirmation email within 4-5 days!',
        {
          duration: 5000,
        },
      );
      setTimeout(() => {
        router.push('/');
      }, 1300);
    } catch (error) {
      console.error(error);
      if (error.message.includes('Unique constraint failed')) {
        toast.error('Registration failed! User already exists with the same credentials!', {
          duration: 5000,
        });
      } else {
        toast.error('Registration failed! If the issue persists, try logging in again.', {
          duration: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userErr) {
      console.error('User query error:', userErr);
      return;
    }

    if (totalRegistrationsLoading) {
      setQueryLoading(true);
    } else {
      setQueryLoading(false);
    }

    if (totalRegistrations?.user?.data?.length > 0) {
      const registrationArray = totalRegistrations.user.data;
      const genderStatistics = getTotalGenderRegistrations(registrationArray);
      setGenderStats(genderStatistics);
    }

    const userCookie = Cookies.get('userDataDB');
    const userGoogleData = Cookies.get('userData');

    if (userGoogleData) {
      const googleData = JSON.parse(userGoogleData);
      setUserDetails((prev) => ({
        ...prev,
        name: googleData.name.toUpperCase(),
        email: googleData.email,
      }));
    }
    const hasUserData = userDataDB?.user?.data?.length > 0;
    const userData = hasUserData ? userDataDB.user.data[0] : null;
    const isNitR = userData?.college === nitrID;
    if (userCookie || hasUserData) {
      if (!userCookie && userData) {
        Cookies.set('userDataDB', JSON.stringify({ ...userData, isNitR }), {
          expires: 1,
          sameSite: 'strict',
        });
      }
      router.push('/');
      toast.success('You have been already registered!', {
        duration: 5000,
      });
    }
  }, [userErr, userDataDB, router, totalRegistrationsLoading, totalRegistrations]);

  function getTotalGenderRegistrations(array) {
    let maleCount = 0;
    let femaleCount = 0;
    array.forEach((registration) => {
      if (registration.gender === 'MALE') {
        maleCount++;
      } else {
        femaleCount++;
      }
    });
    const allowedRegistrations = {
      MALE: maxRegistrations.MALE - maleCount,
      FEMALE: maxRegistrations.FEMALE - femaleCount,
    };

    return allowedRegistrations;
  }

  return (
    <RegisterContainer>
      <Moon />

      {isLoggedIn && !queryLoading ? (
        <RegisterInnerContainer>
          <RegisterHeading>Register</RegisterHeading>
          <RegisterForm>
            {formFields.map((field) => {
              if (isNitR && notNitrFields.includes(field.id)) {
                return null;
              }
              return returnFormFields(field);
            })}
          </RegisterForm>

          {!isNitR && (
            <>
              <UndertakingLink href={undertakingContent.link} target='_blank'>
                {undertakingContent.text}
              </UndertakingLink>
              <PaymentPolicyInfo>
                <Link href='/refundPolicy'>
                  Please review the Payment Policy before registering.
                </Link>
                <br />
                NOTE: Registration Fees (₹899)
              </PaymentPolicyInfo>
              <CampusAmbassador
                handleChange={handleChange}
                userReferral={userDetails.phone}
                isCampusAmbassador={userDetails.campusAmbassador}
              />
            </>
          )}

          <RegsiterButton onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </RegsiterButton>
        </RegisterInnerContainer>
      ) : (
        <PrimaryButton onClick={handleGoogleSignIn} disabled={authLoading || queryLoading}>
          {authLoading || queryLoading ? 'Loading...' : 'Sign In with Google'}
        </PrimaryButton>
      )}
    </RegisterContainer>
  );
}

export default Page;

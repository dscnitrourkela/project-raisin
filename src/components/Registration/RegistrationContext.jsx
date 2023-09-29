import React, { useState, useEffect, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';
import { INPUTS, STAGES } from '../../../config/content/Registration';
import { AuthContext } from '../../utils/Auth';
import Api from '../../utils/Api';

export const RegistrationContext = React.createContext({
  stage: STAGES.TYPE_OF_USER,
  inputData: {},
  isNITR: false,
  verified: false,
  setStage: () => {},
  setInputData: () => {},
  setIsNITR: () => {},

  // Utility functions
  /**
   *
   * @param {string} key
   * @param {string} value
   */
  setInputValue: () => {},

  /**
   *
   * @param {string} key
   * @param {string} errorMessage
   * @param {boolean} errorVisibility default false
   */
  setErrorMessage: () => {},
});

const RegistrationProvider = ({ children }) => {
  const [stage, setStage] = useState(STAGES.TYPE_OF_USER);
  const [inputData, setInputData] = useState(INPUTS({}));
  const [isNITR, setIsNITR] = useState(true);
  const [verified, setVerified] = useState(false);
  const { userData } = useContext(AuthContext);
  const api = Api.getInstance();

  useEffect(() => {
    if (userData) {
      setInputData(
        INPUTS({
          name: userData?.name || '',
          email: userData?.email || '',
          mobile: userData?.mobile || '',
          gender: userData?.gender || '',
          state: userData?.state || '',
          city: userData?.city || '',
          college: userData?.college || '',
          stream: userData?.stream || '',
          referredBy: userData?.referredBy || '',
          rollNumber: userData?.rollNumber || '',
          password: userData?.password || '',
        }),
      );
    }
  }, [userData]);

  useEffect(() => {
    // Custom function to check if user is from NITR
    const verifyNITR = async () => {
      toast.promise(
        api.verifyZimbra({
          rollNumber: inputData.rollNumber.value,
          password: inputData.password.value,
          sideEffects: () => {
            setVerified(true);
          },
        }),
        {
          pending: 'Verifying using Zimbra',
          success: 'Verified successfully',
          error: 'Invalid Credentials',
        },
      );
    };

    setInputData((prev) => ({
      ...prev,
      rollNumber: {
        ...prev.rollNumber,
        button: {
          text: 'Verify',
          onClick: verifyNITR,
          color: 'black',
        },
      },
    }));
  }, [api, inputData.password.value, inputData.rollNumber.value]);

  const values = useMemo(() => {
    const setInputValue = (key, value) => {
      if (!key) return;
      if (inputData[key].errorVisibility) setErrorMessage(key, '', false);
      setInputData((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          value,
        },
      }));
    };

    const setErrorMessage = (key, errorMessage, errorVisibility) => {
      setInputData((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          errorMessage,
          errorVisibility: errorVisibility || false,
        },
      }));
    };

    return {
      stage,
      inputData,
      isNITR,
      verified,
      setStage,
      setInputValue,
      setErrorMessage,
      setInputData,
      setIsNITR,
    };
  }, [stage, inputData, isNITR, verified]);

  return <RegistrationContext.Provider value={values}>{children}</RegistrationContext.Provider>;
};

export default RegistrationProvider;

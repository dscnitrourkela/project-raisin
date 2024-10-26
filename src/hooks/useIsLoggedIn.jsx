import { useState, useEffect, useCallback } from 'react';
import { useUserDetails } from './useUserDetails';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUserDetails = useUserDetails();
  const checkLoggedIn = useCallback(() => {
    const userDetails = getUserDetails();
    if (userDetails.name) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [getUserDetails]);

  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  return isLoggedIn;
};

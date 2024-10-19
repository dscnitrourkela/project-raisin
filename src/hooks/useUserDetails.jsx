import { AuthContext } from '@/context/auth-context';
import { useContext, useCallback } from 'react';
import Cookies from 'js-cookie';

export const useUserDetails = () => {
  const { userInfo } = useContext(AuthContext);

  const getUserDetails = useCallback(() => {
    const userDataFromCookie = Cookies.get('userData');
    if (userDataFromCookie) {
      try {
        const parsedUserData = JSON.parse(userDataFromCookie);
        return parsedUserData;
      } catch (error) {
        console.error('Error parsing userData from cookie:', error);
      }
    }
    return userInfo;
  }, [userInfo]);

  return getUserDetails;
};

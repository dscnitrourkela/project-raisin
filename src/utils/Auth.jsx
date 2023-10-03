// eslint-disable-next-line react-hooks/exhaustive-deps
/* eslint-disable no-console */
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../config/firebase';
import Api from './Api';

const provider = new GoogleAuthProvider();

const defaultValues = {
  authenticated: false,
  userData: {
    id: '',
  },
  token: '',
  login: () => {},
  logout: () => {},
  uid: '',
};

export const AuthContext = createContext(defaultValues);

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState('');

  // Get the singleton instance of the API
  const api = Api.getInstance();

  // Setting user id on changing auth state
  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _cancelSubscription = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.accessToken);
        setAuthenticated(true);
        setToken(user.accessToken);
        setUid(user.uid);

        const avenueUser = await api.fetchUserDetails({
          uid: user.uid,
          accessToken: user.accessToken,
        });
        if (avenueUser) {
          setUserData(avenueUser);
        } else {
          setUserData({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          });
        }
      } else {
        setAuthenticated(false);
        setUserData({});
        setToken('');
      }
      setLoading(false);
    });

    return _cancelSubscription;
  }, [api]);

  const value = useMemo(() => {
    // login method
    const login = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const { accessToken } = credential;
          // The signed-in user info.
          const { user } = result;
          // ...
          setAuthenticated(true);
          setToken(accessToken);
          setUserData(user);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const { email } = error.customData;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.error(errorCode, errorMessage, email, credential);
          toast.error(errorMessage);
        });
    };

    // logout method
    const logout = () => {
      try {
        auth.signOut();
        setAuthenticated(false);
        toast.success('Logged out successfully');
      } catch (error) {
        toast.error(error.message ?? 'Unable to logout');
      }
    };

    return {
      authenticated,
      userData,
      token,
      login,
      logout,
      setUserData,
      loading,
      uid,
    };
  }, [authenticated, token, userData, loading, uid]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

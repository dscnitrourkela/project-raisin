// eslint-disable-next-line react-hooks/exhaustive-deps
/* eslint-disable no-console */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { Redirect } from '@reach/router';
import { navigate } from 'gatsby';
import { app } from '../config/firebase';
import { avenueApi } from './api';

const provider = new GoogleAuthProvider();

const defaultV = {
  user: '',
  userData: {},
  token: '',
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultV);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');

  // Setting user id on changing auth state
  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        setUser(true);
        setUserData(users);
        setToken(users.accessToken);

        const fetchUser = async () => {
          try {
            const { data: avenueUser } = await avenueApi.get('/user', {
              params: { uid: users.uid },
              headers: { Authorization: `Bearer ${users.accessToken}` },
            });
            if (avenueUser) {
              setUserData((current) => ({ ...current, ...avenueUser }));
            }
          } catch (error) {
            console.error('unable to fetch user details', error);
          }
        };

        fetchUser();
      } else {
        setUser(false);
        setUserData({});
        setToken('');
        <Redirect to='/' />;
      }
    });
  }, []);

  // initializing auth
  const auth = getAuth(app);

  // login method
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { accessToken } = credential;
        // The signed-in user info.
        const { users } = result;
        // ...
        setUser(true);
        setToken(accessToken);
        setUserData(users);
        navigate('/register');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error(errorCode, errorMessage, email, credential);
      });
  };

  // logout method
  const logout = () => {
    auth.signOut();
    setUser(false);
    navigate('/');
  };

  const value = {
    user,
    userData,
    token,
    login,
    logout,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

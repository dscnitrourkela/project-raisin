import { createContext, useState } from 'react';

import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

import { signInWithGoogle, signOutUser } from '@/firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      const user = await signInWithGoogle();

      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photoUrl: user.photoURL,
        };
        Cookies.set('userData', JSON.stringify(userData), {
          expires: 7,
          sameSite: 'strict',
        });
        setUserInfo(userData);
        toast.success('Successfully signed in with Google.');
      } else {
        toast.error('Google sign-in failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error('Error signing in with Google. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUserInfo({});
      Cookies.remove('userData');
      Cookies.remove('userDataDB');
      toast.success('Successfully signed out.');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out. Please try again.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        handleGoogleSignIn,
        handleSignOut,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { signInWithGoogle, signOutUser } from '@/firebase/auth';
import Cookies from 'js-cookie';
import { auth } from '@/firebase/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserData] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      const user = await signInWithGoogle();

      const token = await auth.currentUser.getIdToken();
      console.log(`Bearer ${token}`);
      if (user) {
        const userData = { name: user.displayName, email: user.email, uid: user.uid, token: token };
        Cookies.set('userData', JSON.stringify(userData), {
          expires: 7,
          sameSite: 'strict',
        });
        setUserData(userData);
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
      setUserData({});
      Cookies.remove('userData');
      toast.success('Successfully signed out.');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out. Please try again.');
    }
  };

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserData, handleGoogleSignIn, handleSignOut, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

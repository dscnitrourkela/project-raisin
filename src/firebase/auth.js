import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return false;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {};
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};

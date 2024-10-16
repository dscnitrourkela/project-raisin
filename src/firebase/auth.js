import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { app } from './firebase';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
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

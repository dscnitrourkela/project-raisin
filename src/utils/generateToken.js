import { getAuth } from 'firebase/auth';

const generateToken = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      console.log('Generated Token:', token);
      return token;
    } else {
      console.error('No user is signed in.');
      return null;
    }
  } catch (error) {
    console.error('Error generating token:', error);
    return null;
  }
};

export default generateToken;

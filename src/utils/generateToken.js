import { getAuth } from 'firebase/auth';
import Cookies from 'js-cookie';
const generateToken = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      return token;
    } else {
      const storedToken = JSON.parse(Cookies.get('userData')).token;
      console.warn('Returning stored token..');
      return storedToken;
    }
  } catch (error) {
    console.error('Error generating token:', error);
    return null;
  }
};

export default generateToken;

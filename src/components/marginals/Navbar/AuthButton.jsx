import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { LinkButton } from '../../shared';

const AuthButton = ({ text }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, user } = authContext;

  return (
    <LinkButton
      method={user ? logout : login}
      text={text || (user ? 'logout' : 'Login with Google')}
    />
  );
};

export default AuthButton;

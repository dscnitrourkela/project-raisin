import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import Button from '../../shared/Button';

const AuthButton = () => {
  const authContext = useContext(AuthContext);
  const { authenticated } = authContext;

  return <Button variant='outline' text={authenticated ? 'logout' : 'Register'} />;
};

export default AuthButton;

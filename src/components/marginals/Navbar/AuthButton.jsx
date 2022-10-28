/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { LinkButton } from '../../shared';

const AuthButton = ({ text, link }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, user } = authContext;

  return (
    <LinkButton
      link={user ? link : false}
      method={user && link ? undefined : user ? logout : login}
      text={text || (user ? 'logout' : 'Login')}
    />
  );
};

export default AuthButton;

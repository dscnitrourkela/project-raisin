import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { LinkButton } from '../../shared';

const AuthButton = ({ text, paddingY, paddingX }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, authenticated } = authContext;

  return (
    <LinkButton
      outline
      method={authenticated ? logout : login}
      text={text || (authenticated ? 'logout' : 'Register For Event')}
      paddingY={paddingY}
      paddingX={paddingX}
    />
  );
};

export default AuthButton;

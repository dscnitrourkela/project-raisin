import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { LinkButton } from '../../shared';

const AuthButton = ({ text, paddingY, paddingX, outline, bold }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, authenticated } = authContext;

  return outline ? (
    <LinkButton
      outline
      method={authenticated ? logout : login}
      text={text || (authenticated ? 'logout' : 'Login')}
      paddingY={paddingY}
      paddingX={paddingX}
      bold={bold}
    />
  ) : (
    <LinkButton
      method={authenticated ? logout : login}
      text={text || (authenticated ? 'logout' : 'Login')}
      paddingY={paddingY}
      paddingX={paddingX}
      bold={bold}
    />
  );
};

export default AuthButton;

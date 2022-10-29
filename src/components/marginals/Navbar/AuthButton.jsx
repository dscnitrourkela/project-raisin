import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { LinkButton } from '../../shared';

const AuthButton = ({ text, paddingY, paddingX, outline, bold }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, user } = authContext;

  return (
    <>
      {outline ? (
        <LinkButton
          outline
          method={user ? logout : login}
          text={text || (user ? 'logout' : 'Login')}
          paddingY={paddingY}
          paddingX={paddingX}
          bold={bold}
        />
      ) : (
        <LinkButton
          method={user ? logout : login}
          text={text || (user ? 'logout' : 'Login')}
          paddingY={paddingY}
          paddingX={paddingX}
          bold={bold}
        />
      )}
    </>
  );
};

export default AuthButton;

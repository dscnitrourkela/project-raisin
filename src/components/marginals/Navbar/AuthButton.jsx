import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import Button from '../../shared/Button';

const AuthButton = ({ text, outline, paddingX, paddingY }) => {
  const authContext = useContext(AuthContext);
  const { login, logout, authenticated } = authContext;

  return (
    <Button
      variant={outline ? 'outline' : 'primary'}
      onClick={authenticated ? logout : login}
      text={text || (authenticated ? 'logout' : 'Login')}
      style={
        paddingX && paddingY
          ? {
              padding: `${paddingY}rem ${paddingX}rem`,
            }
          : {}
      }
    />
  );
};

export default AuthButton;

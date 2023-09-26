/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../components/shared/Button';
import { AuthContext } from '../utils/Auth';

const Playground = () => {
  const { login, userData } = useContext(AuthContext);

  const handleClick = () => {
    login();
  };

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Playground</title>
        <meta name='description' content='This is playground' />
      </Helmet>
      <>
        <Button text='Button' onClick={handleClick} />
        {userData && <p>{userData.displayName}</p>}
      </>
    </>
  );
};

export default Playground;

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import User from '../components/User/User';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <User />
  </>
);

export default Playground;

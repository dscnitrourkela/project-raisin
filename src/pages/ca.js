/* eslint-disable max-len */
import React from 'react';
import CAProgram from '../components/CAProgram/CAProgram';
import { PrivateRoute } from '../components';

const CA = () => (
  <PrivateRoute>
    <CAProgram />
  </PrivateRoute>
);

export default CA;

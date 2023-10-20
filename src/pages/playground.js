/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet';
import CAProgram from '../components/CAProgram/CAProgram';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <CAProgram />
  </>
);

export default Playground;

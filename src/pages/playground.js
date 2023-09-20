/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Body1,
  Body2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  NavText,
} from '../components/shared';

const Playground = () => (
  <>
    <Helmet>
      <meta charset='utf-8' />
      <title>Playground</title>
      <meta name='description' content='This is playground' />
    </Helmet>
    <Heading1 uppercase={false}>Heading 1</Heading1>
    <Heading2 uppercase={false}>Heading 2</Heading2>
    <Heading3 uppercase={false}>Heading 3</Heading3>
    <Heading4 uppercase={false}>Heading 4</Heading4>

    <Body1> Body 1</Body1>
    <Body2> Body 2</Body2>
    <NavText> Nav Text</NavText>
  </>
);

export default Playground;

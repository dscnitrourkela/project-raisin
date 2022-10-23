import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Heading2 from './Typography/Heading2';
import SectionContainer from './SectionContainer';

const SectionLayout = ({ children, Title }) => (
  <SectionContainer>
    <Heading2 className='mb-10'>{Title}</Heading2>
    {children}
  </SectionContainer>
);

export default SectionLayout;

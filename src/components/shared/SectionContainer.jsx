import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`flex flex-col items-start justify-center w-full h-auto overflow-x-hidden overflow-y-auto `}
  height: fit-content;
  margin: 104px auto;
  @media (max-width: 760px) {
    margin: 15% auto;
  }
`;

const SectionContainer = ({ children }) => <Container>{children}</Container>;

export default SectionContainer;

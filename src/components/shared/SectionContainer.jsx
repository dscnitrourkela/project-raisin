import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    flex-col
    items-start
    justify-center
  `}
  height: fit-content;
  margin: 5% auto 10%;
`;

const SectionContainer = ({ children }) => <Container>{children}</Container>;

export default SectionContainer;

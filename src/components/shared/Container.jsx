import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  ${tw`
        w-11/12
        lg:max-w-7xl
        max-w-full
        my-0
        mx-[60px]
        lg:mx-auto
        p-0
        overflow-y-hidden
    `}
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

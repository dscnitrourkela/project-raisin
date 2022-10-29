import styled from 'styled-components';
import tw from 'twin.macro';
import { flexData } from '../../../config/content';

export const FlexSectionContainer = styled.section`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    md:hidden
    flex-col
    items-start
    justify-center
  `}
`;

export const BackgroundContainer = styled.div`
  ${tw`
    w-full
    text-color-primary
    py-12
    `}
  background: url(${flexData.background.src}) center/100% no-repeat;
`;

export const InnerContainer = styled.div`
  ${tw`
    grid
    grid-cols-4
    lg:grid-cols-2
    lg:justify-center
    w-11/12
    max-w-7xl
    my-0
    mx-auto
    p-2.5
    sm:p-0
    overflow-y-hidden
    gap-y-2
  `}
`;

export const FlexText = styled.h3`
  ${tw`
    col-span-1
    flex
    uppercase
    text-3xl
    text-center
  `}
  &.desktop-only {
    ${tw`           
        lg:hidden
    `}
  }
  @media (max-width: 1250px) {
    ${tw`text-2xl`}
  }
`;

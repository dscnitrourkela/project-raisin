import styled from 'styled-components';
import tw from 'twin.macro';

export const SectionContainer = styled.div`
  ${tw`
    min-h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    relative
  `}
  @media (min-width: 2560px) {
    align-items: center;
  }
`;

export const HeroContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
  `}
`;

export const HeroTitle = styled.h1`
  ${tw`
    mt-[89px]
    text-[128px]
    lg:text-[90px]
    md:text-[80px]
    sm:text-[48px]
    leading-[110px]
    md:leading-[60px]
    font-Roslindale
    text-color-primary
  `};
`;

export const Year = styled.h1`
  ${tw`
    text-[64px]
    lg:text-[44px]
    md:text-[34px]
    sm:text-[24px]
    leading-[110px]
    md:leading-[64px]
    sm:leading-[36px]
    font-Roslindale
    text-color-primary
  `};
`;

export const DatesDiv = styled.div`
  ${tw`
  mt-[12px]
  flex
  items-center
  justify-center
  gap-[68px]
  xl:gap-[48px]
  md:gap-[24px]
  sm:gap-[12px]
  mb-[40px]
  md:mb-[24px]
`}
`;

export const Line = styled.div`
  ${tw`
  h-[1px]
  w-[200px]
  xl:w-[150px]
  md:w-[80px]
  sm:w-[68px]
  bg-[#FFFFFF]
`}
`;

export const Dates = styled.p`
  ${tw`
    inline-block
    text-[24px]
    xl:text-[20px]
    md:text-[18px]
    sm:text-[14px]
    leading-[64px]
    md:leading-[50px]
    font-Roslindale
    text-color-primary
`}
`;

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
    mb-20
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
    text-[150px]
    lg:text-[120px]
    md:text-[90px]
    sm:text-[48px]
    leading-[110px]
    md:leading-[60px]
    text-color-primary
  `};
  font-family: var(--font-family-stardos);
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
    text-color-primary
  `};
  font-family: var(--font-family-stardos);
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
  mb-[20px]
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
    text-[32px]
    xl:text-[26px]
    md:text-[20px]
    sm:text-[16px]
    leading-[64px]
    md:leading-[50px]
    font-Roslindale
    text-color-primary
`};
  font-family: var(--font-family-stardos);
`;

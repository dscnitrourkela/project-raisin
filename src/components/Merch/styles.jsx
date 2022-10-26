import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, Body2, ButtonText } from '../shared';

export const CardContainer = styled.div`
  ${tw`
     flex
     flex-col
     gap-4
     md:gap-3
     h-auto
     p-4
     md:p-3
     bg-background-dark
     rounded-xl
     w-full
     max-w-[400px]
     1xsm:max-w-full
   `};
`;

export const CardImage = styled.img`
  ${tw`
  w-full
  object-contain
  rounded-lg
  `}
`;

export const CardTextContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
    md:gap-2
   `}
`;

export const CardTitleContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
`}
`;

export const EventDate = styled(Body1)`
  ${tw`
    text-color-secondary
  `}
`;

export const EventClub = styled(Body2)`
  ${tw`
  text-color-secondary
`}
`;

export const EventPrizes = styled(ButtonText)`
  margin-left: -16px;
  @media (max-width: 768px) {
    margin-left: -12px;
  }
  ${tw`
    my-4
    text-color-primary
    py-2
    px-4
    md:px-3
    bg-background-darker
    w-max
  `}
`;

export const MerchSectionContainer = styled.div`
  ${tw`  
    min-h-screen
    w-full
    overflow-x-hidden
    overflow-y-hidden
    flex
    items-center
    justify-center
    relative
    pt-[100px]
    lg:pt-[90px]
    sm:pt-[70px]
  `}
  height: fit-content;
`;

export const MerchContainer = styled.div`
  ${tw`
    grid
    grid-cols-3
    lg:grid-cols-2
    1xsm:grid-cols-1
    justify-items-center
    gap-7
    // mt-20
  `}
`;

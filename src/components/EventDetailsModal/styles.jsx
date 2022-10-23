import styled from 'styled-components';
import tw from 'twin.macro';
import { Body2, Heading4 } from '../shared';

export const EventContainer = styled.div`
  ${tw`
    grid
    grid-cols-8
    sm:flex
    sm:flex-col
    gap-x-12
    sm:gap-y-6
    py-6
    px-10
    sm:px-3
    overflow-y-auto
    max-h-[90vh]
  `}
`;

export const LeftContainer = styled.div`
  ${tw`
    col-span-3
    flex
    flex-col
    gap-9
    sm:gap-4
    items-start
  `}
`;

export const EventImage = styled.img`
  ${tw`
    w-full
    object-contain
  `}
`;

export const CompositeContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-left
  `}
`;

export const SubHeading = styled(Heading4)`
  ${tw`text-color-tertiary`}
`;

export const PrizesAmount = styled(Body2)`
  ${tw`
    text-color-tertiary
  `}
  &>span {
    ${tw`
        text-color-secondary
    `}
  }
`;

export const RightContainer = styled.div`
  ${tw`
    col-span-5
    flex
    flex-col
    gap-9
    sm:gap-6
    items-start
  `}
`;

export const AboutContainer = styled.div`
  ${tw`
    p-4
    rounded-xl
    bg-background-dark
    w-full
    flex-1
    text-left
    flex
    flex-col
    gap-4
    sm:gap-3
  `}
`;

export const AboutText = styled(Body2)`
  ${tw`
    mt-2
    sm:mt-1
    text-color-tertiary
  `}
`;

export const ContactContainer = styled.div`
  ${tw`
    flex 
    flex-col
    w-full
    text-left
  `}
`;

export const ContactDetails = styled.div`
  ${tw`
    flex
    justify-between
    sm:flex-col
  `}
`;

import styled from 'styled-components';
import tw from 'twin.macro';

export const RegistrationCard = styled.div`
  ${tw`
    flex
    flex-col
    gap-12
    items-center
    sm:px-4
    sm:py-6
    md:px-6
    md:py-10
    px-8
    py-16
    bg-background-dark
    rounded-2xl
    shadow-lg
  `}
`;

export const RegistrationCardTitle = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
    items-center
    w-full
  `}
`;

export const InputContainer = styled.div`
  ${tw`
    grid
    grid-cols-4
    md:flex
    md:flex-col
    md:gap-8
    w-full
  `}

  grid-row-gap: 24px;
  grid-column-gap: 24px;
`;

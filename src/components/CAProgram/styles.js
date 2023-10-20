import styled from 'styled-components';
import tw from 'twin.macro';

export const PerksContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-2
  `}
`;

export const ItemsContainer = styled.div`
  ${tw`
    w-[95%]
    mx-auto
    flex
    flex-col
    gap-10
    mt-10
  `}

  @media (max-width: 512px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  ${tw`
    md:w-[50%]
    mx-auto
    w-[40%]
    flex
    justify-center
    mt-[20px]
  `}
`;

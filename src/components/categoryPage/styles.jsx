import styled from 'styled-components';
import tw from 'twin.macro';

export const CategoryHeroContainer = styled.div`
  ${tw`h-screen flex justify-center items-center `}
`;

export const CategoryCardContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  md:flex-col
  md:items-center
  gap-6
  mb-24
  justify-center
  `}
`;

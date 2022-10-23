import styled from 'styled-components';
import tw from 'twin.macro';

export const List = styled.ul`
  ${tw`
    flex
    flex-col
    gap-4
    mt-8
    md:mt-6
    text-color-tertiary
    pl-2
    md:pl-0
  `}
`;

export const ListItem = styled.li`
  ${tw``}
`;

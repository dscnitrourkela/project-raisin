import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarLink = styled.span`
  line-height: 140%;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.3')};
  &:hover {
    opacity: 1;
  }

  ${tw` text-sm md:text-base not-italic font-medium transition-all duration-300 cursor-pointer text-white font-montserrat`}
`;

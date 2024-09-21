import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarLink = styled.span`
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.3')};

  ${tw` text-sm md:text-base not-italic font-medium transition-all duration-300 cursor-pointer text-white font-montserrat leading-[140%] hover:opacity-100`}
`;

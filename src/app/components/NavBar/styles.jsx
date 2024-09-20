import styled from 'styled-components';
import tw from 'twin.macro';

export const NavContainer = styled.nav`
  ${tw` bg-[#005566] flex flex-row items-center justify-end py-[1vw] px-[5vw]`};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.span`
  ${tw`text-white flex items-center my-0 mx-[6vw] py-[0.5vw] px-[2vw]`};

  &:hover {
    cursor: pointer;
    color: #007bff;
    background-color: #f8f9fa;
  }
`;

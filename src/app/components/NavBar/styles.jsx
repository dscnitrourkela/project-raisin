import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #005566;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 1vw 5vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.span`
  display: flex;
  align-items: center;
  margin: 0vw 6vw;
  padding: 0.5vw 2vw;
  &:hover {
    cursor: pointer;
    color: #007bff;
    background-color: #f8f9fa;
  }
`;

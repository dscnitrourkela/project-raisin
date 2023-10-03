import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavSection = styled.header`
  position: sticky;
  margin-bottom: 3rem;
  top: 0;
  width: 100%;
  box-shadow: 0 0 16px 0 rgba(255, 255, 255, 0.36);
  background-color: var(--background-primary);
  z-index: 40;
  .navLinkList {
    display: none;
    list-style: none;
  }
  .navLinkItem {
    text-decoration: none;
    cursor: pointer;
    padding: 0px 28px;
    position: relative;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 1.5px;
      bottom: 0;
      left: 50%;
      display: block;
      background: var(--brand-gradient);
      transition:
        width 0.3s ease 0s,
        left 0.3s ease 0s;
    }
    &:hover::before {
      width: 100%;
      left: 0;
    }
  }
  .navLink {
    text-decoration: none;
    cursor: pointer;
    padding: 12px 0px;
    color: var(--text-color-tertiary);
    &:hover {
      color: var(--text-color-secondary);
    }
  }
  @media (min-width: 1023px) {
    padding-top: 0;
    padding-bottom: 0;
    .navLinkList {
      display: flex;
      justify-content: center;
    }
  }
`;

export const NavWrapper = styled.nav`
  ${tw`
    flex
    items-center
    w-full
    gap-7
    lg:justify-between
    h-[68px]
    `}
`;

export const NavCenter = styled.div`
  ${tw`
    lg:flex-grow-0
    flex-grow
    `}
`;

export const NavRight = styled.div`
  ${tw`
    lg:hidden
    `}
`;

export const StyledMobileNav = styled.section`
  position: fixed;
  margin-bottom: 2rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--background-primary);
  z-index: 30;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  .mobile-nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    gap: 10px;
  }
  .linkList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
  }
  .listItem {
    text-align: center;
    margin-bottom: 1em;
    cursor: pointer;
  }
  .link {
    font-size: 14px;
    text-decoration: none;
  }
`;

export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: #fff;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.25s;
  }
  &:active,
  &:focus {
    outline-color: #fff;
  }
  &::before {
    top: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ menuOpen }) => (menuOpen ? '100%' : '80%')};
    bottom: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 1023px) {
    display: none;
  }
`;

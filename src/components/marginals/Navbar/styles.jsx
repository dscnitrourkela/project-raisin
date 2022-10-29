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

export const Logo = styled.img`
  height: 50px;
  width: auto;
  @media (max-width: 1023px) {
    height: 40px;
  }
`;

export const NavSection = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 0 16px 0 rgba(255, 255, 255, 0.36);
  background-color: var(--background-primary);
  padding-top: 1em;
  padding-bottom: 1em;
  z-index: 40;
  .navHomeLink {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    &:hover {
    }
  }
  .navLinkList {
    display: none;
    list-style: none;
  }
  .navLinkItem {
    margin-right: 32px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .navLink {
    text-decoration: none;
    color: var(--text-color-tertiary);
    &:hover {
      color: var(--text-color-secondary);
    }
  }
  .no-underline {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1023px) {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    .navLinkList {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1023px) {
    .sponsor-sec {
      display: none;
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
  }
  .link {
    font-size: 1.2em;
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

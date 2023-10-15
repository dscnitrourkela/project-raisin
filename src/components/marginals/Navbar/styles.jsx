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
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #2c2c2ccc;
  backdrop-filter: blur(10px);
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

  @media (max-width: 768px) {
    position: fixed;
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
  .navLinkList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
  }
  .navLinkItem {
    text-align: center;
    margin-bottom: 1em;
    cursor: pointer;
  }
  .link {
    font-size: 14px;
    text-decoration: none;
  }

  @media (min-width: 1023px) {
    display: none;
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
    top: ${({ menuopen }) => (menuopen ? '12px' : '8px')};
    transform: ${({ menuopen }) => (menuopen ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ menuopen }) => (menuopen ? '100%' : '80%')};
    bottom: ${({ menuopen }) => (menuopen ? '12px' : '8px')};
    transform: ${({ menuopen }) => (menuopen ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 1023px) {
    display: none;
  }
`;

export const TitleText = styled.h4`
  ${tw`
    text-3xl
    2xl:text-3xl
    lg:text-3xl
    md:text-xl
    sm:text-xl
    text-color-primary
  `};
  font-family: var(--font-family-stardos);
`;

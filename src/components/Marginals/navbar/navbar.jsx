'use client';
import React from 'react';
import {
  HamburgerContainer,
  LogoItem,
  Logos,
  MainBar,
  MainBarItems,
  MenuLogoItem,
  NavContainer,
  NavCover,
  RegisterButton,
  ResItem,
  ResList,
  ResMen,
  ResponsiveMenu,
  HamburgerRegisterButton,
} from './navbar.styles';
import Hamburger from 'hamburger-react';
import SmoothScroll from 'smooth-scroll';
import { useState } from 'react';
import { ButtonData, logos, navLinks } from '../../../config/content/NavbarData/NavData';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function newScrollObject() {
    return new SmoothScroll('a[href*="#"]', {
      offset: 100,
    });
  }

  function handleScroll(id) {
    if (typeof window !== 'undefined' && id) {
      const isHome = window.location.pathname === '/' || window.location.pathname === '/playground';
      if (isHome) {
        const scroll = newScrollObject();
        const anchor = document.getElementById(id);
        if (anchor) {
          scroll.animateScroll(anchor);
        }
      }
    }
  }

  function onClick(id) {
    handleScroll(id);
    handleToggle();
  }

  return (
    <NavContainer>
      <NavCover>
        <MainBar>
          <MenuLogoItem>
            <Link href='/'>
              <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
            </Link>
          </MenuLogoItem>
          {navLinks.map((navLink) => (
            <MainBarItems key={navLink.id}>
              {navLink.href ? (
                <Link href={navLink.href} tabIndex={0}>
                  {navLink.name}
                </Link>
              ) : (
                <span
                  role='button'
                  tabIndex={0}
                  onClick={() => onClick(navLink.id)}
                  onKeyPress={(e) => e.key === 'Enter' && onClick(navLink.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {navLink.name}
                </span>
              )}
            </MainBarItems>
          ))}
        </MainBar>
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={handleToggle} />
        </HamburgerContainer>
      </NavCover>

      {isOpen ? (
        <ResMen>
          <ResList>
            {navLinks.map((item, index) => (
              <ResItem key={index}>{item.title}</ResItem>
            ))}

            <HamburgerRegisterButton>
              <Link href={ButtonData.link}>{ButtonData.title}</Link>
            </HamburgerRegisterButton>
          </ResList>
        </ResMen>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;

'use client';
import React from 'react';
import {
  HamburgerContainer,
  MainBar,
  MainBarItems,
  MenuLogoItem,
  NavContainer,
  NavCover,
  ResItem,
  ResList,
  ResMen,
  HamburgerRegisterButton,
} from './navbar.styles';
import Hamburger from 'hamburger-react';
// import SmoothScroll from 'smooth-scroll';
import { useState } from 'react';
import { ButtonData, logos, navLinks } from '../../../config/content/NavbarData/NavData';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
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
              {/* <Link href={navLink.href}> */}
              {navLink.name}
              {/* </Link> */}
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
            {navLinks.map((navLink) => (
              <ResItem key={navLink.id}>
                {/* <Link href={navLink.href} tabIndex={0}> */}
                {navLink.name}
                {/* </Link> */}
              </ResItem>
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

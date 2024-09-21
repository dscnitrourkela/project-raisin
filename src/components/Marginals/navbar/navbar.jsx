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
} from './navbar.styles';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { logos, MainNavData } from '../../../config/content/navbar.content';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <NavContainer>
      <NavCover>
        <Logos>
          {logos.slice(1).map((logo, index) => (
            <LogoItem key={index}>
              <Image src={logo.link} alt={logo.name} width='20' height='20' />
            </LogoItem>
          ))}
        </Logos>
        <MainBar>
          <MenuLogoItem>
            <Image src={logos[0].link} alt='Inno' width='30' height='30' />
          </MenuLogoItem>
          {MainNavData.map((item, index) => (
            <MainBarItems key={index}>{item}</MainBarItems>
          ))}
        </MainBar>
        <RegisterButton>Register</RegisterButton>

        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={handleToggle}></Hamburger>
        </HamburgerContainer>
      </NavCover>

      {isOpen ? (
        <ResMen>
          <ResList>
            {MainNavData.map((item, index) => (
              <ResItem key={index}>{item}</ResItem>
            ))}
          </ResList>
        </ResMen>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;

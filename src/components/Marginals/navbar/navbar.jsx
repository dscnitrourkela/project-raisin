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
import { useState } from 'react';
import { ButtonData, logos, MainNavData } from '../../../config/content/NavbarData/NavData';
import Image from 'next/image';
import { NavbarLink } from '@/components/shared/Typography/Links';

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
            <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
          </MenuLogoItem>
          {MainNavData.map((item, index) => (
            <NavbarLink key={index}>{item.title}</NavbarLink>
          ))}
        </MainBar>
        <RegisterButton>{ButtonData.title}</RegisterButton>

        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={handleToggle}></Hamburger>
        </HamburgerContainer>
      </NavCover>

      {isOpen ? (
        <ResMen>
          <ResList>
            {MainNavData.map((item, index) => (
              <ResItem key={index}>{item.title}</ResItem>
            ))}
          </ResList>
          <HamburgerRegisterButton>{ButtonData.title}</HamburgerRegisterButton>
        </ResMen>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;

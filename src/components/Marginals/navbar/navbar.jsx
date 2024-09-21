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
  ResponsiveMenu,
} from './navbar.styles';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { logos, MainNavData } from '../../../config/content/navbar.content';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Hamburger toggled={isOpen} toggle={setIsOpen}></Hamburger>
          {isOpen ? (
            <ResponsiveMenu>
              {MainNavData.map((item, index) => (
                <MainBarItems key={index}>{item}</MainBarItems>
              ))}
            </ResponsiveMenu>
          ) : null}
        </HamburgerContainer>
      </NavCover>
    </NavContainer>
  );
};

export default Navbar;

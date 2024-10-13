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
            <Link href='/playground'>
              <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
            </Link>
          </MenuLogoItem>
          {MainNavData.map((item, index) => (
            <MainBarItems key={index}>{item.title}</MainBarItems>
          ))}
        </MainBar>
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

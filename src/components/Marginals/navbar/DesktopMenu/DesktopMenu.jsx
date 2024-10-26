import React from 'react';
import {
  HamburgerContainer,
  MainBar,
  MainBarItems,
  MenuLogoItem,
  NavCover,
  RegisterButton,
  ProfileButton,
} from '@/components/Marginals/navbar/navbar.styles';
import Hamburger from 'hamburger-react';
import { ButtonData, logos, navLinks } from '@/config/content/NavbarData/NavData';
import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';

function DesktopMenu({ isOpen, handleToggle, handleProfileToggle, isLoggedIn }) {
  return (
    <div>
      <NavCover>
        <MainBar>
          <MenuLogoItem>
            <Link href='/'>
              <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
            </Link>
          </MenuLogoItem>
          {navLinks.map((navLink) => (
            <MainBarItems key={navLink.link}>
              <Link href={`${navLink.link}`}>{navLink.name}</Link>
            </MainBarItems>
          ))}
        </MainBar>
        {isLoggedIn ? (
          <ProfileButton onClick={handleProfileToggle}>
            <User size={30} />
          </ProfileButton>
        ) : (
          <RegisterButton>
            <Link href='/register'>{ButtonData.title}</Link>
          </RegisterButton>
        )}
      </NavCover>
    </div>
  );
}

export default DesktopMenu;

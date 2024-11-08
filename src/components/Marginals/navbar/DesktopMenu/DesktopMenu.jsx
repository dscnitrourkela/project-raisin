import React from 'react';

import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  MainBar,
  MainBarItems,
  MenuLogoItem,
  NavCover,
  ProfileButton,
} from '@/components/Marginals/navbar/navbar.styles';
import { logos, navLinks } from '@/config/content/NavbarData/NavData';

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
        {isLoggedIn && (
          <ProfileButton onClick={handleProfileToggle}>
            <User size={30} />
          </ProfileButton>
        )}

        {/* commented to close registeration */}

        {/* {isLoggedIn ? (
          <ProfileButton onClick={handleProfileToggle}>
            <User size={30} />
          </ProfileButton>
        ) : (
          <RegisterButton>
            <Link href='/register'>{ButtonData.title}</Link>
          </RegisterButton>
        )} */}
        {/* commented to close registeration */}
      </NavCover>
    </div>
  );
}

export default DesktopMenu;

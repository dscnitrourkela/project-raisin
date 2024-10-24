'use client';
import React, { useState, useEffect, useContext } from 'react';
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
  RegisterButton,
  ProfileButton,
} from './navbar.styles';
import Hamburger from 'hamburger-react';
import { ButtonData, logos, navLinks } from '../../../config/content/NavbarData/NavData';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthContext } from '@/context/auth-context';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu';
import { SecondaryButton } from '@/components/shared/Typography/Buttons';
import { User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const pathname = usePathname();
  const { handleSignOut } = useContext(AuthContext);
  const isLoggedIn = useIsLoggedIn();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  return (
    <NavContainer>
      <div>
        <NavCover>
          <MainBar>
            <MenuLogoItem>
              <Link href='/' onClick={handleCloseMenu}>
                <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
              </Link>
            </MenuLogoItem>
            {navLinks.map((navLink) => (
              <MainBarItems key={navLink.link}>
                <Link href={`${navLink.link}`} onClick={handleCloseMenu}>
                  {navLink.name}
                </Link>
              </MainBarItems>
            ))}
          </MainBar>
          {isLoggedIn ? (
            <ProfileButton onClick={handleProfileToggle}>
              <User size={30} />
            </ProfileButton>
          ) : (
            <RegisterButton>
              <Link href='/register' onClick={handleCloseMenu}>
                {ButtonData.title}
              </Link>
            </RegisterButton>
          )}
          <HamburgerContainer>
            <Hamburger toggled={isOpen} toggle={handleToggle} size={20} />
          </HamburgerContainer>
        </NavCover>
      </div>

      <AnimatePresence mode='wait'>
        {isProfileOpen && <ProfileMenu handleProfileToggle={handleProfileToggle} />}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(50px)',
              borderRadius: '20px',
              marginTop: '10px',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className='h-[73vh] flex items-center justify-center'
          >
            <ResMen>
              <ResList>
                {navLinks.map((navLink, idx) => (
                  <ResItem key={navLink.link}>
                    <Link href={`${navLink.link}`} onClick={handleCloseMenu}>
                      {navLink.name}
                    </Link>
                  </ResItem>
                ))}

                {isLoggedIn ? (
                  <HamburgerRegisterButton onClick={handleSignOut}>Logout</HamburgerRegisterButton>
                ) : (
                  <HamburgerRegisterButton>
                    <Link href='/register' onClick={handleCloseMenu}>
                      {ButtonData.title}
                    </Link>
                  </HamburgerRegisterButton>
                )}
              </ResList>
            </ResMen>
          </motion.div>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;

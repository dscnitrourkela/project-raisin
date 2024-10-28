'use client';
import React, { useState, useContext } from 'react';
import { NavContainer, HamburgerContainer } from './navbar.styles';
import { AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/context/auth-context';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu';
import { Squeeze as Hamburger } from 'hamburger-react';

import MobileMenu from './MobileMenu/MobileMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { handleSignOut } = useContext(AuthContext);
  const isLoggedIn = useIsLoggedIn();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <NavContainer>
      <DesktopMenu
        isOpen={isOpen}
        handleProfileToggle={handleProfileToggle}
        isLoggedIn={isLoggedIn}
      />

      <HamburgerContainer>
        <Hamburger toggled={isOpen} toggle={handleToggle} size={20} />
      </HamburgerContainer>

      <AnimatePresence mode='wait'>
        {isProfileOpen && (
          <ProfileMenu handleProfileToggle={handleProfileToggle} handleNavClose={setIsOpen} />
        )}
      </AnimatePresence>

      <MobileMenu
        isOpen={isOpen}
        handleToggle={handleToggle}
        handleSignOut={handleSignOut}
        isLoggedIn={isLoggedIn}
        handleProfileToggle={handleProfileToggle}
      />
    </NavContainer>
  );
};

export default Navbar;

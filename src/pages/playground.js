import React, { useState } from 'react';
import {
  CaFlexSection,
  CaHeroSection,
  DesktopNav,
  FaqSection,
  FlexSection,
  HeroSection,
  MenuContext,
  MobileNav,
} from '../components';

const Playground = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <DesktopNav />
        {menuOpen && <MobileNav />}
      </MenuContext.Provider>
      <HeroSection />
      <FaqSection />
      <FlexSection />
      <CaHeroSection />
      <CaFlexSection />
    </>
  );
};

export default Playground;

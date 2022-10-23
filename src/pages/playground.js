import React, { useState } from 'react';

// components
import {
  CaFlexSection,
  CaHeroSection,
  EventSection,
  FaqSection,
  FlexSection,
  Footer,
  HeroSection,
} from '../components';
import DesktopNav from '../components/marginals/Navbar/DesktopNav';
import { MenuContext } from '../components/marginals/Navbar/MenuContext';
import MobileNav from '../components/marginals/Navbar/MobileNav';
import About from '../components/shared/About';

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
      <About />
      <FlexSection />
      <EventSection />
      <FaqSection />
      <Footer />
      <CaHeroSection />
      <CaFlexSection />
    </>
  );
};

export default Playground;

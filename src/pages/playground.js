import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Marginals/Footer/Footer';
import DesktopNav from '../components/marginals/Navbar/DesktopNav';
import { MenuContext } from '../components/marginals/Navbar/MenuContext';
import MobileNav from '../components/marginals/Navbar/MobileNav';
import About from '../components/shared/About';
import EventSection from '../components/Events/EventSection';

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
      <EventSection />
      <Footer />
    </>
  );
};

export default Playground;

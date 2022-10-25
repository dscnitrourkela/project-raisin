/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// components
import {
  CaFlexSection,
  CaHeroSection,
  CaWorkFlowSection,
  EventSection,
  FaqSection,
  FlexSection,
  Footer,
  HeroSection,
  CaEligibilty,
  CaPerksSection,
} from '../components';
import EventCard from '../components/Events/EventCard';
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
      <CaWorkFlowSection />
      <CaPerksSection />
      <CaEligibilty />
      <EventCard />
    </>
  );
};

export default Playground;

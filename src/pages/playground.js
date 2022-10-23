/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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
  EventDetailsModal,
  ModalBox,
} from '../components';
import DesktopNav from '../components/marginals/Navbar/DesktopNav';
import { MenuContext } from '../components/marginals/Navbar/MenuContext';
import MobileNav from '../components/marginals/Navbar/MobileNav';
import About from '../components/shared/About';

const ClickButton = styled.button`
  ${tw`
    px-6
    py-3
    bg-color-primary
    rounded-4xl
  `}
`;

const Playground = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      <CaEligibilty />
      <ClickButton
        type='submit'
        style={{ padding: '24px', backgroundColor: 'white' }}
        onClick={() => setModalOpen(true)}
      >
        Click it
      </ClickButton>
      <ModalBox isOpen={modalOpen} close={() => setModalOpen(false)}>
        <EventDetailsModal />
      </ModalBox>
    </>
  );
};

export default Playground;

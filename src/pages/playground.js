/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';

// components

import DesktopNav from '../components/marginals/Navbar/DesktopNav';
import { MenuContext } from '../components/marginals/Navbar/MenuContext';
import MobileNav from '../components/marginals/Navbar/MobileNav';

const Playground = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <title>Playground</title>
        <meta name='description' content='This is playground' />
      </Helmet>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <DesktopNav />
        {menuOpen && <MobileNav />}
      </MenuContext.Provider>
    </>
  );
};

export default Playground;

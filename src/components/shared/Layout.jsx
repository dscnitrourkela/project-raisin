import React, { useState } from 'react';

import { DesktopNav, Footer, MenuContext, MobileNav } from '../marginals/index';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <DesktopNav />
        {menuOpen && <MobileNav />}
      </MenuContext.Provider>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

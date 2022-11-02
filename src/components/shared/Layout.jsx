import React, { useState } from 'react';

import { DesktopNav, Footer, MenuContext, MobileNav } from '../marginals';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <>
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

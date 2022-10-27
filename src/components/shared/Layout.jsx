import React, { useState } from 'react';
import AuthContextProvider from '../../utils/Auth';
import { DesktopNav, Footer, MenuContext, MobileNav } from '../marginals';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <AuthContextProvider>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <DesktopNav />
        {menuOpen && <MobileNav />}
      </MenuContext.Provider>
      {children}
      <Footer />
    </AuthContextProvider>
  );
};

export default Layout;

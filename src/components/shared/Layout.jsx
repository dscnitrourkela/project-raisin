import React, { useState } from 'react';

import { DesktopNav, Footer, MenuContext, MobileNav } from '../marginals/index';

const Layout = ({ children }) => {
  const [menuopen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => (menuopen ? setMenuOpen(false) : setMenuOpen(true));
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <MenuContext.Provider value={{ menuopen, toggleMenuOpen }}>
        <DesktopNav />
        {menuopen && <MobileNav />}
      </MenuContext.Provider>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

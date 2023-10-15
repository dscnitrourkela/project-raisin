import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { AuthContext } from '../../../utils/Auth';
import { nav } from '../../../../config/content';
import { NavText } from '../../shared';

// Function Returning new scroll object
const newScrollObject = () => {
  // eslint-disable-next-line
  const SmoothScroll = require('smooth-scroll');
  return new SmoothScroll('', {
    offset: () => 100,
  });
};

const handleScroll = (id) => {
  if (typeof window !== 'undefined' && id) {
    const isHome = window.location.pathname === '/';
    if (isHome) {
      const scroll = newScrollObject();
      const anchor = document.getElementById(id);
      scroll.animateScroll(anchor);
    }
  }
};

const onClick = (id, link, toggleMenuOpen) => {
  if (!link) {
    handleScroll(id);
  }
  if (toggleMenuOpen) toggleMenuOpen();
};

const NavList = ({ toggleMenuOpen }) => {
  const authContext = useContext(AuthContext);
  const { userData } = authContext;
  const [isOtherPage, setIsOtherPage] = useState(false);

  const isRegistered =
    !!userData?.rollNumber || userData?.festID?.includes('innovision-2023') || false;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOtherPage(window.location.pathname !== '/');
    }
  });

  return (
    <ul className='navLinkList'>
      {!isOtherPage
        ? nav.navItems.map(({ id, name, link }) => (
            <li
              key={id}
              onClick={() => onClick(id, link, toggleMenuOpen)}
              onKeyPress={() => onClick(id, link, toggleMenuOpen)}
              id={name}
              role='menuitem'
              tabIndex='0'
              className='navLinkItem'
            >
              <Link style={{ textDecoration: 'none' }} to={link}>
                <NavText className='navLink'>{name}</NavText>
              </Link>
            </li>
          ))
        : nav.otherPagesNavItems.map(({ id, name, link, authenticated: auth }) =>
            isRegistered === auth || auth === undefined ? (
              <li key={id} id={name} role='menuitem' tabIndex='0' className='navLinkItem'>
                <Link style={{ textDecoration: 'none' }} to={link}>
                  <NavText className='navLink'>{name}</NavText>
                </Link>
              </li>
            ) : null,
          )}
    </ul>
  );
};

export default NavList;

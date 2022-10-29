import React, { useContext } from 'react';

// Libraries
import { Link } from 'gatsby';

// Components
import { MenuContext } from './MenuContext';
import { StyledMobileNav } from './styles';

// Assets
import { nav } from '../../../../config/content';
import { NavText } from '../../shared';
import AuthButton from './AuthButton';

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

function MobileNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen } = menuContext;

  const onMenuClick = (id) => {
    handleScroll(id);
    toggleMenuOpen();
  };

  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {nav.navItems.map(({ id, name, link }) => (
            <li
              key={id}
              id={name}
              className='listItem'
              onClick={() => !link && onMenuClick(id)}
              onKeyDown={() => !link && onMenuClick(id)}
              role='menuitem'
              tabIndex='0'
            >
              <Link to={link} style={{ textDecoration: 'none' }}>
                <NavText className='link'>{name}</NavText>
              </Link>
            </li>
          ))}
        </ul>
        <AuthButton outline />
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;

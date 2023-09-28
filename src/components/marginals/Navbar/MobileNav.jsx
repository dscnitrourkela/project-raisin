import React, { useContext } from 'react';

// Libraries
import { Link, navigate } from 'gatsby';

// Components
import { MenuContext } from './MenuContext';
import { AuthContext } from '../../../utils/Auth';
import { StyledMobileNav } from './styles';

// Assets
import { nav } from '../../../../config/content';
import { NavText } from '../../shared';
import Button from '../../shared/Button';

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
    } else {
      navigate('/');
      setTimeout(() => {
        const scroll = newScrollObject();
        const anchor = document.getElementById(id);
        scroll.animateScroll(anchor);
      }, 1000);
    }
  }
};

function MobileNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen } = menuContext;
  const authContext = useContext(AuthContext);
  const { authenticated, login, logout } = authContext;

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
        <Button
          variant='outline'
          text={authenticated ? 'logout' : 'Register'}
          onClick={authenticated ? logout : login}
        />
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;

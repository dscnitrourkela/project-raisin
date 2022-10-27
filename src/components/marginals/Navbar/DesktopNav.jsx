import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { nav } from '../../../../config/content';
import { Container, NavText } from '../../shared';
import { Logo, NavCenter, NavRight, NavSection, NavWrapper, StyledHamburger } from './styles';
import { MenuContext } from './MenuContext';
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

function DesktopNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <NavWrapper>
          <div className='navLeft'>
            <Link to='/'>
              <Logo src={nav.logo.src} alt={nav.logo.alt} />
            </Link>
          </div>
          <NavCenter>
            <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
            <ul className='navLinkList'>
              {nav.navItems.map(({ id, name, link }) => (
                <li
                  key={id}
                  onClick={() => !link && handleScroll(id)}
                  onKeyPress={() => !link && handleScroll(id)}
                  id={name}
                  role='menuitem'
                  tabIndex='0'
                  className='navLinkItem'
                >
                  <Link style={{ textDecoration: 'none' }} to={link}>
                    <NavText className='navLink'>{name}</NavText>
                  </Link>
                </li>
              ))}
            </ul>
          </NavCenter>
          <NavRight>
            <AuthButton outline />
          </NavRight>
        </NavWrapper>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;

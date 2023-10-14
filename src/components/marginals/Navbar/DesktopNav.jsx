import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { nav } from '../../../../config/content';
import Heading4 from '../../shared/Typography/Heading4';
import { Container, NavText } from '../../shared';
import { NavCenter, NavRight, NavSection, NavWrapper, StyledHamburger } from './styles';
import { MenuContext } from './MenuContext';
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
    }
  }
};

function DesktopNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuopen } = menuContext;
  const authContext = useContext(AuthContext);
  const { authenticated, login, logout } = authContext;

  return (
    <NavSection>
      <Container>
        <NavWrapper>
          <div className='navLeft'>
            <Link to='/'>
              <Heading4>{nav.logo.text}</Heading4>
            </Link>
          </div>
          <NavCenter>
            <StyledHamburger menuopen={menuopen} onClick={toggleMenuOpen} />
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
            <Button
              variant='outline'
              text={authenticated ? 'logout' : 'Register'}
              onClick={authenticated ? logout : login}
            />
          </NavRight>
        </NavWrapper>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;

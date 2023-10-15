import React, { useContext } from 'react';

// Libraries

// Components
import { MenuContext } from './MenuContext';
import { AuthContext } from '../../../utils/Auth';
import { StyledMobileNav } from './styles';

// Assets
import Button from '../../shared/Button';
import NavList from './NavList';

function MobileNav() {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen } = menuContext;
  const authContext = useContext(AuthContext);
  const { authenticated, login, logout } = authContext;

  return (
    <StyledMobileNav>
      <div className='mobile-nav-container'>
        <NavList toggleMenuOpen={toggleMenuOpen} />
        <Button
          variant='outline'
          text={authenticated ? 'logout' : 'login'}
          onClick={authenticated ? logout : login}
        />
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;

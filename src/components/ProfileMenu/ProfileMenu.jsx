'use client';
import { useUserDetails } from '@/hooks/useUserDetails';
import { AuthContext } from '@/context/auth-context';
import { useContext } from 'react';
import {
  Container,
  MenuCard,
  CloseButton,
  UserName,
  UserEmail,
  MenuContent,
  MenuLinks,
  StyledLink,
  LogoutButton,
  menuVariants,
  menuTransition,
} from './ProfileMenu.styles';

function ProfileMenu({ handleProfileToggle, handleNavClose }) {
  const { handleSignOut } = useContext(AuthContext);
  const getUserDetails = useUserDetails();
  const user = getUserDetails();

  const handleLogout = () => {
    handleSignOut();
    handleProfileToggle();
  };

  const handleCloseMenu = () => {
    handleProfileToggle();
    handleNavClose(false);
  };

  return (
    <Container>
      <MenuCard
        initial={menuVariants.initial}
        animate={menuVariants.animate}
        exit={menuVariants.exit}
        transition={menuTransition}
        key='profile-menu'
      >
        <MenuContent>
          <CloseButton onClick={handleCloseMenu}>X</CloseButton>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>
          <MenuLinks>
            <StyledLink href='/register' onClick={handleProfileToggle}>
              Complete Your Registration
            </StyledLink>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </MenuLinks>
        </MenuContent>
      </MenuCard>
    </Container>
  );
}

export default ProfileMenu;

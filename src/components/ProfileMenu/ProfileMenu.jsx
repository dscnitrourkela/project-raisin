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
  ProfileImage,
} from './ProfileMenu.styles';

function ProfileMenu({ handleProfileToggle, handleNavClose }) {
  const { handleSignOut } = useContext(AuthContext);
  const getUserDetails = useUserDetails();
  const user = getUserDetails();

  const handleLogout = () => {
    handleSignOut();
    handleProfileToggle();
    handleNavClose(false);
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
          <ProfileImage src={user?.photoUrl} alt='User Profile' width={500} height={500} />
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

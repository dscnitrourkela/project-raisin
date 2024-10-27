'use client';
import { useContext } from 'react';

import Cookies from 'js-cookie';

import { AuthContext } from '@/context/auth-context';
import { useUserDetails } from '@/hooks/useUserDetails';

import {
  CloseButton,
  Container,
  LogoutButton,
  MenuCard,
  MenuContent,
  MenuLinks,
  menuTransition,
  menuVariants,
  ProfileImage,
  StyledLink,
  UserEmail,
  UserName,
} from './ProfileMenu.styles';

function ProfileMenu({ handleProfileToggle, handleNavClose }) {
  const { handleSignOut } = useContext(AuthContext);
  const getUserDetails = useUserDetails();
  const user = getUserDetails();
  const isNitr = getUserDetails()?.isNitR;
  const isRegistered = Cookies.get('userDataDB');
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
            {isRegistered ? (
              !isNitr && <p>Your payment is being verified! You will be mailed shortly</p>
            ) : (
              <StyledLink href='/register' onClick={handleProfileToggle}>
                Complete Your Registration
              </StyledLink>
            )}
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </MenuLinks>
        </MenuContent>
      </MenuCard>
    </Container>
  );
}

export default ProfileMenu;

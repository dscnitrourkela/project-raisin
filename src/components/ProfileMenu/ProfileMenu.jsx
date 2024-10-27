'use client';
import { useContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

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
  const [isRegistered, setIsRegistered] = useState(false);
  const getUserDetails = useUserDetails();
  const user = getUserDetails();
  const router = useRouter();
  const path = usePathname();
  const isNitr = getUserDetails()?.isNitR;

  const handleLogout = () => {
    handleSignOut();
    handleProfileToggle();
    handleNavClose(false);
  };

  const handleCloseMenu = () => {
    handleProfileToggle();
    handleNavClose(false);
  };

  useEffect(() => {
    const mongoId = Cookies.get('userDataDB');
    if (mongoId) {
      if (path === '/register') {
        toast.success('You are already registered!');
        router.push('/');
      }
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, []);

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

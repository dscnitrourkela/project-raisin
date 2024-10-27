'use client';
import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '@/context/auth-context';
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
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    photoUrl: '',
    id: '',
    hasPaid: false,
    isNitR: false,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = () => {
      try {
        const userProfileCookie = Cookies.get('userData');
        const userDBCookie = Cookies.get('userDataDB');

        if (!userProfileCookie || !userDBCookie) {
          throw new Error('User data not found in cookies');
        }

        const userProfile = JSON.parse(userProfileCookie);
        const userInDB = JSON.parse(userDBCookie);

        setUserDetails({
          name: userProfile.name,
          email: userProfile.email,
          photoUrl: userProfile.photoUrl,
          id: userInDB.id,
          hasPaid: userInDB.hasPaid,
          isNitR: userProfile.isNitR,
        });
      } catch (e) {
        console.error('Error fetching user data:', e);
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    handleSignOut();
    handleProfileToggle();
    handleNavClose(false);
  };

  const handleCloseMenu = () => {
    handleProfileToggle();
    handleNavClose(false);
  };

  if (error) {
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
            <p className='text-red-500'>{error}</p>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </MenuContent>
        </MenuCard>
      </Container>
    );
  }

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
          {userDetails.photoUrl && (
            <ProfileImage src={userDetails.photoUrl} alt='User Profile' width={500} height={500} />
          )}
          {userDetails.name && <UserName>{userDetails.name}</UserName>}
          {userDetails.email && <UserEmail>{userDetails.email}</UserEmail>}
          <MenuLinks>
            {userDetails.id ? (
              !userDetails.isNitR && (
                <p className='text-center'>
                  {userDetails.hasPaid
                    ? 'Congrats! you can now register for events!'
                    : 'Your payment is being verified! You will be mailed shortly'}
                </p>
              )
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

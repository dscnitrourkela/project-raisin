import React from 'react';
import { PrivateRoute, UserProfile } from '../components';

const ProfilePage = () => (
  <PrivateRoute>
    <UserProfile />
  </PrivateRoute>
);

export default ProfilePage;

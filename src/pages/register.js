import React from 'react';
import { PrivateRoute, RegistrationSection } from '../components';
import RegistrationProvider from '../components/Registration/RegistrationContext';

const RegistrationPage = () => (
  <PrivateRoute>
    <RegistrationProvider>
      <RegistrationSection />
    </RegistrationProvider>
  </PrivateRoute>
);

export default RegistrationPage;

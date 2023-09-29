import React, { useContext } from 'react';
import RegistrationProvider, { RegistrationContext } from './RegistrationContext';
import { RegistrationForm } from './RegistrationForm';
import { STAGES } from '../../../config/content/Registration';

const RegistrationFlow = () => (
  <RegistrationProvider>
    <RegistrationSection />
  </RegistrationProvider>
);

const RegistrationSection = () => {
  const { stage } = useContext(RegistrationContext);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {stage === STAGES.TYPE_OF_USER && <RegistrationForm />}
    </div>
  );
};

export default RegistrationFlow;

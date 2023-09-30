import React, { useContext } from 'react';
import { RegistrationContext } from './RegistrationContext';
import { RegistrationForm } from './RegistrationForm';
import { STAGES } from '../../../config/content/Registration';
import ChoiceStage from './Choice';
import { Heading1 } from '../shared';

const RegistrationSection = () => {
  const { stage } = useContext(RegistrationContext);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {stage === STAGES.TYPE_OF_USER && <ChoiceStage />}
      {stage === STAGES.STUDENT_FORM && <RegistrationForm />}
      {stage === STAGES.REGISTRATION_CLOSED && <Heading1>Registration Closed</Heading1>}
    </div>
  );
};

export default RegistrationSection;
export * from './RegistrationContext';

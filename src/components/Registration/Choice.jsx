import React, { useContext } from 'react';
import { RegistrationContext } from './RegistrationContext';
import { Heading3 } from '../shared';
import { STAGES } from '../../../config/content/Registration';
import Button from '../shared/Button';
import { ButtonContainer, RegistrationCard } from './styles';

const ChoiceStage = () => {
  const { setStage, setIsNITR } = useContext(RegistrationContext);

  const handleClick = async (e) => {
    setIsNITR(e.target.innerText === 'Yes');
    setStage(STAGES.STUDENT_FORM);
  };

  return (
    <RegistrationCard>
      <Heading3 style={{ textTransform: 'none' }}>Are you a student from NIT Rourkela?</Heading3>
      <ButtonContainer>
        <Button onClick={handleClick} text='Yes' variant='filled' style={{ borderRadius: 0 }} />
        <Button onClick={handleClick} text='No' variant='outline' />
      </ButtonContainer>
    </RegistrationCard>
  );
};

export default ChoiceStage;

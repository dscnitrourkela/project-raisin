import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import { useState } from 'react';
import { QrModal } from './QrModal';

export const QrButton = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <PrimaryButton onClick={handleModal}>{label}</PrimaryButton>
      <QrModal isOpen={isModalOpen} onClose={handleModal} />
    </>
  );
};

import { RegisterButton } from '@/components/Marginals/navbar/navbar.styles';
import { closeIcon } from '@/config/content/Footer';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Image from 'next/image';

export const RegisterModal = ({ onClose, isOpen, event }) => {
  return (
    <Modal
      size='xl'
      isOpen={isOpen}
      onClose={onClose}
      backdrop='blur'
      hideCloseButton={true}
      placement='center'
      className='backdrop-blur-lg'
    >
      <ModalContent className='relative bg-[#0000002a] h-[60vh] xxs:h-[70vh] md:h-[90vh] md:mt-48 focus:outline-none focus:border-0'>
        <Button
          color='danger'
          variant='light'
          onPress={onClose}
          className='absolute top-1 right-0 z-10 focus:outline-none focus:border-0'
        >
          <Image src={closeIcon} alt='close' width={30} height={30} />
        </Button>
        <ModalBody className='h-full flex flex-col justify-center items-center'>
          {event ? <RegisterButton>Hey rubidium{event.id}</RegisterButton> : <p>Loading...</p>}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

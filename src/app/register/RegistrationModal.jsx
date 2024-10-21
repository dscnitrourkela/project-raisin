import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import Image from 'next/image';
import { closeIcon } from '@/config/content/Footer';

export const RegistrationModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      size='sm'
      isOpen={isOpen}
      onClose={onClose}
      backdrop='blur'
      hideCloseButton={true}
      placement='center'
      className='backdrop-blur-lg'
    >
      <ModalContent className='relative bg-[#0000002a] h-[50vh] focus:outline-none focus:border-0'>
        <Button
          color='danger'
          variant='light'
          onPress={onClose}
          className='absolute top-1 right-0 z-10 focus:outline-none focus:border-0'
        >
          <Image src={closeIcon} alt='close' width={30} height={30} />
        </Button>
        <ModalBody className='px-[30px] py-[50px] text-monteserrat h-full flex flex-col justify-center items-center'>
          <p
            className='tracking-wider text-center text-[18px] lg:text-[23px] font-orbitron'
            id='modal-title'
          >
            Coming Soon
          </p>
          <p className='text-center tracking-wide text-[14px] lg:text-[18px] mt-10 font-montserrat'>
            Stay tuned for exciting updates! Registration will open soon.🚀
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

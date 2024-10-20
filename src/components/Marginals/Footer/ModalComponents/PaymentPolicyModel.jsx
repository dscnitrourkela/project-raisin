import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import { closeIcon, PaymentPolicyModalData } from '@/config/content/Footer';
import Image from 'next/image';
import { ModalText, Para } from '.././styles';

export const PaymentPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      size='lg'
      isOpen={isOpen}
      onClose={onClose}
      backdrop='opaque'
      hideCloseButton={true}
      placement='center'
      className='backdrop-blur-2xl border-2 border-[#00FFD1] p-5'
      scrollBehavior='normal'
    >
      <ModalContent className='relative bg-[#0000002a] max-h-[90vh]'>
        <Button
          color='danger'
          variant='light'
          onPress={onClose}
          className='absolute top-1 right-0 z-10'
        >
          <Image src={closeIcon} alt='close' width={30} height={30} />
        </Button>
        <ModalBody className='px-[30px] py-[50px] text-monteserrat h-full flex flex-col justify-center items-center'>
          {PaymentPolicyModalData.map((items, index) => (
            <div key={index}>
              <ModalText>{items.title}</ModalText>
              <Para>{items.description}</Para>
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

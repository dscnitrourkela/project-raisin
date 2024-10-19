import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import { closeIcon } from '@/config/content/Footer';
import Image from 'next/image';
import { ModalText, Para } from './styles';

export const PaymentPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      size='md'
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
          <ModalText>Pricing</ModalText>
          <Para>
            The registration fees for Innovision 2024 is ₹899 for all the students from outside NIT
            Rourkela. There are no registration fees for students of NIT Rourkela.
          </Para>
          <ModalText>Refund Policy</ModalText>
          <Para>
            Thank you for registering at Innovision 2024. If, for any reason, you are not entirely
            satisfied with your purchase, we encourage you to review our refund and return policy.
          </Para>
          <ModalText>Your Registration Cancellation Rights</ModalText>
          <Para>
            There will be no refund of the registration fees under any circumstances unless the fest
            is cancelled by team Innovision.
          </Para>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

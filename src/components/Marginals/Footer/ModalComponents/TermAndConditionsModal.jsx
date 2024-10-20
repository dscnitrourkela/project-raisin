import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import { closeIcon, TermsAndConditionsModalData } from '@/config/content/Footer';
import { Fragment } from 'react';
import Image from 'next/image';
import { ModalText, Para } from '../styles';

export const TermAndConditionModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      size='lg'
      isOpen={isOpen}
      onClose={onClose}
      backdrop='opaque'
      hideCloseButton={true}
      placement='center'
      className='backdrop-blur-2xl border-2 border-[#00FFD1] p-5'
      scrollBehavior='inside'
    >
      <ModalContent className='relative bg-[#0000002a] max-h-[60vh] overflow-y-auto p-5'>
        <Button
          color='danger'
          variant='light'
          onPress={onClose}
          className='absolute top-3 right-3 z-10'
        >
          <Image src={closeIcon} alt='close' width={30} height={30} />
        </Button>
        <ModalBody className='w-full py-8 text-monteserrat h-full flex flex-col justify-start items-start overflow-y-auto'>
          {TermsAndConditionsModalData.map((items, index) => (
            <div key={index} className='w-full mb-4'>
              <ModalText>{items.title}</ModalText>
              <Para className='mt-2'>
                {items.description.split('●').map((part, index) => (
                  <Fragment key={index}>
                    {part}
                    {index < items.description.split('●').length - 1 && <br />}
                    {index < items.description.split('●').length - 1 && '●'}
                  </Fragment>
                ))}
              </Para>
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

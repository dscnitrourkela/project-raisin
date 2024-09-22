import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
import Image from 'next/image';
import { List } from '../shared/Typography/Lists';

export default function MapModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const mapSize = '5xl';

  return (
    <>
      <div className='flex flex-wrap gap-3'>
        <List onClick={onOpen} className='cursor-pointer'>
          NITR Map
        </List>
      </div>
      <Modal
        size={mapSize}
        isOpen={isOpen}
        onClose={onClose}
        backdrop='blur'
        hideCloseButton={true}
      >
        <ModalContent className='relative'>
          {(onClose) => (
            <>
              <Button
                color='danger'
                variant='light'
                onPress={onClose}
                className='absolute top-1 right-0'
              >
                <Image
                  src='https://res.cloudinary.com/dpmlrxlzr/image/upload/v1726844038/icons8-close_cydpjh.svg'
                  alt='close'
                  width={30}
                  height={30}
                />
              </Button>
              <ModalBody className='p-2'>
                <div className='w-full'>
                  <iframe
                    width='100%'
                    height='600'
                    frameBorder='0'
                    scrolling='no'
                    marginHeight='0'
                    marginWidth='0'
                    src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=National%20Institute%20of%20Technology%20Rourkela+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

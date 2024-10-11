import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { EventImage } from '../utils/Image';
import { ParentEventCardComponent } from './Parent';
import { CarouselButton, CarouselHead, CarouselParagraph, Overlay, Modal } from './eventCard.style'; // Updated import
import { RegisterModal } from '../modals/Registermodal';

export const EventCard = ({ head, url, desc, isCurrent, event }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  const handleRegisterModalOpen = () => setIsRegisterModalOpen(true);
  const handleRegisterModalClose = () => setIsRegisterModalOpen(false);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    if (root) {
      setModalRoot(root);
    }
  }, []);

  return (
    <>
      <ParentEventCardComponent>
        <EventImage imgurl={url} alt={head} />
        <CarouselHead>{head}</CarouselHead>
        <CarouselParagraph>{desc}</CarouselParagraph>
        <div className='flex justify-end mt-16'>
          <CarouselButton
            disabled={!isCurrent}
            className={isCurrent ? '' : 'cursor-not-allowed hover:opacity-100'}
            onClick={isCurrent ? handleRegisterModalOpen : null}
          >
            REGISTER
          </CarouselButton>
        </div>
      </ParentEventCardComponent>

      {modalRoot &&
        isRegisterModalOpen &&
        createPortal(
          <Overlay>
            <Modal>
              <RegisterModal isClose={handleRegisterModalClose} event={event} />
            </Modal>
          </Overlay>,
          modalRoot,
        )}
    </>
  );
};

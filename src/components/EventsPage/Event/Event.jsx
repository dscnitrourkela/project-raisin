'use client';

import { useState } from 'react';
import { SliderEventsWrapper } from '../Carousel/PreviewCarousel';
import { RegisterModal } from './RegisterModal';
import { useMutation } from '@apollo/client';
import { REGISTER_EVENT } from '@/graphql/mutations/eventMutations';
import toast from 'react-hot-toast';

export const Events = ({ previewItems, descriptionItems }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [eventID, setEventID] = useState(0);

  const [eventRegistration] = useMutation(REGISTER_EVENT);
  // const userID = '671e0cedcf42c86749354bc3';
  // const eventID = '671bbe15aacbd171687071d6';

  async function handleEventRegister(id) {
    const event = previewItems.find((item) => item.id === id);
    if (event) {
      // setEventID("671bbe15aacbd171687071d6");
      setSelectedEvent(event);
      setRegisterModalOpen(false);

      try {
        const response = await eventRegistration({
          variables: {
            eventRegistration: {
              eventID: '671bbe15aacbd171687071d6',
              userID: '671e0cedcf42c86749354bc3',
            },
          },
        });
        console.log('respose', response);
        toast.success('registration succesfull');
      } catch (error) {
        console.error('Error registering for event:', error);
      }
    }
  }

  function handleCloseRegisterModal() {
    setRegisterModalOpen(false);
  }

  return (
    <>
      <SliderEventsWrapper
        previewItems={previewItems}
        descriptionItems={descriptionItems}
        handleRegisterEvent={handleEventRegister}
      />
      <RegisterModal
        event={selectedEvent}
        isOpen={registerModalOpen}
        onClose={handleCloseRegisterModal}
      />
    </>
  );
};

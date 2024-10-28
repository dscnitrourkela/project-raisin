'use client';

import { useEffect, useState } from 'react';
import { SliderEventsWrapper } from '../Carousel/PreviewCarousel';
import { RegisterModal } from './RegisterModal';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import { REGISTER_EVENT } from '@/graphql/mutations/eventMutations';
import toast from 'react-hot-toast';
import handleLoadingAndToast from '@/utils/handleLoadingToast';
import { GET_USER_REGISTERED_EVENT_IDS } from '@/graphql/queries/eventQueries';

export const Events = ({ previewItems, descriptionItems }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const { data: allRegisteredEvents } = useSuspenseQuery(GET_USER_REGISTERED_EVENT_IDS, {
    variables: { userId: '671e0cedcf42c86749354bc3' },
  });

  useEffect(() => {
    if (allRegisteredEvents) {
      getAllRegisteredEvents(allRegisteredEvents?.eventRegistration);
    }
  }, [allRegisteredEvents]);

  function getAllRegisteredEvents(prop) {
    try {
      const filteredEvents = prop.filter((event) => event.EventID === id);
      if (filteredEvents.length > 0) {
        setRegisteredEvents(filteredEvents);
      } else setRegisteredEvents([]);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Something went wrong!');
    }
  }

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
        const response = await handleLoadingAndToast(
          eventRegistration({
            variables: {
              eventRegistration: {
                eventID: '671bbe15aacbd171687071d6',
                userID: '671e0cedcf42c86749354bc3',
              },
            },
          }),
          'Registering...',
          `Registered sucessfully`,
          `Registering failed`,
          setLoading,
        );
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
        loading={loading}
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

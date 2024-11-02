'use client';

import { useEffect, useState, useCallback } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

import { SliderEventsWrapper } from '../Carousel/PreviewCarousel';
import { RegisterModal } from './RegisterModal';
import { REGISTER_EVENT } from '@/graphql/mutations/eventMutations';
import { GET_USER_REGISTERED_EVENT_IDS } from '@/graphql/queries/eventQueries';
import handleLoadingAndToast from '@/utils/handleLoadingToast';

const initialState = {
  registerModalOpen: false,
  selectedEvent: null,
  loading: false,
  registeredEvents: [],
  uid: null,
  registered: false,
  hasPaid: false,
  isNitR: false,
  isCurrentSlideId: 0,
};

export const Events = ({ EventItem }) => {
  const [state, setState] = useState(initialState);

  const [getRegisteredEvents, { data: registeredEventsData }] = useLazyQuery(
    GET_USER_REGISTERED_EVENT_IDS,
    {
      errorPolicy: 'all',
      onError: (error) => {
        console.error('Failed to fetch registered events:', error);
        toast.error('Failed to load your registered events');
      },
    },
  );

  const [registerForEvent] = useMutation(REGISTER_EVENT, {
    onError: (error) => {
      console.error('Registration mutation error:', error);
      toast.error('Failed to register for the event');
    },
  });

  useEffect(() => {
    const initializeUser = () => {
      try {
        const userData = Cookies.get('userDataDB');

        if (userData) {
          const { id, hasPaid, isNitR } = JSON.parse(userData);

          setState((prev) => ({ ...prev, uid: id, hasPaid, isNitR }));
        }
      } catch (error) {
        console.error('Error parsing user data cookie:', error);
        toast.error('Error loading user data');
      }
    };

    initializeUser();
  }, []);

  useEffect(() => {
    if (state.uid) {
      getRegisteredEvents({
        variables: { userId: state.uid },
        fetchPolicy: 'network-only',
      });
    }
  }, [state.uid, getRegisteredEvents]);

  useEffect(() => {
    if (registeredEventsData?.eventRegistration) {
      setState((prev) => ({
        ...prev,
        registeredEvents: registeredEventsData.eventRegistration,
      }));
    }
  }, [registeredEventsData]);

  useEffect(() => {
    if (state.registered) {
      getRegisteredEvents({
        variables: { userId: state.uid },
        fetchPolicy: 'network-only',
      });
      setState((prev) => ({ ...prev, registered: false }));
    }
  }, [state.registered, state.uid, getRegisteredEvents]);

  const handleEventRegister = useCallback(
    async (eventId) => {
      setState((prev) => ({
        ...prev,
        isCurrentSlideId: eventId,
      }));

      if (!state.uid) {
        toast.error('Please login or complete your registration to register for events');
        return;
      }

      const event = EventItem.find((item) => item.eventID === eventId);
      if (!event) {
        toast.error('Event not found');
        return;
      }

      setState((prev) => ({
        ...prev,
        selectedEvent: event,
        registerModalOpen: false,
      }));

      try {
        if (state.hasPaid || state.isNitR) {
          const response = await handleLoadingAndToast(
            registerForEvent({
              variables: {
                eventRegistration: {
                  eventID: eventId,
                  userID: state.uid,
                },
              },
            }),
            'Registering...',
            'Registered successfully!',
            'Registration failed',
            (loading) => setState((prev) => ({ ...prev, loading })),
          );

          if (response?.data) {
            setState((prev) => ({
              ...prev,
              registeredEvents: [...prev.registeredEvents, eventId],
              registered: true,
            }));
          }
        } else {
          toast.error('Registration not available until payment is completed.');
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
    [state.uid, state.hasPaid, EventItem, registerForEvent],
  );

  const handleCloseRegisterModal = useCallback(() => {
    setState((prev) => ({ ...prev, registerModalOpen: false }));
  }, []);

  return (
    <>
      <SliderEventsWrapper
        EventItem={EventItem}
        loading={state.loading}
        handleRegisterEvent={handleEventRegister}
        registeredEvents={state.registeredEvents}
        isCurrentSlideId={state.isCurrentSlideId}
      />
      <RegisterModal
        event={state.selectedEvent}
        isOpen={state.registerModalOpen}
        onClose={handleCloseRegisterModal}
      />
    </>
  );
};

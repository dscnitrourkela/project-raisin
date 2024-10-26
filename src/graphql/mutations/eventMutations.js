import { gql } from '@apollo/client';

export const REGISTER_EVENT = gql`
  mutation RegisterEvent($eventRegistration: EventRegistrationCreateInputType!) {
    createEventRegistration(eventRegistration: $eventRegistration) {
      event {
        name
      }
      user {
        name
      }
    }
  }
`;

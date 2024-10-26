import { gql } from '@apollo/client';

export const GET_EVENTS_BY_TYPE = gql`
  query GetEventsByType($type: String) {
    getEventsByType(type: $type) {
      name
      id
    }
  }
`;

export const GET_USER_REGISTERED_EVENTS = gql`
  query GetUserRegisteredEvents($userId: ID) {
    eventRegistration(userID: $userId) {
      eventID
      event {
        name
      }
    }
  }
`;

export const GET_USER_REGISTERED_EVENT_IDS = gql`
  query GetUserRegisteredEventIds($userId: ID) {
    eventRegistration(userID: $userId) {
      eventID
    }
  }
`;

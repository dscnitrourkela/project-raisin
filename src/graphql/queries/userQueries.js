import { gql } from '@apollo/client';

export const GET_USER_BY_UID = gql`
  query GetUserByUid($uid: ID) {
    user(uid: $uid) {
      data {
        name
        id
        hasPaid
        college
      }
    }
  }
`;

export const GET_USERS = gql`
  query Query($orgId: ID) {
    user(orgID: $orgId) {
      data {
        college
        gender
      }
    }
  }
`;

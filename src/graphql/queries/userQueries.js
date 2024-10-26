import { gql } from '@apollo/client';

export const GET_USER_BY_UID = gql`
  query GetUserByUid($uid: ID) {
    user(uid: $uid) {
      data {
        name
        id
      }
    }
  }
`;

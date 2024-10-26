import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($user: UserCreateInputType!) {
    createUser(user: $user) {
      id
      hasPaid
    }
  }
`;

import { gql } from '@apollo/client';

export const REGISTER_ORG = gql`
  mutation CreateMultipleOrgs($orgs: [OrgCreateInputType!]!) {
    createMultipleOrgs(orgs: $orgs) {
      id
    }
  }
`;

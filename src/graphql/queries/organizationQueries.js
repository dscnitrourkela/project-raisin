import { gql } from '@apollo/client';

export const GET_ORGANIZATION_STATS = gql`
  query GetOrganizationStats($orgType: OrgType) {
    org(orgType: $orgType) {
      name
      registrations
      studentCount
    }
  }
`;

export const GET_GENDER_DISTRIBUTION = gql`
  query GetGenderDistribution($orgId: ID) {
    user(orgID: $orgId) {
      data {
        gender
      }
    }
  }
`;

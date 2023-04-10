import * as Types from '../../../generated/graphql.js';

import { gql } from '@apollo/client';
export type UserFieldFragment = { __typename?: 'User', id: string, name?: string | null, email?: string | null, lastLogin?: any | null };

export const UserFieldFragmentDoc = gql`
    fragment UserField on User {
  id
  name
  email
  lastLogin
}
    `;
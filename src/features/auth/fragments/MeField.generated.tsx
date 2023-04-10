import * as Types from '../../../generated/graphql.js';

import { gql } from '@apollo/client';
export type MeFieldFragment = { __typename?: 'User', id: string, name?: string | null, email?: string | null };

export const MeFieldFragmentDoc = gql`
    fragment MeField on User {
  id
  name
  email
}
    `;
import * as Types from '../../../generate/ graphql';

import { gql } from '@apollo/client';
import { UserFieldFragmentDoc } from '../fragments/UserField.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, lastLogin?: any | null, status?: string | null, roles: Array<RoleInputDTO> } | null };


export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    ...UserField
  }
}
    ${UserFieldFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
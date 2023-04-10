import * as Types from '../../../generated/graphql.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateClassroomMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.CreateClassroomInput>;
}>;


export type CreateClassroomMutation = { __typename?: 'Mutation', createClassroom: { __typename?: 'Classroom', id: string, name: string } };

export type GetClassroomByPkQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetClassroomByPkQuery = { __typename?: 'Query', getClassroomByPk: { __typename?: 'Classroom', id: string, name: string, invite: string } };


export const CreateClassroomDocument = gql`
    mutation createClassroom($data: CreateClassroomInput) {
  createClassroom(data: $data) {
    id
    name
  }
}
    `;
export type CreateClassroomMutationFn = Apollo.MutationFunction<CreateClassroomMutation, CreateClassroomMutationVariables>;

/**
 * __useCreateClassroomMutation__
 *
 * To run a mutation, you first call `useCreateClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassroomMutation, { data, loading, error }] = useCreateClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClassroomMutation(baseOptions?: Apollo.MutationHookOptions<CreateClassroomMutation, CreateClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClassroomMutation, CreateClassroomMutationVariables>(CreateClassroomDocument, options);
      }
export type CreateClassroomMutationHookResult = ReturnType<typeof useCreateClassroomMutation>;
export type CreateClassroomMutationResult = Apollo.MutationResult<CreateClassroomMutation>;
export type CreateClassroomMutationOptions = Apollo.BaseMutationOptions<CreateClassroomMutation, CreateClassroomMutationVariables>;
export const GetClassroomByPkDocument = gql`
    query getClassroomByPk($id: String) {
  getClassroomByPk(id: $id) {
    id
    name
    invite
  }
}
    `;

/**
 * __useGetClassroomByPkQuery__
 *
 * To run a query within a React component, call `useGetClassroomByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassroomByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassroomByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClassroomByPkQuery(baseOptions?: Apollo.QueryHookOptions<GetClassroomByPkQuery, GetClassroomByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassroomByPkQuery, GetClassroomByPkQueryVariables>(GetClassroomByPkDocument, options);
      }
export function useGetClassroomByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassroomByPkQuery, GetClassroomByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassroomByPkQuery, GetClassroomByPkQueryVariables>(GetClassroomByPkDocument, options);
        }
export type GetClassroomByPkQueryHookResult = ReturnType<typeof useGetClassroomByPkQuery>;
export type GetClassroomByPkLazyQueryHookResult = ReturnType<typeof useGetClassroomByPkLazyQuery>;
export type GetClassroomByPkQueryResult = Apollo.QueryResult<GetClassroomByPkQuery, GetClassroomByPkQueryVariables>;
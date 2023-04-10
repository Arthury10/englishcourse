import * as Types from '../../../generated/graphql.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateOneUserMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string } };

export type UpdateOneUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  update: Types.UpdateUserInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string } };


export const CreateOneUserDocument = gql`
    mutation createOneUser($name: String!, $email: String!, $password: String!) {
  createOneUser(input: {user: {name: $name, email: $email, password: $password}}) {
    id
  }
}
    `;
export type CreateOneUserMutationFn = Apollo.MutationFunction<CreateOneUserMutation, CreateOneUserMutationVariables>;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, options);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = Apollo.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = Apollo.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($id: ID!, $update: UpdateUserInput!) {
  updateOneUser(input: {id: $id, update: $update}) {
    id
  }
}
    `;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<UpdateOneUserMutation, UpdateOneUserMutationVariables>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
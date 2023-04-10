import { ApolloError } from '@apollo/client'
import { errorMessages } from 'src/common/errors/messages'

export function handleGraphQLError(
  error: ApolloError,
): false | string | undefined {
  if (!error.graphQLErrors) return false

  if (error.graphQLErrors?.[0]) {
    const { message } = error.graphQLErrors?.[0]

    return errorMessages?.[message]
  }
}

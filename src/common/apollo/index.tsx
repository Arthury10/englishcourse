import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js'

import { getCookie } from '../helpers/cookies'

const setAuthorizationLink = setContext(async () => {
  const token = getCookie(null, 'authToken')

  if (token) {
    return {
      headers: {
        authorization: 'Bearer ' + getCookie(null, 'authToken'),
      },
    }
  }
  return {}
})

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: setAuthorizationLink.concat(uploadLink),
  ssrMode: !process.browser,
})

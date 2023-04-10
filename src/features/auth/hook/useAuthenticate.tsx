import { useCallback, useState } from 'react'

import router from 'next/router'
import {
  destroyCookie,
  getCookie,
  setCookie,
} from 'src/common/helpers/cookies'

import { MeFieldFragment } from '../fragments/MeField.generated'
import { useLoginMutation } from '../graphql/mutation.generated'
import { useMeLazyQuery } from '../graphql/query.generated'

type AuthenticateInput = {
  username: string
  password: string
}

export const useAuthenticate = () => {
  const [login, { loading: loginLoading }] = useLoginMutation()
  const [userLogged, setUserLogged] = useState<MeFieldFragment>()

  const [loadMe, { data }] = useMeLazyQuery({
    fetchPolicy: 'no-cache',
  })

  console.log('data', data)

  const tokenCookie = getCookie(null, 'authToken')

  const authenticate = async ({
    username,
    password,
  }: AuthenticateInput) => {
    try {
      const loginData = await login({
        variables: {
          data: {
            password,
            username,
          },
        },
      })
        .then((response) => {
          return response?.data?.login
        })
        .catch((error) => {
          console.log(error)
        })
      if (loginData) {
        //@ts-ignore
        setCookie(null, 'authToken', loginData?.token, {
          maxAge: 31536000,
          path: '/',
        })
        await loadMe()
        setUserLogged(data?.me)
      }
      return loginData
    } catch (error) {
      console.log(error)
    }
  }

  const logout = useCallback(async () => {
    destroyCookie(null, 'authToken')
    await router.replace('/auth/login')
  }, [])

  return {
    authenticate,
    userLogged,
    tokenCookie,
    logout,
    loginLoading,
  }
}

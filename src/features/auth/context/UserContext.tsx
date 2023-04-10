import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { handleGraphQLError } from 'src/common/errors'
import {
  destroyCookie,
  getCookie,
  setCookie,
} from 'src/common/helpers/cookies'
import { MeFieldFragment } from 'src/features/auth/fragments/MeField.generated'
import { useLoginMutation } from 'src/features/auth/graphql/mutation.generated'
import { useMeLazyQuery } from 'src/features/auth/graphql/query.generated'

type AuthenticateInput = {
  username: string
  password: string
}

export type AuthContextProps = {
  userLogged: Partial<MeFieldFragment>
  authenticate: ({
    password,
    username,
  }: AuthenticateInput) => Promise<any>
  logout: () => void
  isLoading: boolean
  loadingUserLogged: boolean
  hasToken: boolean
}

export const AuthContext = createContext<AuthContextProps>({
  userLogged: null,
  authenticate: async (variables) => variables,
  logout: () => 'OK',
  isLoading: false,
  loadingUserLogged: false,
  hasToken: false,
})

export function AuthProvider({ children }) {
  const toast = useToast()
  const [login] = useLoginMutation()
  const router = useRouter()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [loadingUserLogged, setLoadingUserLogged] =
    useState<boolean>(false)

  const [token, setToken] = useState<string>()

  const [loadMe, { data, called }] = useMeLazyQuery({
    fetchPolicy: 'no-cache',
  })

  const userLogged = data?.me
  // const isSuperAdmin = userLogged?.roles?.some(
  //   (role) => role.name === RolesEnum.SuperAdmin,
  // )

  const hasTokenCookie = getCookie(null, 'authToken')

  const authenticate = useCallback(
    async ({ username, password }: AuthenticateInput) => {
      try {
        setLoading(true)
        await login({
          variables: {
            data: {
              password,
              username,
            },
          },
        })
          .then(async ({ data: { login } }) => {
            if (login.token) {
              setCookie(null, 'authToken', login.token, {
                maxAge: 31536000,
                path: '/',
              })
              setToken(login.token)
              toast({
                title: 'Sucesso!',
                description: 'Login realizado com sucesso!',
                status: 'success',
                position: 'top-right',
                variant: 'left-accent',
                isClosable: true,
              })
              await loadMe()
              router.push('/private')
              setLoading(false)
              return data
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        setLoading(false)
        const message = handleGraphQLError(error)
        toast({
          title: 'Erro!',
          description: message,
          status: 'error',
          position: 'top-right',
          variant: 'left-accent',
        })
      }
    },
    [data, loadMe, login, router, toast],
  )

  const logout = useCallback(async () => {
    destroyCookie(null, 'authToken')
    router.replace('/auth/login')
  }, [router])

  const handleLoadingUserLogged = useCallback(async () => {
    if (
      (!userLogged || userLogged) &&
      !called &&
      (token || hasTokenCookie)
    ) {
      setLoadingUserLogged(true)
      await loadMe()
      setLoadingUserLogged(false)
    }
  }, [userLogged, called, token, hasTokenCookie, loadMe])

  useEffect(() => {
    handleLoadingUserLogged()
  }, [handleLoadingUserLogged])

  return (
    <AuthContext.Provider
      value={{
        userLogged,
        authenticate,
        logout,
        isLoading,
        loadingUserLogged,
        hasToken: getCookie(null, 'authToken') !== undefined,
        // isSuperAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useUserAuthContext() {
  return useContext(AuthContext)
}

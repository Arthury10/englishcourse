import { NextPageContext } from 'next'
import {
  destroyCookie as destroyNookie,
  parseCookies,
  setCookie as setNookie,
} from 'nookies'
import { config } from 'src/common/config/env'

export const getCookie = (ctx: any, key: string) => {
  const cookies = parseCookies(ctx)
  return cookies?.[`@${config.COOKIE_PREFIX}:${key}`]
}

export const setCookie = (
  ctx: Pick<NextPageContext, 'res'> | { res: any },
  key: string,
  value: string,
  cookieOptions: { maxAge: number; path: string },
) => {
  return setNookie(
    ctx,
    `@${config.COOKIE_PREFIX}:${key}`,
    value,
    cookieOptions,
  )
}

export function destroyCookie(ctx: any, key: string) {
  return destroyNookie(ctx, `@${config.COOKIE_PREFIX}:${key}`, {
    path: '/',
  })
}

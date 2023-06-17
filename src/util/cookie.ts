import type { Response } from 'express'
import config from './config'

export function setTokenToCookie(res: Response, token: string) {
  res.cookie('token', token, {
    httpOnly: true,
    secure: config.NODE_ENV !== 'developement',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days,
  })

  return
}

export function deleteTokenInCookie(res: Response) {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  })

  return
}
import { isDev } from '@/utils/isDev'
import Cookies from 'js-cookie'

export const CookieTokenKeys = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken'
} as const

export const getAuthToken = () => {
    return Cookies.get(CookieTokenKeys.ACCESS_TOKEN)
}

export const setAuthToken = (data: string) => {
    Cookies.set(CookieTokenKeys.ACCESS_TOKEN, 'value', {
        secure: isDev ? false : true,
        sameSite: 'strict',
        expires: 1/24
    })
}

export const deleteAuthToken = () => {
    Cookies.remove(CookieTokenKeys.ACCESS_TOKEN)
}
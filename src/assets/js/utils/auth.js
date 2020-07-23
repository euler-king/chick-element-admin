import Cookies from 'js-cookie'
import { getCookiesInClient, getCookiesInServer } from '@/assets/js/utils/nuxt'
import defaultSetting from '@/assets/js/settings'

const TokenKey = 'Admin-Token'

export function getToken(req) {
  if (defaultSetting.isSpa) {
    return Cookies.get(TokenKey)
  }
  const isClient = process.client
  const isServer = process.server
  let token = null
  // 在服务端
  if (isServer) {
    const cookies = getCookiesInServer(req)
    token = cookies.token ? cookies.token : ''
  }
  // 在客户端判读是否需要登陆
  if (isClient) {
    token = getCookiesInClient(TokenKey)
  }
  return token
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

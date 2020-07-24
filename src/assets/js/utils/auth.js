import Cookies from 'js-cookie'
import { getCookiesInClient } from '@/assets/js/utils/nuxt'
import defaultSetting from '@/assets/js/settings'

const TokenKey = 'Admin-Token'

export function getToken(app) {
  if (defaultSetting.isSpa) {
    return Cookies.get(TokenKey)
  }
  const isClient = process.client
  const isServer = process.server
  let token = null
  // 在服务端
  if (isServer && app && app.$cookies) {
    token = app.$cookies.get(TokenKey)
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

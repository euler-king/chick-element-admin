import request from '@/assets/js/utils/request'
import { apiPrefix } from '@/assets/js/settings'
export function login(data) {
  return request({
    url: apiPrefix + '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: apiPrefix + '/user/info',
    method: 'post',
    params: { token }
  })
}

export function logout() {
  return request({
    url: apiPrefix + '/user/logout',
    method: 'post'
  })
}

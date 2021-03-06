import request from '@/assets/js/utils/request'
import { apiPrefix } from '@/assets/js/settings'
export function searchUser(name) {
  return request({
    url: apiPrefix + '/search/user',
    method: 'post',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: apiPrefix + '/transaction/list',
    method: 'post',
    params: query
  })
}

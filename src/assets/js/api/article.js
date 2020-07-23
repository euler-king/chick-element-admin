import request from '@/assets/js/utils/request'
import { apiPrefix } from '@/assets/js/settings'
export function fetchList(query) {
  return request({
    url: apiPrefix + '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: apiPrefix + '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: apiPrefix + '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: apiPrefix + '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: apiPrefix + '/article/update',
    method: 'post',
    data
  })
}

import request from '@/assets/js/utils/request'
import { apiPrefix } from '@/assets/js/settings'
export function getRoutes() {
  return request({
    url: apiPrefix + '/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: apiPrefix + '/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: apiPrefix + '/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}

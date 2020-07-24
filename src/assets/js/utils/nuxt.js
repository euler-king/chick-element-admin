import Cookies from 'js-cookie'

// 获取服务端cookie
export function getCookiesInServer(req) {
  const serviceCookie = {}
  req && req.headers.cookie && req.headers.cookie.split(';').forEach(function(val) {
    const parts = val.split('=')
    serviceCookie[parts[0].trim()] = (parts[1] || '').trim()
  })
  return serviceCookie
}
// 获取客户端cookie
export function getCookiesInClient(key) {
  return Cookies.get(key) ? Cookies.get(key) : ''
}

export function getRequestPath(req, route) {
  const isClient = process.client
  const isServer = process.server
  let path = null
  // 在服务端
  if (isServer) {
    path = req.originalUrl
    if (path.indexOf('?') !== -1) {
      path = path.substring(0, path.indexOf('?'))
    }
  }
  // 在客户端判读是否需要登陆
  if (isClient) {
    path = route.path
  }
  return path
}

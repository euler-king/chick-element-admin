import { Message } from 'element-ui'
import router, { addRoutes } from '@/assets/js/router/nuxt'

import { getToken } from '@/assets/js/utils/auth' // get token from cookie
import { getRequestPath } from '@/assets/js/utils/nuxt' // get token from cookie
import { homePage, loginPage, apiPrefix } from '@/assets/js/settings'

const whiteList = [loginPage, '/auth-redirect'] // no redirect whitelist

export default function({ store, route, req, res, redirect }) {
  const path = getRequestPath(req, route)
  if (path.indexOf(apiPrefix) !== -1) {
    return
  }
  const token = getToken(req)
  console.log('token', token)
  console.log('path', path)
  if (token) {
    if (path === loginPage) {
      // if is logged in, redirect to the home page
      redirect({ path: homePage })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (!hasRoles) {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          store.dispatch('user/getInfo').then(res => {
            const { roles } = res

            // generate accessible routes map based on roles
            store.dispatch('permission/generateRoutes', roles).then(accessRoutes => {
              addRoutes(router, accessRoutes)
            })
          })
        } catch (error) {
          // remove token and go to login page to re-login
          store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          redirect(`/login?redirect=${path}`)
        }
      }
    }
  } else {
    /* has no token */
    if (!whiteList.includes(path)) {
      // other pages that do not have permission to access are redirected to the login page.
      redirect(loginPage + `?redirect=${path}`)
    }
  }
}

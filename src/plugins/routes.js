import { Message } from 'element-ui'
import router, { addRoutes } from '@/assets/js/router/nuxt'

import { getToken } from '@/assets/js/utils/auth' // get token from cookie
import { getRequestPath } from '@/assets/js/utils/nuxt' // get token from cookie
import { homePage, loginPage, apiPrefix } from '@/assets/js/settings'

const whiteList = [loginPage, '/auth-redirect'] // no redirect whitelist

export default ({ app, store, req }) => {
  app.router.beforeEach((route, from, next) => {
    const path = getRequestPath(req, route)
    if (path.indexOf(apiPrefix) !== -1) {
      next()
      return
    }
    const token = getToken(app)
    console.log('token', token)
    console.log('path', path)
    if (token) {
      app.store.dispatch('user/setToken', token)
      if (path === loginPage) {
        // if is logged in, redirect to the home page
        next({ path: homePage })
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        const hasRoles = app.store.getters.roles && app.store.getters.roles.length > 0
        if (!hasRoles) {
          try {
            // get user info
            // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
            app.store.dispatch('user/getInfo').then(res => {
              const { roles } = res
              // generate accessible routes map based on roles
              app.store.dispatch('permission/generateRoutes', roles).then(accessRoutes => {
                addRoutes(router, accessRoutes)
              })
            })

            next()
          } catch (error) {
            // remove token and go to login page to re-login
            app.store.dispatch('user/resetToken')
            Message.error(error || 'Has Error')
            next(loginPage + `/?redirect=${path}`)
          }
        }
        next()
      }
    } else {
      /* has no token */
      if (!whiteList.includes(path)) {
        // other pages that do not have permission to access are redirected to the login page.
        next(loginPage + `?redirect=${path}`)
      } else {
        next()
      }
    }
  })
}

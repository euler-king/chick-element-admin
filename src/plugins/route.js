import { getToken } from '@/assets/js/utils/auth' // get token from cookie
export default ({ app, store }) => {
  app.router.beforeEach((route, from, next) => {
    const token = getToken(app)
    console.log('token', token)
    if (token) {
      app.store.dispatch('user/setToken', token)
    }
    next()
  })
}


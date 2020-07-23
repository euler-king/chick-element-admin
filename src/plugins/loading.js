import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/assets/js/utils/get-page-title'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false }) // NProgress Configuration

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    NProgress.start()

    document.title = getPageTitle(to.meta.title)

    next()
  })

  app.router.afterEach(() => {
    NProgress.done()
  })
}

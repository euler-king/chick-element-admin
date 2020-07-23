import { mockMiddleware } from './src/assets/js/mock'
const envPrefix = process.env.BIZ_NODE_ENV + '.'

function transProcess (key) {
  let value = process.env[key]
  if (process.env[envPrefix + key]) {
    value = process.env[envPrefix + key]
  }
  return value
}
const baseUrl = transProcess('BIZ_BASE_URL')
const title = transProcess('title')
const showSettings = transProcess('showSettings') === 'true'
const tagsView = transProcess('tagsView') === 'true'
const fixedHeader = transProcess('fixedHeader') === 'true'
const sidebarLogo = transProcess('sidebarLogo') === 'true'
const errorLog = transProcess('errorLog')
const homePage = transProcess('homePage')
const mode = transProcess('mode')
export default {
  srcDir: 'src/',
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  env: {
    NODE_ENV: process.env.NODE_ENV,
    BIZ_NODE_ENV: process.env.BIZ_NODE_ENV,
    baseUrl,
    title,
    showSettings,
    tagsView,
    fixedHeader,
    sidebarLogo,
    errorLog,
    homePage,
    mode
  },

  vender: [
    'element-ui', 'axios'
  ],
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware: [mockMiddleware()],

  router: {
    middleware: ['permission']
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/filters' },
    { src: '~plugins/icons' },
    { src: '~plugins/error-log' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}

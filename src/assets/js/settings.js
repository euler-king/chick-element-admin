module.exports = {
  title: process.env.title,

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: process.env.showSettings,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: process.env.tagsView,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: process.env.fixedHeader,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: process.env.sidebarLogo,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: process.env.errorLog,

  mode: process.env.mode,

  homePage: process.env.homePage
}

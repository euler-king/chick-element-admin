module.exports = {
  extends: [
    'stylelint-config-standard', 'stylelint-config-recess-order'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // at-rule-no-unknown: 屏蔽一些scss等语法检查
    'at-rule-no-unknown': [true, { 'ignoreAtRules': [
      'mixin', 'extend', 'content'
    ] }]
  }
}

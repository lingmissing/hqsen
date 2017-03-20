'use strict'

module.exports = {
  port: '4000',
  title: 'vue',
  vendor: [
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-salad')({
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    })
  ],
  cssModules: false
}

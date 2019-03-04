import Vue from 'vue'
import App from './app.vue'

import MenuSidebar from './menu-sidebar/index.js'

Vue.use(MenuSidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

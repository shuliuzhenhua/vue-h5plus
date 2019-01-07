import Vue from 'vue'
import App from './Index.vue'
import store from './store'
import '../../utils/common'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

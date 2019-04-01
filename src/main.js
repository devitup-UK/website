import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import metaData from './helpers/metadata.helper'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

metaData.updateMetaTags(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

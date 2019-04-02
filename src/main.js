import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCode, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import metaData from './helpers/metadata.helper'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

library.add(faClock, faCode, faPhone)
metaData.updateMetaTags(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

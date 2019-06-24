import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCode, faPhone, faLaptopCode, faMobileAlt, faPaintBrush, faMapMarkerAlt, faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { Icon } from 'leaflet'

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

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

library.add(faClock, faCode, faPhone, faFacebook, faTwitter, faInstagram, faPinterest, faLaptopCode, faMobileAlt, faPaintBrush, faMapMarkerAlt, faEnvelope, faShareAlt)
metaData.updateMetaTags(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

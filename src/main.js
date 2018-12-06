// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  //Compatibilité avec les anciens navigateurs
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import IdleVue from 'idle-vue' // Vérifier si l'utilisateur est active sinon le déconnecter après l'idleTime défini
import moment from 'moment' //Pour changer la forme des dates
import md5 from 'md5' //Crypter le password en Md5 
import VeeValidate from 'vee-validate';
import fr from 'vee-validate/dist/locale/fr';
import VuePaginate from 'vue-paginate' //Utiliser pour la pagination 
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'
import axios from 'axios'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import * as VueGoogleMaps from 'vue2-google-maps'
// Sync store with router
sync(store, router)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'votre-api-key'
  },
})
Vue.use(md5) //Hash
Vue.use(VuePaginate)
Vue.use(axios)
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    fr
  }
})

const eventsHub = new Vue()
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 240000
})

Vue.prototype.moment = moment
axios.defaults.baseURL = 'http://localhost:8080/offreeduwar/api/';
Vue.prototype.$http = axios;
window.axios = require('axios');
/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  onIdle() {
    if(store.getters.isLoggedIn){
    store.dispatch("logout").then(() => {
      this.$router.push("/login");
    });
  }else
  console.log("il y a aucun utilisateur connecté")
},
  render: h => h(App)
}).$mount('#app')

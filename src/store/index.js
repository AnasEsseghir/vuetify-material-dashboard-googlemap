/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

// Store functionality
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8080/offreeduwar/api/';

// Create a new store
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  actions,
  getters,
  modules,
  mutations,
  state
})

export default store

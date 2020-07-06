import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    
  },
  getters: {
    
  },
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
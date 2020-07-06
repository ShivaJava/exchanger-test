import Vue from 'vue'
import axios from './axios'

export default function(app) {
  let inject = (name, plugin) => {
    let key = `$${name}`
    app[key] = plugin
    app.store[key] = plugin

    Vue.use(() => {
      if (Vue.prototype.hasOwnProperty(key)) {
        return
      }
      Object.defineProperty(Vue.prototype, key, {
        get() {
          return this.$root.$options[key]
        }
      })
    })
  }
  axios(app, inject)
}
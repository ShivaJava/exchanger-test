import axios from 'axios'

export default function(app, inject) {
  let requestes = ['get', 'post', 'patch', 'delete', 'put']
  axios.$wrappers = {}
  axios.defaults.baseURL = process.env.VUE_APP_API_URL

  requestes.forEach(name => {
    axios.$wrappers[name] = (url, options) => {
      return axios[name](`${axios.defaults.baseURL}${url}`, options)
    }
  })
  axios.defaults.timeout = 60 * 1000
  inject('axios', axios)
}
const status = {
    listen: 'listen',
    request: 'request',
    success: 'success',
    error: 'error'
  }
  
  const _request = '_request'
  const _success = '_success'
  const _error = '_error'

  const GET_API_DATA = 'GET_API_DATA'

  const GET_STATUS = `GET_STATUS`
  const GET_REQUEST = `GET_REQUEST`
  const GET_ERROR = `GET_ERROR`
  
  const namespaced = true
  
  const state = {
    status: status.listen,
    request: false,
    error: null,
    data: null
  }
  
  const mutations = {
    [_request](state) {
      state.status = status.request
      state.request = true
    },
    [_success](state) {
      state.status = status.success
      state.request = false
    },
    [_error](state, error) {
      state.status = status.error
      state.error = error
    }
  }
  
  const actions = {
    async [GET_API_DATA]({commit}) {
        commit(_request)
        await this.$axios.$wrappers
        .get(`/get_all_currencies?api_key=${process.env.VUE_APP_API_KEY}`)
        .then((result) => {
            console.log(result)
        })
    }
  }
  
  const getters = {
    [GET_STATUS]: state => state.status,
    [GET_REQUEST]: state => state.request,
    [GET_ERROR]: state => state.error,
  }
  
  export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
  }
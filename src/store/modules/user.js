import localStorage from 'yan-utils/lib/localStorage'
const {
  user_id,
  user_token,
  user_name,
  create_date
} = localStorage.get('user_info') || {}

const state = () => ({
  user_name,
  user_id,
  user_token,
  create_date
})

const mutations = {
  SET_USER_INFO: (state, value) => {
    Object.entries(value).forEach(([key, val]) => {
      state[key] = val
    })
    localStorage.set('user_info', value)
  },
  CLEAR_USER_INFO: (state) => {
    Object.keys(state).forEach(key => {
      state[key] = ''
    })
    window.localStorage.removeItem('user_info')
    window.location.reload()
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
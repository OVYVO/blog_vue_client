const state = () => ({
  user_name: '',
  user_id: '',
  user_token: '',
  create_date: ''
})

const mutations = {
  SET_USER_INFO: (state, value) => {
    Object.entries(value).forEach(([key, val]) => {
      state[key] = val
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
// https://vuex.vuejs.org/en/getters.html

export default {
  isLoggedIn: function(state) {
    return state.isLoggedIn
    },
  authStatus: state => state.status,
  user: (state) => {
    return state.user
  }	
}

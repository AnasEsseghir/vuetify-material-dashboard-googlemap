
export default {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, payload){
    state.status = 'success'
    state.token = payload.token
  state.user = payload.user
  state.isLoggedIn = true;
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
  state.user = ''
  state.isLoggedIn = false;
  }
}

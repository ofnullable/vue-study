import { authRequest, getUser } from '../api/user';
import { setAuthHeader } from '../common/axios';
import { getToken, removeToken, setToken } from '../common/auth';

export const SIGN_IN = 'SIGN_IN';

const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const CHECK_AUTH = 'CHECK_AUTH';

const PURGE_AUTH = 'PURGE_AUTH';

const state = {
  data: {},
  isAuthenticated: false,
  error: {},
};

const getters = {
  currentUser(state) {
    return state.data;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  signInError(state) {
    return state.error;
  },
};

const actions = {
  [SIGN_IN]({ commit }, { username, password }) {
    commit(SIGN_IN_REQUEST);
    return authRequest({ username, password })
        .then(data => commit(SIGN_IN_SUCCESS, data))
        .catch(error => commit(SIGN_IN_FAILURE, error));
  },
  [CHECK_AUTH]({ commit }) {
    const token = getToken();
    if (token) {
      setAuthHeader(token);
      return getUser()
          .then(data => commit(SIGN_IN_SUCCESS, { data, token }))
          .catch(error => commit(SIGN_IN_FAILURE, error));
    } else {
      commit(PURGE_AUTH);
    }
  },
};

const mutations = {
  [SIGN_IN_REQUEST](state) {
    state.error = {};
    state.isAuthenticated = false;
  },
  [SIGN_IN_SUCCESS](state, { data, token }) {
    state.data = data;
    state.isAuthenticated = true;
    setToken(token);
  },
  [SIGN_IN_FAILURE](state, e) {
    const status = e.response?.status;
    const response = e.response?.data;
    state.error = { status, response };
  },
  [PURGE_AUTH](state, error) {
    state.data = {};
    state.error = error;
    state.isAuthenticated = false;
    removeToken();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
import { authRequest, getUser } from '../api/user';
import { setAuthHeader } from '../common/axios';
import { getToken, setToken, removeToken } from '../common/auth';

export const SIGN_IN = 'SIGN_IN';

const AUTH_REQUEST = 'AUTH_REQUEST';
const SET_AUTH = 'SET_AUTH';
const SET_ERROR = 'SET_ERROR';
const PURGE_AUTH = 'PURGE_AUTH';

export const CHECK_AUTH = 'CHECK_AUTH';


const state = {
  data: {},
  isAuthenticated: false,
  error: {},
};

const getters = {
  currentUser(state) {
    return state.user.data;
  },
  isAuthenticated(state) {
    return state.user.isAuthenticated;
  },
};

const actions = {
  [SIGN_IN]({ commit }, { username, password }) {
    commit(AUTH_REQUEST);
    return authRequest({ username, password })
        .then(data => {
          commit(SET_AUTH, data);
        })
        .catch(error => {
          commit(PURGE_AUTH, error);
        });
  },
  [CHECK_AUTH]({ commit }) {
    const token = getToken();
    if (token) {
      setAuthHeader(token);
      return getUser()
          .then(data => {
            commit(SET_AUTH, { data, token });
          })
          .catch(error => {
            commit(SET_ERROR, error);
          });
    } else {
      commit(PURGE_AUTH);
    }
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [AUTH_REQUEST](state) {
    state.error = {};
    state.isAuthenticated = false;
  },
  [SET_AUTH](state, { data, token }) {
    state.data = data;
    state.isAuthenticated = true;
    setToken(token);
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
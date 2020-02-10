import { getPrograms } from '../api/programs';

export const GET_PROGRAMS = 'GET_PROGRAMS';

const GET_PROGRAMS_REQUEST = 'GET_PROGRAMS_REQUEST';
const GET_PROGRAMS_SUCCESS = 'GET_PROGRAMS_SUCCESS';
const GET_PROGRAMS_FAILURE = 'GET_PROGRAMS_FAILURE';

const state = {
  programs: {
    data: [],
    count: 0,
    lastId: 0,
    isLoading: false,
    error: {},
  },
};

const getters = {
  programs(state) {
    return state.programs.data;
  },
  programsCount(state) {
    return state.programs.count;
  },
  isLoading(state) {
    return state.programs.isLoading;
  },
  error(state) {
    return state.programs.error;
  },
};

const actions = {
  [GET_PROGRAMS]({ commit }, lastId) {
    commit(GET_PROGRAMS_REQUEST);
    return getPrograms(lastId)
        .then((data) => {
          commit(GET_PROGRAMS_SUCCESS, data);
        })
        .catch(error => {
          commit(GET_PROGRAMS_FAILURE, error);
        });
  },
};

const mutations = {
  [GET_PROGRAMS_REQUEST](store, lastId) {
    const programs = store.programs;
    if (lastId === 0) {
      programs.data = [];
    }
    programs.count = 0;
    programs.error = {};
    programs.isLoading = true;
    programs.lastId = lastId;
  },
  [GET_PROGRAMS_SUCCESS](store, { data, count }) {
    const programs = store.programs;
    programs.data = data;
    programs.count = count;
    programs.isLoading = false;
  },
  [GET_PROGRAMS_FAILURE](store, error) {
    const programs = store.programs;
    programs.data = [];
    programs.error = error;
    programs.isLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const NO_WINNER = 'NO_WINNER';
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

export default new Vuex.Store({
  state: {
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
    winner: '',
    turn: 'O',
  }, // vue의 data property
  getters: {
    turnMessage(state) {
      return `${state.turn}님의 턴입니다.`;
    },
  }, // vue의 computed
  mutations: {
    [NO_WINNER](state) {
      state.winner = '';
    },
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    [RESET_GAME](state) {
      (state.turn = 'O'), (state.tableData = [['', '', ''], ['', '', ''], ['', '', '']]);
    },
  }, // state를 동기적으로 수정할 때 사용
  actions: {}, // state를 비동기적으로 수정할 때 또는 여러 mutaion을 연달아 실행할 때 사용
});

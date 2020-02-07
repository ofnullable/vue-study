import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  MINE: -7,
  OPENED: 0,
};

const checkSurroundingMines = (data, row, cell) => {
  const temp = [];

  if (data[row - 1]) {
    temp.push(data[row - 1][cell - 1], data[row - 1][cell], data[row - 1][cell + 1]);
  }
  temp.push(data[row][cell - 1], data[row][cell + 1]);
  if (data[row + 1]) {
    temp.push(data[row + 1][cell - 1], data[row + 1][cell], data[row + 1][cell + 1]);
  }

  return temp.filter(v => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
};

const getNearCells = (row, cell, rowLength) => {
  const temp = [];

  if (row - 1 > -1) {
    temp.push([row - 1, cell - 1], [row - 1, cell], [row - 1, cell + 1]);
  }
  temp.push([row, cell - 1], [row, cell + 1]);
  if (row + 1 < rowLength) {
    temp.push([row + 1, cell - 1], [row + 1, cell], [row + 1, cell + 1]);
  }

  return temp;
};

const plantMine = (row, cell, mine) => {
  const candidate = Array(row * cell).fill().map((_, i) => i);
  const shuffle = [];

  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }

  const data = [];

  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let i = 0; i < shuffle.length; i++) {
    const ver = Math.floor(shuffle[i] / cell);
    const hor = shuffle[i] % cell;
    data[ver][hor] = CODE.MINE;
  }

  return data;
};

export default new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    result: '',
    halted: true,
    openedCell: 0,
  },
  getters: {},
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      state.data = { row, cell, mine };
      state.tableData = plantMine(row, cell, mine);
      state.timer = 0;
      state.halted = false;
      state.result = '';
    },
    [OPEN_CELL](state, { row, cell }) {
      let openedCell = 0;
      const checkedCell = [];
      const data = state.tableData;

      function recursiveOpenCell(row, cell) {
        const isUndefinedRowOrCell = row < 0 || row >= data.length || cell < 0 || cell >= data[0].length;

        if (isUndefinedRowOrCell) {
          return;
        }

        if (data[row][cell] !== CODE.NORMAL) {
          return;
        }

        if (checkedCell.includes(`${row}/${cell}`)) {
          return;
        } else {
          checkedCell.push(`${row}/${cell}`);
        }

        const mineCount = checkSurroundingMines(data, row, cell);

        const near = [];
        if (mineCount === 0 && row > -1) {
          near.push(...getNearCells(row, cell, data.length));

          near.forEach(d => {
            if (data[d[0]][d[1]] !== CODE.OPENED) {
              recursiveOpenCell(d[0], d[1]);
            }
          });
        }

        if (data[row][cell] === CODE.NORMAL) {
          openedCell += 1;
        }

        Vue.set(data[row], cell, mineCount);
      }

      recursiveOpenCell(row, cell);

      state.openedCell += openedCell;
      if (state.data.row * state.data.cell - state.data.mine === state.openedCell) {
        state.halted = true;
        state.result = `${state.timer}초만에 성공했습니다!`;
      }
    },
    [CLICK_MINE](state, { row, cell }) {
      state.halted = true;
      state.result = `실패...`;
      Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE);
    },
    [FLAG_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.MINE) {
        Vue.set(state.tableData[row], cell, CODE.FLAG_MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.FLAG);
      }
    },
    [QUESTION_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.FLAG_MINE) {
        Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.QUESTION);
      }
    },
    [NORMALIZE_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.QUESTION_MINE) {
        Vue.set(state.tableData[row], cell, CODE.MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.NORMAL);
      }
    },
    [INCREMENT_TIMER](state) {
      state.timer += 1;
    },
  },
  actions: {},
});
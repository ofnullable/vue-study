<template>
  <td @click="handleClick">{{ cellData }}</td>
</template>

<script>
  import { mapState } from 'vuex';
  import {
    CLICK_CELL,
    SET_WINNER,
    RESET_GAME,
    NO_WINNER,
    CHANGE_TURN,
  } from './store';
  export default {
    props: {
      cellIndex: Number,
      rowIndex: Number,
    },
    computed: {
      ...mapState({
        tableData: state => state.tableData,
        turn: state => state.turn,
        cellData(state) {
          return state.tableData[this.rowIndex][this.cellIndex];
        },
      }),
      // cellData() {
      //   return this.$store.state.tableData[this.rowIndex][this.cellIndex];
      // },
      // tableData() {
      //   return this.$store.state.tableData;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
    },
    methods: {
      handleClick() {
        const { rowIndex, cellIndex } = this;

        if (this.tableData[rowIndex][cellIndex]) {
          return;
        }

        this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex });

        let win = false;
        if (
          this.tableData[rowIndex][0] === this.turn &&
          this.tableData[rowIndex][1] === this.turn &&
          this.tableData[rowIndex][2] === this.turn
        ) {
          win = true;
        } else if (
          this.tableData[0][cellIndex] === this.turn &&
          this.tableData[1][cellIndex] === this.turn &&
          this.tableData[2][cellIndex] === this.turn
        ) {
          win = true;
        } else if (
          this.tableData[0][0] === this.turn &&
          this.tableData[1][1] === this.turn &&
          this.tableData[2][2] === this.turn
        ) {
          win = true;
        } else if (
          this.tableData[0][2] === this.turn &&
          this.tableData[1][1] === this.turn &&
          this.tableData[2][0] === this.turn
        ) {
          win = true;
        }

        if (win) {
          this.$store.commit(SET_WINNER, this.turn);
          this.$store.commit(RESET_GAME);
        } else {
          let all = true;

          this.tableData.forEach(row => {
            row.forEach(cell => {
              if (!cell) {
                all = false;
              }
            });
          });

          if (all) {
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
          } else {
            this.$store.commit(CHANGE_TURN);
          }
        }
      },
    },
  };
</script>

<style>
</style>

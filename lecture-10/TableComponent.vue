<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
          :style="cellStyle(cellData)"
          @click="handleTdClick(rowIndex, cellIndex)"
          @contextmenu.prevent="handleTdRightClick(rowIndex, cellIndex)"
      >
        {{ cellText(cellData) }}
      </td>
    </tr>
  </table>
</template>

<script>
  import { mapState } from 'vuex';
  import { CLICK_MINE, CODE, FLAG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL } from './store';

  export default {
    computed: {
      ...mapState(['tableData', 'halted']),
      cellStyle: _ => (cellData) => {
        switch (cellData) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: 'dimgray',
            };
          case CODE.CLICKED_MINE:
          case CODE.OPENED:
            return {
              background: '#f1f1f1',
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: 'pink',
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: 'limegreen',
            };
        }
      },
      cellText: _ => (cellData) => {
        switch (cellData) {
          case CODE.NORMAL:
            return '';
          case CODE.MINE:
            return 'X';
          case CODE.CLICKED_MINE:
            return '펑!';
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return '!';
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return '?';
          default:
            return cellData || '';
        }
      },
    },
    methods: {
      handleTdClick(row, cell) {
        if (this.halted) return;

        switch (this.tableData[row][cell]) {
          case CODE.MINE:
            return this.$store.commit(CLICK_MINE, { row, cell });
          case CODE.NORMAL:
            return this.$store.commit(OPEN_CELL, { row, cell });
          default:
            return;
        }
      },
      handleTdRightClick(row, cell) {
        if (this.halted) return;
        switch (this.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            this.$store.commit(FLAG_CELL, { row, cell });
            return;
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            this.$store.commit(QUESTION_CELL, { row, cell });
            return;
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            this.$store.commit(NORMALIZE_CELL, { row, cell });
        }
      },
    },
  };
</script>

<style scoped>

</style>
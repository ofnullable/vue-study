<template>
  <div>
    <div>{{ turnMessage }}</div>
    <table-component>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td
          @click="handleTdClick(rowIndex, cellIndex)"
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
        >
          {{ cellData }}
        </td>
      </tr>
    </table-component>

    <div v-if="winner">{{ winner }}님의 승리!</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  import store, {
    CLICK_CELL,
    SET_WINNER,
    RESET_GAME,
    NO_WINNER,
    CHANGE_TURN,
  } from './store';
  import TableComponent from './TableComponent';

  export default {
    store,
    components: {
      TableComponent,
    },
    computed: {
      ...mapState(['tableData', 'turn', 'winner']),
      ...mapGetters(['turnMessage']),
    },
    methods: {
      handleTdClick(row, cell) {
        if (this.tableData[row][cell]) return;

        this.$store.commit(CLICK_CELL, { row, cell });

        let win = false;
        if (
          this.tableData[row][0] === this.turn &&
          this.tableData[row][1] === this.turn &&
          this.tableData[row][2] === this.turn
        ) {
          win = true;
        } else if (
          this.tableData[0][cell] === this.turn &&
          this.tableData[1][cell] === this.turn &&
          this.tableData[2][cell] === this.turn
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
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid limegreen;
    width: 100px;
    height: 100px;
    text-align: center;
  }
</style>

<template>
  <div>
    <div>{{ turn }} 님의 턴입니다.</div>
    <table-component :table-data="tableData" />
    <div v-if="winner">{{ winner }}님의 승리!</div>
  </div>
</template>

<script>
  import TableComponent from './TableComponent';
  import EventBus from './EventBus';

  export default {
    components: {
      TableComponent,
    },
    data() {
      return {
        winner: '',
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        turn: 'O',
      };
    },
    methods: {
      handleTdClick(rowIndex, cellIndex) {
        if (this.tableData[rowIndex][cellIndex]) {
          return;
        }

        this.$set(this.tableData[rowIndex], cellIndex, this.turn);

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
          this.winner = this.turn;
          this.turn = 'O';
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
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
            this.winner = '';
            this.turn = 'O';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            this.turn = this.turn === 'O' ? 'X' : 'O';
          }
        }
      },
    },
    created() {
      EventBus.$on('onTdClick', this.handleTdClick);
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

<template>
  <td @click="handleClick">{{ cellData }}</td>
</template>

<script>
  export default {
    props: {
      cellData: String,
      cellIndex: Number,
      rowIndex: Number,
    },
    methods: {
      handleClick() {
        console.log(this.$root.$data);
        console.log(this.$parent.$data);

        const data = this.$root.$data;
        const { rowIndex, cellIndex } = this;

        if (data.tableData[rowIndex][cellIndex]) {
          return;
        }
        this.$set(data.tableData[rowIndex], cellIndex, data.turn);

        let win = false;
        if (
          data.tableData[rowIndex][0] === data.turn &&
          data.tableData[rowIndex][1] === data.turn &&
          data.tableData[rowIndex][2] === data.turn
        ) {
          win = true;
        } else if (
          data.tableData[0][cellIndex] === data.turn &&
          data.tableData[1][cellIndex] === data.turn &&
          data.tableData[2][cellIndex] === data.turn
        ) {
          win = true;
        } else if (
          data.tableData[0][0] === data.turn &&
          data.tableData[1][1] === data.turn &&
          data.tableData[2][2] === data.turn
        ) {
          win = true;
        } else if (
          data.tableData[0][2] === data.turn &&
          data.tableData[1][1] === data.turn &&
          data.tableData[2][0] === data.turn
        ) {
          win = true;
        }

        if (win) {
          data.winner = data.turn;
          data.turn = 'O';
          data.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        } else {
          let all = true;

          data.tableData.forEach(row => {
            row.forEach(cell => {
              if (!cell) {
                all = false;
              }
            });
          });

          if (all) {
            data.winner = '';
            data.turn = 'O';
            data.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            data.turn = data.turn === 'O' ? 'X' : 'O';
          }
        }
      },
    },
  };
</script>

<style>
</style>

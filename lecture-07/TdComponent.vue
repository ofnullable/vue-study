<template>
  <td @click="handleTdClick">{{ cellData }}</td>
</template>

<script>
  export default {
    props: {
      rowIndex: Number,
      cellData: String,
      cellIndex: Number,
    },
    methods: {
      handleTdClick() {
        if (this.cellData) return;

        // 아래 방식은 데이터는 변경되지만 화면에는 반영되지 않는다.
        // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
        const rootData = this.$root.$data;

        // Vue.set(배열, 인덱스, 변경할 값); 을 사용해라!
        this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);

        let win = false;

        if (
            rootData.tableData[this.rowIndex][0] === rootData.turn &&
            rootData.tableData[this.rowIndex][1] === rootData.turn &&
            rootData.tableData[this.rowIndex][2] === rootData.turn
        ) {
          win = true;
        } else if (
            rootData.tableData[0][this.cellIndex] === rootData.turn &&
            rootData.tableData[1][this.cellIndex] === rootData.turn &&
            rootData.tableData[2][this.cellIndex] === rootData.turn
        ) {
          win = true;
        } else if (
            rootData.tableData[0][0] === rootData.turn &&
            rootData.tableData[1][1] === rootData.turn &&
            rootData.tableData[2][2] === rootData.turn
        ) {
          win = true;
        } else if (
            rootData.tableData[0][2] === rootData.turn &&
            rootData.tableData[1][1] === rootData.turn &&
            rootData.tableData[2][0] === rootData.turn
        ) {
          win = true;
        }

        if (win) {
          rootData.winner = rootData.turn;
          rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          rootData.turn = 'O';
        } else {
          let all = true;

          rootData.tableData.forEach(row => {
            row.forEach(cell => {
              if (!cell) all = false;
            });
          });

          if (all) {
            rootData.turn = 'O';
            rootData.winner = '';
            rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
          }
        }
      },
    },
  };
</script>

<style scoped>

</style>
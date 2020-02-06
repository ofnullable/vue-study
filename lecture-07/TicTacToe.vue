<template>
  <div>
    <p>{{ turn }}님의 턴입니다.</p>
    <table-component :table-data="tableData"></table-component>
    <p v-if="winner">{{ winner }}님의 승리!</p>
  </div>
</template>

<script>
  import TableComponent from './TableComponent';

  export default {
    components: {
      TableComponent,
    },
    data() {
      return {
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: 'O',
        winner: '',
      };
    },
    methods: {},
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }

  td {
    cursor: pointer;
    border: 1px solid dimgray;
    width: 50px;
    height: 50px;
    text-align: center;
  }
</style>
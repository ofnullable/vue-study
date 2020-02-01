<template>
  <div>
    <div>{{ turn }} 님의 턴입니다.</div>
    <table-component :table-data="tableData" />
    <div v-if="winner">{{ winner }}님의 승리!</div>
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
        winner: '',
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        turn: 'O',
      };
    },
    computed: {},
    methods: {
      changeData() {
        this.$set(this.tableData[1], 0, 'X');
      },
    },
    mounted() {
      console.log('mounted');
    },
    beforeDestroy() {
      console.log('before destroy');
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

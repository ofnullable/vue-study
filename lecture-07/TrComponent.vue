<template>
  <tr>
    <td-component
        v-for="(cellData, index) in rowData"
        :key="index"
        :cell-data="cellData"
        :row-index="rowIndex"
        :cell-index="index"
    />
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    props: {
      rowData: Array,
      rowIndex: Number,
    },
    components: {
      TdComponent,
    },
    data() {
      return {
        parent: '내가 니 애비다.'
      };
    },
    methods: {},
  };
</script>

<style scoped>

</style>
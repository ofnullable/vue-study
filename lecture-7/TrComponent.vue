<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :row-index="rowIndex"
      :cell-data="cellData"
      :cell-index="index"
      :key="index"
    />
  </tr>
</template>

<script>
  import TdComponent from './TdComponent';

  export default {
    components: {
      TdComponent,
    },
    data() {
      return {
        parent: '!',
      };
    },
    props: {
      rowData: Array,
      rowIndex: Number,
    },
  };
</script>

<style>
</style>

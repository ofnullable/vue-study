<template>
  <td @click="handleTdClick">{{ cellData }}</td>
</template>

<script>
  import EventBus from './EventBus';

  export default {
    props: {
      cellData: String,
      cellIndex: Number,
      rowIndex: Number,
    },
    methods: {
      handleTdClick() {
        if (this.cellData) return;

        EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
      },
    },
  };
</script>

<style>
</style>

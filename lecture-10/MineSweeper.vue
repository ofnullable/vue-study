<template>
  <div>
    <mine-form/>
    <div>{{timer}}</div>
    <table-component/>
    <div>{{result}}</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import store, { INCREMENT_TIMER } from './store';
  import MineForm from './MineForm';
  import TableComponent from './TableComponent';

  let interval = null;

  export default {
    store,
    components: {
      MineForm,
      TableComponent,
    },
    computed: {
      ...mapState(['timer', 'result', 'halted']),
    },
    methods: {},
    watch: {
      halted(value, _) {
        if (!value) {
          interval = setInterval(() => {
            this.$store.commit(INCREMENT_TIMER);
          }, 1000);
        } else {
          clearInterval(interval);
        }
      },
    },
    beforeDestroy() {
      clearInterval(interval);
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }

  td {
    cursor: pointer;
    border: 1px solid lightgray;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
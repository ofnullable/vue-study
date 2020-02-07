<template>
  <div>
    <input type="number" placeholder="세로" v-model="row">
    <input type="number" placeholder="가로" v-model="cell">
    <input type="number" placeholder="지뢰" v-model="mine">
    <button @click="handleStart">시작!</button>
  </div>
</template>

<script>
  import { START_GAME } from './store';
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        row: '10',
        cell: '10',
        mine: '10',
      };
    },
    computed: {
      ...mapState(['timer', 'interval']),
    },
    methods: {
      handleStart() {
        const { row, cell, mine } = this;
        this.$store.commit(START_GAME, { row, cell, mine });
      },
    },
  };
</script>

<style scoped>

</style>
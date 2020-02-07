<template>
  <div v-if="currentGame === 'number-baseball'">
    <number-base-ball/>
  </div>
  <div v-else-if="currentGame === 'response-check'">
    <response-check/>
  </div>
  <div v-else-if="currentGame === 'rock-scissors-paper'">
    <rock-scissors-paper/>
  </div>
  <div v-else-if="currentGame === 'lotto-generator'">
    <lotto-generator/>
  </div>
  <div v-else>
    일치하는 게임이 존재하지 않습니다.
  </div>
</template>

<script>
  import NumberBaseBall from '../lecture-03/NumberBaseBall';
  import ResponseCheck from '../lecture-04/ResponseCheck';
  import RockScissorsPaper from '../lecture-05/RockScissorsPaper';
  import LottoGenerator from '../lecture-06/LottoGenerator';

  export default {
    components: {
      NumberBaseBall,
      ResponseCheck,
      RockScissorsPaper,
      LottoGenerator,
    },
    mounted() {
      console.log(this.$route);
      console.log(this.$router);
    },
    computed: {
      currentGame() {
        return this.$route.params.name;
      },
    },
  };
</script>

<style scoped>

</style>
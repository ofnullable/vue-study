<template>
  <v-row v-if="programs.length">
    <ProgramCard v-for="program in programs" :key="program.id" :data="program"/>
  </v-row>
  <v-row v-else>
    <v-col v-for="(_, index) in Array(12)" :key="index" cols="12" sm="6" md="4" lg="3">
      <SkeletonSheet type="article, actions"/>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { GET_PROGRAMS } from '../store/home';
  import ProgramCard from '../components/program/ProgramCard';
  import SkeletonSheet from '../components/common/SkeletonSheet';

  export default {
    name: 'home',
    components: {
      ProgramCard,
      SkeletonSheet,
    },
    computed: {
      ...mapGetters(['programs']),
    },
    mounted() {
      this.$store.dispatch(GET_PROGRAMS);
    },
  };
</script>

<style lang="scss" scoped>
  .link_group {
    text-align: center;

    & button + button {
      margin-left: 8px;
    }
  }
</style>
<template>
  <div>
    <v-item-group class="button_group">
      <v-btn>signin</v-btn>
      <v-btn>signup</v-btn>
    </v-item-group>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { GET_PROGRAMS } from '../store/home';

  export default {
    computed: {
      ...mapGetters(['programs', 'count']),
    },
    mounted() {
      this.$store.dispatch(GET_PROGRAMS);
    },
  };
</script>

<style lang="scss" scoped>
  .button_group {
    text-align: center;

    & button + button {
      margin-left: 8px;
    }
  }
</style>
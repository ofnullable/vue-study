<template>
  <v-app-bar app dark color="primary" hide-on-scroll>
    <v-toolbar-title>
      <router-link to="/" exact><h1 style="color: #fff;">bugcamp</h1></router-link>
    </v-toolbar-title>

    <VSpacer/>

    <div v-if="!isAuthenticated" class="link_group">
      <router-link to="/signin">
        <v-btn text>signin</v-btn>
      </router-link>
      <router-link to="/signup">
        <v-btn text>signup</v-btn>
      </router-link>
    </div>
    <div v-else>
      <!-- profile menu ( ? ) -->
    </div>

  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
  };
</script>

<style scoped>
  .link_group {
    text-align: center;
  }
</style>
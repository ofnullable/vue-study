<template>
  <v-app>

      <v-app-bar app color="primary" hide-on-scroll>
        <!-- <v-app-bar-nav-icon/> -->
        <v-toolbar-title>
          <h1>Bugcamp</h1>
        </v-toolbar-title>

        <v-spacer/>

        <!-- Add right menu items -->

      </v-app-bar>

      <v-content>
        <v-container sm12 xl8>
          <router-view/>
        </v-container>
      </v-content>

      <v-footer app color="primary"/>
  </v-app>
</template>

<script>
  export default {
  };
</script>

<style>
  html {
    font-size: 12px;
  }

  @media (min-width: 1904px) {
    /* .. */
    .container {
      max-width: 1185px;
    }
  }
</style>
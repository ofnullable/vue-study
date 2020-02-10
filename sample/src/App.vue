<template>
  <v-app>

    <v-app-bar app dark color="primary" hide-on-scroll>
      <!-- <v-app-bar-nav-icon/> -->
      <v-toolbar-title>
        <h1>Bugcamp</h1>
      </v-toolbar-title>

      <v-spacer/>

      <div class="link_group">
        <router-link to="/signin">
          <v-btn text>signin</v-btn>
        </router-link>
        <router-link to="/signup">
          <v-btn text>signup</v-btn>
        </router-link>
      </div>

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
  export default {};
</script>

<style lang="scss">
  html {
    font-size: 12px;
  }

  .link_group {
    text-align: center;
  }

  @media (min-width: 1904px) {
    /* .. */
    .container {
      max-width: 1185px;
    }
  }
</style>
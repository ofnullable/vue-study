<template>
  <v-app>
    <page-header></page-header>

    <v-content>
      <v-container sm12 xl8>
        <slot></slot>
      </v-container>
    </v-content>

    <page-footer></page-footer>
  </v-app>
</template>

<script>
  import PageHeader from './PageHeader';
  import PageFooter from './PageFooter';

  export default {
    components: {
      PageHeader,
      PageFooter,
    },
  };
</script>

<style scoped>
  @media (min-width: 1904px) {
    /* .. */
    .container {
      max-width: 1185px;
    }
  }
</style>
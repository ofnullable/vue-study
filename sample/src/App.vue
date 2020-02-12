<template>
  <app-layout>
    <router-view/>
  </app-layout>
</template>

<script>
  import AppLayout from './layouts/AppLayout';

  export default {
    components: {
      AppLayout,
    },
  };
</script>

<style lang="scss">
  html {
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }
</style>
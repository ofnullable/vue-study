<template>
  <app-layout>
    <RouterView/>
  </app-layout>
</template>

<script>
  import AppLayout from './layouts/AppLayout';

  export default {
    name: 'app',
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

  img {
    max-width: 100%;
  }
</style>
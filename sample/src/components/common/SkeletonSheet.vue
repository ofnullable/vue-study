<template>
  <v-sheet :color="`grey lighten-4`" elevation="2">
    <v-skeleton-loader :type="type"></v-skeleton-loader>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      type: String,
    },
  };
</script>

<style scoped>

</style>
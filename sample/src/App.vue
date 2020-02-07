<template>
  <v-app>
    <v-container>
      <h1>{{ sayHi }}</h1>
      <p v-if="name.startsWith('V')">Not React</p>
      <v-btn small>Vuetify Button</v-btn>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        say: 'Hello',
        name: 'Vue',
      };
    },
    computed: {
      sayHi() {
        return `${this.say}, ${this.name}!`;
      },
    },
  };
</script>

<style>
  html {
    font-size: 12px;
  }
</style>
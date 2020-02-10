<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">

      <v-form @submit.prevent="handleSubmit">

        <v-card elevation="5">
          <v-card-text>
            <v-text-field label="username" name="username" prepend-icon="person" type="text" v-model="username"/>
            <v-text-field label="password" name="password" prepend-icon="lock" type="password" v-model="password"/>
          </v-card-text>

          <v-card-actions>
            <v-spacer/>
            <v-btn type="submit">Sign in</v-btn>
          </v-card-actions>
        </v-card>

      </v-form>

    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log(this.username, this.password);
      },
    },
  };
</script>

<style scoped>

</style>
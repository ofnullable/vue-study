<template>
  <div>
    <h1>signin</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5">

          <v-card-title>sign in</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <VTextField label="username" name="username" prepend-icon="person" type="text" v-model="username"/>
              <VTextField label="password" name="password" prepend-icon="lock" type="password" v-model="password"/>

              <v-card-actions style="flex-direction: column;">
                <v-btn block color="primary" type="submit">sign in</v-btn>
                <p>or</p>
                <v-btn block type="button" to="/signup">sign up</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { SIGN_IN } from '../store/user';

  export default {
    name: 'signin',
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        const { username, password } = this;
        this.$store.dispatch(SIGN_IN, { username, password });
      },
    },
  };
</script>

<style scoped>
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bolder;
    padding: 5rem 0;
  }

  p {
    color: gray;
    margin: 0.5rem 0;
  }
</style>
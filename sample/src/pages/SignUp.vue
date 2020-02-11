<template>
  <div>
    <h1>signup</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">

        <v-form @submit.prevent="handleSubmit">
          <v-card elevation="5">
            <v-card-text>
              <v-text-field label="username" name="username" prepend-icon="person" type="text" v-model="username"/>
              <v-text-field label="email" name="email" prepend-icon="email" type="email" v-model="email"/>
              <v-text-field label="password" name="password" prepend-icon="lock" type="password" v-model="password"/>
              <v-text-field
                  type="password"
                  name="password-check"
                  label="password-check"
                  v-model="passwordCheck"
                  prepend-icon="check_circle"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer/>
              <v-btn type="submit">Sign in</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>

      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
      };
    },
    methods: {
      handleSubmit() {
        const { username, email, password } = this;
        console.log(username, email, password);
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
</style>
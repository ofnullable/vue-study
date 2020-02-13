<template>
  <div>
    <h1>signin</h1>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5">

          <v-card-title>sign in</v-card-title>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="handleSignIn">
              <v-text-field
                  type="text"
                  label="username"
                  name="username"
                  prepend-icon="person"
                  v-model="username"
                  :rules="usernameRules"
                  required
              ></v-text-field>
              <v-text-field
                  label="password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
              ></v-text-field>

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
      ...mapGetters(['isAuthenticated', 'signInError']),
    },
    data() {
      return {
        valid: false,

        username: '',
        password: '',

        usernameRules: [v => !!v || '아이디를 입력해주세요.'],
        passwordRules: [v => !!v || '비밀번호를 입력해주세요.'],
      };
    },
    methods: {
      formReset() {
        this.$refs.form.reset();
      },
      handleSignIn() {
        if (!this.$refs.form.validate()) {
          return;
        }
        const { username, password } = this;
        this.$store.dispatch(SIGN_IN, { username, password });

        this.formReset();
      },
    },
    watch: {
      isAuthenticated(value) {
        if (value) {
          this.$router.push('/');
        }
      },
    },
    beforeMount() {
      if (this.isAuthenticated) {
        this.$router.go(-1);
      }
    },
  };
</script>

<style scoped>
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bolder;
    padding: 3rem 0;
  }

  p {
    color: gray;
    margin: 1rem 0;
  }
</style>
<template>
  <div>
    <h1>{{ userType }} signup</h1>
    <v-row align="center" justify="center">

      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>
            <div class="card__tabs" @click="changeUserType('hacker')">hacker</div>
            <div class="card__tabs" @click="changeUserType('vendor')">vendor</div>
          </v-card-title>
          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="handleSignUp">
              <v-text-field
                  type="text"
                  name="username"
                  label="username"
                  prepend-icon="person"
                  v-model="username"
                  :rules="usernameRules"
                  required
              ></v-text-field>
              <v-text-field
                  type="email"
                  name="email"
                  label="email"
                  prepend-icon="email"
                  v-model="email"
                  :rules="emailRules"
                  required
              ></v-text-field>

              <v-text-field
                  v-if="userType==='vendor'"
                  type="text"
                  name="vendorName"
                  label="Organization Name"
                  prepend-icon="business"
                  v-model="vendorName"
                  :rules="vendorNameRules"
                  required
              ></v-text-field>
              <v-text-field
                  v-if="userType==='vendor'"
                  type="phone"
                  name="Phone"
                  label="Phone (optional)"
                  prepend-icon="phone"
                  v-model="phone"
              ></v-text-field>

              <v-text-field
                  type="password"
                  name="password"
                  label="password"
                  prepend-icon="lock"
                  v-model="password"
                  :rules="passwordRules"
                  required
              ></v-text-field>
              <v-text-field
                  type="password"
                  name="password-check"
                  label="password-check"
                  prepend-icon="check_circle"
                  v-model="passwordCheck"
                  :rules="passwordCheckRules"
                  required
              ></v-text-field>

              <v-card-actions style="flex-direction: column;">
                <v-btn block color="primary" type="submit">sign up</v-btn>
                <p>Already have account?</p>
                <v-btn block type="button" to="/signin">sign in</v-btn>
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
  import { hackerSignUp, vendorSignUp } from '../api/user';

  export default {
    name: 'signup',
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    data() {
      return {
        valid: false,
        userType: 'hacker',

        // hacker information
        username: '',
        email: '',
        password: '',
        passwordCheck: '',

        // + vendor information
        vendorName: '',
        phone: '',

        // rules
        usernameRules: [v => !!v || '아이디를 입력해주세요.'],
        emailRules: [
            v => !!v || '이메일을 입력해주세요.',
        ],
        passwordRules: [v => !!v || '비밀번호를 입력해주세요.'],
        passwordCheckRules: [
          v => !!v || '비밀번호를 확인해주세요.',
          v => this.passwordChecked(v) || '비밀번호가 일치하지 않습니다.',
        ],
        vendorNameRules: [v => !!v || '조직이름을 입력해주세요.'],
      };
    },
    methods: {
      formReset() {
        this.$refs.form.reset();
      },
      passwordChecked(passwordCheck) {
        return this.password === passwordCheck;
      },
      changeUserType(type) {
        this.userType = type;
      },
      handleSignUp() {
        if (!this.$refs.form.validate()) {
          return;
        }
        const { userType, username, email, password, vendorName, phone } = this;

        let request;
        if (userType === 'hacker') {
          request = hackerSignUp({ username, email, password });
        } else {
          request = vendorSignUp({ username, email, password, vendorName, phone });
        }

        request
            .then(_ => {
              this.$router.push('/signin');
            })
            .catch(e => {
              console.error(e);
            });
      },
    },
    beforeMount() {
      if (this.isAuthenticated) {
        this.$router.go(-1);
      }
    },
  };
</script>

<style scoped lang="css">
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bolder;
    padding: 3rem 0;
  }

  h4 {
    text-transform: uppercase;
  }

  p {
    color: gray;
    margin: 1rem 0;
  }

  .card__tabs {
    width: 50%;
    cursor: pointer;
    text-align: center;
  }
</style>
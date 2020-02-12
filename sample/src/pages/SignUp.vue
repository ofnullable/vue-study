<template>
  <div>
    <h1>{{ userType }} signup</h1>
    <v-row align="center" justify="center">

      <v-col cols="12" sm="8" md="6">
        <v-card width="100%">
          <v-card-title>
            <div class="card__tabs" @click="setUserType('hacker')">hacker</div>
            <div class="card__tabs" @click="setUserType('vendor')">vendor</div>
          </v-card-title>
          <v-card-text>
            <v-form>
              <VTextField label="username" name="username" prepend-icon="person" type="text" v-model="username"/>
              <VTextField label="email" name="email" prepend-icon="email" type="email" v-model="email"/>

              <VTextField
                  v-if="userType==='vendor'"
                  name="vendorName"
                  type="text"
                  v-model="vendorName"
                  label="Organization Name"
                  prepend-icon="business"
              />
              <VTextField
                  v-if="userType==='vendor'"
                  name="Phone"
                  type="phone"
                  v-model="phone"
                  label="Phone (optional)"
                  prepend-icon="phone"
              />

              <VTextField label="password" name="password" prepend-icon="lock" type="password" v-model="password"/>
              <VTextField
                  type="password"
                  name="password-check"
                  label="password-check"
                  v-model="passwordCheck"
                  prepend-icon="check_circle"
              />

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

  export default {
    name: 'signup',
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    data() {
      return {
        userType: 'hacker',

        // hacker information
        username: '',
        email: '',
        password: '',
        passwordCheck: '',

        // + vendor information
        vendorName: '',
        phone: '',
      };
    },
    methods: {
      setUserType(type) {
        this.userType = type;
      },
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
    margin: 0.5rem 0;
  }

  .card__tabs {
    width: 50%;
    text-align: center;
  }
</style>
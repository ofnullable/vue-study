import 'babel-polyfill';

import Vue from 'vue';

import { CHECK_AUTH } from './store/user';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import App from './App';

router.beforeEach((to, from, next) =>
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next));

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#root');

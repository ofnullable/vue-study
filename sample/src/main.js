import 'babel-polyfill';

import Vue from 'vue';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import App from './App';

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#root');

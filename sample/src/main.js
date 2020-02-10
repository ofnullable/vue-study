import 'babel-polyfill';

import Vue from 'vue';

import vuetify from './plugins/vuetify';
import router from './router';
import App from './App';

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#root');

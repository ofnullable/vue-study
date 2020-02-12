import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

Vue.use(VueRouter);

const isAuthenticated = store.getters.isAuthenticated;

const checkAuth = (to, from, next) => {
  if (isAuthenticated) {
    return false;
  }
  return next();
};

export default new VueRouter({
  routes: [{
      name: 'home',
      path: '/',
      component: () => import('../pages/Home'),
    }, {
      name: 'signIn',
      path: '/signin',
      component: () => import('../pages/SignIn'),
      beforeEnter: checkAuth,
    }, {
      name: 'signUp',
      path: '/signup',
      component: () => import('../pages/SignUp'),
      beforeEnter: checkAuth,
    }, {
      name: 'programDetail',
      path: '/detail/:id',
      component: () => import('../pages/SignUp'),
    }],
});
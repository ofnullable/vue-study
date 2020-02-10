import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: () => import('../pages/Home') },
    { path: '/signin', component: () => import('../pages/SignIn') },
    { path: '/signup', component: () => import('../pages/SignUp') },
    { path: '/detail/:id', component: () => import('../pages/SignUp') },
  ],
});
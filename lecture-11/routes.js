import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseBall from '../lecture-03/NumberBaseBall';
import ResponseCheck from '../lecture-04/ResponseCheck';
import RockScissorsPaper from '../lecture-05/RockScissorsPaper';
import LottoGenerator from '../lecture-06/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    // { path: '/number-baseball', component: NumberBaseBall },
    // { path: '/response-check', component: ResponseCheck },
    // { path: '/rock-scissors-paper', component: RockScissorsPaper },
    // { path: '/lotto-generator', component: LottoGenerator },
    { path: '/game/:name', component: GameMatcher },
  ],
});
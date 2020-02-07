# Lecture-11

* vue-router

```console
> npm i vue-router
```
```js
// routes.js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Component from './Component'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // default는 hash
  routes: [
    { path: '/', component: Component },
    ...
  ],
});
```

vue-router 설치 및 설정 후 Vue instance와 연결하는 작업을 해야한다.

```vue
<script>
  // root component
  import router from './routes';

  export default {
    router,
  };
</script>
```

위 처럼 설정 및 연결 후 `this.$route`로 현재 라우팅 정보, `this.$routes`로 라우터 전체 정보를 확인할 수 있다.
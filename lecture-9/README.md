# Lecture-9

* vuex
  - `state:` redux의 initialState
  - `getters:` 이건 redux에서 못본거같은데 state들로 쿵짝쿵짝할 떄 사용하는듯..
  - `mutations:` redux의 action?
  - `actions:` 이것도 처음 보는 개념인거같은데 사용은 안해봤다. 여러 mutation을 연달아 사용하거나 비동기 작업을 수행할 때 사용한다고 함..

* slot
  - parent component로 부터 받은 component를 rendering하기 위해 사용된다.
  - react의 children과 유사  

* 한눈에 보는 간단한 vuex설정 코드
```shell
// shell
> npm i vuex
```
```js
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SOME_ACTION_NAME = 'SOME_ACTION';

export default new Vuex.Store({
  state: {
    // initial states
    foo: 'foo',
    bar: 'bar',
  },
  getters: {
    someGetter() {
      return `${state.foo} ${state.bar}`;
    },
  },
  mutaions: {
    [SOME_ACTION_NAME](state, arg) {
      state.foo = arg;
    },
  },
  actions: {
    // ?
  }
});
```

```js
// component.vue
<template>
  <!-- templates -->
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import store, { SOME_ACTION_NAME } from './path/to/store';

  export default {
    store,
    computed: {
      ...mapState(['foo', 'bar']),
      ...mapGetters(['someGetter']),
    },
    methods: {
      ...mapMutations({
        someAction: SOME_ACTION_NAME,
      }),
      handleEvent(e) {
        e.preventDefault();
        this.someAction('param')
      },
    }
    // ...vue properties
  }
</script>
<style>
  /* styles */
</style>
```
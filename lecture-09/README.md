# Lecture-09

* vuex
  * `state`
  * `getters` vue에서 computed와 같은 역할을 한다.
  * `mutations:` redux의 action..?
  * `actions:` 이것도 처음 보는 개념인거같은데 사용은 안해봤다. 여러 mutation을 연달아 사용하거나 비동기 작업을 수행할 때 사용한다고 함..

* slot
  * react의 children과 유사
  * parent component로 부터 받은 component를 rendering하기 위해 사용된다.
  * slot 위치에 아무것도 오지 않았을 때의 기본값을 적어줄 수도 있다.

* mapState, mapGetters, mapMutations, mapActions...
  * Vuex의 속성들을 편하게 가져올 수 있는 함수들!
  * 기본적으로는 이름을 문자열로 작성하고, 함수로 작성하면 이름을 바꿔서 사용할 수도 있다.
  * 자세한 내용은 공식 문서를 참조하자.

```console
> npm i vuex
```

```js
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SOME_ACTION = 'SOME_ACTION';

export default new Vuex.Store({
  state: {
    foo: 'foo',
    bar: 'bar',
  },
  getters: {
    someGetter() {
      return `${state.foo} ${state.bar}`;
    },
  },
  mutations: {
    [SOME_ACTION](state, arg) {
      state.foo = arg;
    },
  },
  actions: {
    // ?
  }
});
```

```vue
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
      // ...mapActions?
      handleEvent() {
        this.someAction('arg')
      },
    }
    // ...vue properties
  }
</script>
<style>
  /* styles */
</style>
```
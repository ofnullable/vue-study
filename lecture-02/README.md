# Lecture-2
```js
Vue.component('component-name', {
  template: `...component template...`,
  props: [ ...propNames... ],
  data() {
    return {
      ...initial states...
    }
  },
  methods: {
    ...methods...
  }
});
const app = new Vue({
  el: '#root',
});
```
html에서는 kebab case, js에서는 camel case로 작성해야한다.. ~~진짜 별로~~
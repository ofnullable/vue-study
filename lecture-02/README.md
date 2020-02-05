# Lecture-02
* CDN을 활용한 Vue 개념 익히기2

Vue의 컴포넌트 작성법
```html
<div id="root">
  <component-name prop-name />
  <component-name prop-name />
  <component-name prop-name />
</div>
```
```js
Vue.component('component-name', {
  template: `
      <...component template.../>
  `,
  props: [ 
      // ...propName... 
  ],
  data() {
    return {
      // ...initial states...
    }
  },
  methods: {
    // ...methods...
  },
});
const app = new Vue({
  el: '#root',
});
```

component에서의 data는 객체를 반환하는 함수로 작성해야한다.  
props는 전달할 때 html에서는 kebab case로, 받을 때 js에서는 camel case로 작성해야한다..  
component의 이름은 html에서는 kebab case, js에서는 어떻게 작성해도 동작한다..  
~~진짜.. 너무... 별로..~~
# Lecture-01

* CDN을 활용한 Vue 개념 익히기  

Vue 인스턴스를 통해 데이터와 화면을 변경한다.  
```html
<div id="root">
    <!--
        v- 가 붙은 속성에는 `js 코드`를 넣을 수 있다! 
        v-if, v-else-if, v-else -> 특정 조건을 만족할 때 render 
        v-on:~ -> ~ event handler 
    -->
    <button v-if="liked" v-on:click="toggleLiked">liked!</button>
    <button v-else v-on:click="toggleLiked">like!!</button>
</div>
```
```js
const app = new Vue({
    el: '#root', // Vue객체가 제어할 html element
    data: {      // React의 State와 유사.. 
        liked: false,
    },
    methods: {   // event handler 등 Vue객체의 method들
        handleClick(e) {
            this.liked = !this.liked; // this는 data를 가리킨다..?
        }
    }
})
```
  
Vue의 data를 html element에 바인딩하기 위해서는 v-model을 사용한다.


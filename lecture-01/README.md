# Lecture-01
* CDN을 활용한 vue 활용
vue는 Vue 인스턴스를 통해 데이터와 화면을 변경한다.  
```html
<div id="root">
    <!--
        'v-' 가 붙은 속성에는 js코드를 넣을 수 있다! 
        v-if, v-else-if, v-else -> 특정 조건을 만족할 때 render 
        v-on:click -> click event handler 
    -->
    <button v-if="liked" v-on:click="handleClick">좋아요!</button>
    <button v-else v-on:click="handleClick">Like!</button>
</div>
```
```js
const app = new Vue({
    el: '#root', // Vue객체가 제어할 element
    data: {      // React의 State와 유사 
        liked: false,
    },
    methods: {   // event handler 등 Vue객체의 method들
        handleClick(e) {
            this.liked = !this.liked; // this는 data를 가리킨다..?
        }
    }
})
```


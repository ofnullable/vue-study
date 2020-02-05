# Lecture-5
* vue의 life-cycle

beforeCreate, created  
beforeMount, mounted  
beforeUpdate, updated  
beforeDestroy, destroyed  

* vue는 click handler에서 인자를 바로 받을 수 있다...
* `:class`, `:style`에서는 객체형 인자를 받을 수 있다.
* `setTimeout`, `setInterval`등을 사용했을 때 beforeDestroy에서 꼭 clear 해줘라. 

**Vue의 Component 이름은 두단어 이상으로 작명해라**
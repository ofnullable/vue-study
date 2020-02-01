# Lecture-7

* 부모 component의 데이터 접근  
  - 최상위 또는 부모 component의 data를 수정하고 싶다면?
  - `(this.$root || this.$parent).$data`로 접근 및 수정할 수 있다!
  - 간단하고 편한 방법이지만, component가 여러개라면 관리할 수 없다.
  - `ex) this.$parent.$parent.$parent...`
* array의 index로 접근하여 데이터를 변경하면 화면에 반영되지 않는다.
  - `Vue.set` 또는 `this.$set`을 사용할것!
  - 실수하기 쉬우므로 꼭 기억하자
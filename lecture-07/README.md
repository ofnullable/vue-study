# Lecture-07

* 부모 컴포넌트의 데이터 접근
    * vue에서는 `this.$root`, `this.$parent` 등을 지원한다!
    * 자식 컴포넌트에서도 부모 컴포넌트의 데이터에 접근 및 수정이 가능 (`$data`)
* Vue.set
    * vue에서 배열 데이터를 변경하기 위해서 index로 접근하면 화면에 반영되지 않는다.
    * 배열 데이터를 변경하기 위해서는 `Vue.set(array, index, data)` 또는 `this.$set(array, index, data)`를 사용해야한다.

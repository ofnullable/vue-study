# Lecture-06
* child component 와 props, 그리고 watch

* child component 와 props  

따로 작성한 컴포넌트를 import 후 아래와 같이 작성하면 child component로 사용할 수 있다. 
```vue
<template>
  <div>
    <component-name :props="props"></component-name>
  </div>
</template>

<script>
  import ComponentName from './ComponentName'; // 

  export default {
    components: {
      'component-name': ComponentName,  // 원하는 이름으로 변경할 수 있다!
      ComponentName,                // 같은 이름으로 사용할거면 컴포넌트 이름만 작성할 수 있다. (자동으로 변경해준다)
    },
    data() {
      return {
        props: 'props'
      }
    }
  }
</script>
```
컴포넌트에서 `name`옵션은 재귀적인 컴포넌트에서는 필수적이고, 그렇지 않은경우에는 vue-devtools에서 유용하다. (크게 필요하지 않다는 뜻)

* watch

watch는 data와 같은 이름의 메서드를 작성하면 특정 조건에 원하는 기능을 실행시킬 수 있다. 
하지만 코드가 복잡해질 우려가 있으므로 다른 방법이 없는 경우에만 사용하도록 하자.
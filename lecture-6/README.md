# Lecture-6
child component ( props ), watch

* child component

import 후 아래와 같이 작성하여 다른 Component를 사용할 수 있다.
```js 
import PascalCase from './PascalCase';

export default {
  components: {
    'kebab-case': PascalCase,  // kebab-case부분에 다른 이름을 줄 수 있음.
    PascalCase,                // 같은 이름을 사용할거라면 컴포넌트 이름만 작성해도 무방
  }
}
```

* watch

watch라는 property에 state와 같은 이름의 메서드를 작성하면 특정 조건에 원하는 함수를 실행하는 등의 동작을 수행할 수 있다. 하지만 권장사항이 아니므로 어쩔 수 없는 경우에만 사용하도록 하자.
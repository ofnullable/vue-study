# Lecture-4
* CSS와 computed 사용하기

```console
> npm i -D vue-style-loader css-loader
```
```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [{
      // other loaders
    } ,{
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader'],
    }],
    // ...
  }
}
```
* CSS
    * .vue 파일에서 css를 사용하기 위해서는 위 두 모듈이 필요하고, webpack에 추가적인 설정이 필요하다.
    * 동적인 class를 원하면 `v-bind:class` 또는 `:class`를 사용할 수 있다.
    * `<style>` 태그에 scoped속성을 활용하면 해당 컴포넌트 내에서만 유효한 CSS를 작성할 수 있다.
* computed
    * 연산이 필요할 때에는 computed를 사용할 수 있다.
    * 캐싱되기 때문에 성능적으로 유리하다.
* webpack-dev-server
    * 코드 수정 시 새로고침 하지 않아도 수정되는 기능을 제공한다.
    * 외부에서 접근하려면 `--host 0.0.0.0 --disable-host-check` 옵션을 실행 스크립트에 넣어주어야 한다.
* v-if와 v-show
    * v-if는 조건이 성립하지 않으면 아예 렌더링되지 않는다.
    * v-show는 조건이 성립하지 않으면 `style="display: none;"`으로 렌더링된다. 
* template
    * 필요하지 않은 <div> 태그를 사용하기 싫다면 <template> 태그를 사용할 수 있다.
    * 하지만 최상위 <template> 바로 아래에는 <template> 태그를 또 사용할 수 **없다**.
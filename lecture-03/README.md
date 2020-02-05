# Lecture-03
* webpack을 활용해 Vue 사용하기

.vue 파일 및 webpack 사용법
```console
> npm i vue 
> npm i -D webpack webpack-cli
> npm i -D vue-loader vue-template-compiler
```

* webpack 설정 
    * entry, module, plugins, output
    * module.rules에 vue-loader 설정 및 resolve.extension에 `.vue` 확장자 추가
* Vue component
    * v-on:submit, handleSubmit(e) { e.preventDefault() } 는 @submit.prevent로 줄일 수 있다..
    * v-for를 통해 반복문 처리가 가능하다.
    

**WebStorm**에서 vbase 입력 후 Tab키를 누르면 .vue 파일을 위한 베이스 템플릿이 생성된다!  
<template>
  <div>
    <div id="screen" :class="state" @click="handleScreenClick">
      {{ message }}
    </div>
    <!-- 
      v-show, v-if는 tag가 존재하는지 아닌지로 구분할 수 있다.
      v-if는 tag도 없고 (주석처리 처럼)
      v-show 는 display:none; 처리 된다.
    -->
    <template v-show="result.length">
      <div>
        평균 시간:
        {{ average }}ms
      </div>
      <button @click="handleButtonClick">리셋</button>
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        state: 'waiting',
        message: '클릭해서 시작하세요!',
        result: [],
      };
    },
    // 값을 캐싱할 수 있다.
    computed: {
      average() {
        return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
      },
    },
    methods: {
      handleButtonClick(e) {
        this.result = [];
      },
      handleScreenClick() {
        if (this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요!';

          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!!!';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000);
        } else if (this.state === 'ready') {
          clearTimeout(timeout);
          this.state = 'waiting';
          this.message = '너무 성급하셨네요! 초록색이 될때까지 기다려주세요.';
        } else if (this.state === 'now') {
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요!';
          this.result.push(endTime - startTime);
        }
      },
    },
  };
</script>

<style scoped>
  #screen {
    width: 500px;
    height: 500px;
    text-align: center;
    user-select: none;
    color: white;
  }
  #screen.waiting {
    background-color: blue;
  }
  #screen.ready {
    background-color: red;
  }
  #screen.now {
    background-color: green;
  }
</style>

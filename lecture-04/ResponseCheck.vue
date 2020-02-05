<template>
  <div>
    <div id="screen" :class="state" @click="handleClickScreen">{{ message }}</div>
    <template v-show="result.length">
      <div>평균시간: {{ average }}ms</div>
      <button @click="handleReset">리셋</button>
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    computed: {
      average() {
        return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
      },
    },
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요!',
      };
    },
    methods: {
      handleReset() {
        this.result = [];
      },
      handleClickScreen() {
        if (this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요!';

          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금! 클릭하세요!!';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000);

        } else if (this.state === 'ready') {
          clearTimeout(timeout);
          this.state = 'waiting';
          this.message = '너무 성급했어요! 초록색이 된 이후에 클릭하세요.';
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
    width: 30rem;
    height: 30rem;
    text-align: center;
    user-select: none;
  }

  #screen.waiting {
    background-color: dodgerblue;
  }

  #screen.ready {
    background-color: mediumvioletred;
  }

  #screen.now {
    background-color: seagreen;
  }
</style>
<template>
  <div>
    <h1>당첨 숫자</h1>
    <div id="result">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball" />
    </div>
    <h2>보너스!</h2>
    <lotto-ball v-if="bonus" :number="bonus" />
    <button v-if="redo" @click="handleClickRedo">
      한번 더!
    </button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall';

  const getWinNumbers = () => {
    console.log('get win numbers!');
    const candidate = Array(45)
      .fill()
      .map((v, i) => i + 1);
    const shuffled = [];
    while (candidate.length > 0) {
      shuffled.push(
        candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      );
    }
    const bonusNumber = shuffled[shuffled.length - 1];
    const winNumbers = shuffled.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  };

  const timeouts = [];
  export default {
    components: {
      LottoBall,
    },
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      };
    },
    computed: {},
    methods: {
      handleClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
      },
      showBalls() {
        for (let i = 0; i < this.winNumbers.length - 1; i++) {
          timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 500);
        }
        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 3500);
      },
    },
    mounted() {
      console.log('mounted');
      this.showBalls();
    },
    beforeDestroy() {
      console.log('before destroy');
      timeouts.forEach(t => {
        clearTimeout(t);
      });
    },
    watch: {
      bonus(value, oldValue) {
        if (value === null) {
          this.showBalls();
        }
      },
    },
  };
</script>

<style scoped>
</style>

<template>
  <div>
    <div id="computer" :style="computeStyle"></div>
    <div>
      <button @click="handleClick('rock')">바위</button>
      <button @click="handleClick('scissors')">가위</button>
      <button @click="handleClick('paper')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script>
  let interval = null;

  const scores = {
    rock: 0,
    scissors: 1,
    paper: -1,
  };

  const coords = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px',
  };

  const computerChoice = imgCoord => {
    return Object.entries(coords).find(v => v[1] === imgCoord)[0];
  };

  export default {
    data() {
      return {
        imgCoord: coords.rock,
        result: '',
        score: 0,
      };
    },
    computed: {
      computeStyle() {
        return { background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0` };
      },
    },
    methods: {
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === coords.rock) {
            this.imgCoord = coords.scissors;
          } else if (this.imgCoord === coords.scissors) {
            this.imgCoord = coords.paper;
          } else if (this.imgCoord === coords.paper) {
            this.imgCoord = coords.rock;
          }
        }, 100);
      },
      handleClick(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const computerScore = scores[computerChoice(this.imgCoord)];

        const diff = myScore - computerScore;

        if (diff === 0) {
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다!';
          this.score += 1;
        } else {
          this.result = '졌습니다ㅠㅠ';
          this.score -= 1;
        }

        setTimeout(() => {
          this.changeHand();
        }, 1000);

      },
    },
    created() {
      console.log('created');
    },
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      clearInterval(interval);
    },
    destroyed() {
      console.log('destroyed');
    },
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>
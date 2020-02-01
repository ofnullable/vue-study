<template>
  <div>
    <div id="computer" :style="computeStyle"></div>
    <div>
      <button @click="handleButtonClick('rock')">바위</button>
      <button @click="handleButtonClick('scissors')">가위</button>
      <button @click="handleButtonClick('paper')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script>
  const rspCoords = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px',
  };
  const scores = {
    rock: 0,
    scissors: 1,
    paper: -1,
  };
  const computerChoice = imgCoord => {
    return Object.entries(rspCoords).find(v => v[1] === imgCoord)[0];
  };

  let interval = null;
  export default {
    data() {
      return {
        imgCoord: rspCoords.rock,
        result: '',
        score: 0,
      };
    },
    computed: {
      computeStyle() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      },
    },
    methods: {
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === rspCoords.rock) {
            this.imgCoord = rspCoords.scissors;
          } else if (this.imgCoord === rspCoords.scissors) {
            this.imgCoord = rspCoords.paper;
          } else if (this.imgCoord === rspCoords.paper) {
            this.imgCoord = rspCoords.rock;
          }
        }, 100);
      },
      handleButtonClick(choice) {
        if (!interval) {
          return;
        }
        clearInterval(interval);
        interval = null;

        const myScore = scores[choice];
        const computerScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - computerScore;
        if (diff === 0) {
          this.result = '비겼습니다!';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다!';
          this.score++;
        } else {
          this.result = '졌습니다...';
          this.score--;
        }

        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
    },
    beforeCreate() {
      console.log('before create');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('before mount');
    },
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    beforeUpdate() {
      console.log('before update');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('before destroy');
      clearInterval(interval);
    },
    destroyed() {
      console.log('destoryed');
    },
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
  }
</style>

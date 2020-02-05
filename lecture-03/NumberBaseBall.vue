<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" minlength="4" maxlength="4" v-model="value" ref="answer">
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr = [];
    for (let i = 0; i < 4; i++) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      arr.push(chosen);
    }
    return arr;
  };

  export default {
    data() {
      return {
        answer: getNumbers(), // ex) [1, 2, 3, 4]
        value: '',
        result: '',
        tries: [],
      };
    },
    methods: {
      handleSubmit() {
        console.log(this.answer);
        if (this.value === this.answer.join('')) {
          this.tries.push({
            try: this.value,
            result: '홈런',
          });

          alert('정답! 게임을 다시 시작합니다.');

          this.tries = [];
          this.answer = getNumbers();
        } else {
          if (this.tries.length >= 9) {
            this.result = `실패! 정답은 '${this.answer.join(', ')}' 이었습니다!`;

            alert('실패! 게임을 다시 시작합니다.');
            this.value = '';
            this.tries = [];
            this.answer = getNumbers();
            this.$refs.answer.focus();
            return;
          }

          let strike = 0;
          let ball = 0;

          const answerArray = this.value.split('').map(v => Number(v));

          for (let i = 0; i < 4; i++) {
            if (answerArray[i] === this.answer[i]) {
              strike++;
            } else if (this.answer.includes(answerArray[i])) {
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} STRIKE, ${ball} BALL.`,
          });
        }
        this.value = '';
        this.$refs.answer.focus();
      },
    },
  };
</script>

<style scoped>

</style>

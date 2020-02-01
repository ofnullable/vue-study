<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="handleSubmit">
      <input minlength="4" maxlength="4" ref="answer" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
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
        answer: getNumbers(),
        value: '',
        result: '',
        tries: [],
      };
    },
    methods: {
      handleSubmit(e) {
        if (this.value === this.answer.join('')) {
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          alert('게임을 다시 시작합니다.');
          this.answer = getNumbers();
          this.result = '';
          this.tries = [];
        } else {
          if (this.tries.length >= 9) {
            this.result = `실패! 정답은 ${this.answer.join(', ')} 입니다!`;
            alert('게임을 다시 시작합니다.');
            this.answer = getNumbers();
            this.result = '';
            this.tries = [];
          }
          let strike = 0;
          let ball = 0;
          const answerArr = this.value.split('').map(v => Number(v));

          for (let i = 0; i < 4; i++) {
            if (answerArr[i] === this.answer[i]) {
              strike++;
            } else if (this.answer.includes(answerArr[i])) {
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크 ${ball} 볼 입니다.`,
          });
        }

        this.value = '';
        this.$refs.answer.focus();
      },
    },
  };
</script>

<style>
</style>

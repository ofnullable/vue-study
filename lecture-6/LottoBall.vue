<template>
  <div class="ball" :style="setBackground">{{ number }}</div>
</template>

<script>
  export default {
    props: { number: Number },
    computed: {
      setBackground() {
        let background;
        if (this.number < 10) {
          background = 'red';
        } else if (this.number < 20) {
          background = 'orange';
        } else if (this.number < 30) {
          background = 'yellow';
        } else if (this.number < 40) {
          background = 'blue';
        } else {
          background = 'green';
        }
        return {
          background,
        };
      },
    },
  };
</script>

<style scoped>
  .ball {
    display: inline-block;
    border: 1px solid #000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 2;
    font-size: 25px;
    text-align: center;
    margin-right: 20px;
  }
</style>

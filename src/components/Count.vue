<template>
  <div>
    <h1>现在的和是{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前数字为奇数再加</button>
    <button @click="incrementWait">等500ms再加</button>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      n: 1,
      sum: 0,
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500)
    },
  },
}
</script>
<style>
button {
  margin-left: 10px;
  font-size: 20px;
}
select {
  font-size: 20px;
}
</style>

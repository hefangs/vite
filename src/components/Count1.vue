<template>
  <div>
    <h1>现在的和是{{ $store.state.sum }}</h1>
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
  name: "Count1",
  data() {
    return {
      n: 1,
    }
  },
  methods: {
    // increment和decrement直接走mutations
    increment() {
      this.$store.commit("INCREMENT", this.n)
    },
    decrement() {
      this.$store.commit("DECREMENT", this.n)
    },
    // incrementOdd和incrementWait 需要走actions，再走mutations
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n)
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n)
    },
  },
  mounted() {
    // console.log(this)
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

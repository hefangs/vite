<template>
  <div>
    <h1>现在的和是{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前数字为奇数再加</button>
    <button @click="incrementWait(n)">等500ms再加</button>
    <h3>personList组件中的总人数是：{{ personList.length }}</h3>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count3",
  data() {
    return {
      n: 1
    }
  },
  computed: {
    // 对象写法
    ...mapState("countAbout", { sum: "sum" }),
    ...mapState("personAbout", { personList: "personList" })

    // 数组写法
    // ...mapState(["sum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT", this.n)
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n)
    // },

    // 借助mapMutations生成对应的方法，方法中会去调用commit去联系mutation(对象写法)-数组的写法就是key和value一致，放在数组里（这里数组写法略过 ）
    ...mapMutations("countAbout", { increment: "INCREMENT", decrement: "DECREMENT" }),

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n)
    // },
    // 借助mapActions生成对应的方法，方法中会去调用dispatch去联系action(对象写法)
    ...mapActions("countAbout", { incrementOdd: "incrementOdd", incrementWait: "incrementWait" })
    // 数组写法：
    // ...mapActions(["incrementOdd", "incrementWait"])
  },
  mounted() {
    // console.log(this)
  }
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

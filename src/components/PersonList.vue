<template>
  <div>
    <h3>Count3组件中总和为：{{ sum }}</h3>
    <el-input v-model="name" placeholder="请输入内容" style="width: 200px"></el-input>
    <el-button type="primary" @click="addPerson">添加人员</el-button>
    <el-button type="danger" @click="reducedPerson">减少人员</el-button>

    <ul>
      <li v-for="(item, id) in personList" :key="id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import { nanoid } from "nanoid"
export default {
  data() {
    return {
      name: "",
    }
  },
  computed: {
    personList() {
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    },
  },
  methods: {
    addPerson() {
      let personObj = { id: nanoid(), name: this.name }
      if (personObj.name) {
        const personObj = { id: nanoid(), name: this.name }
        console.log(personObj)
        this.$store.commit("ADD_PERSON", personObj)
        console.log(personObj)
        this.name = ""
      }
    },
    reducedPerson() {
      this.$store.commit("REDUCED_PERSON")
    },
  },
}
</script>
<style>
div {
  margin-top: 50px;
}
</style>

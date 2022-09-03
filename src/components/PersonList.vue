<template>
  <div>
    <h3>Count3组件中总和为：{{ sum }}</h3>
    <el-input v-model="name" placeholder="请输入内容" style="width: 200px"></el-input>
    <el-button type="primary" @click="addPerson" :plain="true">添加人员</el-button>
    <el-button type="danger" @click="reducedPerson" :plain="true">减少人员</el-button>

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
      name: ""
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    }
  },
  methods: {
    addPerson() {
      let personObj = { id: nanoid(), name: this.name }
      if (personObj.name) {
        const personObj = { id: nanoid(), name: this.name }
        // console.log(personObj)
        this.$store.commit("personAbout/ADD_PERSON", personObj)
        this.$message({
          message: "添加person成功",
          type: "success"
        })
        this.name = ""
      }
    },
    reducedPerson() {
      this.$store.commit("personAbout/REDUCED_PERSON")
      this.$message.error("删除person成功")
    }
  }
}
</script>
<style>
div {
  margin-top: 50px;
}
</style>

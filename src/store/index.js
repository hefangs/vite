import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
  sum: 0,
}
const actions = {
  // increment和decrement不需要走actions

  // increment(context, value) {
  //   context.commit("INCREMENT", value)
  // },
  // decrement(context, value) {
  //   context.commit("DECREMENT", value)
  // },
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("INCREMENTODD", value)
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("INCREMENTWAIT", value)
    }, 500)
  },
}
const mutations = {
  INCREMENT(state, value) {
    state.sum += value
  },
  DECREMENT(state, value) {
    state.sum -= value
  },
  INCREMENTODD(state, value) {
    state.sum += value
  },
  INCREMENTWAIT(state, value) {
    state.sum += value
  },
}
export default new Vuex.Store({
  actions,
  mutations,
  state,
})

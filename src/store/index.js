import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const countOptions = {
  namespaced: true,
  state: {
    sum: 0
  },
  actions: {
    incrementOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("INCREMENTODD", value)
      }
    },
    incrementWait(context, value) {
      setTimeout(() => {
        context.commit("INCREMENTWAIT", value)
      }, 500)
    }
  },
  mutations: {
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
    }
  }
}
const personListOptions = {
  namespaced: true,
  state: {
    personList: [{ id: "001", name: "John" }]
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value)
    },
    REDUCED_PERSON(state, value) {
      state.personList.pop(value)
    }
  }
}

export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personListOptions
  }
})

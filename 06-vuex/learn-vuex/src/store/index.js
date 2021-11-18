import Vue from 'vue'
import Vuex from 'vuex'

// 1。安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 100, name: 'a', age: 10},
      {id: 101, name: 'b', age: 13},
      {id: 102, name: 'c', age: 15},
      {id: 103, name: 'd', age: 18},
    ]
  },
  mutations: {
    increment() {
      this.state.counter++
    },
    decrement() {
      this.state.counter--
    }
  },
  actions: {},
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    gt12Student(state) {
      return state.students.filter(x => x.age > 12)
    },
    gt12StudentCount(state, getters) {
      return getters.gt12Student.length
    },
    gtxStu(state) {
      return age => {
        return state.students.filter(x => x.age > age)
      }
    }
  },
  modules: {}
})

// 3.导出 store 对象
export default store

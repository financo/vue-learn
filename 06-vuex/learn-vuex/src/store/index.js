import Vue from 'vue'
import Vuex from 'vuex'

// 1。安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000
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
  getters: {},
  modules: {}
})

// 3.导出 store 对象
export default store

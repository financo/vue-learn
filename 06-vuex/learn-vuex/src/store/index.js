import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modeleA from "./modules/modeleA";

// 1。安装插件
Vue.use(Vuex)

// 2.创建对象

const state = {
  counter: 1000,
  students: [
    {id: 100, name: 'a', age: 10},
    {id: 101, name: 'b', age: 13},
    {id: 102, name: 'c', age: 15},
    {id: 103, name: 'd', age: 18},
  ],
  info: {
    name: 'wzy',
    age: 28
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: modeleA
  }
})

// 3.导出 store 对象
export default store

import {ADD_STU, DECREMENT, INCREMENT, INCREMENT_COUNT, UPDATE_INFO} from "./mutation-types";

export default {
  [INCREMENT](state) {
    state.counter++
  },
  [DECREMENT](state) {
    state.counter--
  },
  [INCREMENT_COUNT](state, count){
    state.counter += count
  },
  [ADD_STU](state, stu) {
    state.students.push(stu)
  },
  [UPDATE_INFO](state) {
    state.info.name = 'ccc'

    // 响应式 / 非响应式
    // state.info['addr'] = 'he'
    // Vue.set(state.info, 'addr', 'he')

    // delete state.info.age
    // Vue.delete(state.info, 'age')
  }
}

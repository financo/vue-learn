export default {
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
}

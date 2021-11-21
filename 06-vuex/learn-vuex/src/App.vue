<template>
  <div id="app">
    <h2>{{message}}</h2>
    <div>--------------- APP ---------------</div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">Add Stu</button>

    <div>--------------- APP Getters ---------------</div>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.gt12Student}}</h2>
    <h2>{{$store.getters.gt12StudentCount}}</h2>
    <h2>{{$store.getters.gtxStu(9)}}</h2>
    <h3>{{gt12Student}}</h3>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: "Hello Vuex!",
      }
    },
    computed: {
      gt12Student() {
        return this.$store.state.students.filter(x => x.age > 12)
      }
    },
    methods: {
      add() {
        this.$store.commit("increment")
      },
      sub() {
        this.$store.commit("decrement")
      },
      addCount(count) {
        this.$store.commit("incrementCount", count)
      },
      addStu() {
        this.$store.commit("addStu", {id: 108, name: 'e', age: 20})
      }
    }
  }
</script>

<style>

</style>

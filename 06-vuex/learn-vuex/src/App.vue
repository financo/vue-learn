<template>
  <div id="app">
    <h2>{{message}}</h2>
    <div>--------------- APP ---------------</div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <div>--------------- Hello vuex ---------------</div>
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
    methods: {
      add() {
        this.$store.commit("increment")
      },
      sub() {
        this.$store.commit("decrement")
      }
    }
  }
</script>

<style>

</style>

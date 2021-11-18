<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">+</button>
    <div>------------------------------</div>
    <hello-vuex :counter="counter"/>
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
        counter: 0
      }
    }
  }
</script>

<style>

</style>

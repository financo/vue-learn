<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">Button</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'
  export default {
    name: "App",
    components: {
      Cpn
    },
    data() {
      return {
        message: "Hello Vue!",
        name: "MPG!!!"
      }
    },
    methods: {
      btnClick(){}
    }
  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>
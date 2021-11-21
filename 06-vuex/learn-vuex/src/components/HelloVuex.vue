<template>
  <div>
    <h2>{{$store.state.info}}</h2>
    <div>--------------- Hello vuex ---------------</div>
    <h2>{{$store.state.counter}}</h2>
    <div>--------------- Hello vuex Getters ---------------</div>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.gt12Student}}</h2>
    <h2>{{$store.getters.gt12StudentCount}}</h2>
    <h3>{{gt12Student}}</h3>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    computed: {
      gt12Student() {
        return this.$store.state.students.filter(x => x.age > 12)
      }
    },
  }
</script>

<style scoped>

</style>

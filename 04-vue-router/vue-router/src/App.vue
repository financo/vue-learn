<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
<!--    tag 修改标签类型-->
<!--    replace 不会留下history 记录-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

<!--    在router index.js 中添加 linkActiveClass 属性，可以替换掉active-class-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button" replace>用户</router-link>
<!--    <router-link to="/profile" tag="button" replace>Profile</router-link>-->
    <router-link :to="{path: '/profile', query: {name: 'wzy', age: 18, height: 1.8}}" tag="button" replace>Profile</router-link>

<!--    使用自定义事件-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'jerry'
    }
  },
  methods: {
    homeClick(){
      this.$router.push("home")
      // this.$router.replace("/home")
      console.log("homeClick")
    },
    aboutClick(){
      this.$router.push("about")
      // this.$router.replace("/about")
      console.log("aboutClick")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .router-link-active {
    color: red;
  }

  .active {
    color: green;
  }

</style>

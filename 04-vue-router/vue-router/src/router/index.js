import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import About from '../components/About'
import User from "../components/User"

Vue.use(Router)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/hello",
    component: HelloWorld
  },
  {
    path: "/user/:userId",
    component: User
  },
]

export default new Router({
  routes,
  mode: "history",
  linkActiveClass: "active"
})

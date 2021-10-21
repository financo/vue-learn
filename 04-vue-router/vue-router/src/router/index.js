import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from "../components/User"

// 懒加载
const HelloWorld = () => import("../components/HelloWorld")
const Home = () => import("../components/Home")
const About = () => import("../components/About")
const User = () => import("../components/User")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")

Vue.use(Router)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        redirect: 'news'
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      },
    ]
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

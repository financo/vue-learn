import Vue from 'vue'
import App from './App'

import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// *********************** 1.基本使用 **************************
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'GET'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
// }).then(res => {
//   console.log(res)
// })


// *********************** 2.并发请求 **************************
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(res => {
//   console.log(res)
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }));


// *********************** 3.全剧配置 **************************
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }));


// *********************** 4.axios 实例 **************************
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res)
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res)
// })
//
//
// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 1000,
//   headers: {}
// })


// *********************** 5.封装 request **************************
import {request1, request2, request3, request4} from './network/request'
// request1({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })
//
//
// request2({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function(res){
//     console.log(res)
//   },
//   failure: function(err) {
//     console.log(err)
//   }
// })
//
// request3({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

request4({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

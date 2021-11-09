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

axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}));

// commonjs的模块化规范
const {add, mul} = require("./js/mathUtils");

console.log(add(10, 20));
console.log(mul(20, 30));

// ES6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require("./css/normal.css");

// 依赖 less 文件
require("./css/special.less");
document.writeln("<h2>你好，夏洛特！</h2>");

// 使用vue开发
import Vue from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el: "#app",
  template: `<App/>`,
  components: {
    App
  }
});

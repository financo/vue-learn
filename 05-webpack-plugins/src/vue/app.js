export default {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">Button</button>
    <h2>{{name}}</h2>
  </div>
  `,
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
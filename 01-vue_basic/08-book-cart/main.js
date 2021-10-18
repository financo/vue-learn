const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX-编程艺术》",
        date: '2006-9',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: '2008-9',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle (index){
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      // 普通 for 循环
      // for (let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      // 第二种写法
      // for (let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      // 第三种写法
      // for (let i of this.books){
      //   totalPrice += i.price * i.count
      // }

      // 第四种写法
      totalPrice = this.books.reduce((pre, x) => {return pre + x.price * x.count}, 0);
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  }
});

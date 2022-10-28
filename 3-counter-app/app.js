const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },

  methods: {
    //!!Domda sadece belirli yeri değiştirmek için computed keyini kullanacağım
    // getCounterResult() {
    //   console.log("Counter 1 Çalıştı");
    //   return this.counter > 5 ? "BEŞTEN BÜYÜK" : "BEŞTEN KÜÇÜK";
    // },
    // getCounterResult2() {
    //   console.log("Counter 2 Çalıştı");
    //   return this.counter2 > 5 ? "BEŞTEN BÜYÜK" : "BEŞTEN KÜÇÜK";
    // },
  },

  computed: {
    getCounterResult() {
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? "BEŞTEN BÜYÜK" : "BEŞTEN KÜÇÜK";
    },
    getCounterResult2() {
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? "BEŞTEN BÜYÜK" : "BEŞTEN KÜÇÜK";
    },
  },

  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },

    counter2(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },

    getCounterResult2(newValue, oldValue) {
      console.log(oldValue, " : =>", newValue);
    },
  },
}).mount("#app");

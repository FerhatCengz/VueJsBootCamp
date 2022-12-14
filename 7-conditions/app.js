const app = Vue.createApp({
  data() {
    return {
      showText: false,
      counter: 0,
    };
  },

  computed: {
    backgroundShowText() {
      return { "bg-success": this.counter > 0, "bg-danger": this.counter < 0 };
    },
  },
});

app.mount("#app");

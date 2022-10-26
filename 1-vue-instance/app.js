const app = Vue.createApp({
  data() {
    return {
      title: "Merhaba kanka",
      content: "lorem ipsum .....",
      hrefLink: {
        target: "_blank",
        url: "https://www.google.com",
        message: "canımsınKankam",
      },
      coordinat: "",
      trialObject: "",
    };
  },
  methods: {
    updateTtile(titleParams) {
      this.title = titleParams;
    },
    updateBox(event, mousemoveText) {
      this.updateTtile(`${event.x + "," + event.y}`);
      this.coordinat = event.x + "," + event.y;
    },
  },
}).mount("#app");

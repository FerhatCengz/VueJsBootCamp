const app = Vue.createApp({
  data() {
    return {
      bgSuccess: false,
    };
  },

  computed: {
    boxClasses() {
      return {
        "bg-success": this.bgSuccess,
      };
    },
  },
});

app.mount("#app");

const inputControl = Vue.createApp({
  data() {
    return {
      inputContent: "",
      inputBorderControl: false,
    };
  },
  computed: {
    inputLength() {
      return this.inputContent.length >= 3 ? "border border-success" : "border border-danger";
    },
  },
});

inputControl.mount("#inputControl");

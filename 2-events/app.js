const app = Vue.createApp({
  data() {
    return {
      fullName: "Ferhat Cengiz",
      telefonNo: "+90",
      checkedValue: false,
    };
  },
  methods: {},
}).mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      msg: "",
      htmlSelect: "",
      valueBox: [],
    };
  },
  methods: {},
}).mount("#app2");

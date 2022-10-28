const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "nar"],
    };
  },
  methods: {
    //! Bir değer değiştiğinde tüm scobu render eder.
    // getSearchList() {
    //   return this.itemList.filter((i) => i.includes(this.search));
    // },
  },


  computed: {
    //! Kendinden sorumlu olarak değişir
    listFilter() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
}).mount("#app");

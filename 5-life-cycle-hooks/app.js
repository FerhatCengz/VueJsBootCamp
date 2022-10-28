const app = Vue.createApp({
  data() {
    return {
      title: "Test Başlığı",
      itemList: [],
    };
  },

  //* Bir süre zaafında yapılacak işlemler için 1-1 ' dir.
  beforeCreate() {
    //?beforeCreate Fonksiyonu bir zaman ölçeğini bekler düz bir mantık ile çalışmaz
    //? this.itemList = [1, 2, 3, 4, 5, 6];  mesela bunu çalıştırmaz ama setTimeout ile aynı işlemi bir zaman ölçeğine koyarsan çalışacaktır.

    console.log("beforeCreatee Çalıştı");
  },
  created() {
    //? Burada mesela beforeCreate ' dan farklı olarak bir zaman ölçeği olmaksızım dirkt işlev koyulabilir.
    this.itemList = [1, 2, 3, 4, 5, 6]; //? Bu kod burada çalışacaktır.
    console.log("created Çalıştı");
  },
  beforeMount() {
    console.log("beforeMount Çalıştı");
  },
  mounted() {
    console.log("mounted Çalıştı");
  },

  beforeUpdate() {
    console.log("beforeUpdate Çalıştı");
  },
  updated() {
    console.log("updated Çalıştı");
  },

  beforeUnMount() {
    console.log("beforeUnMount Çalıştı");
  },
  unmounted() {
    console.log("unmounted Çalıştı");
  },
});

app.mount("#app");

// setTimeout(() => {
//   console.log("z");
//   app.unmount();
// }, 2000);

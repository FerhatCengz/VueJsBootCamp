const app = Vue.createApp({
  data() {
    return {
      todoWord: "",
      todoClass: "",

      todoList: [
        { id: 1, todoText: "Bugün Dışarı Çık Hava Al 1  ", compled: false },
        { id: 2, todoText: "Bugün Dışarı Çık Hava Al 2  ", compled: false },
        { id: 3, todoText: "Bugün Dışarı Çık Hava Al 3  ", compled: false },
        { id: 4, todoText: "Bugün Dışarı Çık Hava Al 4  ", compled: false },
        { id: 5, todoText: "Bugün Dışarı Çık Hava Al 5  ", compled: false },
        { id: 6, todoText: "Bugün Dışarı Çık Hava Al 6  ", compled: false },
        { id: 7, todoText: "Bugün Dışarı Çık Hava Al 7  ", compled: false },
      ],
    };
  },

  methods: {
    addTodo(event) {
      if (this.todoWord.length > 3) {
        this.todoList.push({ id: new Date().getTime(), todoText: event.target.value, compled: false });
        event.target.value = "";
        this.todoClass = "border border-success";
      } else {
        this.todoClass = "border border-danger";
      }
    },

    removeTodoItem(_todo) {
      this.todoList = this.todoList.filter((todo) => todo !== _todo);
    },
  },

  computed: {
    todoCompledCount() {
      return this.todoList.filter((element) => element.compled).length;
    },
    todoUnCompledCount() {
      return this.todoList.filter((element) => !element.compled).length;
    },


  },
});

app.mount("#app");

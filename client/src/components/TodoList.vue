<template>
  <section class="section">
    <div class="container">
      <todo-form></todo-form>
      <hr>
      <div>
        <todo-item
          v-for="item in todos"
          :key="item.id"
          :title="item.title"
          :details="item.details">
        </todo-item>
      </div>
    </div>
  </section>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  components: {
    TodoItem,
    TodoForm,
  },
  data() {
    return {
      todos: [
        {id: 1, title: "Foo", details: "Do something!"},
        {id: 2, title: "Bar", details: "Do something else!"},
      ]
    };
  },
  mounted() {
    fetch('/api/todo')
    .then(result => {
      this.todos = result.data;
    });
  },
};
</script>
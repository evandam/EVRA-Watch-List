<template>
  <div>
    <hero class="is-primary" title="EVRA" subtitle="Our to-do List!" />
    <todo-list></todo-list>
  </div>
</template>

<script>
import 'bulma/bulma.sass';
import Hero from './components/Hero.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components: {
    Hero,
    TodoList,
  }
};
</script>

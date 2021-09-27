<template>
  <li class="d-flex align-items-center list-group-item" v-for="todo in todos" v-bind:key="todo.id">
    <Todo  v-bind:todo='todo'/>
  </li>
</template>

<script>
import Todo from './Todo.vue';

export default {
  name: 'AllTodos',
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  created() {
    this.$store.dispatch('loadTodos');
  },
};
</script>

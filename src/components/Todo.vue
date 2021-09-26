<template>
  <div>
    <ToggleTodo v-bind:todoID='todo.id'/>
    <span v-bind:class="{ 'completed': todo.completed }">{{ todo.title }}</span>
    <DeleteTodo v-bind:todoID='todo.id'/>
  </div>
</template>
<script>
import DeleteTodo from './DeleteTodo.vue';
import ToggleTodo from './ToggleTodo.vue';

export default {
  name: 'Todo',
  components: {
    DeleteTodo,
    ToggleTodo,
  },
  props: [
    'todo',
  ],

};
</script>
<style scoped>
 .completed {
    text-decoration: line-through;
  }
</style>

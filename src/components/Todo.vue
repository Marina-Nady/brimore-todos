<template>
  <div>
    <input type="checkbox">
    <span class="m-3">{{ todo.title }}</span>
    <DeleteTodo v-bind:todoID='todo.id'/>
    <p>{{ todo.completed }}</p>
  </div>
</template>
<script>
import DeleteTodo from './DeleteTodo.vue';

export default {
  name: 'Todo',
  components: {
    DeleteTodo,
  },
  props: [
    'todo',
  ],

};
</script>
<style scoped>
</style>

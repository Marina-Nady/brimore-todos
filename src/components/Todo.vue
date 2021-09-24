<template>
  <div>
    <input type="checkbox">
    <span class="m-3">{{ todo.title }}</span>
    <p>{{ todo.completed }}</p>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: [
    'todo',
  ],

};
</script>
<style scoped>
</style>

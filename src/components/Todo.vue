<template>
  <div>
    <p>{{ todo.title }}</p>
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

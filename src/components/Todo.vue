<template>
  <div>
    <p>{{ todo.title }}</p>
    <p>{{ todo.completed }}</p>
    <button class="btn btn-primary">Test</button>

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

<template>
  <div class="d-inline-block ">
    <input type="checkbox" v-on:change="Toggle()">
  </div>
</template>
<script>
export default {
  name: 'ToggleTodo',
  props: [
    'todoID',
  ],
  methods: {
    Toggle() {
      // console.log(this.todoID);
      this.$store.dispatch('toggleTodo', this.todoID);
    },
  },

};
</script>
<style scoped>
</style>

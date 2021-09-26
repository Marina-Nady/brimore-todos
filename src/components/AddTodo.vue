<template>
  <div>
      <input v-model="addTodo" type="text">
      <button type="submit" class="btn btn-primary" v-on:click="Add()">Add</button>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  methods: {
    Add() {
      this.$store.dispatch('addTodo', this.addTodo);
    },
  },
};
</script>
<style scoped>
</style>

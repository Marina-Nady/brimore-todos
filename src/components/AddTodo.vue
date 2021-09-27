<template>
  <div class="m-3">
      <input v-model="addTodo" type="text" class="p-1">
      <button type="submit" class="btn btn-primary m-2" v-on:click="Add()">Add</button>
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

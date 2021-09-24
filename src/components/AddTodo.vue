<template>
  <div>
      <input v-model="addTodo" type="text">
      <button type="submit" v-on:click="Add()">Add</button>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  methods: {
    Add() {
      console.log(this.addTodo);
      this.$store.dispatch('addTodo', this.addTodo);
    },
  },
};
</script>
<style scoped>
</style>

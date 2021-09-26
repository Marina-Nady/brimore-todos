<template>
  <div class="d-inline-block ">
      <button class="btn btn-danger" v-on:click="Delete()">X</button>
  </div>
</template>
<script>
export default {
  name: 'DeleteTodo',
  props: [
    'todoID',
  ],
  methods: {
    Delete() {
      //  console.log(this.todoID);
      this.$store.dispatch('deleteTodo', this.todoID);
    },
  },

};
</script>
<style scoped>
</style>

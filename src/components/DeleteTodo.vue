<template>
  <div class="d-inline-block ">
      <button class="btn btn-outline-danger border-0 delete" v-on:click="Delete()">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
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
  .delete{
      position: absolute;
      right: 1%;
      top: 10%;
  }
</style>

<template>
  <div id='app'>
  <AllTodos v-bind:allTodos='todos'/>
  </div>
</template>

<script>
import axios from 'axios';
import AllTodos from './components/AllTodos.vue';

export default {
  name: 'App',
  components: {
    AllTodos,
  },
  data: () => ({
    todos: null,
  }),
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
      this.todos = result.data;
      console.log(this.todos);
    });
  },
};
</script>

<style lang="scss">

</style>

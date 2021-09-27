<template>
  <div class="text-center m-3">
    <h1>Welcome to Todo App</h1>
    <AddTodo/>
    <ul class="w-75 m-auto">
    <AllTodos/>
    </ul>
  </div>
</template>

<script>
import AllTodos from './components/AllTodos.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  components: {
    AllTodos,
    AddTodo,
  },
};
</script>

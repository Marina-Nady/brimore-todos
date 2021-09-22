<template>
  <div v-for="post in posts" v-bind:key="post.id">
    <Todo  v-bind:todo='post'/>
  </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
  name: 'AllTodos',
  components: {
    Todo,
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  created() {
    this.$store.dispatch('loadPosts');
  },
};
</script>

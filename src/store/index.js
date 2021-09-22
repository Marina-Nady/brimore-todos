import axios from 'axios';
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state: {
    todos: [],
  },

  getters: {
    posts: (state) => state.todos,
  },
  mutations: {
    SET_ITEMS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async loadPosts({ commit }) {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('SET_ITEMS', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export default store;

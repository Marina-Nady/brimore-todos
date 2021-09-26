import axios from 'axios';
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state: {
    todos: [],
    newTodo: '',
  },

  getters: {
    todos: (state) => state.todos,
  },
  mutations: {
    GET_TODO(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state) {
      state.todos.unshift({
        title: state.newTodo,
        completed: false,
      });
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    TOGGLE_TODO(state, todo) {
      const todoEdit = todo;
      const item = state.todos.find((t) => t.id === todoEdit.id);
      item.completed = !item.completed;
      // console.log(item);
    },
  },
  actions: {
    async loadTodos({ commit }) {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('GET_TODO', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo({ commit }, data) {
      try {
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos', data);
        this.state.newTodo = data;
        commit('ADD_TODO', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo({ commit }, id) {
      try {
        const response = await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit('DELETE_TODO', id);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async toggleTodo({ commit }, id) {
      try {
        const response = await axios.patch(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit('TOGGLE_TODO', response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export default store;
